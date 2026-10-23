/* ============================================================
   QUIZ ENGINE v2.1 — Motor genérico com suporte a 13 tipos + localStorage
   ------------------------------------------------------------
   Tipos suportados:
     vf, vf-justificativa,
     multipla, multipla-resposta,
     complete, complete-multiplo,
     erro, debug-multiplo,
     associacao, ordenar, categorizacao,
     flashcard, predicao

   Persistência: localStorage (por módulo, baseado no data-tema)
   ============================================================ */
(function () {
    'use strict';

    /* ============================================================
       CONFIGURAÇÃO
       ============================================================ */
    const TAMANHO_BLOCO = 10;
    const CONFIG   = window.QUIZ_DATA || {};
    const QUESTOES = CONFIG.questoes || [];

    /* ============================================================
       PERSISTÊNCIA — localStorage
       ============================================================ */
    const STORAGE_VERSION = 1;
    const STORAGE_KEY = `quiz-progress-${document.body.dataset.tema || "default"}`;

    function salvarProgresso() {
        try {
            const dados = {
                versao:        STORAGE_VERSION,
                questoes:      estado.questoes,
                respostas:     estado.respostas,
                selecionadas:  estado.selecionadas,
                blocoAtivo:    estado.blocoAtivo,
                indiceGlobal:  estado.indiceGlobal,
                totalQuestoes: QUESTOES.length,
                savedAt:       Date.now()
            };
            localStorage.setItem(STORAGE_KEY, JSON.stringify(dados));
        } catch (e) {
            console.warn("[Quiz] Não foi possível salvar o progresso:", e);
        }
    }

    function carregarProgresso() {
        try {
            const raw = localStorage.getItem(STORAGE_KEY);
            if (!raw) return false;

            const dados = JSON.parse(raw);

            if (dados.versao !== STORAGE_VERSION) return false;
            if (dados.totalQuestoes !== QUESTOES.length) return false;
            if (!Array.isArray(dados.questoes) || dados.questoes.length === 0) return false;

            estado.questoes     = dados.questoes;
            estado.respostas    = dados.respostas    || {};
            estado.selecionadas = dados.selecionadas || {};
            estado.blocoAtivo   = dados.blocoAtivo   || 0;
            estado.indiceGlobal = dados.indiceGlobal || 0;

            return true;
        } catch (e) {
            console.warn("[Quiz] Erro ao carregar progresso:", e);
            return false;
        }
    }

    function limparProgresso() {
        try {
            localStorage.removeItem(STORAGE_KEY);
        } catch (e) {
            console.warn("[Quiz] Erro ao limpar progresso:", e);
        }
    }

    /* ============================================================
       ESTADO
       ============================================================ */
    const estado = {
        questoes:     [],
        respostas:    {},
        selecionadas: {},
        indiceGlobal: 0,
        blocoAtivo:   0,
        temp:         {}
    };

    /* ============================================================
       CÁLCULOS DE BLOCO
       ============================================================ */
    const totalQuestoes   = () => estado.questoes.length;
    const totalBlocos     = () => Math.ceil(totalQuestoes() / TAMANHO_BLOCO);
    const inicioDoBloco   = (b) => b * TAMANHO_BLOCO;
    const fimDoBloco      = (b) => Math.min(inicioDoBloco(b) + TAMANHO_BLOCO, totalQuestoes());
    const tamanhoDoBloco  = (b) => fimDoBloco(b) - inicioDoBloco(b);
    const posNoBlocoAtivo = () => estado.indiceGlobal - inicioDoBloco(estado.blocoAtivo);

    const $ = (id) => document.getElementById(id);
    const telas = {
        inicio:    $("tela-inicio"),
        questao:   $("tela-questao"),
        bloco:     $("tela-bloco"),
        resultado: $("tela-resultado")
    };

    /* ============================================================
       UTILITÁRIOS
       ============================================================ */
    function mostrarTela(nome) {
        Object.values(telas).forEach(t => t && t.classList.remove("ativa"));
        if (telas[nome]) telas[nome].classList.add("ativa");
    }

    function escaparHTML(str) {
        return String(str)
            .replace(/&/g, "&amp;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;");
    }

    function embaralhar(array) {
        const c = [...array];
        for (let i = c.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [c[i], c[j]] = [c[j], c[i]];
        }
        return c;
    }

    function setText(id, txt) {
        const el = $(id);
        if (el) el.textContent = txt;
    }

    function bind(id, ev, fn) {
        const el = $(id);
        if (el) el.addEventListener(ev, fn);
    }

    function arraysIguais(a, b) {
        if (a.length !== b.length) return false;
        const sa = [...a].sort();
        const sb = [...b].sort();
        return sa.every((v, i) => v === sb[i]);
    }

    /* ============================================================
       CONTADORES
       ============================================================ */
    function contarAcertosBloco(b) {
        let a = 0;
        for (let i = inicioDoBloco(b); i < fimDoBloco(b); i++) {
            if (estado.respostas[i] === true) a++;
        }
        return a;
    }
    function contarRespondidasBloco(b) {
        let r = 0;
        for (let i = inicioDoBloco(b); i < fimDoBloco(b); i++) {
            if (estado.respostas[i] !== undefined) r++;
        }
        return r;
    }
    const blocoEstaConcluido     = (b) => contarRespondidasBloco(b) === tamanhoDoBloco(b);
    const contarAcertosTotal     = () => Object.values(estado.respostas).filter(r => r === true).length;
    const contarRespondidasTotal = () => Object.keys(estado.respostas).length;
    function contarBlocosConcluidos() {
        let c = 0;
        for (let b = 0; b < totalBlocos(); b++) if (blocoEstaConcluido(b)) c++;
        return c;
    }

    /* ============================================================
       EMBARALHAR OPÇÕES (só para tipos simples)
       ============================================================ */
    function embaralharOpcoes(questao) {
        const tiposComOpcoes = ["multipla", "complete", "erro", "predicao"];
        if (!tiposComOpcoes.includes(questao.tipo) || !questao.opcoes) {
            return { ...questao };
        }
        const orig = [...questao.opcoes];
        const pares = orig.map((texto, i) => ({ texto, eraCorreta: i === questao.correta }));
        const emb = embaralhar(pares);
        return {
            ...questao,
            opcoes: emb.map(p => p.texto),
            correta: emb.findIndex(p => p.eraCorreta)
        };
    }

    /* ============================================================
       CABEÇALHO
       ============================================================ */
    function atualizarCabecalho() {
        const b = estado.blocoAtivo;
        setText("contador-bloco", `Bloco ${b + 1} de ${totalBlocos()}`);
        setText("contador-questao", `Questão ${posNoBlocoAtivo() + 1} de ${tamanhoDoBloco(b)}`);

        const total = totalQuestoes();
        const respondidas = contarRespondidasTotal();
        const elProg = $("progresso");
        if (elProg) elProg.style.width = `${total > 0 ? (respondidas / total) * 100 : 0}%`;

        const blocoEl = $("progresso-bloco");
        if (!blocoEl) return;
        blocoEl.innerHTML = "";
        for (let i = 0; i < tamanhoDoBloco(b); i++) {
            const indice = inicioDoBloco(b) + i;
            const bolinha = document.createElement("span");
            bolinha.className = "bolinha";
            if (indice === estado.indiceGlobal) bolinha.classList.add("atual");
            else if (estado.respostas[indice] === true) bolinha.classList.add("correta");
            else if (estado.respostas[indice] === false) bolinha.classList.add("errada");
            blocoEl.appendChild(bolinha);
        }
    }

    /* ============================================================
       TELA INICIAL
       ============================================================ */
    function renderizarTelaInicial() {
        const grid = $("blocos-grid");
        if (!grid) return;

        if (totalQuestoes() === 0) {
            grid.innerHTML = `<div style="grid-column:1/-1;padding:30px;text-align:center;color:#7f8c8d;">Nenhuma questão cadastrada ainda.</div>`;
            const b1 = $("btn-refazer-tudo"), b2 = $("btn-ver-resultado");
            if (b1) b1.style.display = "none";
            if (b2) b2.style.display = "none";
            return;
        }

        const totalB = totalBlocos();
        const concluidos = contarBlocosConcluidos();

        setText("geral-concluidos", concluidos);
        setText("geral-total", totalB);
        setText("geral-pontos", contarAcertosTotal());

        grid.innerHTML = "";
        for (let b = 0; b < totalB; b++) {
            const tamanho     = tamanhoDoBloco(b);
            const respondidas = contarRespondidasBloco(b);
            const acertos     = contarAcertosBloco(b);
            const concluido   = blocoEstaConcluido(b);
            const iniciado    = respondidas > 0 && !concluido;

            const card = document.createElement("div");
            card.className = "bloco-card";
            if (concluido) card.classList.add("concluido");
            else if (iniciado) card.classList.add("em-andamento");

            let statusHTML;
            if (concluido) statusHTML = `<span class="bloco-status concluido">✓ Concluído</span>`;
            else if (iniciado) statusHTML = `<span class="bloco-status em-andamento">Em andamento</span>`;
            else statusHTML = `<span class="bloco-status nao-iniciado">Não iniciado</span>`;

            let infoHTML;
            if (concluido) infoHTML = `<strong>${acertos}/${tamanho}</strong> acertos`;
            else if (iniciado) infoHTML = `${respondidas}/${tamanho} respondidas`;
            else infoHTML = `${tamanho} questões`;

            const btnTexto = concluido ? "↻ Refazer" : "▶ Jogar";

            card.innerHTML = `
                <div class="bloco-label">Bloco</div>
                <div class="bloco-numero">${String(b + 1).padStart(2, "0")}</div>
                ${statusHTML}
                <div class="bloco-info">${infoHTML}</div>
                <button class="bloco-btn">${btnTexto}</button>
            `;
            card.addEventListener("click", () => abrirBloco(b));
            grid.appendChild(card);
        }

        const btnVer = $("btn-ver-resultado");
        if (btnVer) btnVer.style.display = (concluidos === totalB && totalB > 0) ? "inline-flex" : "none";
    }

    /* ============================================================
       ABRIR BLOCO
       ============================================================ */
    function abrirBloco(b) {
        if (blocoEstaConcluido(b)) {
            for (let i = inicioDoBloco(b); i < fimDoBloco(b); i++) {
                delete estado.respostas[i];
                delete estado.selecionadas[i];
            }
        }
        estado.blocoAtivo = b;
        let proxima = inicioDoBloco(b);
        for (let i = inicioDoBloco(b); i < fimDoBloco(b); i++) {
            if (estado.respostas[i] === undefined) { proxima = i; break; }
            proxima = i + 1;
        }
        if (proxima >= fimDoBloco(b)) proxima = inicioDoBloco(b);
        estado.indiceGlobal = proxima;

        renderizarQuestao();
        mostrarTela("questao");
        salvarProgresso();
    }

    /* ============================================================
       RENDERIZAR QUESTÃO (dispatch por tipo)
       ============================================================ */
    function renderizarQuestao() {
        const q = estado.questoes[estado.indiceGlobal];
        if (!q) return;

        estado.temp = {};
        atualizarCabecalho();

        const badges = {
            "vf":                { texto: "Verdadeiro ou Falso",        classe: "vf" },
            "vf-justificativa":  { texto: "V ou F + Justificativa",     classe: "vf" },
            "multipla":          { texto: "Múltipla Escolha",           classe: "multipla" },
            "multipla-resposta": { texto: "Múltiplas Respostas",        classe: "multipla" },
            "complete":          { texto: "Complete o Código",          classe: "complete" },
            "complete-multiplo": { texto: "Complete o Código",          classe: "complete" },
            "erro":              { texto: "Aponte o Erro",              classe: "erro" },
            "debug-multiplo":    { texto: "Encontre Todos os Erros",    classe: "erro" },
            "associacao":        { texto: "Associação",                 classe: "multipla" },
            "ordenar":           { texto: "Ordenar",                    classe: "complete" },
            "categorizacao":     { texto: "Categorização",              classe: "multipla" },
            "flashcard":         { texto: "Flashcard",                  classe: "vf" },
            "predicao":          { texto: "Predição de Saída",          classe: "multipla" }
        };
        const info = badges[q.tipo] || { texto: q.tipo, classe: "" };
        const badge = $("tipo-badge");
        if (badge) {
            badge.textContent = info.texto;
            badge.className = "tipo-badge " + info.classe;
        }

        setText("enunciado", q.enunciado);

        const areaCodigo = $("area-codigo");
        if (areaCodigo) {
            areaCodigo.innerHTML = "";
            if (q.codigo) {
                const bloco = document.createElement("div");
                bloco.className = "code-block";
                let esc = escaparHTML(q.codigo);
                esc = esc.replace(/\{\{GAP\}\}/g, '<span class="gap">???</span>');
                esc = esc.replace(/\{\{GAP(\d+)\}\}/g, (m, n) => `<span class="gap" data-gap="${n}">???</span>`);
                bloco.innerHTML = esc;
                areaCodigo.appendChild(bloco);
            }
        }

        const fb = $("feedback");
        if (fb) { fb.className = "feedback"; fb.innerHTML = ""; }

        const opcoesEl = $("opcoes");
        if (opcoesEl) {
            opcoesEl.innerHTML = "";
            opcoesEl.className = "opcoes";
        }

        const renderer = RENDERIZADORES[q.tipo];
        if (renderer) {
            renderer(q, opcoesEl);
        } else {
            console.warn("[Quiz Engine] Tipo desconhecido:", q.tipo);
            if (opcoesEl) {
                opcoesEl.innerHTML = `<p style="color:#c0392b;">Tipo de questão não suportado: ${q.tipo}</p>`;
            }
        }

        const btnVoltar = $("btn-voltar");
        const btnProximo = $("btn-proximo");
        if (btnVoltar) btnVoltar.disabled = estado.indiceGlobal === inicioDoBloco(estado.blocoAtivo);
        if (btnProximo) {
            btnProximo.disabled = true;
            const ultima = estado.indiceGlobal === fimDoBloco(estado.blocoAtivo) - 1;
            btnProximo.textContent = ultima ? "Finalizar Bloco ✓" : "Próxima →";
        }
    }

    /* ============================================================
       HELPERS DE RENDERIZAÇÃO
       ============================================================ */
    function criarBotaoOpcao(texto, valor, container, letra, onSelect) {
        const btn = document.createElement("button");
        btn.className = "opcao";
        btn.type = "button";

        if (letra) {
            const spanLetra = document.createElement("span");
            spanLetra.className = "letra";
            spanLetra.textContent = letra;
            btn.appendChild(spanLetra);
        }
        const spanTexto = document.createElement("span");
        spanTexto.textContent = texto;
        btn.appendChild(spanTexto);

        btn.addEventListener("click", onSelect);
        container.appendChild(btn);
    }

    function criarBotaoConfirmar(container, texto, onConfirm) {
        const wrap = document.createElement("div");
        wrap.style.cssText = "display:flex;justify-content:center;margin-bottom:22px;";
        const btn = document.createElement("button");
        btn.type = "button";
        btn.className = "btn btn-primary btn-confirmar";
        btn.textContent = texto;
        btn.disabled = true;
        btn.addEventListener("click", onConfirm);
        wrap.appendChild(btn);
        container.appendChild(wrap);
        return btn;
    }

    /* ============================================================
       RENDERIZADORES POR TIPO
       ============================================================ */

    function renderVf(q, container) {
        container.classList.add("vf-grid");
        criarBotaoOpcao("Verdadeiro", true, container, null, () => responderVf(q, true));
        criarBotaoOpcao("Falso", false, container, null, () => responderVf(q, false));
    }

    function renderVfJust(q, container) {
        const etapa1 = document.createElement("div");
        etapa1.className = "opcoes vf-grid";

        const etapa2 = document.createElement("div");
        etapa2.className = "justificativas-wrapper";
        etapa2.style.display = "none";

        criarBotaoOpcao("Verdadeiro", true, etapa1, null, () => mostrarJustificativas(true));
        criarBotaoOpcao("Falso", false, etapa1, null, () => mostrarJustificativas(false));

        container.appendChild(etapa1);
        container.appendChild(etapa2);

        function mostrarJustificativas(vf) {
            etapa1.querySelectorAll(".opcao").forEach(b => {
                b.classList.add("desabilitada");
                b.style.pointerEvents = "none";
                const isVerdadeiro = b.textContent.trim() === "Verdadeiro";
                if ((vf === true && isVerdadeiro) || (vf === false && !isVerdadeiro)) {
                    b.classList.add("correta");
                }
            });

            if (vf !== q.resposta) {
                const letra = vf === true ? 0 : 1;
                etapa1.querySelectorAll(".opcao")[letra].classList.add("errada");
            }

            etapa2.style.display = "block";
            const titulo = document.createElement("p");
            titulo.style.cssText = "font-weight:600;margin:14px 0 10px;color:#2c3e50;";
            titulo.textContent = "Escolha a justificativa correta:";
            etapa2.appendChild(titulo);

            q.justificativas.forEach((texto, i) => {
                const btn = document.createElement("button");
                btn.className = "opcao";
                btn.type = "button";
                const spanLetra = document.createElement("span");
                spanLetra.className = "letra";
                spanLetra.textContent = ["A", "B", "C", "D"][i] || (i + 1);
                btn.appendChild(spanLetra);
                const spanTexto = document.createElement("span");
                spanTexto.textContent = texto;
                btn.appendChild(spanTexto);
                btn.addEventListener("click", () => responderVfJust(q, vf, i));
                etapa2.appendChild(btn);
            });
        }
    }

    function renderMultipla(q, container) {
        const letras = ["A", "B", "C", "D", "E", "F"];
        q.opcoes.forEach((texto, i) => {
            criarBotaoOpcao(texto, i, container, letras[i], () => responderMultipla(q, i));
        });
    }

    function renderMultiplaResp(q, container) {
        container.classList.add("opcoes-checkbox");
        const selecionadas = new Set();
        const letras = ["A", "B", "C", "D", "E", "F"];

        const btns = [];
        q.opcoes.forEach((texto, i) => {
            const btn = document.createElement("button");
            btn.className = "opcao opcao-checkbox";
            btn.type = "button";
            btn.dataset.idx = i;

            const check = document.createElement("span");
            check.className = "check-box";
            check.textContent = "☐";
            btn.appendChild(check);

            const spanLetra = document.createElement("span");
            spanLetra.className = "letra";
            spanLetra.textContent = letras[i];
            btn.appendChild(spanLetra);

            const spanTexto = document.createElement("span");
            spanTexto.textContent = texto;
            btn.appendChild(spanTexto);

            btn.addEventListener("click", () => {
                if (btn.classList.contains("desabilitada")) return;
                if (selecionadas.has(i)) {
                    selecionadas.delete(i);
                    btn.classList.remove("selecionada");
                    check.textContent = "☐";
                } else {
                    selecionadas.add(i);
                    btn.classList.add("selecionada");
                    check.textContent = "☑";
                }
                btnConf.disabled = selecionadas.size === 0;
            });

            btns.push(btn);
            container.appendChild(btn);
        });

        const btnConf = criarBotaoConfirmar(container, "Confirmar resposta", () => {
            const escolhas = [...selecionadas].sort();
            responderMultiplaResp(q, escolhas, btns);
        });
    }

    function renderComplete(q, container) {
        const letras = ["A", "B", "C", "D", "E"];
        q.opcoes.forEach((texto, i) => {
            criarBotaoOpcao(texto, i, container, letras[i], () => responderMultipla(q, i));
        });
    }

    function renderCompleteMultiplo(q, container) {
        container.classList.add("complete-multiplo-wrapper");
        const selecionadas = q.gaps.map(() => null);

        const titulo = document.createElement("p");
        titulo.style.cssText = "font-weight:600;margin:6px 0 14px;color:#2c3e50;";
        titulo.textContent = "Escolha a opção correta para cada lacuna:";
        container.appendChild(titulo);

        q.gaps.forEach((gap, gi) => {
            const bloco = document.createElement("div");
            bloco.className = "gap-bloco";
            bloco.style.cssText = "margin-bottom:16px;";

            const label = document.createElement("div");
            label.style.cssText = "font-weight:600;font-size:0.9em;margin-bottom:8px;color:#7f8c8d;text-transform:uppercase;letter-spacing:1px;";
            label.textContent = `Lacuna ${gi + 1}`;
            bloco.appendChild(label);

            const btnsWrap = document.createElement("div");
            btnsWrap.className = "gap-opcoes";
            btnsWrap.style.cssText = "display:flex;gap:10px;flex-wrap:wrap;";

            gap.opcoes.forEach((texto, oi) => {
                const btn = document.createElement("button");
                btn.type = "button";
                btn.className = "opcao opcao-gap";
                btn.style.cssText = "width:auto;padding:10px 20px;";
                btn.textContent = texto;

                btn.addEventListener("click", () => {
                    if (btnsWrap.classList.contains("desabilitada")) return;
                    btnsWrap.querySelectorAll(".opcao-gap").forEach(b => b.classList.remove("selecionada"));
                    btn.classList.add("selecionada");
                    selecionadas[gi] = oi;
                    btnConf.disabled = selecionadas.some(s => s === null);
                });

                btnsWrap.appendChild(btn);
            });

            bloco.appendChild(btnsWrap);
            container.appendChild(bloco);
        });

        const btnConf = criarBotaoConfirmar(container, "Confirmar resposta", () => {
            responderCompleteMultiplo(q, selecionadas);
        });
    }

    function renderErro(q, container) {
        const letras = ["A", "B", "C", "D", "E"];
        q.opcoes.forEach((texto, i) => {
            criarBotaoOpcao(texto, i, container, letras[i], () => responderMultipla(q, i));
        });
    }

    function renderDebugMultiplo(q, container) {
        container.classList.add("opcoes-checkbox");
        const selecionadas = new Set();

        const titulo = document.createElement("p");
        titulo.style.cssText = "font-weight:600;margin:6px 0 14px;color:#2c3e50;";
        titulo.textContent = "Marque TODOS os erros (pode haver mais de um):";
        container.appendChild(titulo);

        const btns = [];
        q.opcoes.forEach((opc, i) => {
            const btn = document.createElement("button");
            btn.className = "opcao opcao-checkbox";
            btn.type = "button";

            const check = document.createElement("span");
            check.className = "check-box";
            check.textContent = "☐";
            btn.appendChild(check);

            const spanTexto = document.createElement("span");
            spanTexto.textContent = opc.texto;
            btn.appendChild(spanTexto);

            btn.addEventListener("click", () => {
                if (btn.classList.contains("desabilitada")) return;
                if (selecionadas.has(i)) {
                    selecionadas.delete(i);
                    btn.classList.remove("selecionada");
                    check.textContent = "☐";
                } else {
                    selecionadas.add(i);
                    btn.classList.add("selecionada");
                    check.textContent = "☑";
                }
                btnConf.disabled = selecionadas.size === 0;
            });

            btns.push(btn);
            container.appendChild(btn);
        });

        const btnConf = criarBotaoConfirmar(container, "Confirmar resposta", () => {
            responderDebugMultiplo(q, [...selecionadas].sort(), btns);
        });
    }

    function renderAssociacao(q, container) {
        container.classList.add("associacao-wrapper");

        const direitaEmbaralhada = embaralhar(
            q.pares.map((p, i) => ({ texto: p.direita, idxOriginal: i }))
        );

        const pares = {};
        let esquerdaSelecionada = null;

        const wrapper = document.createElement("div");
        wrapper.className = "associacao-grid";

        const colEsq = document.createElement("div");
        colEsq.className = "associacao-coluna";

        const colDir = document.createElement("div");
        colDir.className = "associacao-coluna";

        const titEsq = document.createElement("div");
        titEsq.className = "associacao-titulo";
        titEsq.textContent = "Coluna A";
        colEsq.appendChild(titEsq);

        const titDir = document.createElement("div");
        titDir.className = "associacao-titulo";
        titDir.textContent = "Coluna B";
        colDir.appendChild(titDir);

        const btnsEsq = [];
        const btnsDir = [];

        q.pares.forEach((par, i) => {
            const btn = document.createElement("button");
            btn.className = "associacao-item";
            btn.type = "button";
            btn.textContent = par.esquerda;
            btn.dataset.idx = i;

            btn.addEventListener("click", () => {
                if (btn.classList.contains("pareado")) return;
                btnsEsq.forEach(b => b.classList.remove("selecionado"));
                btn.classList.add("selecionado");
                esquerdaSelecionada = i;
            });

            btnsEsq.push(btn);
            colEsq.appendChild(btn);
        });

        direitaEmbaralhada.forEach((item, idxEmb) => {
            const btn = document.createElement("button");
            btn.className = "associacao-item";
            btn.type = "button";
            btn.textContent = item.texto;
            btn.dataset.idx = idxEmb;

            btn.addEventListener("click", () => {
                if (btn.classList.contains("pareado")) return;
                if (esquerdaSelecionada === null) return;
                if (pares[esquerdaSelecionada] !== undefined) return;

                pares[esquerdaSelecionada] = idxEmb;

                btnsEsq[esquerdaSelecionada].classList.remove("selecionado");
                btnsEsq[esquerdaSelecionada].classList.add("pareado");
                btn.classList.add("pareado");

                esquerdaSelecionada = null;
                btnConf.disabled = Object.keys(pares).length !== q.pares.length;
            });

            btnsDir.push(btn);
            colDir.appendChild(btn);
        });

        wrapper.appendChild(colEsq);
        wrapper.appendChild(colDir);
        container.appendChild(wrapper);

        const btnConf = criarBotaoConfirmar(container, "Confirmar resposta", () => {
            const respostaUsuario = { ...pares };
            responderAssociacao(q, respostaUsuario, direitaEmbaralhada);
        });
    }

    function renderOrdenar(q, container) {
        container.classList.add("ordenar-wrapper");

        const itens = embaralhar(q.itens.map((t, i) => ({ texto: t, idxOriginal: i })));
        if (itens.every((it, i) => it.idxOriginal === i)) {
            itens.reverse();
        }

        const lista = document.createElement("div");
        lista.className = "ordenar-lista";

        function desenhar() {
            lista.innerHTML = "";
            itens.forEach((item, i) => {
                const li = document.createElement("div");
                li.className = "ordenar-item";

                const num = document.createElement("span");
                num.className = "ordenar-num";
                num.textContent = i + 1;
                li.appendChild(num);

                const txt = document.createElement("span");
                txt.className = "ordenar-texto";
                txt.textContent = item.texto;
                li.appendChild(txt);

                const setas = document.createElement("div");
                setas.className = "ordenar-setas";

                const up = document.createElement("button");
                up.type = "button";
                up.className = "ordenar-seta";
                up.textContent = "▲";
                up.disabled = i === 0;
                up.addEventListener("click", () => {
                    [itens[i - 1], itens[i]] = [itens[i], itens[i - 1]];
                    desenhar();
                });
                setas.appendChild(up);

                const down = document.createElement("button");
                down.type = "button";
                down.className = "ordenar-seta";
                down.textContent = "▼";
                down.disabled = i === itens.length - 1;
                down.addEventListener("click", () => {
                    [itens[i + 1], itens[i]] = [itens[i], itens[i + 1]];
                    desenhar();
                });
                setas.appendChild(down);

                li.appendChild(setas);
                lista.appendChild(li);
            });
        }

        desenhar();
        container.appendChild(lista);

        const btnConf = criarBotaoConfirmar(container, "Confirmar ordem", () => {
            responderOrdenar(q, itens.map(it => it.idxOriginal));
        });
        btnConf.disabled = false;
    }

    function renderCategorizacao(q, container) {
        container.classList.add("categorizacao-wrapper");

        const atribuicoes = q.itens.map(() => null);
        let itemSelecionado = null;

        const titulo = document.createElement("p");
        titulo.style.cssText = "font-weight:600;margin:6px 0 14px;color:#2c3e50;";
        titulo.textContent = "Clique em um item e depois na categoria correspondente:";
        container.appendChild(titulo);

        const caixas = document.createElement("div");
        caixas.className = "categorizacao-caixas";

        const caixaBtns = q.categorias.map((cat, ci) => {
            const caixa = document.createElement("div");
            caixa.className = "categoria-caixa";

            const head = document.createElement("div");
            head.className = "categoria-titulo";
            head.textContent = cat;
            caixa.appendChild(head);

            const corpo = document.createElement("div");
            corpo.className = "categoria-itens";
            caixa.appendChild(corpo);

            caixa.addEventListener("click", () => {
                if (itemSelecionado === null) return;
                atribuicoes[itemSelecionado] = ci;
                const itemEl = itemPool.querySelector(`[data-idx="${itemSelecionado}"]`);
                if (itemEl) corpo.appendChild(itemEl);
                if (itemEl) itemEl.classList.remove("selecionado");
                itemSelecionado = null;
                btnConf.disabled = atribuicoes.some(a => a === null);
            });

            caixas.appendChild(caixa);
            return caixa;
        });

        const poolWrapper = document.createElement("div");
        poolWrapper.className = "categoria-pool";

        const poolTitulo = document.createElement("div");
        poolTitulo.className = "categoria-titulo";
        poolTitulo.textContent = "Itens";
        poolWrapper.appendChild(poolTitulo);

        const itemPool = document.createElement("div");
        itemPool.className = "categoria-itens";
        poolWrapper.appendChild(itemPool);

        q.itens.forEach((item, i) => {
            const btn = document.createElement("button");
            btn.type = "button";
            btn.className = "categoria-item";
            btn.dataset.idx = i;
            btn.textContent = item.texto;

            btn.addEventListener("click", (e) => {
                e.stopPropagation();
                document.querySelectorAll(".categoria-item").forEach(b => b.classList.remove("selecionado"));
                btn.classList.add("selecionado");
                itemSelecionado = i;
            });

            itemPool.appendChild(btn);
        });

        container.appendChild(caixas);
        container.appendChild(poolWrapper);

        const btnConf = criarBotaoConfirmar(container, "Confirmar classificação", () => {
            responderCategorizacao(q, atribuicoes);
        });
    }

    function renderFlashcard(q, container) {
        container.classList.add("flashcard-wrapper");

        const card = document.createElement("div");
        card.className = "flashcard-card";

        const frente = document.createElement("div");
        frente.className = "flashcard-frente";
        frente.innerHTML = `<div class="flashcard-label">Pergunta</div><div class="flashcard-texto">${escaparHTML(q.enunciado)}</div>`;
        card.appendChild(frente);

        const verso = document.createElement("div");
        verso.className = "flashcard-verso";
        verso.style.display = "none";
        verso.innerHTML = `<div class="flashcard-label">Resposta</div><div class="flashcard-texto">${escaparHTML(q.resposta)}</div>`;
        card.appendChild(verso);

        container.appendChild(card);

        const btnWrap = document.createElement("div");
        btnWrap.style.cssText = "display:flex;justify-content:center;margin:20px 0;";

        const btnVer = document.createElement("button");
        btnVer.type = "button";
        btnVer.className = "btn btn-primary";
        btnVer.textContent = "👁 Ver resposta";
        btnVer.addEventListener("click", () => {
            frente.style.display = "none";
            verso.style.display = "block";
            btnWrap.style.display = "none";
            autoavalWrap.style.display = "block";
        });
        btnWrap.appendChild(btnVer);
        container.appendChild(btnWrap);

        const autoavalWrap = document.createElement("div");
        autoavalWrap.className = "flashcard-autoaval";
        autoavalWrap.style.display = "none";

        const tituloAv = document.createElement("p");
        tituloAv.style.cssText = "text-align:center;font-weight:600;margin-bottom:14px;color:#2c3e50;";
        tituloAv.textContent = "Como foi sua resposta?";
        autoavalWrap.appendChild(tituloAv);

        const btnsAv = document.createElement("div");
        btnsAv.className = "flashcard-avaliacao";

        [
            { label: "✅ Acertei",   valor: "acertei",  classe: "av-acertei" },
            { label: "🤔 Difícil",  valor: "dificil",  classe: "av-dificil" },
            { label: "❌ Errei",    valor: "errei",    classe: "av-errei" }
        ].forEach(({ label, valor, classe }) => {
            const btn = document.createElement("button");
            btn.type = "button";
            btn.className = `btn-flashcard ${classe}`;
            btn.textContent = label;
            btn.addEventListener("click", () => {
                btnsAv.querySelectorAll(".btn-flashcard").forEach(b => b.classList.add("desabilitada"));
                responderFlashcard(q, valor);
            });
            btnsAv.appendChild(btn);
        });

        autoavalWrap.appendChild(btnsAv);
        container.appendChild(autoavalWrap);
    }

    const RENDERIZADORES = {
        "vf":                renderVf,
        "vf-justificativa":  renderVfJust,
        "multipla":          renderMultipla,
        "multipla-resposta": renderMultiplaResp,
        "complete":          renderComplete,
        "complete-multiplo": renderCompleteMultiplo,
        "erro":              renderErro,
        "debug-multiplo":    renderDebugMultiplo,
        "associacao":        renderAssociacao,
        "ordenar":           renderOrdenar,
        "categorizacao":     renderCategorizacao,
        "flashcard":         renderFlashcard,
        "predicao":          renderMultipla
    };

    /* ============================================================
       RESPONDER — AÇÕES POR TIPO
       ============================================================ */

    function responderVf(q, valor) {
        const opcoesEl = $("opcoes").querySelectorAll(".opcao");
        const indiceCorreto = q.resposta === true ? 0 : 1;
        const indiceEscolhido = valor === true ? 0 : 1;
        const acertou = indiceEscolhido === indiceCorreto;

        opcoesEl.forEach(op => op.classList.add("desabilitada"));
        opcoesEl[indiceCorreto].classList.add("correta");
        if (!acertou) opcoesEl[indiceEscolhido].classList.add("errada");

        finalizarResposta(q, acertou, indiceEscolhido);
    }

    function responderVfJust(q, vf, just) {
        const opcoesVF = $("opcoes").querySelectorAll(".opcao");
        const opcoesJust = Array.from(opcoesVF).slice(2);

        const acertouVf = vf === q.resposta;
        const acertouJust = just === q.justificativaCorreta;
        const acertou = acertouVf && acertouJust;

        opcoesJust.forEach((b, i) => {
            b.classList.add("desabilitada");
            b.style.pointerEvents = "none";
            if (i === q.justificativaCorreta) b.classList.add("correta");
            else if (i === just && i !== q.justificativaCorreta) b.classList.add("errada");
        });

        finalizarResposta(q, acertou, { vf, just });
    }

    function responderMultipla(q, indice) {
        const opcoesEl = $("opcoes").querySelectorAll(".opcao");
        const acertou = indice === q.correta;

        opcoesEl.forEach(op => op.classList.add("desabilitada"));
        opcoesEl[q.correta].classList.add("correta");
        if (!acertou) opcoesEl[indice].classList.add("errada");

        finalizarResposta(q, acertou, indice);
    }

    function responderMultiplaResp(q, escolhas, btns) {
        const acertou = arraysIguais(escolhas, q.corretas);

        btns.forEach((btn, i) => {
            btn.classList.add("desabilitada");
            btn.style.pointerEvents = "none";
            const check = btn.querySelector(".check-box");
            if (q.corretas.includes(i)) {
                btn.classList.add("correta");
                if (check) check.textContent = "☑";
            } else if (escolhas.includes(i)) {
                btn.classList.add("errada");
            }
        });

        finalizarResposta(q, acertou, escolhas);
    }

    function responderCompleteMultiplo(q, escolhas) {
        const acertou = escolhas.every((e, i) => e === q.gaps[i].correta);

        const blocos = $("opcoes").querySelectorAll(".gap-bloco");
        blocos.forEach((bloco, gi) => {
            const btns = bloco.querySelectorAll(".opcao-gap");
            btns.forEach((btn, oi) => {
                btn.classList.add("desabilitada");
                btn.style.pointerEvents = "none";
                if (oi === q.gaps[gi].correta) btn.classList.add("correta");
                else if (oi === escolhas[gi]) btn.classList.add("errada");
            });
        });

        finalizarResposta(q, acertou, escolhas);
    }

    function responderDebugMultiplo(q, escolhas, btns) {
        const corretas = q.opcoes.map((o, i) => o.correta ? i : null).filter(i => i !== null);
        const acertou = arraysIguais(escolhas, corretas);

        btns.forEach((btn, i) => {
            btn.classList.add("desabilitada");
            btn.style.pointerEvents = "none";
            const check = btn.querySelector(".check-box");
            if (corretas.includes(i)) {
                btn.classList.add("correta");
                if (check) check.textContent = "☑";
            } else if (escolhas.includes(i)) {
                btn.classList.add("errada");
            }
        });

        finalizarResposta(q, acertou, escolhas);
    }

    function responderAssociacao(q, respostaUsuario, direitaEmbaralhada) {
        let acertouTudo = true;

        q.pares.forEach((par, idxEsq) => {
            const idxDir = respostaUsuario[idxEsq];
            if (idxDir === undefined) { acertouTudo = false; return; }
            const itemDireita = direitaEmbaralhada[idxDir];
            if (itemDireita.idxOriginal !== idxEsq) acertouTudo = false;
        });

        const btnsEsq = $("opcoes").querySelectorAll(".associacao-coluna:first-child .associacao-item");
        const btnsDir = $("opcoes").querySelectorAll(".associacao-coluna:last-child .associacao-item");

        btnsEsq.forEach(btn => {
            btn.classList.add("desabilitada");
            btn.style.pointerEvents = "none";
        });
        btnsDir.forEach(btn => {
            btn.classList.add("desabilitada");
            btn.style.pointerEvents = "none";
        });

        finalizarResposta(q, acertouTudo, {
            pares: respostaUsuario,
            direita: direitaEmbaralhada
        });
    }

    function responderOrdenar(q, ordemUsuario) {
        const acertou = ordemUsuario.every((idx, i) => idx === i);
        finalizarResposta(q, acertou, ordemUsuario);
    }

    function responderCategorizacao(q, atribuicoes) {
        let acertou = true;
        q.itens.forEach((item, i) => {
            const catCorreta = q.categorias.indexOf(item.categoria);
            if (atribuicoes[i] !== catCorreta) acertou = false;
        });
        finalizarResposta(q, acertou, atribuicoes);
    }

    function responderFlashcard(q, valor) {
        const acertou = valor === "acertei";
        finalizarResposta(q, acertou, valor);
    }

    /* ============================================================
       FINALIZAR RESPOSTA (comum a todos)
       ============================================================ */
    function finalizarResposta(q, acertou, respostaBruta) {
        estado.respostas[estado.indiceGlobal] = acertou;
        estado.selecionadas[estado.indiceGlobal] = respostaBruta;

        renderizarFeedback(q, acertou, respostaBruta);
        const btnProximo = $("btn-proximo");
        if (btnProximo) btnProximo.disabled = false;
        atualizarCabecalho();

        salvarProgresso();
    }

    /* ============================================================
       TEXTO DA RESPOSTA (por tipo)
       ============================================================ */
    function textoRespostaCorreta(q) {
        switch (q.tipo) {
            case "vf":
                return q.resposta === true ? "Verdadeiro" : "Falso";

            case "vf-justificativa":
                return `${q.resposta === true ? "Verdadeiro" : "Falso"} — ${q.justificativas[q.justificativaCorreta]}`;

            case "multipla":
            case "complete":
            case "erro":
            case "predicao":
                return q.opcoes[q.correta];

            case "multipla-resposta":
                return q.corretas.map(i => q.opcoes[i]).join(" | ");

            case "complete-multiplo":
                return q.gaps.map((g, i) => `Lacuna ${i + 1}: ${g.opcoes[g.correta]}`).join(" | ");

            case "debug-multiplo": {
                const corretas = q.opcoes
                    .map((o, i) => o.correta ? o.texto : null)
                    .filter(x => x);
                return corretas.join(" | ");
            }

            case "associacao":
                return q.pares.map(p => `${p.esquerda} → ${p.direita}`).join(" | ");

            case "ordenar":
                return q.itens.map((t, i) => `${i + 1}. ${t}`).join(" | ");

            case "categorizacao":
                return q.itens.map(it => `${it.texto} → ${it.categoria}`).join(" | ");

            case "flashcard":
                return q.resposta;
        }
        return "";
    }

    function textoRespostaUsuario(q, resp) {
        if (resp === undefined || resp === null) return "(não respondida)";

        switch (q.tipo) {
            case "vf":
                return resp === 0 ? "Verdadeiro" : "Falso";

            case "vf-justificativa":
                if (typeof resp !== "object") return "(inválida)";
                return `${resp.vf === 0 ? "Verdadeiro" : "Falso"} — ${q.justificativas[resp.just]}`;

            case "multipla":
            case "complete":
            case "erro":
            case "predicao":
                return q.opcoes[resp];

            case "multipla-resposta":
                return resp.map(i => q.opcoes[i]).join(" | ");

            case "complete-multiplo":
                return resp.map((e, i) => `Lacuna ${i + 1}: ${e !== null ? q.gaps[i].opcoes[e] : "(vazia)"}`).join(" | ");

            case "debug-multiplo": {
                const escolhidas = resp.map(i => q.opcoes[i].texto);
                return escolhidas.join(" | ") || "(nenhuma)";
            }

            case "associacao": {
                const parts = [];
                const dir = resp.direita || [];
                Object.keys(resp.pares).forEach(k => {
                    const idxDir = resp.pares[k];
                    const itemDir = dir.find((d, i) => i === idxDir);
                    if (itemDir) parts.push(`${q.pares[k].esquerda} → ${itemDir.texto}`);
                });
                return parts.join(" | ");
            }

            case "ordenar":
                return resp.map((idx, i) => `${i + 1}. ${q.itens[idx]}`).join(" | ");

            case "categorizacao":
                return resp.map((catIdx, i) => `${q.itens[i].texto} → ${catIdx !== null ? q.categorias[catIdx] : "(sem categoria)"}`).join(" | ");

            case "flashcard":
                return resp === "acertei" ? "✅ Acertei" : resp === "dificil" ? "🤔 Difícil" : "❌ Errei";
        }
        return String(resp);
    }

    /* ============================================================
       FEEDBACK
       ============================================================ */
    function renderizarFeedback(q, acertou, respostaBruta) {
        const fb = $("feedback");
        if (!fb) return;

        fb.className = "feedback show " + (acertou ? "sucesso" : "erro");
        fb.innerHTML = "";

        const header = document.createElement("div");
        header.className = "fb-header";
        const icone = document.createElement("span");
        icone.className = "icone";
        icone.textContent = acertou ? "✅" : "❌";
        const titulo = document.createElement("span");
        titulo.textContent = acertou ? "Resposta correta!" : "Resposta incorreta";
        header.append(icone, titulo);
        fb.appendChild(header);

        if (q.tipo !== "flashcard") {
            const respostas = document.createElement("div");
            respostas.className = "fb-respostas";

            if (!acertou) {
                respostas.appendChild(criarLinha("Sua resposta", textoRespostaUsuario(q, respostaBruta), "incorreto"));
            }
            respostas.appendChild(criarLinha(
                acertou ? "Resposta" : "Resposta correta",
                textoRespostaCorreta(q),
                "correto"
            ));
            fb.appendChild(respostas);
        }

        const expl = document.createElement("div");
        expl.className = "fb-explicacao";
        expl.textContent = q.explicacao;
        fb.appendChild(expl);

        if (q.referencia) {
            const ref = document.createElement("div");
            ref.className = "fb-referencia";
            const ic = document.createElement("span");
            ic.className = "icone";
            ic.textContent = "📖";
            const tx = document.createElement("span");
            tx.className = "texto";
            const st = document.createElement("strong");
            st.textContent = "Para revisar: ";
            const sp = document.createElement("span");
            sp.textContent = q.referencia;
            tx.append(st, sp);
            ref.append(ic, tx);
            fb.appendChild(ref);
        }
    }

    function criarLinha(rotulo, valor, tipo) {
        const linha = document.createElement("div");
        linha.className = "fb-linha";
        const sr = document.createElement("span");
        sr.className = "rotulo";
        sr.textContent = rotulo;
        const sv = document.createElement("span");
        sv.className = "valor " + tipo;
        sv.textContent = valor;
        linha.append(sr, sv);
        return linha;
    }

    /* ============================================================
       NAVEGAÇÃO
       ============================================================ */
    function aoVoltar() {
        if (estado.indiceGlobal > inicioDoBloco(estado.blocoAtivo)) {
            estado.indiceGlobal--;
            renderizarQuestao();
            restaurarRespostaSeExistir();
            salvarProgresso();
        }
    }

    function aoProximo() {
        if (estado.indiceGlobal === fimDoBloco(estado.blocoAtivo) - 1) {
            mostrarFimDeBloco();
        } else {
            estado.indiceGlobal++;
            renderizarQuestao();
            restaurarRespostaSeExistir();
            salvarProgresso();
        }
    }

    function restaurarRespostaSeExistir() {
        const resp = estado.respostas[estado.indiceGlobal];
        if (resp === undefined) return;

        const q = estado.questoes[estado.indiceGlobal];
        const bruta = estado.selecionadas[estado.indiceGlobal];

        aplicarEstadoRespondido(q, bruta, resp);
        renderizarFeedback(q, resp, bruta);
        const btnProximo = $("btn-proximo");
        if (btnProximo) btnProximo.disabled = false;
    }

    function aplicarEstadoRespondido(q, bruta, acertou) {
        const opcoesEl = $("opcoes");
        if (!opcoesEl) return;

        const tiposSimples = ["vf", "multipla", "complete", "erro", "predicao"];
        if (tiposSimples.includes(q.tipo)) {
            const btns = opcoesEl.querySelectorAll(".opcao");
            const idxCorreto = q.tipo === "vf" ? (q.resposta ? 0 : 1) : q.correta;
            btns.forEach(b => { b.classList.add("desabilitada"); b.style.pointerEvents = "none"; });
            if (btns[idxCorreto]) btns[idxCorreto].classList.add("correta");
            if (!acertou) {
                if (q.tipo === "vf") {
                    const idxEsc = bruta === true ? 0 : 1;
                    if (btns[idxEsc]) btns[idxEsc].classList.add("errada");
                } else {
                    if (btns[bruta]) btns[bruta].classList.add("errada");
                }
            }
        }
    }

    /* ============================================================
       FIM DE BLOCO
       ============================================================ */
    function mostrarFimDeBloco() {
        const b = estado.blocoAtivo;
        const acertos = contarAcertosBloco(b);
        const tamanho = tamanhoDoBloco(b);
        const pct = Math.round((acertos / tamanho) * 100);

        let icone, titulo, mensagem;
        if (pct >= 80)      { icone = "🎉"; titulo = "Excelente bloco!"; mensagem = "Você arrasou nas questões deste bloco."; }
        else if (pct >= 60) { icone = "👏"; titulo = "Bom trabalho!";    mensagem = "Bom desempenho neste bloco. Continue assim!"; }
        else if (pct >= 40) { icone = "📚"; titulo = "Bloco concluído";  mensagem = "Você está no caminho. Revise os pontos que errou."; }
        else                { icone = "💪"; titulo = "Bloco concluído";  mensagem = "Não desanime! A prática leva à perfeição."; }

        setText("bloco-icone", icone);
        setText("bloco-titulo", titulo);
        setText("bloco-mensagem", mensagem);
        setText("bloco-acertos", `${acertos} / ${tamanho}`);
        setText("bloco-progresso-geral", `${contarRespondidasTotal()} / ${totalQuestoes()}`);

        mostrarTela("bloco");
        salvarProgresso();
    }

    /* ============================================================
       RESULTADO FINAL
       ============================================================ */
    function mostrarResultadoFinal() {
        const total = totalQuestoes();
        const acertos = contarAcertosTotal();
        const pct = Math.round((acertos / total) * 100);

        let icone, titulo, mensagem;
        if (pct >= 80)      { icone = "🏆"; titulo = "Excelente!";         mensagem = "Você dominou o conteúdo. Continue assim!"; }
        else if (pct >= 60) { icone = "👏"; titulo = "Muito bom!";         mensagem = "Bom desempenho! Revise os pontos que errou."; }
        else if (pct >= 40) { icone = "📚"; titulo = "Continue estudando"; mensagem = "Você está no caminho. Revise o material."; }
        else                { icone = "💪"; titulo = "Não desanime!";      mensagem = "A prática leva à perfeição. Refaça o quiz."; }

        setText("resultado-icone", icone);
        setText("resultado-titulo", titulo);
        setText("resultado-mensagem", mensagem);
        const elPont = $("resultado-pontuacao");
        if (elPont) elPont.innerHTML = `${acertos}<small>/${total}</small>`;

        mostrarTela("resultado");
    }

    /* ============================================================
       INICIAR / REFAZER
       ============================================================ */
    function iniciarQuiz(opcoes) {
        opcoes = opcoes || {};
        const recomecar = opcoes.recomecar === true;

        if (QUESTOES.length === 0) {
            console.warn("[Quiz Engine] Nenhuma questão cadastrada em window.QUIZ_DATA.questoes.");
            renderizarTelaInicial();
            return;
        }

        // Tenta carregar progresso salvo (a menos que seja para recomeçar)
        if (!recomecar && carregarProgresso()) {
            console.info("[Quiz] Progresso restaurado do localStorage.");
            renderizarTelaInicial();
            mostrarTela("inicio");
            return;
        }

        // Recomeça do zero
        limparProgresso();
        estado.questoes     = embaralhar(QUESTOES).map(embaralharOpcoes);
        estado.respostas    = {};
        estado.selecionadas = {};
        estado.blocoAtivo   = 0;
        estado.indiceGlobal = 0;
        estado.temp         = {};

        salvarProgresso();
        renderizarTelaInicial();
        mostrarTela("inicio");
    }

    /* ============================================================
       LIGAÇÃO DOS BOTÕES
       ============================================================ */
    bind("btn-voltar",         "click", aoVoltar);
    bind("btn-proximo",        "click", aoProximo);
    bind("btn-voltar-selecao", "click", () => {
        renderizarTelaInicial();
        mostrarTela("inicio");
    });
    bind("btn-ver-resultado",  "click", mostrarResultadoFinal);
    bind("btn-refazer-tudo",   "click", () => iniciarQuiz({ recomecar: true }));
    bind("btn-refazer",        "click", () => iniciarQuiz({ recomecar: true }));

    /* ============================================================
       INICIALIZAÇÃO
       ============================================================ */
    if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", () => iniciarQuiz({}));
    } else {
        iniciarQuiz({});
    }

})();