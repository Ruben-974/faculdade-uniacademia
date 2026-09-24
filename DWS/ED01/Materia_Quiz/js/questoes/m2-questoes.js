/* ============================================================
   BANCO DE QUESTÕES — MÓDULO 02 (CSS)
   ------------------------------------------------------------
   Total: 59 questões ÚNICAS
   Cobre os 8 tópicos do M2
   ------------------------------------------------------------
   Tipos: vf, vf-justificativa, multipla, multipla-resposta,
          complete, complete-multiplo, erro, debug-multiplo,
          associacao, ordenar, categorizacao, flashcard, predicao
   ⚠️ Use \x3C no lugar de < dentro das strings.
   ============================================================ */
window.QUIZ_DATA = {
    questoes: [

        /* ============================================================
           TÓPICO 1 — CONCEITOS E SINTAXE
           ============================================================ */

        {
            tipo: "vf",
            enunciado: "CSS é a sigla para Cascading Style Sheets (Folha de Estilo em Cascata).",
            resposta: true,
            explicacao: "Correto! CSS = Cascading Style Sheets. 'Folha de Estilo' é o documento com regras de formatação; 'em Cascata' refere-se à forma como múltiplas regras são aplicadas e como o navegador resolve conflitos seguindo uma ordem de prioridade.",
            referencia: "Módulo 02 — Seção 1.1: O que é CSS? Definição e Propósito"
        },
        {
            tipo: "multipla",
            enunciado: "Qual é a sintaxe CORRETA de uma regra CSS?",
            opcoes: [
                "seletor { propriedade: valor; }",
                "seletor ( propriedade = valor )",
                "seletor [ propriedade: valor ]",
                "propriedade { seletor: valor; }"
            ],
            correta: 0,
            explicacao: "A sintaxe CSS é: seletor { propriedade: valor; }. O seletor define ONDE aplicar; as declarações (entre chaves) definem O QUE aplicar; cada declaração usa dois-pontos entre propriedade e valor, e ponto e vírgula no final.",
            referencia: "Módulo 02 — Seção 1.2: A Sintaxe do CSS: A Anatomia de uma Regra"
        },
        {
            tipo: "erro",
            enunciado: "Há um erro de SINTAXE no código CSS abaixo. Aponte qual é:",
            codigo: 'p {\n  color: red\n  font-size: 16px;\n}',
            opcoes: [
                "A propriedade color está escrita errada",
                "Falta o ponto e vírgula (;) após 'red'",
                "A propriedade font-size não existe em CSS",
                "O código está correto"
            ],
            correta: 1,
            explicacao: "Falta o ponto e vírgula após 'red'. Em CSS, cada declaração termina com ;. Sem ele, o navegador junta a próxima linha e tenta interpretar 'red font-size: 16px' como uma única declaração inválida — e AMBAS são descartadas.",
            referencia: "Módulo 02 — Seção 1.2: A Sintaxe do CSS: A Anatomia de uma Regra"
        },
        {
            tipo: "vf-justificativa",
            enunciado: "Quando a MESMA propriedade é declarada duas vezes no mesmo bloco CSS, o navegador aplica a primeira declaração.",
            resposta: false,
            justificativas: [
                "Porque o navegador é programado para priorizar a primeira regra escrita.",
                "Porque, na cascata, a ÚLTIMA declaração vence quando há empate de especificidade.",
                "Porque a primeira declaração sempre tem maior especificidade."
            ],
            justificativaCorreta: 1,
            explicacao: "Na cascata, quando duas regras têm a MESMA especificidade, a ÚLTIMA vence. Ex: `color: red; color: blue;` → o texto fica azul. Por isso duplicar propriedades sem motivo é um bug silencioso.",
            referencia: "Módulo 02 — Seção 1.4: A Natureza 'Cascata' do CSS"
        },
        {
            tipo: "ordenar",
            enunciado: "Ordene os critérios de resolução de conflitos na cascata, do MENOS prioritário para o MAIS prioritário:",
            itens: [
                "Ordem de declaração no arquivo",
                "Especificidade do seletor",
                "Origem da regra (autor, usuário, navegador)",
                "Uso de !important"
            ],
            explicacao: "A ordem de prioridade da cascata (do menos para o mais prioritário) é: ordem no arquivo < especificidade < origem da regra < !important. Quanto mais 'forte' o critério, mais ele vence os anteriores quando há conflito.",
            referencia: "Módulo 02 — Seção 1.4: A Natureza 'Cascata' do CSS"
        },
        {
            tipo: "multipla",
            enunciado: "O que a diretiva !important faz em uma declaração CSS?",
            opcoes: [
                "Aumenta a especificidade do seletor em 10 pontos",
                "Força a declaração a vencer praticamente qualquer outra regra (exceto !important do usuário)",
                "Permite usar números negativos em qualquer propriedade",
                "Transforma a declaração em uma variável CSS"
            ],
            correta: 1,
            explicacao: "O !important sobrescreve praticamente qualquer outra regra, independentemente da especificidade. É considerado má prática porque QUEBRA a cascata natural, dificultando a manutenção. Use apenas como último recurso.",
            referencia: "Módulo 02 — Seção 1.4: A Natureza 'Cascata' do CSS"
        },
        {
            tipo: "debug-multiplo",
            enunciado: "Este CSS tem 3 erros. Marque TODOS eles:",
            codigo: 'p {\n  color: red;\n  font-size: 16;\n}\n\nh1 {\n  text-color: blue;\n  margin: 0 auto\n}',
            opcoes: [
                { texto: "font-size: 16 está sem unidade", correta: true },
                { texto: "text-color não existe — o correto é color", correta: true },
                { texto: "Falta ponto e vírgula após 'margin: 0 auto'", correta: true },
                { texto: "color: red deveria ser color: #FF0000", correta: false },
                { texto: "h1 não pode ter margin", correta: false }
            ],
            explicacao: "Erro 1: font-size: 16 sem unidade → ignorado. Erro 2: text-color não existe → use color. Erro 3: falta ; após 'margin: 0 auto' → o navegador descarta essa declaração. Os itens 4 e 5 são falsos: tanto nome de cor quanto hexadecimal são válidos; h1 aceita margin normalmente.",
            referencia: "Módulo 02 — Seção 1.2 e 5.2 e 5.5"
        },

        /* ============================================================
           TÓPICO 2 — INSERÇÃO E SELETORES
           ============================================================ */

        {
            tipo: "vf",
            enunciado: "O CSS Inline (atributo style na tag) é a forma MAIS recomendada para projetos grandes, pois tem maior prioridade.",
            resposta: false,
            explicacao: "Falso! O CSS Inline, apesar de ter alta prioridade, é a PIOR forma de inserir estilos em projetos grandes: mistura estrutura com apresentação, não é reutilizável, não suporta pseudo-classes e torna a manutenção impossível. A forma RECOMENDADA é o CSS EXTERNO.",
            referencia: "Módulo 02 — Seção 2.1: Formas de Inserção do CSS"
        },
        {
            tipo: "categorizacao",
            enunciado: "Classifique cada situação na forma de inserção CSS mais adequada:",
            categorias: ["CSS Externo", "CSS Incorporado", "CSS Inline"],
            itens: [
                { texto: "Site com 20 páginas que compartilham o mesmo estilo", categoria: "CSS Externo" },
                { texto: "Página única de prototipagem rápida", categoria: "CSS Incorporado" },
                { texto: "Alterar a cor de UM parágrafo específico rapidamente", categoria: "CSS Inline" },
                { texto: "Projeto profissional com versionamento", categoria: "CSS Externo" },
                { texto: "Estilo único de um e-mail promocional", categoria: "CSS Inline" }
            ],
            explicacao: "CSS Externo: múltiplas páginas, manutenção centralizada, cache. CSS Incorporado: única página, testes, prototipagem. CSS Inline: ajuste pontual em UM elemento, situações onde não há arquivo CSS disponível (como e-mails HTML). Em projetos sérios, prefira sempre o Externo.",
            referencia: "Módulo 02 — Seção 2.1: Formas de Inserção do CSS"
        },
        {
            tipo: "multipla",
            enunciado: "Qual seletor tem a MAIOR especificidade no CSS?",
            opcoes: [
                "Seletor de tag (ex: p)",
                "Seletor de classe (ex: .destaque)",
                "Seletor de ID (ex: #titulo)",
                "Seletor universal (ex: *)"
            ],
            correta: 2,
            explicacao: "A ordem de especificidade (do maior para o menor) é: Inline (1000) > ID (100) > Classe (10) > Tag (1) > Universal (0). O seletor de ID (#) vence classes e tags.",
            referencia: "Módulo 02 — Seção 2.2.3: Especificidade dos Seletores"
        },
        {
            tipo: "erro",
            enunciado: "Há um erro de SELETOR no código abaixo. Aponte qual é:",
            codigo: '#titulo {\n  color: blue;\n}',
            opcoes: [
                "O seletor #titulo aplica estilo a TODOS os elementos com classe 'titulo'",
                "O seletor #titulo aplica estilo a UM elemento com id='titulo'; se a intenção era aplicar a uma classe, o correto seria .titulo",
                "O símbolo # não pode ser usado em CSS",
                "O código está correto"
            ],
            correta: 1,
            explicacao: "O # seleciona elementos por ID — e IDs devem ser ÚNICOS por página. Se você quer aplicar o mesmo estilo a VÁRIOS elementos, o correto é usar classe: .titulo (com ponto).",
            referencia: "Módulo 02 — Seção 1.3: Seletores em Profundidade"
        },
        {
            tipo: "associacao",
            enunciado: "Relacione cada seletor CSS com sua função:",
            pares: [
                { esquerda: "#titulo", direita: "Seleciona UM elemento com id='titulo'" },
                { esquerda: ".destaque", direita: "Seleciona TODOS os elementos com class='destaque'" },
                { esquerda: "p", direita: "Seleciona TODOS os parágrafos" },
                { esquerda: "*", direita: "Seleciona TODOS os elementos" }
            ],
            explicacao: "# = ID (único); . = classe (reutilizável); tag pura = todos os elementos daquele tipo; * = seletor universal (afeta tudo). Quanto mais específico, maior a prioridade na cascata.",
            referencia: "Módulo 02 — Seção 1.3: Seletores em Profundidade"
        },
        {
            tipo: "multipla",
            enunciado: "No seletor `nav > ul > li`, o que o símbolo `>` representa?",
            opcoes: [
                "Seleciona qualquer descendente (netos, bisnetos, etc.)",
                "Seleciona apenas os filhos DIRETOS",
                "Seleciona o próximo irmão adjacente",
                "Seleciona todos os irmãos seguintes"
            ],
            correta: 1,
            explicacao: "O `>` é o combinador de FILHO DIRETO. Ele só seleciona elementos que são filhos IMEDIATOS do seletor à esquerda. Sem o `>`, um espaço (ex: `nav ul li`) selecionaria QUALQUER descendente, não importando a profundidade. Os outros combinadores são: `+` (irmão adjacente) e `~` (irmãos seguintes).",
            referencia: "Módulo 02 — Seção 2.2: Especificidade e Seletores"
        },
        {
            tipo: "multipla",
            enunciado: "Qual pseudo-elemento insere conteúdo ANTES do elemento selecionado?",
            opcoes: [":before", "::before", "::prepend", "::start"],
            correta: 1,
            explicacao: "O ::before (com dois-pontos duplos) insere conteúdo antes do elemento. É obrigatório usar a propriedade content junto. A forma :before (um só dois-pontos) é a sintaxe antiga. Já ::prepend e ::start não existem.",
            referencia: "Módulo 02 — Seção 6.8: Pseudo-elementos (Complemento)"
        },

        /* ============================================================
           TÓPICO 3 — BOX MODEL
           ============================================================ */

        {
            tipo: "vf",
            enunciado: "Quando duas margens verticais se encontram, elas se SOMAM (ex: 30px + 20px = 50px).",
            resposta: false,
            explicacao: "Falso! Esse é o fenômeno do 'colapso de margens' (margin collapsing). Quando duas margens verticais se encontram, NÃO se somam — a MAIOR prevalece. Exemplo: margin-bottom: 30px + margin-top: 20px resulta em 30px, não 50px.",
            referencia: "Módulo 02 — Seção 3.2.3: Colapso de Margens (Margin Collapsing)"
        },
        {
            tipo: "vf",
            enunciado: "A propriedade padding aceita valores negativos, assim como a margin.",
            resposta: false,
            explicacao: "Falso! Apenas a margin aceita valores negativos (ex: margin-top: -20px;). O padding NÃO aceita valores negativos — ele é sempre positivo ou zero. Além disso, o padding herda a cor de fundo do elemento, e a margin é sempre transparente.",
            referencia: "Módulo 02 — Seção 3.3.1: Diferença Crucial entre Margin e Padding"
        },
        {
            tipo: "vf",
            enunciado: "A regra box-sizing: border-box faz com que width e height incluam o padding e a borda.",
            resposta: true,
            explicacao: "Correto! Com border-box, uma div com width:100px, padding:10px e border:5px ocupa EXATAMENTE 100px. Sem border-box (padrão content-box), ela ocuparia 130px. É considerada boa prática universal aplicar border-box em todos os elementos via reset.",
            referencia: "Módulo 02 — Seção 3.7: Reset de Box Model e Boas Práticas"
        },
        {
            tipo: "complete",
            enunciado: "Complete o código abaixo para centralizar horizontalmente uma div de largura fixa:",
            codigo: '.container {\n  width: 960px;\n  margin: 0 {{GAP}};\n}',
            opcoes: ["center", "middle", "auto", "central"],
            correta: 2,
            explicacao: "O valor auto nas margens laterais faz o navegador calcular automaticamente um valor igual para os dois lados, centralizando o elemento. 'center', 'middle' e 'central' não são valores válidos para margin — apenas 'auto' funciona.",
            referencia: "Módulo 02 — Seção 3.2: Margin (Margem)"
        },
        {
            tipo: "associacao",
            enunciado: "Relacione cada propriedade do Box Model com sua definição:",
            pares: [
                { esquerda: "margin", direita: "Espaço EXTERNO, transparente, aceita valores negativos" },
                { esquerda: "padding", direita: "Espaço INTERNO, herda cor de fundo, sem negativos" },
                { esquerda: "border", direita: "Linha delimitadora com largura, estilo e cor" }
            ],
            explicacao: "Margin = espaçamento externo (entre elementos); padding = espaçamento interno (entre conteúdo e borda); border = linha visível que envolve o padding. Juntas, formam o Box Model: margin > border > padding > content.",
            referencia: "Módulo 02 — Seção 3: Box Model (Modelo de Caixa)"
        },
        {
            tipo: "vf",
            enunciado: "O reset universal `* { margin: 0; padding: 0; box-sizing: border-box; }` é uma boa prática em projetos modernos.",
            resposta: true,
            explicacao: "Correto! Esse reset zera margens e paddings padrão do navegador e aplica border-box universalmente. Isso garante que o layout seja PREVISÍVEL entre navegadores e que o dimensionamento siga a lógica intuitiva (width inclui padding+border). É praticamente padrão em projetos profissionais.",
            referencia: "Módulo 02 — Seção 3.7: Reset de Box Model e Boas Práticas"
        },
        {
            tipo: "erro",
            enunciado: "Há um erro de UNIDADE no CSS abaixo. Aponte qual é:",
            codigo: '.caixa {\n  width: 300;\n  height: 200px;\n}',
            opcoes: [
                "width: 300 está sem unidade — o navegador ignora",
                "height: 200px deveria ser height: 200",
                "Ambos precisam da mesma unidade",
                "O código está correto"
            ],
            correta: 0,
            explicacao: "width: 300 está SEM UNIDADE. Para valores diferentes de zero, é OBRIGATÓRIO especificar a unidade (px, em, rem, %, vw, etc.). A exceção é line-height, que aceita número puro (ex: 1.5).",
            referencia: "Módulo 02 — Seção 3.7: Reset de Box Model e Boas Práticas"
        },
        {
            tipo: "debug-multiplo",
            enunciado: "Este CSS do Box Model tem 3 problemas. Marque TODOS eles:",
            codigo: '.caixa {\n  margin: -10px -10px -10px -10px;\n  padding: -20px;\n  border: 2px solid;\n  box-sizing: content-box;\n  width: 100px;\n  padding: 10px;\n}',
            opcoes: [
                { texto: "padding: -20px é inválido — padding NÃO aceita valores negativos", correta: true },
                { texto: "A propriedade padding foi declarada duas vezes (uma delas será ignorada)", correta: true },
                { texto: "box-sizing: content-box deveria ser border-box para layout previsível", correta: true },
                { texto: "margin não pode ter 4 valores", correta: false },
                { texto: "border não aceita o valor 'solid'", correta: false }
            ],
            explicacao: "Erro 1: padding negativo é proibido. Erro 2: padding duplicado — a última declaração vence, mas ter as duas é bug. Erro 3: content-box é o padrão antigo; o ideal é border-box. Os itens 4 e 5 são falsos: margin aceita 1, 2, 3 ou 4 valores; solid é um estilo de borda válido.",
            referencia: "Módulo 02 — Seção 3: Box Model"
        },
        {
            tipo: "vf",
            enunciado: "A propriedade position: absolute posiciona o elemento em relação ao seu ancestral mais próximo que tenha position diferente de static.",
            resposta: true,
            explicacao: "Correto! O position: absolute sai do fluxo normal e se posiciona em relação ao seu container de referência — que é o ancestral mais próximo com position diferente de static. Se nenhum ancestral tiver position definido, ele se posiciona em relação ao documento.",
            referencia: "Módulo 02 — Seção 3.6: Box Model em Elementos Inline vs. Block"
        },
        {
            tipo: "multipla",
            enunciado: "Qual valor de position mantém o elemento FIXO em relação à janela do navegador (viewport), mesmo ao rolar a página?",
            opcoes: ["relative", "absolute", "fixed", "static"],
            correta: 2,
            explicacao: "O position: fixed prende o elemento em relação à VIEWPORT — ele não se move ao rolar a página. Usado em barras de navegação fixas e botões flutuantes.",
            referencia: "Módulo 02 — Seção 3.6: Box Model em Elementos Inline vs. Block"
        },
        {
            tipo: "multipla",
            enunciado: "Qual propriedade controla a ORDEM DE EMPILHAMENTO de elementos posicionados (quem fica na frente)?",
            opcoes: ["order", "z-index", "layer", "stack"],
            correta: 1,
            explicacao: "O z-index controla a ordem de empilhamento no eixo Z (profundidade). Só funciona em elementos com position diferente de static (relative, absolute, fixed ou sticky). Valores maiores ficam na frente. 'order' é usado em Flexbox/Grid para reordenar itens.",
            referencia: "Módulo 02 — Seção 3.6: Box Model em Elementos Inline vs. Block"
        },

        /* ============================================================
           TÓPICO 4 — BACKGROUND
           ============================================================ */

        {
            tipo: "multipla",
            enunciado: "Qual valor de background-attachment cria o efeito PARALLAX, deixando a imagem fixa em relação à viewport?",
            opcoes: ["scroll", "fixed", "local", "static"],
            correta: 1,
            explicacao: "O valor fixed faz a imagem de fundo ficar FIXA em relação à viewport, enquanto o conteúdo rola normalmente. Isso cria o efeito parallax. O valor padrão é scroll (a imagem rola junto). 'local' e 'static' não existem em background-attachment.",
            referencia: "Módulo 02 — Seção 4.5: background-attachment (Fixação da Imagem)"
        },
        {
            tipo: "multipla",
            enunciado: "Qual propriedade CSS permite usar um gradiente como plano de fundo?",
            opcoes: ["background-color", "background-image", "background-gradient", "gradient"],
            correta: 1,
            explicacao: "Gradientes são tratados como IMAGENS em CSS, então usam background-image (ou o atalho background). Ex: background: linear-gradient(to right, red, blue). Não existem as propriedades 'background-gradient' nem 'gradient'.",
            referencia: "Módulo 02 — Seção 7.8: Gradientes (Cores em Transição)"
        },
        {
            tipo: "multipla",
            enunciado: "Qual valor de background-repeat faz a imagem de fundo ser repetida APENAS na horizontal?",
            opcoes: ["repeat", "repeat-x", "repeat-y", "no-repeat"],
            correta: 1,
            explicacao: "repeat-x repete a imagem apenas no eixo X (horizontal). repeat-y repete só no vertical; repeat (padrão) repete nos dois eixos; no-repeat não repete. É muito usado com padrões de fundo que se estendem apenas no topo da página.",
            referencia: "Módulo 02 — Seção 4.3: background-repeat (Repetição da Imagem)"
        },
        {
            tipo: "multipla",
            enunciado: "Qual propriedade define a POSIÇÃO da imagem de fundo dentro do elemento?",
            opcoes: ["background-attachment", "background-position", "background-align", "background-coords"],
            correta: 1,
            explicacao: "background-position define ONDE a imagem de fundo é posicionada. Aceita palavras-chave (left top, center center, right bottom) ou valores em px/%. É comum combinar com no-repeat para criar fundos com imagens pontuais. 'background-align' e 'background-coords' não existem em CSS.",
            referencia: "Módulo 02 — Seção 4.4: background-position (Posição da Imagem)"
        },
        {
            tipo: "complete",
            enunciado: "Complete o código abaixo para aplicar uma imagem de fundo que NÃO se repete e fica no canto superior direito:",
            codigo: 'body {\n  background: url("ceu.jpg") {{GAP}} right top;\n}',
            opcoes: ["no-repeat", "repeat-none", "fixed", "single"],
            correta: 0,
            explicacao: "O valor no-repeat impede que a imagem se repita, e right top posiciona no canto superior direito. Tudo em uma única declaração usando o atalho background: imagem + repetição + posição. 'repeat-none' e 'single' não existem em CSS.",
            referencia: "Módulo 02 — Seção 4.6: Shorthand background"
        },

        /* ============================================================
           TÓPICO 5 — TIPOGRAFIA E TEXTO
           ============================================================ */

        {
            tipo: "vf",
            enunciado: "A unidade em é relativa ao font-size do elemento PAI, enquanto rem é relativa ao font-size do elemento raiz (html).",
            resposta: true,
            explicacao: "Correto! em é relativo ao PAI — se o pai tem font-size 20px, 1.5em = 30px. Isso pode causar efeitos cascata confusos. Já rem (root em) é SEMPRE relativo ao html (geralmente 16px padrão). Prefira rem para tamanhos consistentes.",
            referencia: "Módulo 02 — Seção 5.2: font-size (Tamanho da Fonte)"
        },
        {
            tipo: "multipla",
            enunciado: "Qual unidade de medida é relativa ao font-size do elemento RAIZ (html) do documento?",
            opcoes: ["px", "em", "rem", "%"],
            correta: 2,
            explicacao: "O rem (root em) é relativo ao font-size do elemento raiz (html), que por padrão é 16px. Então 1.5rem = 24px. Já o em é relativo ao font-size do PAI. O px é absoluto (não escala). O % é relativo ao pai (como o em).",
            referencia: "Módulo 02 — Seção 5.2: font-size (Tamanho da Fonte)"
        },
        {
            tipo: "complete",
            enunciado: "Complete o código abaixo para definir 3 níveis de espessura da fonte (normal, negrito e extra negrito):",
            codigo: '.texto-normal { font-weight: 400; }\n.texto-bold   { font-weight: {{GAP}}; }\n.texto-black  { font-weight: 900; }',
            opcoes: ["600", "700", "800", "bold"],
            correta: 1,
            explicacao: "O valor numérico 700 corresponde ao negrito tradicional (bold). A escala de font-weight vai de 100 (thin) a 900 (black), passando por 400 (regular/normal) e 700 (bold). Usar número é mais preciso que 'bold' quando a fonte tem vários pesos.",
            referencia: "Módulo 02 — Seção 5.4: font-weight (Peso da Fonte)"
        },
        {
            tipo: "complete",
            enunciado: "Complete o código abaixo para deixar TODO o texto do site em MAIÚSCULAS:",
            codigo: 'h1, h2, p {\n  text-transform: {{GAP}};\n}',
            opcoes: ["uppercase", "capitalize", "upper", "majuscule"],
            correta: 0,
            explicacao: "O valor uppercase transforma TODAS as letras em MAIÚSCULAS. Já capitalize coloca apenas a primeira letra de cada palavra em maiúscula; lowercase transforma tudo em minúsculas. 'upper' e 'majuscule' não existem em CSS.",
            referencia: "Módulo 02 — Seção 5.9: Propriedades Complementares de Tipografia"
        },
        {
            tipo: "multipla",
            enunciado: "O que a propriedade text-align: justify faz?",
            opcoes: [
                "Centraliza o texto no meio do container",
                "Alinha o texto à direita",
                "Justifica o texto, distribuindo-o uniformemente entre as margens",
                "Coloca cada palavra em uma linha separada"
            ],
            correta: 2,
            explicacao: "O valor justify faz o texto ocupar uniformemente toda a largura disponível, alinhando AMBOS os lados. É muito usado em jornais e artigos. Diferente de left (padrão) ou center.",
            referencia: "Módulo 02 — Seção 5.6: text-align (Alinhamento do Texto)"
        },
        {
            tipo: "multipla",
            enunciado: "Qual propriedade define um ESPAÇO entre as LETRAS de um texto?",
            opcoes: ["text-spacing", "letter-spacing", "word-spacing", "char-spacing"],
            correta: 1,
            explicacao: "O letter-spacing controla o espaço ENTRE LETRAS. Já o word-spacing controla o espaço ENTRE PALAVRAS. 'text-spacing' e 'char-spacing' não existem em CSS. É muito usado em títulos e logotipos para dar elegância.",
            referencia: "Módulo 02 — Seção 5.9: Propriedades Complementares de Tipografia"
        },
        {
            tipo: "complete",
            enunciado: "Complete o código abaixo para deixar o texto em ITÁLICO via CSS:",
            codigo: 'p {\n  font-style: {{GAP}};\n}',
            opcoes: ["italic", "bold", "oblique-alt", "slanted"],
            correta: 0,
            explicacao: "O valor correto é italic — aplica a versão itálica da fonte. Existe também oblique (inclinação artificial, quando a fonte não tem versão itálica verdadeira). 'bold' é de font-weight; 'slanted' e 'oblique-alt' não existem.",
            referencia: "Módulo 02 — Seção 5.3: font-style (Estilo da Fonte)"
        },
        {
            tipo: "erro",
            enunciado: "Há um erro de UNIDADE no código abaixo. Aponte qual é:",
            codigo: 'p {\n  font-size: 16;\n  line-height: 1.5;\n}',
            opcoes: [
                "line-height não aceita valores sem unidade",
                "font-size: 16 não tem unidade; o correto seria 16px, 1rem ou similar",
                "line-height: 1.5 deveria ser line-height: 1.5px",
                "O código está correto"
            ],
            correta: 1,
            explicacao: "font-size: 16 está SEM UNIDADE — o navegador ignora a declaração. O correto é 16px (absoluto) ou 1rem (relativo ao root). Já line-height: 1.5 é uma EXCEÇÃO válida: aceita número puro, que representa um múltiplo do font-size.",
            referencia: "Módulo 02 — Seção 5.2: font-size (Tamanho da Fonte)"
        },
        {
            tipo: "flashcard",
            enunciado: "O que a propriedade line-height controla e quais valores aceita?",
            resposta: "Controla a ALTURA DA LINHA (espaçamento vertical entre linhas de texto). Aceita: (1) número puro — 1.5 (o mais recomendado, representa múltiplo do font-size); (2) valor com unidade — 24px ou 1.5em; (3) porcentagem — 150%. O número puro é melhor porque se adapta ao font-size do elemento sem precisar de recálculo.",
            referencia: "Módulo 02 — Seção 5.9: Propriedades Complementares de Tipografia"
        },
        {
            tipo: "multipla",
            enunciado: "Qual valor de text-decoration deixa o texto RISCADO (linha atravessando o meio)?",
            opcoes: ["underline", "overline", "line-through", "strike"],
            correta: 2,
            explicacao: "line-through aplica uma linha HORIZONTAL ATRAVESSANDO o meio do texto — efeito de 'riscado'. underline é sublinhado; overline é uma linha ACIMA do texto. 'strike' era o valor antigo (obsoleto). É muito usado em preços antigos e itens concluídos.",
            referencia: "Módulo 02 — Seção 5.7: text-decoration (Decoração do Texto)"
        },

        /* ============================================================
           TÓPICO 6 — LINKS E PSEUDO-CLASSES
           ============================================================ */

        {
            tipo: "vf",
            enunciado: "A ordem correta das pseudo-classes de links é LVHA: :link, :visited, :hover, :active.",
            resposta: true,
            explicacao: "Correto! A ordem LVHA (Link, Visited, Hover, Active) é obrigatória para que as pseudo-classes funcionem corretamente. Se você inverter a ordem, o navegador aplica a regra errada em determinados estados — por exemplo, o :link sobrescreveria o :hover.",
            referencia: "Módulo 02 — Seção 6.3: A Ordem Correta: LVHA"
        },
        {
            tipo: "erro",
            enunciado: "Há um erro na ORDEM das pseudo-classes de links abaixo. Aponte qual é:",
            codigo: 'a:active { color: blue;  }\na:hover  { color: green; }\na:link   { color: red;   }\na:visited{ color: purple;}',
            opcoes: [
                "A ordem correta é LVHA: :link, :visited, :hover, :active",
                ":link deveria estar por último",
                ":active deveria vir antes de :hover",
                "O código está correto"
            ],
            correta: 0,
            explicacao: "A ordem correta é LVHA: :link, :visited, :hover, :active. Aqui está tudo INVERTIDO — o :active está primeiro, o :link quase no fim. Resultado: :link e :visited vão sobrescrever :hover e :active, e os efeitos visuais não funcionarão como esperado.",
            referencia: "Módulo 02 — Seção 6.3: A Ordem Correta: LVHA"
        },
        {
            tipo: "vf",
            enunciado: "A pseudo-classe :hover estiliza o elemento quando o mouse está sobre ele.",
            resposta: true,
            explicacao: "Correto! :hover é uma pseudo-classe de ESTADO — ela se aplica quando o cursor do mouse está sobre o elemento. É muito usada em links, botões e cards. Cuidado: em dispositivos touch, :hover nem sempre se comporta como esperado.",
            referencia: "Módulo 02 — Seção 6.2: As Quatro Pseudo-classes de Links"
        },
        {
            tipo: "vf",
            enunciado: "A pseudo-classe :nth-child(n) conta os filhos a partir do início (1º, 2º, 3º...).",
            resposta: true,
            explicacao: "Correto! :nth-child(n) seleciona o enésimo filho contando do INÍCIO. Já :nth-last-child(n) conta a partir do FIM. A fórmula aceita padrões como odd (ímpares), even (pares) e an+b (ex: 3n+1 seleciona 1º, 4º, 7º...).",
            referencia: "Módulo 02 — Seção 6.6: Pseudo-classes Estruturais"
        },
        {
            tipo: "multipla",
            enunciado: "Qual pseudo-classe seleciona o PRIMEIRO filho de um elemento pai?",
            opcoes: [":first", ":first-child", ":first-of-type", ":start"],
            correta: 1,
            explicacao: "O :first-child seleciona o elemento que é o PRIMEIRO filho do seu pai. Diferença importante: :first-of-type seleciona o primeiro de um TIPO específico (ex: primeiro p entre vários elementos). ':first' e ':start' não existem.",
            referencia: "Módulo 02 — Seção 6.6: Pseudo-classes Estruturais"
        },
        {
            tipo: "flashcard",
            enunciado: "Por que a ordem LVHA (:link, :visited, :hover, :active) é obrigatória ao estilizar links?",
            resposta: "Porque os 4 estados podem se SOBREPOR (um link visitado também pode estar em hover). O CSS resolve conflitos pela CASCATA — a ÚLTIMA regra vence quando há empate. Se :visited vier depois de :hover, o :visited vai sobrescrever o efeito de hover (porque ambos se aplicam ao mesmo link). Por isso a ordem deve ser LVHA (LoVe HAte): os estados 'mais específicos' (hover, active) ficam por último para vencerem.",
            referencia: "Módulo 02 — Seção 6.3: A Ordem Correta: LVHA"
        },
        {
            tipo: "predicao",
            enunciado: "Considerando o código abaixo, que cor o link terá enquanto o mouse estiver sobre ele?",
            codigo: 'a:visited { color: purple; }\na:hover   { color: green;  }\na:link    { color: red;    }',
            opcoes: [
                "Vermelho, porque :link vem depois",
                "Verde, porque :hover é uma pseudo-classe de estado",
                "Roxo, porque :visited foi declarado primeiro",
                "Nenhuma — o link ficaria com a cor padrão do navegador"
            ],
            correta: 0,
            explicacao: "Aqui a ordem está ERRADA (:visited, :hover, :link). Como :link vem por ÚLTIMO, ele sobrescreve o :hover. Resultado: o link fica VERMELHO (não visitado) mesmo com o mouse em cima. Isso demonstra na prática por que a ordem LVHA é obrigatória. A resposta CORRETA segundo o comportamento real do navegador é vermelho — mas o DESEJADO era verde, o que só aconteceria com a ordem correta (LVHA).",
            referencia: "Módulo 02 — Seção 6.3: A Ordem Correta: LVHA"
        },

        /* ============================================================
           TÓPICO 7 — CORES
           ============================================================ */

        {
            tipo: "vf",
            enunciado: "A forma RGBA permite definir transparência em uma cor, enquanto RGB não permite.",
            resposta: true,
            explicacao: "Correto! O 'A' em RGBA significa Alpha (canal de opacidade). Vai de 0.0 (totalmente transparente) a 1.0 (totalmente opaco). O RGB puro não tem esse canal. Use RGBA/HSLA para sombras, overlays e bordas com transparência.",
            referencia: "Módulo 02 — Seção 7.5: RGBA — RGB com Transparência"
        },
        {
            tipo: "multipla",
            enunciado: "O que a sigla HSL representa no sistema de cores CSS?",
            opcoes: [
                "High, Standard, Low",
                "Hue, Saturation, Lightness",
                "Hex, Source, Layer",
                "Horizontal, Spread, Lightness"
            ],
            correta: 1,
            explicacao: "HSL = Hue (matiz, 0-360°), Saturation (saturação, 0-100%) e Lightness (luminosidade, 0-100%). Ex: hsl(0, 100%, 50%) = vermelho puro. É mais intuitivo que RGB para designers ajustarem cores. A variação com transparência é hsla().",
            referencia: "Módulo 02 — Seção 7.6: HSL (Matiz, Saturação e Luminosidade)"
        },
        {
            tipo: "complete",
            enunciado: "Complete o código abaixo para criar um vermelho com 50% de transparência usando HSL:",
            codigo: '.aviso {\n  background: {{GAP}}(0, 100%, 50%, 0.5);\n}',
            opcoes: ["hsl", "hsla", "rgba", "rgb"],
            correta: 1,
            explicacao: "hsla() estende o hsl() com um quarto valor: o canal alpha (0.0 a 1.0). Aqui, hsla(0, 100%, 50%, 0.5) cria um vermelho com 50% de opacidade. rgb() e rgba() também funcionam, mas o enunciado pede HSL.",
            referencia: "Módulo 02 — Seção 7.7: HSLA — HSL com Transparência"
        },
        {
            tipo: "multipla",
            enunciado: "Qual das formas hexadecimais abaixo é uma abreviação VÁLIDA para #FF0000?",
            opcoes: ["#F00", "#FF000", "#F0F0F0", "#FR0"],
            correta: 0,
            explicacao: "A forma curta #RGB é válida quando cada par de dígitos tem caracteres IDÊNTICOS. #FF0000 → #F00 (R=FF→F, G=00→0, B=00→0). Outros exemplos: #FFFFFF → #FFF, #0000FF → #00F. '#FF000' tem 5 dígitos (inválido); '#F0F0F0' é outra cor; '#FR0' tem R inválido.",
            referencia: "Módulo 02 — Seção 7.3.1: Forma Curta (#RGB)"
        },
        {
            tipo: "vf-justificativa",
            enunciado: "As propriedades `opacity: 0.5` e `background: rgba(0,0,0,0.5)` produzem exatamente o mesmo efeito visual em um card.",
            resposta: false,
            justificativas: [
                "Porque o opacity também afeta o texto e os filhos, enquanto o rgba só afeta a cor de fundo.",
                "Porque rgba() não é compatível com todos os navegadores modernos.",
                "Porque opacity não aceita valores entre 0 e 1."
            ],
            justificativaCorreta: 0,
            explicacao: "A propriedade `opacity` aplica transparência ao ELEMENTO INTEIRO — fundo, texto, imagens filhas, bordas. Já o `rgba()` aplica transparência APENAS ao canal de cor especificado (no caso, o fundo). Se você quer um fundo semitransparente MAS com texto 100% opaco, use rgba. Se quer que o elemento inteiro fique translúcido, use opacity.",
            referencia: "Módulo 02 — Seção 7.9: Opacidade (opacity)"
        },
        {
            tipo: "vf",
            enunciado: "Segundo as diretrizes WCAG, uma boa prática de acessibilidade é garantir contraste mínimo de 4.5:1 entre texto e fundo.",
            resposta: true,
            explicacao: "Correto! A WCAG (Web Content Accessibility Guidelines) exige contraste mínimo de 4.5:1 para texto normal e 3:1 para texto grande (nível AA). O nível AAA exige 7:1. Contraste insuficiente prejudica pessoas com baixa visão, daltonismo ou que usam telas em ambientes claros.",
            referencia: "Módulo 02 — Seção 7.10: Acessibilidade e Contraste de Cores"
        },
        {
            tipo: "erro",
            enunciado: "Há um erro no nome de uma PROPRIEDADE CSS abaixo. Aponte qual é:",
            codigo: 'h1 {\n  text-color: #333;\n  font-size: 2em;\n}',
            opcoes: [
                "text-color não existe; o correto é color",
                "font-size não existe; o correto é text-size",
                "O valor #333 é inválido",
                "O código está correto"
            ],
            correta: 0,
            explicacao: "A propriedade text-color NÃO existe em CSS. Para cor de TEXTO, use color. Já existem text-align, text-decoration, text-indent, text-transform — mas não text-color. Para cor de FUNDO, use background-color.",
            referencia: "Módulo 02 — Seção 5.5: color (Cor do Texto)"
        },

        /* ============================================================
           TÓPICO 8 — ORGANIZAÇÃO E BOAS PRÁTICAS
           ============================================================ */

        {
            tipo: "multipla",
            enunciado: "O que a metodologia BEM (Block, Element, Modifier) propõe para nomear classes CSS?",
            opcoes: [
                "Usar apenas IDs para maior especificidade",
                "Nomear com padrão block__element--modifier (ex: card__titulo--grande)",
                "Usar camelCase em todas as classes",
                "Evitar nomes compostos e usar apenas siglas curtas"
            ],
            correta: 1,
            explicacao: "BEM = Block (componente autônomo), Element (parte do bloco), Modifier (variação). A nomenclatura usa block__element--modifier (com underscores e hífens duplos). Ex: .card__titulo--destaque. Isso evita colisões de nomes e deixa a estrutura do CSS mais clara em projetos grandes.",
            referencia: "Módulo 02 — Seção 8.2.1: BEM (Block, Element, Modifier)"
        },
        {
            tipo: "multipla",
            enunciado: "Como declarar uma VARIÁVEL CSS (custom property) global que pode ser reutilizada em todo o documento?",
            opcoes: [
                "var--cor: #3498db;",
                "--cor: #3498db; dentro de :root",
                "variable cor = #3498db;",
                "$cor: #3498db;"
            ],
            correta: 1,
            explicacao: "As variáveis CSS (custom properties) são declaradas com -- (dois hífens) e costumam ficar dentro de :root para terem escopo GLOBAL. Ex: :root { --cor-primaria: #3498db; }. Para usar: color: var(--cor-primaria). A forma com $ é de pré-processadores como Sass, não de CSS puro.",
            referencia: "Módulo 02 — Seção 7.11: Variáveis CSS (Custom Properties)"
        },
        {
            tipo: "vf",
            enunciado: "A propriedade box-shadow aceita múltiplas sombras separadas por vírgula.",
            resposta: true,
            explicacao: "Correto! Você pode aplicar várias sombras ao mesmo elemento separando cada conjunto por vírgula. Ex: box-shadow: 0 2px 4px rgba(0,0,0,0.1), 0 8px 16px rgba(0,0,0,0.05). Cada sombra aceita offset-x, offset-y, blur, spread e cor. Isso cria efeitos realistas e em camadas.",
            referencia: "Módulo 02 — Seção 8.3.2: Variáveis CSS"
        },
        {
            tipo: "flashcard",
            enunciado: "Quais são as principais boas práticas ao escrever CSS em projetos grandes?",
            resposta: "1) Usar um RESET/NORMALIZE para consistência entre navegadores. 2) Centralizar cores, fontes e espaçamentos em VARIÁVEIS CSS (:root). 3) Aplicar uma METODOLOGIA (BEM, OOCSS, SMACSS). 4) MANTER ESPECIFICIDADE BAIXA — evitar !important e seletores muito profundos. 5) MOBILE FIRST + media queries para cima. 6) MINIFICAR o CSS em produção. 7) Comentar seções com cabeçalhos claros. 8) Garantir contraste de cores acessível (mínimo 4.5:1).",
            referencia: "Módulo 02 — Seção 8.3: Boas Práticas e Convenções"
        }
    ]
};