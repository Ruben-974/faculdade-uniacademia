/* ============================================================
   BANCO DE QUESTÕES — MÓDULO 03 (BOOTSTRAP 3)
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
            enunciado: "O sistema de grid do Bootstrap 3 é baseado em 12 colunas.",
            resposta: true,
            explicacao: "Correto! O grid do Bootstrap 3 usa um sistema de 12 colunas. Você combina a classe de breakpoint (col-xs, col-sm, col-md, col-lg) com o número de colunas que o elemento deve ocupar (de 1 a 12).",
            referencia: "Módulo 03 — Seção 1.3.3: .col-* (Colunas)"
        },
        {
            tipo: "vf",
            enunciado: "O Bootstrap 3 aplica globalmente box-sizing: border-box a todos os elementos.",
            resposta: true,
            explicacao: "Correto! O Bootstrap 3 aplica box-sizing: border-box a todos os elementos. Uma div com width:100px, padding:10px e border:5px ocupa EXATAMENTE 100px.",
            referencia: "Módulo 03 — Seção 1.1: Box Model: A Base de Tudo"
        },
        {
            tipo: "vf",
            enunciado: "A classe .container-fluid cria um contêiner com largura máxima fixa, centralizado na página.",
            resposta: false,
            explicacao: "Falso! A .container cria um contêiner CENTRALIZADO com largura MÁXIMA predefinida. Já a .container-fluid ocupa 100% da largura da viewport, SEM limites laterais.",
            referencia: "Módulo 03 — Seção 1.3.1: .container (ou .container-fluid)"
        },
        {
            tipo: "vf",
            enunciado: "A classe .form-group aplica uma margem inferior para separar verticalmente os campos de um formulário.",
            resposta: true,
            explicacao: "Correto! A .form-group envolve cada par label + input e aplica uma margem inferior (geralmente 15px), garantindo espaçamento vertical consistente.",
            referencia: "Módulo 03 — Seção 2.1: A Estrutura Básica de um Formulário"
        },
        {
            tipo: "vf",
            enunciado: "O Bootstrap 3 pode ser usado SEM a biblioteca jQuery.",
            resposta: false,
            explicacao: "Falso! O Bootstrap 3 DEPENDE do jQuery para todos os seus plugins JavaScript. Sem o jQuery, dropdowns, modais, tooltips, abas e carrosséis NÃO funcionam.",
            referencia: "Módulo 03 — Seção 4.6: jQuery: A Dependência dos Plugins"
        },
        {
            tipo: "vf",
            enunciado: "Aplicar display: flex a uma .row do Bootstrap 3 mantém o sistema de grid funcionando perfeitamente.",
            resposta: false,
            explicacao: "Falso! O grid do Bootstrap 3 é baseado em float. Se você aplicar display:flex a uma .row, o Flexbox assume o controle e as larguras das colunas são IGNORADAS. O layout quebra.",
            referencia: "Módulo 03 — Seção 1.5: Flexbox vs. Box Model no Contexto do Bootstrap 3"
        },
        {
            tipo: "vf",
            enunciado: "Os Glyphicons são ícones em formato de fonte, podendo ser redimensionados e coloridos via CSS.",
            resposta: true,
            explicacao: "Correto! Os Glyphicons são uma biblioteca de ícones em FONTE. Por serem fontes, podem ser redimensionados e coloridos via CSS sem perda de qualidade.",
            referencia: "Módulo 03 — Seção 3.4: Glyphicons (Ícones)"
        },

        /* ============================================================
           BLOCO 1 — VERDADEIRO OU FALSO (expansão)
           ============================================================ */
        {
            tipo: "vf",
            enunciado: "A classe .navbar é usada para criar a barra de navegação principal do site no Bootstrap 3.",
            resposta: true,
            explicacao: "Correto! A .navbar cria uma barra de navegação responsiva. Costuma vir combinada com .navbar-default (tema claro) ou .navbar-inverse (tema escuro).",
            referencia: "Módulo 03 — Seção 3.2: Painéis (Panels)"
        },
        {
            tipo: "vf",
            enunciado: "A classe .btn-group agrupa vários botões em uma única unidade visual, sem espaçamento entre eles.",
            resposta: true,
            explicacao: "Correto! A .btn-group une botões em um grupo contíguo — eles ficam lado a lado SEM espaço entre si, parecendo um único bloco.",
            referencia: "Módulo 03 — Seção 2.7: Button (Botões)"
        },
        {
            tipo: "vf",
            enunciado: "A classe .alert-success cria uma caixa de alerta verde, indicando sucesso.",
            resposta: true,
            explicacao: "Correto! Os alerts têm variações de cor por contexto: .alert-success (verde), .alert-info (azul claro), .alert-warning (amarelo), .alert-danger (vermelho).",
            referencia: "Módulo 03 — Seção 3.2.2: Variações de Contexto"
        },
        {
            tipo: "vf",
            enunciado: "A classe .jumbotron cria uma área de destaque grande, ideal para banners e chamadas principais.",
            resposta: true,
            explicacao: "Correto! A .jumbotron cria um bloco visualmente destacado, com fonte maior e muito padding. Perfeita para o topo de landing pages.",
            referencia: "Módulo 03 — Seção 3.2: Painéis (Panels)"
        },
        {
            tipo: "vf",
            enunciado: "A classe .carousel cria um carrossel de imagens ou conteúdo no Bootstrap 3, com navegação automática.",
            resposta: true,
            explicacao: "Correto! O .carousel cria um slideshow, com controles de navegação (setas) e indicadores. Depende do JavaScript do Bootstrap (e portanto do jQuery).",
            referencia: "Módulo 03 — Seção 4.6: jQuery: A Dependência dos Plugins"
        },
        {
            tipo: "vf",
            enunciado: "O Bootstrap 3 removeu a dependência do jQuery em favor do JavaScript puro.",
            resposta: false,
            explicacao: "Falso! Essa mudança só aconteceu no Bootstrap 5. O Bootstrap 3 (e também o 4) DEPENDE do jQuery para todos os plugins interativos.",
            referencia: "Módulo 03 — Seção 4.6: jQuery: A Dependência dos Plugins"
        },
        {
            tipo: "vf",
            enunciado: "A classe .badge cria pequenos indicadores numéricos (ex: notificações) anexados a elementos.",
            resposta: true,
            explicacao: "Correto! O .badge cria um pequeno retângulo arredondado com um número, ideal para contadores de notificação. Ele se adapta automaticamente ao contexto.",
            referencia: "Módulo 03 — Seção 2.7: Button (Botões)"
        },

        /* ============================================================
           BLOCO 2 — MÚLTIPLA ESCOLHA (original)
           ============================================================ */
        {
            tipo: "multipla",
            enunciado: "Quantas colunas tem o sistema de grid do Bootstrap 3?",
            opcoes: ["6", "10", "12", "16"],
            correta: 2,
            explicacao: "O grid do Bootstrap 3 é baseado em 12 colunas. Você distribui o espaço somando valores que totalizam 12. Três col-md-4 (4+4+4=12) criam três colunas iguais.",
            referencia: "Módulo 03 — Seção 1.3.3: .col-* (Colunas)"
        },
        {
            tipo: "multipla",
            enunciado: "Qual breakpoint do Bootstrap 3 corresponde a TABLETS (largura ≥ 768px)?",
            opcoes: ["col-xs", "col-sm", "col-md", "col-lg"],
            correta: 1,
            explicacao: "O breakpoint col-sm (Small) é para tablets (≥768px). Correspondência: col-xs = telefones; col-sm = tablets; col-md = desktops; col-lg = alta resolução.",
            referencia: "Módulo 03 — Seção 1.4: Breakpoints e Responsividade"
        },
        {
            tipo: "multipla",
            enunciado: "Qual classe é OBRIGATÓRIA em inputs, selects e textareas para que recebam a estilização padrão do Bootstrap?",
            opcoes: ["input-style", "form-field", "form-control", "bootstrap-input"],
            correta: 2,
            explicacao: "A classe .form-control é a classe 'mágica' dos inputs. Ela aplica width:100%, altura padronizada, padding, bordas arredondadas e efeito de foco.",
            referencia: "Módulo 03 — Seção 2.1: A Estrutura Básica de um Formulário"
        },
        {
            tipo: "multipla",
            enunciado: "Qual componente do Bootstrap 3 é usado para adicionar texto, ícones ou botões AO LADO de um input?",
            opcoes: [".form-group", ".input-group", ".input-addon", ".field-extension"],
            correta: 1,
            explicacao: "O .input-group estende o input, permitindo adicionar texto (input-group-addon) ou botões (input-group-btn) nas laterais.",
            referencia: "Módulo 03 — Seção 2.3: Input Groups (Grupos de Input)"
        },
        {
            tipo: "multipla",
            enunciado: "Qual biblioteca JavaScript é dependência OBRIGATÓRIA do Bootstrap 3?",
            opcoes: ["Vue.js", "React.js", "jQuery", "Angular"],
            correta: 2,
            explicacao: "O Bootstrap 3 depende do jQuery. Todos os seus plugins foram construídos em cima dessa biblioteca. Sem o jQuery carregado ANTES, os plugins não funcionam.",
            referencia: "Módulo 03 — Seção 4.6: jQuery: A Dependência dos Plugins"
        },
        {
            tipo: "multipla",
            enunciado: "Qual classe torna uma tabela responsiva, exibindo barra de rolagem horizontal em telas pequenas?",
            opcoes: [".table-scroll", ".table-mobile", ".table-responsive", ".table-fluid"],
            correta: 2,
            explicacao: "A classe .table-responsive é aplicada a um div que ENVOLVE a tabela. Quando a viewport é menor que 768px, ela adiciona scroll horizontal.",
            referencia: "Módulo 03 — Seção 3.3.1: Classes Principais"
        },
        {
            tipo: "multipla",
            enunciado: "Qual classe base é usada para criar um painel (panel) no Bootstrap 3?",
            opcoes: [".card", ".box", ".panel", ".widget"],
            correta: 2,
            explicacao: "No Bootstrap 3, o componente de caixa é o .panel. As subclasses são .panel-heading, .panel-body e .panel-footer. No Bootstrap 4/5, foi SUBSTITUÍDO pelo .card.",
            referencia: "Módulo 03 — Seção 3.2: Painéis (Panels)"
        },
        {
            tipo: "multipla",
            enunciado: "Qual meta tag é ESSENCIAL para que o Bootstrap 3 funcione de forma responsiva em dispositivos móveis?",
            opcoes: [
                "A meta charset UTF-8",
                "A meta http-equiv X-UA-Compatible",
                "A meta viewport (width=device-width, initial-scale=1)",
                "A meta description"
            ],
            correta: 2,
            explicacao: "A meta viewport é a mais importante para a responsividade. Ela instrui o navegador a definir a largura da viewport igual à largura do dispositivo.",
            referencia: "Módulo 03 — Seção 4.1.1: Meta Tags Obrigatórias"
        },

        /* ============================================================
           BLOCO 2 — MÚLTIPLA ESCOLHA (expansão)
           ============================================================ */
        {
            tipo: "multipla",
            enunciado: "Qual classe cria um alerta VERMELHO (perigo) no Bootstrap 3?",
            opcoes: [".alert-danger", ".alert-error", ".alert-red", ".alert-warning"],
            correta: 0,
            explicacao: "O .alert-danger cria um alerta vermelho. Os alerts contextuais são: .alert-success (verde), .alert-info (azul), .alert-warning (amarelo) e .alert-danger (vermelho).",
            referencia: "Módulo 03 — Seção 3.2.2: Variações de Contexto"
        },
        {
            tipo: "multipla",
            enunciado: "Qual classe base é usada para criar uma BARRA DE PROGRESSO no Bootstrap 3?",
            opcoes: [".progress-bar", ".progress", ".loading", ".bar"],
            correta: 1,
            explicacao: "A classe BASE é .progress — ela cria o container da barra. Dentro dela, usa-se .progress-bar com style=\"width: X%\" para a barra preenchida.",
            referencia: "Módulo 03 — Seção 3.3: Tabelas (Tables)"
        },
        {
            tipo: "multipla",
            enunciado: "Qual componente do Bootstrap 3 exibe janelas SOBREPOSTAS (pop-ups) com conteúdo?",
            opcoes: [".popup", ".dialog", ".modal", ".overlay"],
            correta: 2,
            explicacao: "O .modal cria janelas SOBREPOSTAS que bloqueiam a interação com o resto da página até serem fechadas. Sua estrutura é: .modal + .modal-dialog + .modal-content + .modal-header + .modal-body + .modal-footer.",
            referencia: "Módulo 03 — Seção 4.6: jQuery: A Dependência dos Plugins"
        },
        {
            tipo: "multipla",
            enunciado: "Qual classe cria uma PAGINAÇÃO (números de página) no Bootstrap 3?",
            opcoes: [".pagination", ".pager", ".pages", ".paginate"],
            correta: 0,
            explicacao: "A .pagination é aplicada a uma lista ul para criar botões numerados de navegação entre páginas. Existe também o .pager, que cria apenas botões 'Anterior' e 'Próximo'.",
            referencia: "Módulo 03 — Seção 3.3: Tabelas (Tables)"
        },
        {
            tipo: "multipla",
            enunciado: "Qual ícone do Glyphicon representa um USUÁRIO?",
            opcoes: ["glyphicon-person", "glyphicon-user", "glyphicon-account", "glyphicon-profile"],
            correta: 1,
            explicacao: "O ícone correto é glyphicon-user. Use SEMPRE a classe base .glyphicon + a específica .glyphicon-user em um span vazio.",
            referencia: "Módulo 03 — Seção 3.4: Glyphicons (Ícones)"
        },
        {
            tipo: "multipla",
            enunciado: "Qual classe cria um menu SUSPENSO (dropdown) no Bootstrap 3?",
            opcoes: [".dropdown-menu", ".menu-drop", ".select-menu", ".collapse-menu"],
            correta: 0,
            explicacao: "O componente de dropdown é formado por: .dropdown (container), .dropdown-toggle (botão) + data-toggle=\"dropdown\", e .dropdown-menu (lista de itens ocultos).",
            referencia: "Módulo 03 — Seção 4.6: jQuery: A Dependência dos Plugins"
        },
        {
            tipo: "multipla",
            enunciado: "Qual classe coloriza uma linha de tabela de VERDE para indicar sucesso?",
            opcoes: [".row-success", ".table-success", ".success (aplicada ao tr)", ".green-row"],
            correta: 2,
            explicacao: "No Bootstrap 3, as classes contextuais de linha são aplicadas DIRETAMENTE ao tr: .success (verde), .info (azul), .warning (amarelo), .danger (vermelho) e .active (cinza). No Bootstrap 4/5, a nomenclatura mudou.",
            referencia: "Módulo 03 — Seção 3.3.2: Linhas com Contexto"
        },

        /* ============================================================
           BLOCO 3 — COMPLETE O CÓDIGO
           ============================================================ */
        {
            tipo: "complete",
            enunciado: "Complete o código abaixo para criar uma coluna que ocupe METADE da largura em desktops:",
            codigo: '\x3Cdiv class="row">\n  \x3Cdiv class="{{GAP}}">\n    Conteúdo\n  \x3C/div>\n\x3C/div>',
            opcoes: ["col-md-4", "col-md-6", "col-md-12", "col-md-3"],
            correta: 1,
            explicacao: "Como o grid tem 12 colunas, METADE corresponde a 6 (12 ÷ 2 = 6). Então col-md-6 ocupa 50% da largura em telas de desktop.",
            referencia: "Módulo 03 — Seção 1.3.3: .col-* (Colunas)"
        },
        {
            tipo: "complete",
            enunciado: "Complete o código abaixo para criar um BOTÃO PRIMÁRIO (azul escuro):",
            codigo: '\x3Cbutton type="submit" class="btn btn-{{GAP}}">Enviar\x3C/button>',
            opcoes: ["main", "primary", "blue", "default"],
            correta: 1,
            explicacao: "A classe .btn-primary cria um botão azul escuro, indicando ação principal. A escala é: .btn-primary, .btn-default, .btn-success, .btn-danger, .btn-warning, .btn-info.",
            referencia: "Módulo 03 — Seção 2.7: Button (Botões)"
        },
        {
            tipo: "complete",
            enunciado: "Complete o código abaixo para criar um campo de email com o ícone '@' à esquerda:",
            codigo: '\x3Cdiv class="{{GAP}}">\n  \x3Cspan class="input-group-addon">@\x3C/span>\n  \x3Cinput type="email" class="form-control">\n\x3C/div>',
            opcoes: ["form-group", "input-group", "field-addon", "input-box"],
            correta: 1,
            explicacao: "A classe .input-group é o CONTÊINER do componente de grupo de input. Ela agrupa o input e seus addons. O .input-group-addon é o item lateral com o '@'.",
            referencia: "Módulo 03 — Seção 2.3: Input Groups (Grupos de Input)"
        },
        {
            tipo: "complete",
            enunciado: "Complete o código abaixo para criar um RASTRO DE NAVEGAÇÃO (breadcrumb):",
            codigo: '\x3Col class="{{GAP}}">\n  \x3Cli>\x3Ca href="index.html">Início\x3C/a>\x3C/li>\n  \x3Cli class="active">Cadastro\x3C/li>\n\x3C/ol>',
            opcoes: ["nav-trail", "breadcrumb", "path", "crumb"],
            correta: 1,
            explicacao: "A classe .breadcrumb é aplicada a uma lista ORDENADA (ol) para criar o rastro de navegação. O Bootstrap adiciona automaticamente o separador '/' entre os itens.",
            referencia: "Módulo 03 — Seção 3.1: Breadcrumbs (Rastro de Navegação)"
        },
        {
            tipo: "complete",
            enunciado: "Complete o código abaixo para exibir o ícone de BUSCA (lupa) do Glyphicon:",
            codigo: '\x3Cspan class="glyphicon glyphicon-{{GAP}}" aria-hidden="true">\x3C/span>',
            opcoes: ["magnify", "search", "lupa", "find"],
            correta: 1,
            explicacao: "A classe glyphicon-search exibe a lupa de busca. Os Glyphicons usam DUAS classes: .glyphicon (base) + .glyphicon-* (específica).",
            referencia: "Módulo 03 — Seção 3.4: Glyphicons (Ícones)"
        },
        {
            tipo: "complete",
            enunciado: "Complete o código abaixo para criar um BOTÃO VERDE (sucesso):",
            codigo: '\x3Cbutton class="btn btn-{{GAP}}">Salvar\x3C/button>',
            opcoes: ["green", "success", "ok", "positive"],
            correta: 1,
            explicacao: "A classe correta é .btn-success — cria um botão verde, associado a ações de sucesso/confirmação. A escala: .btn-success, .btn-primary, .btn-default, .btn-danger, .btn-warning, .btn-info.",
            referencia: "Módulo 03 — Seção 2.7: Button (Botões)"
        },
        {
            tipo: "complete",
            enunciado: "Complete o código abaixo para criar um alerta VERMELHO (perigo):",
            codigo: '\x3Cdiv class="alert alert-{{GAP}}">Erro ao processar!\x3C/div>',
            opcoes: ["red", "error", "danger", "warning"],
            correta: 2,
            explicacao: "A classe correta é .alert-danger — cria um alerta vermelho indicando perigo/erro. Sempre use as duas classes juntas: .alert base + a específica de contexto.",
            referencia: "Módulo 03 — Seção 3.2.2: Variações de Contexto"
        },
        {
            tipo: "complete",
            enunciado: "Complete o código abaixo para criar uma BARRA DE PROGRESSO em 60%:",
            codigo: '\x3Cdiv class="progress">\n  \x3Cdiv class="progress-{{GAP}}" style="width: 60%">60%\x3C/div>\n\x3C/div>',
            opcoes: ["fill", "bar", "value", "inner"],
            correta: 1,
            explicacao: "A classe da barra preenchida é .progress-bar. Ela fica DENTRO de um .progress (o container). A largura é definida INLINE com style=\"width: 60%\".",
            referencia: "Módulo 03 — Seção 3.3: Tabelas (Tables)"
        },
        {
            tipo: "complete",
            enunciado: "Complete o código abaixo para criar um PAINEL AZUL (primary):",
            codigo: '\x3Cdiv class="panel panel-{{GAP}}">\n  \x3Cdiv class="panel-heading">Título\x3C/div>\n  \x3Cdiv class="panel-body">Conteúdo\x3C/div>\n\x3C/div>',
            opcoes: ["blue", "primary", "main", "azul"],
            correta: 1,
            explicacao: "A classe correta é .panel-primary — cria um painel com destaque azul. A escala: .panel-default, .panel-primary, .panel-success, .panel-info, .panel-warning, .panel-danger.",
            referencia: "Módulo 03 — Seção 3.2.2: Variações de Contexto"
        },
        {
            tipo: "complete",
            enunciado: "Complete o código abaixo para exibir uma NOTIFICAÇÃO numérica ao lado de um link:",
            codigo: '\x3Ca href="/mensagens">\n  Mensagens \x3Cspan class="{{GAP}}">5\x3C/span>\n\x3C/a>',
            opcoes: ["tag", "badge", "count", "notif"],
            correta: 1,
            explicacao: "A classe correta é .badge — cria um pequeno retângulo arredondado com número, ideal para contadores. Ele se adapta automaticamente ao contexto.",
            referencia: "Módulo 03 — Seção 2.7: Button (Botões)"
        },

        /* ============================================================
           BLOCO 4 — APONTE O ERRO
           ============================================================ */
        {
            tipo: "erro",
            enunciado: "Há um erro ESTRUTURAL no grid do Bootstrap abaixo. Aponte qual é:",
            codigo: '\x3Cdiv class="container">\n  \x3Cdiv class="col-md-6">Coluna A\x3C/div>\n  \x3Cdiv class="col-md-6">Coluna B\x3C/div>\n\x3C/div>',
            opcoes: [
                "As colunas deveriam ser col-md-12",
                "Falta a div .row entre o .container e as colunas",
                "O container não pode ter apenas duas colunas",
                "O código está correto"
            ],
            correta: 1,
            explicacao: "Falta a div .row! A hierarquia OBRIGATÓRIA é: .container → .row → .col-*. Sem a .row, as margens negativas e o clearfix não são aplicados, e o layout quebra.",
            referencia: "Módulo 03 — Seção 1.3: Estrutura do Grid: Containers, Rows e Columns"
        },
        {
            tipo: "erro",
            enunciado: "Há um erro no formulário Bootstrap abaixo. Aponte qual é:",
            codigo: '\x3Cdiv class="form-group">\n  \x3Clabel>Nome:\x3C/label>\n  \x3Cinput type="text" id="nome">\n\x3C/div>',
            opcoes: [
                "O label não pode estar dentro do form-group",
                "Falta a classe .form-control no input",
                "O type deveria ser 'name'",
                "O código está correto"
            ],
            correta: 1,
            explicacao: "Falta a classe .form-control no input. Sem ela, o campo fica com a aparência 'crua' do navegador — sem largura 100%, sem padding, sem bordas arredondadas.",
            referencia: "Módulo 03 — Seção 2.1: A Estrutura Básica de um Formulário"
        },
        {
            tipo: "erro",
            enunciado: "Há um erro de ACESSIBILIDADE no formulário abaixo. Aponte qual é:",
            codigo: '\x3Clabel for="email">Email:\x3C/label>\n\x3Cinput type="email" class="form-control" id="mail">',
            opcoes: [
                "O input não pode ter type='email'",
                "O atributo for do label aponta para 'email', mas o id do input é 'mail' — eles devem coincidir",
                "O label deveria vir depois do input",
                "O código está correto"
            ],
            correta: 1,
            explicacao: "O atributo for do label deve corresponder EXATAMENTE ao id do input. Aqui, o label aponta para 'email' mas o input tem id='mail'. Ao clicar no rótulo, o campo NÃO recebe foco.",
            referencia: "Módulo 03 — Seção 2.10: Acessibilidade (A11y) em Formulários"
        },
        {
            tipo: "erro",
            enunciado: "Um desenvolvedor precisa incluir os arquivos JavaScript do Bootstrap 3. Ele declarou na ordem: 1º Bootstrap, 2º jQuery. Aponte o erro:",
            codigo: 'Ordem declarada:\n  1. bootstrap.min.js\n  2. jquery.min.js',
            opcoes: [
                "O bootstrap.min.js deveria ser o último da lista",
                "O jQuery deve vir ANTES do bootstrap.min.js, pois é dependência dos plugins",
                "Os dois arquivos deveriam estar no head",
                "A ordem está correta"
            ],
            correta: 1,
            explicacao: "O jQuery DEVE ser carregado ANTES do bootstrap.min.js. Como os plugins do Bootstrap dependem do jQuery, carregar o Bootstrap primeiro causa erro de JavaScript. A ordem correta: 1º jQuery, 2º Bootstrap.",
            referencia: "Módulo 03 — Seção 4.3: Integração de Arquivos CSS e JavaScript"
        },
        {
            tipo: "erro",
            enunciado: "Um documento HTML tem head e body na ordem correta. No entanto, faltam duas meta tags importantes. Aponte qual é o problema:",
            codigo: 'Estrutura do documento:\n  - DOCTYPE html\n  - html lang="pt-br"\n  - head\n      - meta charset utf-8\n      - title Meu site\n  - body\n      - h1 Olá',
            opcoes: [
                "O DOCTYPE deveria ser XHTML",
                "Faltam as meta tags X-UA-Compatible e viewport — essenciais para responsividade",
                "A tag title deveria estar no body",
                "O código está correto"
            ],
            correta: 1,
            explicacao: "Faltam DUAS meta tags essenciais: a meta http-equiv X-UA-Compatible (força o IE a usar a versão moderna) e a meta viewport (habilita a responsividade em mobile).",
            referencia: "Módulo 03 — Seção 4.1.1: Meta Tags Obrigatórias"
        },
        {
            tipo: "erro",
            enunciado: "Há um erro no botão Bootstrap abaixo. Aponte qual é:",
            codigo: '\x3Cbutton class="btn-success">Salvar\x3C/button>',
            opcoes: [
                "Falta a classe base .btn junto com .btn-success",
                "success não é uma classe válida",
                "Falta o atributo type no button",
                "O código está correto"
            ],
            correta: 0,
            explicacao: "Falta a classe base .btn! Todas as variações precisam da classe base. O correto é class=\"btn btn-success\". Sem o .btn, o botão perde padding, borda, transição e o estilo base.",
            referencia: "Módulo 03 — Seção 2.7: Button (Botões)"
        },
        {
            tipo: "erro",
            enunciado: "Há um erro no alerta abaixo. Aponte qual é:",
            codigo: '\x3Cdiv class="alert">Atenção!\x3C/div>',
            opcoes: [
                "Falta uma classe de contexto (.alert-success, .alert-warning, etc.)",
                "alert deveria ser aplicado a um p",
                "Faltou o atributo role",
                "O código está correto"
            ],
            correta: 0,
            explicacao: "Falta a classe de CONTEXTO. O .alert sozinho cria uma caixa amarela padrão, mas o ideal é SEMPRE combinar com uma variação contextual.",
            referencia: "Módulo 03 — Seção 3.2.2: Variações de Contexto"
        },
        {
            tipo: "erro",
            enunciado: "Há um erro estrutural no painel abaixo. Aponte qual é:",
            codigo: '\x3Cdiv class="panel panel-default">\n  \x3Ch3>Título do Painel\x3C/h3>\n  \x3Cp>Conteúdo\x3C/p>\n\x3C/div>',
            opcoes: [
                "Faltam as subclasses .panel-heading e .panel-body",
                "panel-default não existe no Bootstrap 3",
                "h3 não pode ficar dentro de panel",
                "O código está correto"
            ],
            correta: 0,
            explicacao: "Faltam as subclasses estruturais. O painel do Bootstrap 3 espera: .panel-heading (cabeçalho) e .panel-body (corpo). Sem elas, o painel não recebe o padding e o estilo adequados.",
            referencia: "Módulo 03 — Seção 3.2.1: Estrutura do Painel"
        },
        {
            tipo: "erro",
            enunciado: "Há um erro na estrutura de NAVBAR abaixo. Aponte qual é:",
            codigo: '\x3Cnav class="navbar-default">\n  \x3Cdiv class="container">\n    \x3Ca class="navbar-brand" href="/">Meu Site\x3C/a>\n  \x3C/div>\n\x3C/nav>',
            opcoes: [
                "Falta a classe base .navbar junto com .navbar-default",
                "navbar-default deveria ser .navbar-light",
                "nav não pode ter a classe navbar",
                "O código está correto"
            ],
            correta: 0,
            explicacao: "Falta a classe BASE .navbar. O correto é class=\"navbar navbar-default\". Sem o .navbar, a barra perde a estrutura, o padding, a altura e a responsividade.",
            referencia: "Módulo 03 — Seção 3.2: Painéis (Panels)"
        },
        {
            tipo: "erro",
            enunciado: "Há um erro de ANINHAMENTO no uso do jumbotron abaixo. Aponte qual é:",
            codigo: '\x3Cdiv class="jumbotron">\n  \x3Cdiv class="jumbotron">\n    \x3Ch1>Bem-vindo\x3C/h1>\n  \x3C/div>\n\x3C/div>',
            opcoes: [
                "Um jumbotron dentro de outro gera padding duplo e visual incorreto — não se aninha jumbotron",
                "jumbotron não pode conter h1",
                "Falta o atributo type no h1",
                "O código está correto"
            ],
            correta: 0,
            explicacao: "Aninhar .jumbotron dentro de outro NÃO faz sentido — cada um aplica padding grande e fundo diferenciado, resultando em bordas duplas e espaçamento estranho. O jumbotron já é um container visual autônomo.",
            referencia: "Módulo 03 — Seção 3.2: Painéis (Panels)"
        }
    ]
};