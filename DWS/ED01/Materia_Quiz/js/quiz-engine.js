/* ============================================================
   QUIZ ENGINE — Motor genérico para todos os módulos
   ------------------------------------------------------------
   Uso: a página deve definir window.QUIZ_DATA antes de carregar
        este arquivo, com a seguinte estrutura:

        window.QUIZ_DATA = {
            questoes: [ ... ]
        };

   Cada questão tem o formato:
        {
            tipo:       "vf" | "multipla" | "complete" | "erro",
            enunciado:  "texto",
            opcoes:     ["A", "B", "C", "D"],   // não usar em "vf"
            correta:    1,                       // índice da correta
            resposta:   true,                    // apenas em "vf"
            codigo:     'código com {{GAP}}',    // opcional
            explicacao: "texto explicativo",
            referencia: "Módulo XX — Seção Y.Y"
        }
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
       ESTADO
       ============================================================ */
    const estado = {
        questoes:     [],   // banco embaralhado
        respostas:    {},   // { [indiceGlobal]: true/false }
        selecionadas: {},   // { [indiceGlobal]: indiceEscolhido }
        indiceGlobal: 0,    // posição atual
        blocoAtivo:   0     // bloco sendo jogado
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

    /* ============================================================
       REFERÊNCIAS AOS ELEMENTOS
       ============================================================ */
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
        Object.values(telas).forEach(t => t.classList.remove("ativa"));
        if (telas[nome]) telas[nome].classList.add("ativa");
    }

    function escaparHTML(str) {
        return String(str)
            .replace(/&/g, "&amp;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;");
    }

    function embaralhar(array) {
        const copia = [...array];
        for (let i = copia.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [copia[i], copia[j]] = [copia[j], copia[i]];
        }
        return copia;
    }

    function embaralharOpcoes(questao) {
        if (questao.tipo === "vf" || !questao.opcoes) return { ...questao };

        const opcoesOriginais = [...questao.opcoes];
        const pares = opcoesOriginais.map((texto, i) => ({
            texto,
            eraCorreta: i === questao.correta
        }));

        const paresEmbaralhados = embaralhar(pares);
        const novasOpcoes = paresEmbaralhados.map(p => p.texto);
        const novoIndiceCorreto = paresEmbaralhados.findIndex(p => p.eraCorreta);

        return {
            ...questao,
            opcoes:  novasOpcoes,
            correta: novoIndiceCorreto
        };
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
        for (let b = 0; b < totalBlocos(); b++) {
            if (blocoEstaConcluido(b)) c++;
        }
        return c;
    }

    /* ============================================================
       CABEÇALHO DO QUIZ
       ============================================================ */
    function atualizarCabecalho() {
        const b = estado.blocoAtivo;

        const elBloco   = $("contador-bloco");
        const elQuestao = $("contador-questao");
        if (elBloco)   elBloco.textContent   = `Bloco ${b + 1} de ${totalBlocos()}`;
        if (elQuestao) elQuestao.textContent = `Questão ${posNoBlocoAtivo() + 1} de ${tamanhoDoBloco(b)}`;

        const total = totalQuestoes();
        const respondidas = contarRespondidasTotal();
        const elProgresso = $("progresso");
        if (elProgresso) {
            elProgresso.style.width = `${total > 0 ? (respondidas / total) * 100 : 0}%`;
        }

        const blocoEl = $("progresso-bloco");
        if (!blocoEl) return;

        blocoEl.innerHTML = "";
        for (let i = 0; i < tamanhoDoBloco(b); i++) {
            const indice = inicioDoBloco(b) + i;
            const bolinha = document.createElement("span");
            bolinha.className = "bolinha";

            if (indice === estado.indiceGlobal) {
                bolinha.classList.add("atual");
            } else if (estado.respostas[indice] === true) {
                bolinha.classList.add("correta");
            } else if (estado.respostas[indice] === false) {
                bolinha.classList.add("errada");
            }

            blocoEl.appendChild(bolinha);
        }
    }

    /* ============================================================
       TELA INICIAL — GRADE DE BLOCOS
       ============================================================ */
    function renderizarTelaInicial() {
        const grid = $("blocos-grid");
        if (!grid) return;

        if (totalQuestoes() === 0) {
            grid.innerHTML = `
                <div style="grid-column:1/-1;padding:30px;text-align:center;color:#7f8c8d;">
                    Nenhuma questão cadastrada ainda.
                </div>
            `;
            const b1 = $("btn-refazer-tudo");
            const b2 = $("btn-ver-resultado");
            if (b1) b1.style.display = "none";
            if (b2) b2.style.display = "none";
            return;
        }

        const totalB    = totalBlocos();
        const concluidos = contarBlocosConcluidos();

        const elConcluidos = $("geral-concluidos");
        const elTotal      = $("geral-total");
        const elPontos     = $("geral-pontos");

        if (elConcluidos) elConcluidos.textContent = concluidos;
        if (elTotal)      elTotal.textContent      = totalB;
        if (elPontos)     elPontos.textContent     = contarAcertosTotal();

        grid.innerHTML = "";

        for (let b = 0; b < totalB; b++) {
            const tamanho      = tamanhoDoBloco(b);
            const respondidas  = contarRespondidasBloco(b);
            const acertos      = contarAcertosBloco(b);
            const concluido    = blocoEstaConcluido(b);
            const iniciado     = respondidas > 0 && !concluido;

            const card = document.createElement("div");
            card.className = "bloco-card";
            if (concluido)    card.classList.add("concluido");
            else if (iniciado) card.classList.add("em-andamento");

            let statusHTML;
            if (concluido) {
                statusHTML = `<span class="bloco-status concluido">✓ Concluído</span>`;
            } else if (iniciado) {
                statusHTML = `<span class="bloco-status em-andamento">Em andamento</span>`;
            } else {
                statusHTML = `<span class="bloco-status nao-iniciado">Não iniciado</span>`;
            }

            let infoHTML;
            if (concluido) {
                infoHTML = `<strong>${acertos}/${tamanho}</strong> acertos`;
            } else if (iniciado) {
                infoHTML = `${respondidas}/${tamanho} respondidas`;
            } else {
                infoHTML = `${tamanho} questões`;
            }

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

        const btnVerResultado = $("btn-ver-resultado");
        if (btnVerResultado) {
            btnVerResultado.style.display =
                (concluidos === totalB && totalB > 0) ? "inline-flex" : "none";
        }
    }

    /* ============================================================
       ABRIR BLOCO
       ============================================================ */
    function abrirBloco(b) {
        // Se o bloco já estava concluído, limpa as respostas para refazer
        if (blocoEstaConcluido(b)) {
            for (let i = inicioDoBloco(b); i < fimDoBloco(b); i++) {
                delete estado.respostas[i];
                delete estado.selecionadas[i];
            }
        }

        estado.blocoAtivo = b;

        // Vai direto para a próxima questão pendente
        let proxima = inicioDoBloco(b);
        for (let i = inicioDoBloco(b); i < fimDoBloco(b); i++) {
            if (estado.respostas[i] === undefined) {
                proxima = i;
                break;
            }
            proxima = i + 1;
        }
        if (proxima >= fimDoBloco(b)) proxima = inicioDoBloco(b);
        estado.indiceGlobal = proxima;

        renderizarQuestao();
        mostrarTela("questao");
    }

    /* ============================================================
       RENDERIZAR QUESTÃO
       ============================================================ */
    function renderizarQuestao() {
        const q = estado.questoes[estado.indiceGlobal];
        if (!q) return;

        atualizarCabecalho();

        // ---------- Badge do tipo ----------
        const badges = {
            vf:       { texto: "Verdadeiro ou Falso", classe: "vf" },
            multipla: { texto: "Múltipla Escolha",    classe: "multipla" },
            complete: { texto: "Complete o Código",   classe: "complete" },
            erro:     { texto: "Aponte o Erro",       classe: "erro" }
        };
        const infoBadge = badges[q.tipo] || { texto: q.tipo, classe: "" };
        const badge = $("tipo-badge");
        if (badge) {
            badge.textContent = infoBadge.texto;
            badge.className = "tipo-badge " + infoBadge.classe;
        }

        // ---------- Enunciado ----------
        const elEnunciado = $("enunciado");
        if (elEnunciado) elEnunciado.textContent = q.enunciado;

        // ---------- Área de código ----------
        const areaCodigo = $("area-codigo");
        if (areaCodigo) {
            areaCodigo.innerHTML = "";
            if (q.codigo) {
                const bloco = document.createElement("div");
                bloco.className = "code-block";

                let esc = escaparHTML(q.codigo);
                esc = esc.replace(/\{\{GAP\}\}/g, '<span class="gap">???</span>');
                bloco.innerHTML = esc;
                areaCodigo.appendChild(bloco);
            }
        }

        // ---------- Opções ----------
        const opcoesEl = $("opcoes");
        if (opcoesEl) {
            opcoesEl.innerHTML = "";
            opcoesEl.classList.toggle("vf-grid", q.tipo === "vf");

            if (q.tipo === "vf") {
                criarOpcao("Verdadeiro", true, opcoesEl);
                criarOpcao("Falso", false, opcoesEl);
            } else {
                const letras = ["A", "B", "C", "D", "E"];
                q.opcoes.forEach((texto, i) => {
                    criarOpcao(texto, i, opcoesEl, letras[i]);
                });
            }
        }

        // ---------- Limpa feedback ----------
        const fb = $("feedback");
        if (fb) {
            fb.className = "feedback";
            fb.innerHTML = "";
        }

        // ---------- Botões de navegação ----------
        const btnVoltar = $("btn-voltar");
        const btnProximo = $("btn-proximo");

        if (btnVoltar) {
            btnVoltar.disabled = estado.indiceGlobal === inicioDoBloco(estado.blocoAtivo);
        }
        if (btnProximo) {
            btnProximo.disabled = true;
            const ultima = estado.indiceGlobal === fimDoBloco(estado.blocoAtivo) - 1;
            btnProximo.textContent = ultima ? "Finalizar Bloco ✓" : "Próxima →";
        }
    }

    function criarOpcao(texto, valor, container, letra) {
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

        btn.addEventListener("click", () => responder(valor));
        container.appendChild(btn);
    }

    /* ============================================================
       RESPONDER
       ============================================================ */
    function responder(valor) {
        const q = estado.questoes[estado.indiceGlobal];
        if (!q) return;

        const opcoesEl = $("opcoes").querySelectorAll(".opcao");

        const indiceCorreto = (q.tipo === "vf")
            ? (q.resposta === true ? 0 : 1)
            : q.correta;

        const indiceEscolhido = (q.tipo === "vf")
            ? (valor === true ? 0 : 1)
            : valor;

        const acertou = indiceEscolhido === indiceCorreto;

        opcoesEl.forEach(op => op.classList.add("desabilitada"));
        if (opcoesEl[indiceCorreto]) opcoesEl[indiceCorreto].classList.add("correta");
        if (!acertou && opcoesEl[indiceEscolhido]) {
            opcoesEl[indiceEscolhido].classList.add("errada");
        }

        estado.respostas[estado.indiceGlobal]    = acertou;
        estado.selecionadas[estado.indiceGlobal] = indiceEscolhido;

        renderizarFeedback(q, acertou, indiceEscolhido);

        const btnProximo = $("btn-proximo");
        if (btnProximo) btnProximo.disabled = false;

        atualizarCabecalho();
    }

    /* ============================================================
       TEXTO DAS RESPOSTAS
       ============================================================ */
    function textoRespostaCorreta(q) {
        if (q.tipo === "vf") return q.resposta === true ? "Verdadeiro" : "Falso";
        return q.opcoes[q.correta];
    }

    function textoRespostaEscolhida(q, indice) {
        if (q.tipo === "vf") return indice === 0 ? "Verdadeiro" : "Falso";
        return q.opcoes[indice];
    }

    /* ============================================================
       FEEDBACK
       ============================================================ */
    function renderizarFeedback(q, acertou, indiceEscolhido) {
        const fb = $("feedback");
        if (!fb) return;

        fb.className = "feedback show " + (acertou ? "sucesso" : "erro");
        fb.innerHTML = "";

        const textoCorreto   = textoRespostaCorreta(q);
        const textoEscolhido = textoRespostaEscolhida(q, indiceEscolhido);

        // ----- Cabeçalho -----
        const header = document.createElement("div");
        header.className = "fb-header";

        const iconeHeader = document.createElement("span");
        iconeHeader.className = "icone";
        iconeHeader.textContent = acertou ? "✅" : "❌";

        const tituloHeader = document.createElement("span");
        tituloHeader.textContent = acertou
            ? "Resposta correta!"
            : "Resposta incorreta";

        header.append(iconeHeader, tituloHeader);
        fb.appendChild(header);

        // ----- Comparativo de respostas -----
        const respostas = document.createElement("div");
        respostas.className = "fb-respostas";

        if (!acertou) {
            respostas.appendChild(
                criarLinhaResposta("Sua resposta", textoEscolhido, "incorreto")
            );
        }
        respostas.appendChild(
            criarLinhaResposta(
                acertou ? "Resposta" : "Resposta correta",
                textoCorreto,
                "correto"
            )
        );
        fb.appendChild(respostas);

        // ----- Explicação -----
        const explicacao = document.createElement("div");
        explicacao.className = "fb-explicacao";
        explicacao.textContent = q.explicacao;
        fb.appendChild(explicacao);

        // ----- Referência ao material -----
        if (q.referencia) {
            const ref = document.createElement("div");
            ref.className = "fb-referencia";

            const iconeRef = document.createElement("span");
            iconeRef.className = "icone";
            iconeRef.textContent = "📖";

            const textoRef = document.createElement("span");
            textoRef.className = "texto";

            const strong = document.createElement("strong");
            strong.textContent = "Para revisar: ";

            const spanRef = document.createElement("span");
            spanRef.textContent = q.referencia;

            textoRef.append(strong, spanRef);
            ref.append(iconeRef, textoRef);
            fb.appendChild(ref);
        }
    }

    function criarLinhaResposta(rotulo, valor, tipo) {
        const linha = document.createElement("div");
        linha.className = "fb-linha";

        const spanRotulo = document.createElement("span");
        spanRotulo.className = "rotulo";
        spanRotulo.textContent = rotulo;

        const spanValor = document.createElement("span");
        spanValor.className = "valor " + tipo;
        spanValor.textContent = valor;

        linha.append(spanRotulo, spanValor);
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
        }
    }

    function aoProximo() {
        if (estado.indiceGlobal === fimDoBloco(estado.blocoAtivo) - 1) {
            mostrarFimDeBloco();
        } else {
            estado.indiceGlobal++;
            renderizarQuestao();
            restaurarRespostaSeExistir();
        }
    }

    function restaurarRespostaSeExistir() {
        const resp = estado.respostas[estado.indiceGlobal];
        if (resp === undefined) return;

        const q = estado.questoes[estado.indiceGlobal];
        const opcoesEl = $("opcoes").querySelectorAll(".opcao");
        const escolhido = estado.selecionadas[estado.indiceGlobal];

        const indiceCorreto = (q.tipo === "vf")
            ? (q.resposta === true ? 0 : 1)
            : q.correta;

        opcoesEl.forEach(op => op.classList.add("desabilitada"));
        if (opcoesEl[indiceCorreto]) opcoesEl[indiceCorreto].classList.add("correta");
        if (!resp && opcoesEl[escolhido]) opcoesEl[escolhido].classList.add("errada");

        renderizarFeedback(q, resp, escolhido);

        const btnProximo = $("btn-proximo");
        if (btnProximo) btnProximo.disabled = false;
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
    }

    function aoVoltarSelecao() {
        renderizarTelaInicial();
        mostrarTela("inicio");
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
        if (elPont) {
            elPont.innerHTML = `${acertos}<small>/${total}</small>`;
        }

        mostrarTela("resultado");
    }

    /* ============================================================
       HELPERS
       ============================================================ */
    function setText(id, texto) {
        const el = $(id);
        if (el) el.textContent = texto;
    }

    /* ============================================================
       INICIAR / REFAZER
       ============================================================ */
    function iniciarQuiz(embaralharNovamente) {
        if (QUESTOES.length === 0) {
            console.warn("[Quiz Engine] Nenhuma questão cadastrada em window.QUIZ_DATA.questoes.");
            renderizarTelaInicial();
            return;
        }

        if (embaralharNovamente !== false) {
            estado.questoes     = embaralhar(QUESTOES).map(embaralharOpcoes);
            estado.respostas    = {};
            estado.selecionadas = {};
        }

        estado.blocoAtivo   = 0;
        estado.indiceGlobal = 0;

        renderizarTelaInicial();
        mostrarTela("inicio");
    }

    /* ============================================================
       LIGAÇÃO DOS BOTÕES
       ============================================================ */
    function bind(id, evento, handler) {
        const el = $(id);
        if (el) el.addEventListener(evento, handler);
    }

    bind("btn-voltar",          "click", aoVoltar);
    bind("btn-proximo",         "click", aoProximo);
    bind("btn-voltar-selecao",  "click", aoVoltarSelecao);
    bind("btn-ver-resultado",   "click", mostrarResultadoFinal);
    bind("btn-refazer-tudo",    "click", () => iniciarQuiz(true));
    bind("btn-refazer",         "click", () => iniciarQuiz(true));

    /* ============================================================
       INICIALIZAÇÃO
       ============================================================ */
    if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", () => iniciarQuiz(true));
    } else {
        iniciarQuiz(true);
    }

})();