/* ============================================================
   BANCO DE QUESTÕES — MÓDULO 02 (CSS)
   Total: 50 questões
     • 14 Verdadeiro ou Falso
     • 16 Múltipla Escolha
     • 10 Complete o Código
     • 10 Aponte o Erro
   ⚠️ Use \x3C no lugar de < dentro das strings.
   ============================================================ */
window.QUIZ_DATA = {
    questoes: [

        /* ============================================================
           BLOCO 1 — VERDADEIRO OU FALSO (original)
           ============================================================ */
        {
            tipo: "vf",
            enunciado: "CSS é a sigla para Cascading Style Sheets (Folha de Estilo em Cascata).",
            resposta: true,
            explicacao: "Correto! CSS = Cascading Style Sheets. 'Folha de Estilo' é o documento com regras de formatação; 'em Cascata' refere-se à forma como múltiplas regras são aplicadas e como o navegador resolve conflitos seguindo uma ordem de prioridade.",
            referencia: "Módulo 02 — Seção 1.1: O que é CSS? Definição e Propósito"
        },
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
            explicacao: "Falso! Apenas a margin aceita valores negativos (ex: margin-top: -20px;). O padding NÃO aceita valores negativos — ele é sempre positivo ou zero.",
            referencia: "Módulo 02 — Seção 3.3.1: Diferença Crucial entre Margin e Padding"
        },
        {
            tipo: "vf",
            enunciado: "A regra box-sizing: border-box faz com que width e height incluam o padding e a borda.",
            resposta: true,
            explicacao: "Correto! Com border-box, uma div com width:100px, padding:10px e border:5px ocupa EXATAMENTE 100px. Sem border-box (padrão content-box), ela ocuparia 130px.",
            referencia: "Módulo 02 — Seção 3.7: Reset de Box Model e Boas Práticas"
        },
        {
            tipo: "vf",
            enunciado: "A ordem correta das pseudo-classes de links é LVHA: :link, :visited, :hover, :active.",
            resposta: true,
            explicacao: "Correto! A ordem LVHA (Link, Visited, Hover, Active) é obrigatória para que as pseudo-classes funcionem corretamente. Se você inverter, o navegador aplica a regra errada em determinados estados.",
            referencia: "Módulo 02 — Seção 6.3: A Ordem Correta: LVHA"
        },
        {
            tipo: "vf",
            enunciado: "A forma RGBA permite definir transparência em uma cor, enquanto RGB não permite.",
            resposta: true,
            explicacao: "Correto! O 'A' em RGBA significa Alpha (canal de opacidade). Vai de 0.0 (totalmente transparente) a 1.0 (totalmente opaco). O RGB puro não tem esse canal.",
            referencia: "Módulo 02 — Seção 7.5: RGBA (rgb()) — RGB com Transparência"
        },
        {
            tipo: "vf",
            enunciado: "O CSS Inline (atributo style na tag) é a forma MAIS recomendada para projetos grandes, pois tem maior prioridade.",
            resposta: false,
            explicacao: "Falso! O CSS Inline, apesar de ter alta prioridade, é a PIOR forma de inserir estilos em projetos grandes: mistura estrutura com apresentação, não é reutilizável, não suporta pseudo-classes e torna a manutenção impossível. A forma RECOMENDADA é o CSS EXTERNO.",
            referencia: "Módulo 02 — Seção 2.1: Formas de Inserção do CSS"
        },

        /* ============================================================
           BLOCO 1 — VERDADEIRO OU FALSO (expansão)
           ============================================================ */
        {
            tipo: "vf",
            enunciado: "A pseudo-classe :nth-child(n) conta os filhos a partir do início (1º, 2º, 3º...).",
            resposta: true,
            explicacao: "Correto! :nth-child(n) seleciona o enésimo filho contando do INÍCIO. Já :nth-last-child(n) conta a partir do FIM. A fórmula aceita padrões como odd (ímpares), even (pares) e an+b.",
            referencia: "Módulo 02 — Seção 6.6: Pseudo-classes Estruturais"
        },
        {
            tipo: "vf",
            enunciado: "A propriedade position: absolute posiciona o elemento em relação ao seu ancestral mais próximo que tenha position diferente de static.",
            resposta: true,
            explicacao: "Correto! O position absolute sai do fluxo normal e se posiciona em relação ao seu container de referência — que é o ancestral mais próximo com position diferente de static.",
            referencia: "Módulo 02 — Seção 3.6: Box Model em Elementos Inline vs. Block"
        },
        {
            tipo: "vf",
            enunciado: "A unidade em é relativa ao font-size do elemento PAI, enquanto rem é relativa ao font-size do elemento raiz (html).",
            resposta: true,
            explicacao: "Correto! em é relativo ao PAI — se o pai tem font-size 20px, 1.5em = 30px. Já rem (root em) é SEMPRE relativo ao html (geralmente 16px padrão). Prefira rem para tamanhos consistentes.",
            referencia: "Módulo 02 — Seção 5.2: font-size (Tamanho da Fonte)"
        },
        {
            tipo: "vf",
            enunciado: "A propriedade box-shadow aceita múltiplas sombras separadas por vírgula.",
            resposta: true,
            explicacao: "Correto! Você pode aplicar várias sombras ao mesmo elemento separando cada conjunto por vírgula. Cada sombra aceita offset-x, offset-y, blur, spread e cor.",
            referencia: "Módulo 02 — Seção 8.3.2: Variáveis CSS"
        },
        {
            tipo: "vf",
            enunciado: "A propriedade border-radius: 50% em um elemento QUADRADO cria um círculo.",
            resposta: true,
            explicacao: "Correto! Se o elemento for quadrado (width igual a height), border-radius: 50% cria um círculo perfeito. Se for retangular, cria uma elipse.",
            referencia: "Módulo 02 — Seção 3.4.3: Shorthand border"
        },
        {
            tipo: "vf",
            enunciado: "A propriedade display: none remove o elemento do fluxo do layout, como se ele não existisse.",
            resposta: true,
            explicacao: "Correto! display: none remove COMPLETAMENTE o elemento do fluxo — ele não ocupa espaço e não é lido por leitores de tela. É diferente de visibility: hidden, que esconde mas mantém o espaço reservado.",
            referencia: "Módulo 02 — Seção 3.6: Box Model em Elementos Inline vs. Block"
        },
        {
            tipo: "vf",
            enunciado: "A pseudo-classe :hover estiliza o elemento quando o mouse está sobre ele.",
            resposta: true,
            explicacao: "Correto! :hover é uma pseudo-classe de ESTADO — ela se aplica quando o cursor do mouse está sobre o elemento. É muito usada em links, botões e cards.",
            referencia: "Módulo 02 — Seção 6.2: As Quatro Pseudo-classes de Links"
        },

        /* ============================================================
           BLOCO 2 — MÚLTIPLA ESCOLHA (original)
           ============================================================ */
        {
            tipo: "multipla",
            enunciado: "Qual é a sintaxe correta de uma regra CSS?",
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
            tipo: "multipla",
            enunciado: "Qual unidade de medida é relativa ao font-size do elemento RAIZ (html) do documento?",
            opcoes: ["px", "em", "rem", "%"],
            correta: 2,
            explicacao: "O rem (root em) é relativo ao font-size do elemento raiz (html), que por padrão é 16px. Então 1.5rem = 24px. Já o em é relativo ao font-size do PAI. O px é absoluto.",
            referencia: "Módulo 02 — Seção 5.2: font-size (Tamanho da Fonte)"
        },
        {
            tipo: "multipla",
            enunciado: "Qual valor de background-attachment cria o efeito PARALLAX, deixando a imagem fixa em relação à viewport?",
            opcoes: ["scroll", "fixed", "local", "static"],
            correta: 1,
            explicacao: "O valor fixed faz a imagem de fundo ficar FIXA em relação à viewport, enquanto o conteúdo rola normalmente. Isso cria o efeito parallax.",
            referencia: "Módulo 02 — Seção 4.5: background-attachment (Fixação da Imagem)"
        },
        {
            tipo: "multipla",
            enunciado: "Qual propriedade CSS define a COR DO TEXTO de um elemento?",
            opcoes: ["text-color", "font-color", "color", "foreground"],
            correta: 2,
            explicacao: "A propriedade correta é color. Apesar do nome parecer 'genérico', no CSS ela se aplica especificamente à COR DO TEXTO. 'text-color', 'font-color' e 'foreground' NÃO existem em CSS.",
            referencia: "Módulo 02 — Seção 5.5: color (Cor do Texto)"
        },
        {
            tipo: "multipla",
            enunciado: "Qual é a ordem correta das pseudo-classes de links (LVHA)?",
            opcoes: [
                ":link, :active, :hover, :visited",
                ":link, :visited, :hover, :active",
                ":visited, :link, :active, :hover",
                ":hover, :link, :visited, :active"
            ],
            correta: 1,
            explicacao: "A ordem correta é LVHA: :link (não visitado) → :visited (visitado) → :hover (mouse sobre) → :active (no clique). Decore como 'LoVe HAte'.",
            referencia: "Módulo 02 — Seção 6.3: A Ordem Correta: LVHA"
        },
        {
            tipo: "multipla",
            enunciado: "Qual formato de cor permite especificar um canal ALFA (transparência) além dos canais de cor?",
            opcoes: ["rgb()", "hexadecimal", "rgba()", "color-name"],
            correta: 2,
            explicacao: "O rgba() estende o rgb() com um quarto valor: o canal alpha (0.0 a 1.0). Ex: rgba(255, 0, 0, 0.5) = vermelho com 50% de opacidade.",
            referencia: "Módulo 02 — Seção 7.5: RGBA (rgb()) — RGB com Transparência"
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
            explicacao: "O valor justify faz o texto ocupar uniformemente toda a largura disponível, alinhando AMBOS os lados. É muito usado em jornais e artigos.",
            referencia: "Módulo 02 — Seção 5.6: text-align (Alinhamento do Texto)"
        },

        /* ============================================================
           BLOCO 2 — MÚLTIPLA ESCOLHA (expansão)
           ============================================================ */
        {
            tipo: "multipla",
            enunciado: "Qual pseudo-classe seleciona o PRIMEIRO filho de um elemento pai?",
            opcoes: [":first", ":first-child", ":first-of-type", ":start"],
            correta: 1,
            explicacao: "O :first-child seleciona o elemento que é o PRIMEIRO filho do seu pai. Diferença: :first-of-type seleciona o primeiro de um TIPO específico.",
            referencia: "Módulo 02 — Seção 6.6: Pseudo-classes Estruturais"
        },
        {
            tipo: "multipla",
            enunciado: "Qual propriedade controla a ORDEM DE EMPILHAMENTO de elementos posicionados (quem fica na frente)?",
            opcoes: ["order", "z-index", "layer", "stack"],
            correta: 1,
            explicacao: "O z-index controla a ordem de empilhamento no eixo Z (profundidade). Só funciona em elementos com position diferente de static.",
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
            enunciado: "Qual pseudo-elemento insere conteúdo ANTES do elemento selecionado?",
            opcoes: [":before", "::before", "::prepend", "::start"],
            correta: 1,
            explicacao: "O ::before (com dois-pontos duplos) insere conteúdo antes do elemento. É obrigatório usar a propriedade content junto. A forma :before (um só dois-pontos) é a sintaxe antiga.",
            referencia: "Módulo 02 — Seção 6.8: Pseudo-elementos (Complemento)"
        },
        {
            tipo: "multipla",
            enunciado: "Qual propriedade CSS permite usar um gradiente como plano de fundo?",
            opcoes: ["background-color", "background-image", "background-gradient", "gradient"],
            correta: 1,
            explicacao: "Gradientes são tratados como IMAGENS em CSS, então usam background-image. Ex: background: linear-gradient(to right, red, blue).",
            referencia: "Módulo 02 — Seção 7.8: Gradientes (Cores em Transição)"
        },
        {
            tipo: "multipla",
            enunciado: "Qual propriedade define um ESPAÇO entre as letras de um texto?",
            opcoes: ["text-spacing", "letter-spacing", "word-spacing", "char-spacing"],
            correta: 1,
            explicacao: "O letter-spacing controla o espaço ENTRE LETRAS. Já o word-spacing controla o espaço ENTRE PALAVRAS. 'text-spacing' e 'char-spacing' não existem em CSS.",
            referencia: "Módulo 02 — Seção 5.9: Propriedades Complementares de Tipografia"
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
            explicacao: "As variáveis CSS (custom properties) são declaradas com -- (dois hífens) e costumam ficar dentro de :root para terem escopo GLOBAL. Para usar: color: var(--cor-primaria).",
            referencia: "Módulo 02 — Seção 7.11: Variáveis CSS (Custom Properties) para Cores"
        },

        /* ============================================================
           BLOCO 3 — COMPLETE O CÓDIGO
           ============================================================ */
        {
            tipo: "complete",
            enunciado: "Complete o código abaixo para deixar o texto de todos os parágrafos em vermelho:",
            codigo: 'p {\n  {{GAP}}: #FF0000;\n}',
            opcoes: ["text-color", "font-color", "color", "foreground"],
            correta: 2,
            explicacao: "A propriedade correta é color. Ela define a cor do TEXTO. 'text-color', 'font-color' e 'foreground' não existem em CSS.",
            referencia: "Módulo 02 — Seção 5.5: color (Cor do Texto)"
        },
        {
            tipo: "complete",
            enunciado: "Complete o código abaixo para centralizar horizontalmente uma div de largura fixa:",
            codigo: '.container {\n  width: 960px;\n  margin: 0 {{GAP}};\n}',
            opcoes: ["center", "middle", "auto", "central"],
            correta: 2,
            explicacao: "O valor auto nas margens laterais faz o navegador calcular automaticamente um valor igual para os dois lados, centralizando o elemento.",
            referencia: "Módulo 02 — Seção 3.2: Margin (Margem)"
        },
        {
            tipo: "complete",
            enunciado: "Complete o código abaixo para criar uma borda de 2px, sólida e preta:",
            codigo: '.caixa {\n  border: 2px {{GAP}} #000000;\n}',
            opcoes: ["line", "solid", "full", "straight"],
            correta: 1,
            explicacao: "O valor solid cria uma linha contínua e sólida. Outros valores: dotted, dashed, double, groove, ridge, inset, outset.",
            referencia: "Módulo 02 — Seção 3.4.2: border-style (Estilo da Borda)"
        },
        {
            tipo: "complete",
            enunciado: "Complete o código abaixo para deixar TODO o texto do site em maiúsculas:",
            codigo: 'h1, h2, p {\n  text-transform: {{GAP}};\n}',
            opcoes: ["uppercase", "capitalize", "upper", "majuscule"],
            correta: 0,
            explicacao: "O valor uppercase transforma TODAS as letras em MAIÚSCULAS. Já capitalize coloca apenas a primeira letra de cada palavra em maiúscula.",
            referencia: "Módulo 02 — Seção 5.9: Propriedades Complementares de Tipografia"
        },
        {
            tipo: "complete",
            enunciado: "Complete o código abaixo para definir 3 níveis de espessura da fonte (normal, negrito e extra negrito):",
            codigo: '.texto-normal { font-weight: 400; }\n.texto-bold   { font-weight: {{GAP}}; }\n.texto-black  { font-weight: 900; }',
            opcoes: ["600", "700", "800", "bold"],
            correta: 1,
            explicacao: "O valor numérico 700 corresponde ao negrito tradicional (bold). A escala vai de 100 (thin) a 900 (black).",
            referencia: "Módulo 02 — Seção 5.4: font-weight (Peso da Fonte)"
        },
        {
            tipo: "complete",
            enunciado: "Complete o código abaixo para centralizar o texto de um título:",
            codigo: 'h1 {\n  {{GAP}}: center;\n}',
            opcoes: ["text-align", "align", "text-center", "horizontal-align"],
            correta: 0,
            explicacao: "A propriedade correta é text-align. Ela aceita: left, right, center e justify. Aplica-se ao TEXTO dentro de um bloco.",
            referencia: "Módulo 02 — Seção 5.6: text-align (Alinhamento do Texto)"
        },
        {
            tipo: "complete",
            enunciado: "Complete o código abaixo para arredondar os cantos de um botão:",
            codigo: '.botao {\n  {{GAP}}: 8px;\n}',
            opcoes: ["border-corner", "border-radius", "round", "corner-radius"],
            correta: 1,
            explicacao: "A propriedade é border-radius. Ela arredonda os cantos com um valor único (todos iguais) ou quatro valores (um por canto).",
            referencia: "Módulo 02 — Seção 3.4.3: Shorthand border"
        },
        {
            tipo: "complete",
            enunciado: "Complete o código abaixo para deixar o texto em ITÁLICO via CSS:",
            codigo: 'p {\n  font-style: {{GAP}};\n}',
            opcoes: ["italic", "bold", "oblique-alt", "slanted"],
            correta: 0,
            explicacao: "O valor correto é italic — aplica a versão itálica da fonte. Existe também oblique (inclinação artificial).",
            referencia: "Módulo 02 — Seção 5.3: font-style (Estilo da Fonte)"
        },
        {
            tipo: "complete",
            enunciado: "Complete o código abaixo para deixar a PRIMEIRA LETRA de cada palavra em maiúscula:",
            codigo: 'h2 {\n  text-transform: {{GAP}};\n}',
            opcoes: ["uppercase", "capitalize", "lowercase", "first-upper"],
            correta: 1,
            explicacao: "O valor capitalize coloca a primeira letra de CADA PALAVRA em maiúscula. 'first-upper' não existe.",
            referencia: "Módulo 02 — Seção 5.9: Propriedades Complementares de Tipografia"
        },
        {
            tipo: "complete",
            enunciado: "Complete o código abaixo para adicionar uma sombra suave a um card:",
            codigo: '.card {\n  {{GAP}}: 0 4px 12px rgba(0, 0, 0, 0.15);\n}',
            opcoes: ["shadow", "box-shadow", "drop-shadow", "element-shadow"],
            correta: 1,
            explicacao: "A propriedade correta é box-shadow. Ela recebe: offset-x, offset-y, blur-radius, spread-radius e cor.",
            referencia: "Módulo 02 — Seção 8.3.2: Variáveis CSS"
        },

        /* ============================================================
           BLOCO 4 — APONTE O ERRO
           ============================================================ */
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
            explicacao: "Falta o ponto e vírgula após 'red'. Em CSS, cada declaração termina com ;. Sem ele, o navegador junta a próxima linha e tenta interpretar 'red font-size: 16px' como uma única declaração inválida.",
            referencia: "Módulo 02 — Seção 1.2: A Sintaxe do CSS: A Anatomia de uma Regra"
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
            explicacao: "A propriedade text-color NÃO existe em CSS. Para cor de TEXTO, use color. Para cor de FUNDO, use background-color.",
            referencia: "Módulo 02 — Seção 5.5: color (Cor do Texto)"
        },
        {
            tipo: "erro",
            enunciado: "Há um erro na ORDEM das pseudo-classes de links abaixo. Aponte qual é:",
            codigo: 'a:hover  { color: green; }\na:link   { color: red;   }\na:visited{ color: purple;}\na:active { color: blue;  }',
            opcoes: [
                ":hover deveria estar em primeiro",
                "A ordem correta é LVHA: :link, :visited, :hover, :active",
                ":active não pode vir depois de :visited",
                "O código está correto"
            ],
            correta: 1,
            explicacao: "A ordem correta é LVHA (:link, :visited, :hover, :active). Aqui o :hover está em PRIMEIRO, o que faz com que :link e :visited SOBRESCREVAM o efeito de hover.",
            referencia: "Módulo 02 — Seção 6.3: A Ordem Correta: LVHA"
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
            explicacao: "font-size: 16 está SEM UNIDADE — o navegador ignora a declaração. O correto é 16px (absoluto) ou 1rem (relativo ao root). Já line-height: 1.5 é uma EXCEÇÃO válida: aceita número puro.",
            referencia: "Módulo 02 — Seção 5.2: font-size (Tamanho da Fonte)"
        },
        {
            tipo: "erro",
            enunciado: "Há um erro de SINTAXE no CSS abaixo. Aponte qual é:",
            codigo: 'p {\n  font-size: 16\n  color: blue;\n}',
            opcoes: [
                "font-size não existe em CSS",
                "Falta o ponto e vírgula (;) após '16'",
                "color deveria ser font-color",
                "O código está correto"
            ],
            correta: 1,
            explicacao: "Falta o ponto e vírgula após '16'. Sem ele, o navegador junta a próxima linha e tenta interpretar como uma única declaração inválida.",
            referencia: "Módulo 02 — Seção 1.2: A Sintaxe do CSS: A Anatomia de uma Regra"
        },
        {
            tipo: "erro",
            enunciado: "Há um erro semântico no CSS abaixo. Aponte qual é:",
            codigo: 'body {\n  color: #f0f0f0;\n  color: #333333;\n}',
            opcoes: [
                "A segunda declaração sobrescreve a primeira — o texto ficaria #333",
                "color não pode ser usado em body",
                "Falta ponto e vírgula na primeira linha",
                "O código está correto"
            ],
            correta: 0,
            explicacao: "Quando a mesma propriedade é declarada DUAS vezes no mesmo bloco, a última vence (devido à cascata). Aqui, o texto do body ficaria #333, não #f0f0f0.",
            referencia: "Módulo 02 — Seção 1.4: A Natureza 'Cascata' do CSS"
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
            explicacao: "A ordem correta é LVHA: :link, :visited, :hover, :active. Aqui está tudo INVERTIDO — os efeitos visuais não funcionarão como esperado.",
            referencia: "Módulo 02 — Seção 6.3: A Ordem Correta: LVHA"
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
            explicacao: "width: 300 está SEM UNIDADE. Para valores diferentes de zero, é OBRIGATÓRIO especificar a unidade (px, em, rem, %, vw, etc.).",
            referencia: "Módulo 02 — Seção 3.7: Reset de Box Model e Boas Práticas"
        },
        {
            tipo: "erro",
            enunciado: "Há um erro de SELETOR no CSS abaixo. Aponte qual é:",
            codigo: '.titulo {\n  color: red;\n}\n\n\x3Ch1 class="titulo">Olá\x3C/h1>',
            opcoes: [
                "A sintaxe está correta, mas o exemplo mistura CSS com HTML indevidamente",
                "O .titulo deveria ser #titulo",
                "class não existe em HTML",
                "O código está correto"
            ],
            correta: 0,
            explicacao: "O seletor .titulo (classe) está correto e o HTML também. O problema é CONCEITUAL: você não deve misturar declarações CSS e elementos HTML dentro do mesmo arquivo CSS.",
            referencia: "Módulo 02 — Seção 2.1: Formas de Inserção do CSS"
        }
    ]
};