/* ============================================================
   BANCO DE QUESTÕES — MÓDULO 03 (BOOTSTRAP 3)
   ------------------------------------------------------------
   Total: 61 questões ÚNICAS
   Cobre os 8 tópicos do M3
   ------------------------------------------------------------
   Tipos: vf, vf-justificativa, multipla, multipla-resposta,
          complete, complete-multiplo, erro, debug-multiplo,
          associacao, ordenar, categorizacao, flashcard, predicao
   ⚠️ Use \x3C no lugar de < dentro das strings.
   ============================================================ */
window.QUIZ_DATA = {
    questoes: [

        /* ============================================================
           TÓPICO 1 — GRID E LAYOUT
           ============================================================ */

        {
            tipo: "vf",
            enunciado: "O sistema de grid do Bootstrap 3 é baseado em 12 colunas.",
            resposta: true,
            explicacao: "Correto! O grid do Bootstrap 3 usa um sistema de 12 colunas. Você combina a classe de breakpoint (col-xs, col-sm, col-md, col-lg) com o número de colunas que o elemento deve ocupar (de 1 a 12). Três col-md-4 (4+4+4=12) criam três colunas iguais.",
            referencia: "Módulo 03 — Seção 1.3.3: .col-* (Colunas)"
        },
        {
            tipo: "vf",
            enunciado: "O Bootstrap 3 aplica globalmente box-sizing: border-box a todos os elementos.",
            resposta: true,
            explicacao: "Correto! O Bootstrap 3 aplica box-sizing: border-box a todos os elementos. Isso faz com que width e height INCLUAM o padding e a borda. Uma div com width:100px, padding:10px e border:5px ocupa EXATAMENTE 100px.",
            referencia: "Módulo 03 — Seção 1.1: Box Model: A Base de Tudo"
        },
        {
            tipo: "vf",
            enunciado: "A classe .container-fluid cria um contêiner com largura máxima fixa, centralizado na página.",
            resposta: false,
            explicacao: "Falso! A .container cria um contêiner CENTRALIZADO com largura MÁXIMA predefinida (750, 970 ou 1170px, dependendo do breakpoint). Já a .container-fluid ocupa 100% da largura da viewport, SEM limites laterais.",
            referencia: "Módulo 03 — Seção 1.3.1: .container (ou .container-fluid)"
        },
        {
            tipo: "multipla",
            enunciado: "Quantas colunas tem o sistema de grid do Bootstrap 3?",
            opcoes: ["6", "10", "12", "16"],
            correta: 2,
            explicacao: "O grid do Bootstrap 3 é baseado em 12 colunas. Você distribui o espaço somando valores que totalizam 12. O 12 foi escolhido por ser divisível por 2, 3, 4 e 6.",
            referencia: "Módulo 03 — Seção 1.3.3: .col-* (Colunas)"
        },
        {
            tipo: "complete",
            enunciado: "Complete o código abaixo para criar uma coluna que ocupe METADE da largura em desktops:",
            codigo: '\x3Cdiv class="row">\n  \x3Cdiv class="{{GAP}}">\n    Conteúdo\n  \x3C/div>\n\x3C/div>',
            opcoes: ["col-md-4", "col-md-6", "col-md-12", "col-md-3"],
            correta: 1,
            explicacao: "Como o grid tem 12 colunas, METADE corresponde a 6 (12 ÷ 2 = 6). Então col-md-6 ocupa 50% da largura em telas de desktop (≥992px).",
            referencia: "Módulo 03 — Seção 1.3.3: .col-* (Colunas)"
        },
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
            tipo: "vf",
            enunciado: "Aplicar display: flex a uma .row do Bootstrap 3 mantém o sistema de grid funcionando perfeitamente.",
            resposta: false,
            explicacao: "Falso! O grid do Bootstrap 3 é baseado em FLOAT. Se você aplicar display:flex a uma .row, o Flexbox assume o controle do dimensionamento dos filhos e as larguras das classes col-* são IGNORADAS. O layout quebra. O Flexbox só virou nativo no Bootstrap 4.",
            referencia: "Módulo 03 — Seção 1.5: Flexbox vs. Box Model no Contexto do Bootstrap 3"
        },
        {
            tipo: "multipla",
            enunciado: "Um desenvolvedor quer 3 colunas iguais lado a lado em desktops. Quais classes deve usar?",
            opcoes: [
                "col-md-3 + col-md-3 + col-md-3",
                "col-md-4 + col-md-4 + col-md-4",
                "col-md-6 + col-md-6 + col-md-6",
                "col-md-12 + col-md-12 + col-md-12"
            ],
            correta: 1,
            explicacao: "3 colunas IGUAIS precisam somar 12. Como 12 ÷ 3 = 4, cada coluna usa col-md-4. Somando: 4+4+4=12 ✓. col-md-3 daria 4 colunas; col-md-6 daria apenas 2 caberiam; col-md-12 seria 1 por linha.",
            referencia: "Módulo 03 — Seção 1.3.3: .col-* (Colunas)"
        },
        {
            tipo: "flashcard",
            enunciado: "Qual a diferença entre .container e .container-fluid no Bootstrap 3?",
            resposta: ".container cria um contêiner CENTRALIZADO com largura MÁXIMA fixa por breakpoint (750px, 970px ou 1170px). Ele tem margens laterais automáticas. Já o .container-fluid ocupa 100% da largura da viewport SEMPRE, sem limites laterais — ideal para layouts que precisam sangrar até a borda da tela.",
            referencia: "Módulo 03 — Seção 1.3.1: .container (ou .container-fluid)"
        },
        {
            tipo: "associacao",
            enunciado: "Relacione cada estrutura do grid com sua função:",
            pares: [
                { esquerda: ".container", direita: "Contêiner centralizado com largura máxima" },
                { esquerda: ".row", direita: "Linha que agrupa colunas (aplica clearfix e margens negativas)" },
                { esquerda: ".col-md-6", direita: "Coluna que ocupa metade da largura em desktops" }
            ],
            explicacao: "A hierarquia é sempre: .container → .row → .col-*. O container cria a área central; a row agrupa as colunas e limpa os floats; as colunas definem a largura em cada breakpoint.",
            referencia: "Módulo 03 — Seção 1.3: Estrutura do Grid"
        },

        /* ============================================================
           TÓPICO 2 — BREAKPOINTS
           ============================================================ */

        {
            tipo: "multipla",
            enunciado: "Qual breakpoint do Bootstrap 3 corresponde a TABLETS (largura ≥ 768px)?",
            opcoes: ["col-xs", "col-sm", "col-md", "col-lg"],
            correta: 1,
            explicacao: "O breakpoint col-sm (Small) é para tablets (≥768px). Correspondência: col-xs = telefones (<768px); col-sm = tablets (≥768px); col-md = desktops (≥992px); col-lg = alta resolução (≥1200px).",
            referencia: "Módulo 03 — Seção 1.4: Breakpoints e Responsividade"
        },
        {
            tipo: "multipla",
            enunciado: "Um elemento com `class=\"col-xs-12 col-sm-6 col-md-4\"` ocupa qual largura em SMARTPHONES (<768px)?",
            opcoes: ["25%", "50%", "100%", "Não aparece em smartphones"],
            correta: 2,
            explicacao: "Em smartphones, apenas o col-xs-12 é aplicado — ocupa 100% da largura (12 de 12 colunas). Os col-sm e col-md só entram em vigor a partir de seus breakpoints. O resultado é que o elemento ocupa a linha inteira em telas pequenas.",
            referencia: "Módulo 03 — Seção 1.4: Breakpoints e Responsividade"
        },
        {
            tipo: "ordenar",
            enunciado: "Ordene os breakpoints do Bootstrap 3 do MENOR para o MAIOR (em largura mínima):",
            itens: [
                "col-xs (telefones)",
                "col-sm (tablets)",
                "col-md (desktops)",
                "col-lg (telas grandes)"
            ],
            explicacao: "A ordem crescente de largura mínima é: col-xs (<768px, base sem media query), col-sm (≥768px), col-md (≥992px) e col-lg (≥1200px). Comece pela menor tela e vá aumentando — essa é a filosofia Mobile First.",
            referencia: "Módulo 03 — Seção 1.4: Breakpoints e Responsividade"
        },
        {
            tipo: "flashcard",
            enunciado: "Por que o Bootstrap 3 é chamado de 'Mobile First'?",
            resposta: "Porque os estilos BASE do framework são pensados PRIMEIRO para telas pequenas (smartphones) e depois EXPANDEM via media queries para telas maiores. Isso significa que as classes col-xs-* são o 'ponto de partida', e col-sm/md/lg são incrementos. Na prática: um elemento com apenas col-md-4 se comporta como col-xs-12 (largura total) em celulares, porque não há uma col-xs definida — o estilo padrão é 'largura total'.",
            referencia: "Módulo 03 — Seção 1.2: A Filosofia Mobile First"
        },

        /* ============================================================
           TÓPICO 3 — FORMULÁRIOS
           ============================================================ */

        {
            tipo: "vf",
            enunciado: "A classe .form-group aplica uma margem inferior para separar verticalmente os campos de um formulário.",
            resposta: true,
            explicacao: "Correto! A .form-group envolve cada par label + input e aplica uma margem inferior (geralmente 15px), garantindo espaçamento vertical consistente entre os campos.",
            referencia: "Módulo 03 — Seção 2.1: A Estrutura Básica de um Formulário"
        },
        {
            tipo: "multipla",
            enunciado: "Qual classe é OBRIGATÓRIA em inputs, selects e textareas para que recebam a estilização padrão do Bootstrap?",
            opcoes: ["input-style", "form-field", "form-control", "bootstrap-input"],
            correta: 2,
            explicacao: "A classe .form-control é a classe 'mágica' dos inputs. Ela aplica width:100%, altura padronizada, padding, bordas arredondadas e efeito de foco. Sem ela, o campo fica com a aparência 'crua' do navegador.",
            referencia: "Módulo 03 — Seção 2.1: A Estrutura Básica de um Formulário"
        },
        {
            tipo: "multipla",
            enunciado: "Qual componente do Bootstrap 3 é usado para adicionar texto, ícones ou botões AO LADO de um input?",
            opcoes: [".form-group", ".input-group", ".input-addon", ".field-extension"],
            correta: 1,
            explicacao: "O .input-group estende o input, permitindo adicionar texto (input-group-addon) ou botões (input-group-btn) nas laterais. Exemplo clássico: um campo de valor com 'R$' à esquerda e botão 'Calcular' à direita.",
            referencia: "Módulo 03 — Seção 2.3: Input Groups (Grupos de Input)"
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
            explicacao: "Falta a classe .form-control no input. Sem ela, o campo fica com a aparência 'crua' do navegador — sem largura 100%, sem padding, sem bordas arredondadas, sem efeito de foco.",
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
            explicacao: "O atributo for do label deve corresponder EXATAMENTE ao id do input. Aqui, o label aponta para 'email' mas o input tem id='mail'. Ao clicar no rótulo, o campo NÃO recebe foco, e leitores de tela não associam corretamente.",
            referencia: "Módulo 03 — Seção 2.10: Acessibilidade (A11y) em Formulários"
        },
        {
            tipo: "multipla",
            enunciado: "Como alinhar os radio buttons NA MESMA LINHA horizontal no Bootstrap 3?",
            opcoes: [
                "Aplicando .radio ao container div",
                "Aplicando .radio-inline diretamente ao label",
                "Aplicando .form-inline ao input",
                "Basta colocar os inputs em uma só linha HTML"
            ],
            correta: 1,
            explicacao: "Para alinhar radio buttons ou checkboxes na horizontal, o Bootstrap 3 oferece .radio-inline (ou .checkbox-inline) APLICADA AO LABEL, em vez de envolver cada um em uma div.radio. Sem isso, cada botão fica empilhado verticalmente.",
            referencia: "Módulo 03 — Seção 2.5: Radio Buttons (Botões de Rádio)"
        },
        {
            tipo: "multipla-resposta",
            enunciado: "Marque TODAS as boas práticas ao construir formulários Bootstrap 3:",
            opcoes: [
                "Usar .form-control em todos os inputs/selects/textareas",
                "Usar .form-group ao redor de cada par label+input",
                "Usar placeholder como substituto do label",
                "Conectar label ao input via for=id",
                "Colocar todos os campos em uma única <div>"
            ],
            corretas: [0, 1, 3],
            explicacao: "Boas práticas: .form-control nos campos, .form-group ao redor de cada par, e label conectado via for=id. ERRADO: placeholder substitui label (falso, ele é só dica visual); agrupar tudo em uma única div quebra o espaçamento vertical do .form-group.",
            referencia: "Módulo 03 — Seção 2: Componentes de Formulário"
        },
        {
            tipo: "categorizacao",
            enunciado: "Classifique cada classe de formulário Bootstrap 3 pelo tipo de input a que se aplica:",
            categorias: ["Input de texto", "Botão de seleção", "Container"],
            itens: [
                { texto: ".form-control", categoria: "Input de texto" },
                { texto: ".radio", categoria: "Botão de seleção" },
                { texto: ".checkbox", categoria: "Botão de seleção" },
                { texto: ".form-group", categoria: "Container" },
                { texto: ".input-group", categoria: "Container" },
                { texto: ".radio-inline", categoria: "Botão de seleção" }
            ],
            explicacao: ".form-control estiliza inputs de texto (text, email, password, etc). .radio/.checkbox/.radio-inline/.checkbox-inline estilizam botões de seleção. .form-group e .input-group são CONTAINERS — agrupam e dão espaçamento/estrutura.",
            referencia: "Módulo 03 — Seção 2: Componentes de Formulário"
        },
        {
            tipo: "debug-multiplo",
            enunciado: "Este formulário Bootstrap tem 3 erros. Marque TODOS eles:",
            codigo: '\x3Cform\x3E\n  \x3Cdiv\x3E\n    \x3Clabel for="email"\x3EEmail:\x3C/label\x3E\n    \x3Cinput type="email" id="email"\x3E\n  \x3C/div\x3E\n  \x3Cinput type="submit" value="Enviar"\x3E\n\x3C/form\x3E',
            opcoes: [
                { texto: "A div externa deveria ter a classe .form-group", correta: true },
                { texto: "O input de email precisa da classe .form-control", correta: true },
                { texto: "O botão submit deveria ter a classe btn (btn-primary, por exemplo)", correta: true },
                { texto: "O label não pode ter atributo for", correta: false },
                { texto: "type='email' não existe no Bootstrap 3", correta: false }
            ],
            explicacao: "Erro 1: falta .form-group na div que envolve o campo. Erro 2: falta .form-control no input. Erro 3: o botão de submit está sem .btn + variação. Os itens 4 e 5 são falsos: for é essencial para acessibilidade, e email é um type válido.",
            referencia: "Módulo 03 — Seção 2: Componentes de Formulário"
        },
        {
            tipo: "flashcard",
            enunciado: "Para que serve a classe .form-horizontal no Bootstrap 3?",
            resposta: "Ela transforma o formulário em um layout HORIZONTAL: os labels ficam à ESQUERDA dos inputs, alinhados. Ao aplicá-la à tag <form>, cada .form-group se comporta como uma .row, e você usa classes de grid (col-sm-*) para definir a largura de labels e inputs. Requer a classe .control-label nos labels para o alinhamento correto.",
            referencia: "Módulo 03 — Seção 2.9: Formulários Horizontais e Inline"
        },

        /* ============================================================
           TÓPICO 4 — BOTÕES
           ============================================================ */

        {
            tipo: "complete",
            enunciado: "Complete o código abaixo para criar um BOTÃO PRIMÁRIO (azul escuro):",
            codigo: '\x3Cbutton type="submit" class="btn btn-{{GAP}}">Enviar\x3C/button>',
            opcoes: ["main", "primary", "blue", "default"],
            correta: 1,
            explicacao: "A classe .btn-primary cria um botão azul escuro, indicando ação principal. A escala é: .btn-primary (ação principal), .btn-default (padrão), .btn-success (sucesso), .btn-danger (perigo), .btn-warning (aviso), .btn-info (informação).",
            referencia: "Módulo 03 — Seção 2.7: Button (Botões)"
        },
        {
            tipo: "complete",
            enunciado: "Complete o código abaixo para criar um BOTÃO VERDE (sucesso):",
            codigo: '\x3Cbutton class="btn btn-{{GAP}}">Salvar\x3C/button>',
            opcoes: ["green", "success", "ok", "positive"],
            correta: 1,
            explicacao: "A classe correta é .btn-success — cria um botão verde, associado a ações de sucesso/confirmação. A escala completa: success (verde), primary (azul), default (cinza), danger (vermelho), warning (amarelo), info (azul claro).",
            referencia: "Módulo 03 — Seção 2.7: Button (Botões)"
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
            tipo: "multipla",
            enunciado: "Qual classe faz um botão ocupar 100% da largura do container?",
            opcoes: [".btn-wide", ".btn-full", ".btn-block", ".btn-100"],
            correta: 2,
            explicacao: ".btn-block faz o botão ocupar 100% da largura do container. É muito usado em formulários verticais e em botões de ação que devem se destacar. As demais classes não existem no Bootstrap 3.",
            referencia: "Módulo 03 — Seção 2.7: Button (Botões)"
        },
        {
            tipo: "multipla-resposta",
            enunciado: "Marque TODAS as classes de TAMANHO de botão que existem no Bootstrap 3:",
            opcoes: [".btn-lg", ".btn-sm", ".btn-xs", ".btn-tiny", ".btn-md", ".btn-huge"],
            corretas: [0, 1, 2],
            explicacao: "O Bootstrap 3 tem 3 tamanhos: .btn-lg (grande), .btn-sm (pequeno), .btn-xs (extra pequeno). O tamanho padrão é sem classe. Não existem .btn-tiny, .btn-md nem .btn-huge. Curiosidade: no Bootstrap 4/5 os nomes mudaram (adicionaram .btn-md e .btn-block virou utilitário).",
            referencia: "Módulo 03 — Seção 2.7: Button (Botões)"
        },
        {
            tipo: "predicao",
            enunciado: "Considerando o código abaixo, qual será a aparência do botão?",
            codigo: '\x3Cbutton class="btn btn-danger btn-sm">Excluir\x3C/button>',
            opcoes: [
                "Botão grande, vermelho, com a palavra Excluir",
                "Botão pequeno, vermelho, com a palavra Excluir",
                "Botão pequeno, azul, com a palavra Excluir",
                "Botão grande, verde, com a palavra Excluir"
            ],
            correta: 1,
            explicacao: ".btn-danger aplica cor VERMELHA (perigo/ação destrutiva). .btn-sm aplica o tamanho PEQUENO. Portanto, o botão será pequeno e vermelho. É um padrão ideal para botões de 'Excluir' em listagens e tabelas.",
            referencia: "Módulo 03 — Seção 2.7: Button (Botões)"
        },

        /* ============================================================
           TÓPICO 5 — NAVEGAÇÃO E CONTEÚDO
           ============================================================ */

        {
            tipo: "vf",
            enunciado: "A classe .navbar é usada para criar a barra de navegação principal do site no Bootstrap 3.",
            resposta: true,
            explicacao: "Correto! A .navbar cria uma barra de navegação responsiva, geralmente no topo da página. Costuma vir combinada com .navbar-default (tema claro) ou .navbar-inverse (tema escuro). Dentro dela, usa-se .navbar-header para o logo e .navbar-nav para os links.",
            referencia: "Módulo 03 — Seção 3.2: Componentes de Navegação"
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
            explicacao: "Falta a classe BASE .navbar. O correto é class=\"navbar navbar-default\". Sem o .navbar, a barra perde a estrutura, o padding, a altura e a responsividade. Mesma regra do .btn: SEMPRE a base + a variação.",
            referencia: "Módulo 03 — Seção 3.2: Componentes de Navegação"
        },
        {
            tipo: "multipla",
            enunciado: "Qual é a diferença entre .navbar-default e .navbar-inverse no Bootstrap 3?",
            opcoes: [
                "navbar-default é fixa no topo, navbar-inverse é flutuante",
                "navbar-default tem tema CLARO (fundo branco), navbar-inverse tem tema ESCURO (fundo preto)",
                "navbar-default funciona em mobile, navbar-inverse só em desktop",
                "navbar-default é horizontal, navbar-inverse é vertical"
            ],
            correta: 1,
            explicacao: ".navbar-default cria uma barra com fundo CLARO (branco), ideal para sites com design minimalista. .navbar-inverse cria uma barra com fundo ESCURO (preto), ideal para sites mais sóbrios ou destacados. Ambas têm a mesma estrutura — só mudam as cores.",
            referencia: "Módulo 03 — Seção 3.2: Componentes de Navegação"
        },
        {
            tipo: "complete",
            enunciado: "Complete o código abaixo para criar um RASTRO DE NAVEGAÇÃO (breadcrumb):",
            codigo: '\x3Col class="{{GAP}}">\n  \x3Cli>\x3Ca href="index.html">Início\x3C/a>\x3C/li>\n  \x3Cli class="active">Cadastro\x3C/li>\n\x3C/ol>',
            opcoes: ["nav-trail", "breadcrumb", "path", "crumb"],
            correta: 1,
            explicacao: "A classe .breadcrumb é aplicada a uma lista ORDENADA (ol) para criar o rastro de navegação. O Bootstrap adiciona automaticamente o separador '/' entre os itens via CSS. O item ativo recebe .active e não deve ter link.",
            referencia: "Módulo 03 — Seção 3.1: Breadcrumbs (Rastro de Navegação)"
        },
        {
            tipo: "multipla",
            enunciado: "Qual classe cria uma PAGINAÇÃO (números de página) no Bootstrap 3?",
            opcoes: [".pagination", ".pager", ".pages", ".paginate"],
            correta: 0,
            explicacao: ".pagination é aplicada a uma lista <ul> para criar botões numerados de navegação entre páginas. O item ativo recebe .active; os desabilitados, .disabled. Existe também o .pager, que cria apenas botões 'Anterior' e 'Próximo' (sem números).",
            referencia: "Módulo 03 — Seção 3.3: Navegação"
        },
        {
            tipo: "multipla",
            enunciado: "Qual componente do Bootstrap 3 exibe janelas SOBREPOSTAS (pop-ups) com conteúdo?",
            opcoes: [".popup", ".dialog", ".modal", ".overlay"],
            correta: 2,
            explicacao: ".modal cria janelas SOBREPOSTAS que bloqueiam a interação com o resto da página até serem fechadas. Sua estrutura é: .modal (container) + .modal-dialog + .modal-content + .modal-header + .modal-body + .modal-footer. Depende do JavaScript (jQuery) para abrir e fechar.",
            referencia: "Módulo 03 — Seção 3.2: Componentes de Navegação"
        },
        {
            tipo: "multipla",
            enunciado: "Qual classe cria um menu SUSPENSO (dropdown) no Bootstrap 3?",
            opcoes: [".dropdown-menu", ".menu-drop", ".select-menu", ".collapse-menu"],
            correta: 0,
            explicacao: "O componente de dropdown é formado por: .dropdown (container), .dropdown-toggle (botão que abre) + data-toggle=\"dropdown\", e .dropdown-menu (lista de itens ocultos). Cada item usa .dropdown-menu > li > a.",
            referencia: "Módulo 03 — Seção 4.6: jQuery: A Dependência dos Plugins"
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
            explicacao: "Falta a classe de CONTEXTO. O .alert sozinho cria uma caixa amarela padrão, mas o ideal é SEMPRE combinar com uma variação contextual (.alert-success, .alert-info, .alert-warning ou .alert-danger).",
            referencia: "Módulo 03 — Seção 3.2.2: Variações de Contexto"
        },
        {
            tipo: "multipla",
            enunciado: "Qual classe cria uma área de destaque grande, ideal para banners e chamadas principais?",
            opcoes: [".hero", ".jumbotron", ".banner", ".highlight"],
            correta: 1,
            explicacao: ".jumbotron cria um bloco visualmente destacado, com fonte maior e muito padding. É perfeita para o topo de landing pages e páginas iniciais. Pode ser aplicada FORA de um .container (largura total) ou DENTRO (limitada à largura do container).",
            referencia: "Módulo 03 — Seção 3.2: Componentes de Navegação"
        },
        {
            tipo: "multipla-resposta",
            enunciado: "Marque TODAS as variações contextuais de ALERT que existem no Bootstrap 3:",
            opcoes: [".alert-success", ".alert-info", ".alert-warning", ".alert-danger", ".alert-primary", ".alert-critical"],
            corretas: [0, 1, 2, 3],
            explicacao: "O Bootstrap 3 tem 4 alerts contextuais: .alert-success (verde), .alert-info (azul claro), .alert-warning (amarelo) e .alert-danger (vermelho). NÃO existem .alert-primary nem .alert-critical. Curiosidade: no Bootstrap 4/5 adicionaram .alert-primary e várias outras.",
            referencia: "Módulo 03 — Seção 3.2.2: Variações de Contexto"
        },
        {
            tipo: "associacao",
            enunciado: "Relacione cada componente Bootstrap 3 com sua função:",
            pares: [
                { esquerda: ".breadcrumb", direita: "Rastro de navegação hierárquico" },
                { esquerda: ".pagination", direita: "Botões numerados de páginas" },
                { esquerda: ".jumbotron", direita: "Área de destaque para banners" },
                { esquerda: ".badge", direita: "Contador numérico (ex: notificações)" }
            ],
            explicacao: "breadcrumb = rastro de navegação; pagination = paginador numerado; jumbotron = bloco de destaque; badge = contador pequeno. Cada um tem seu papel específico na comunicação visual.",
            referencia: "Módulo 03 — Seção 3: Componentes de Navegação e Conteúdo"
        },

        /* ============================================================
           TÓPICO 6 — TABELAS
           ============================================================ */

        {
            tipo: "multipla",
            enunciado: "Qual classe torna uma tabela responsiva, exibindo barra de rolagem horizontal em telas pequenas?",
            opcoes: [".table-scroll", ".table-mobile", ".table-responsive", ".table-fluid"],
            correta: 2,
            explicacao: "A classe .table-responsive é aplicada a um DIV que ENVOLVE a tabela (não na própria table). Quando a viewport é menor que 768px, ela adiciona scroll horizontal, evitando que a tabela quebre o layout.",
            referencia: "Módulo 03 — Seção 3.3: Tabelas"
        },
        {
            tipo: "multipla-resposta",
            enunciado: "Marque TODAS as classes de TABELA que existem no Bootstrap 3:",
            opcoes: [".table-striped", ".table-bordered", ".table-hover", ".table-zebra", ".table-stripes", ".table-responsive"],
            corretas: [0, 1, 2, 5],
            explicacao: ".table-striped adiciona listras zebradas (linhas alternadas). .table-bordered adiciona bordas em todas as células. .table-hover destaca a linha ao passar o mouse. .table-responsive torna a tabela rolável em telas pequenas. NÃO existem .table-zebra nem .table-stripes.",
            referencia: "Módulo 03 — Seção 3.3.1: Classes Principais"
        },
        {
            tipo: "multipla",
            enunciado: "Qual classe do Bootstrap 3 destaca uma linha de tabela ao passar o mouse?",
            opcoes: [".table-active", ".table-hover", ".table-highlight", ".table-focus"],
            correta: 1,
            explicacao: ".table-hover aplicada à <table> ativa o efeito de destaque em toda a linha quando o mouse passa sobre ela. É especialmente útil em tabelas com muitas colunas, ajudando a manter o alinhamento visual. .table-active (aplicada a <tr>) é outra coisa: destaca UMA linha específica.",
            referencia: "Módulo 03 — Seção 3.3.1: Classes Principais"
        },
        {
            tipo: "multipla",
            enunciado: "Qual classe coloriza uma linha de tabela de VERDE para indicar sucesso no Bootstrap 3?",
            opcoes: [".row-success", ".table-success", ".success (aplicada ao tr)", ".green-row"],
            correta: 2,
            explicacao: "No Bootstrap 3, as classes contextuais de linha são aplicadas DIRETAMENTE ao <tr>: .success (verde), .info (azul), .warning (amarelo), .danger (vermelho) e .active (cinza). No Bootstrap 4/5, a nomenclatura mudou para .table-success, .table-danger, etc.",
            referencia: "Módulo 03 — Seção 3.3.2: Linhas com Contexto"
        },
        {
            tipo: "flashcard",
            enunciado: "Qual a diferença entre aplicar .table-striped e .table-hover em uma tabela Bootstrap 3?",
            resposta: ".table-striped adiciona LISTRAS ZEBRADAS — linhas alternadas com fundo cinza claro — para melhorar a leitura de muitas linhas. É um efeito ESTÁTICO. Já .table-hover ativa o DESTAQUE DINÂMICO da linha quando o mouse passa sobre ela. As duas podem ser combinadas: .table.table-striped.table-hover — zebra + hover simultâneos.",
            referencia: "Módulo 03 — Seção 3.3.1: Classes Principais"
        },

        /* ============================================================
           TÓPICO 7 — ESTRUTURA BASE E TÉCNICA
           ============================================================ */

        {
            tipo: "vf",
            enunciado: "O Bootstrap 3 aplica globalmente box-sizing: border-box a todos os elementos.",
            resposta: true,
            explicacao: "Correto! Isso faz com que width e height INCLUAM o padding e a borda, simplificando o cálculo de layouts. Uma div com width:100px, padding:10px e border:5px ocupa exatamente 100px.",
            referencia: "Módulo 03 — Seção 4.1: O Template Básico"
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
            explicacao: "A meta viewport é a mais importante para a responsividade. Ela instrui o navegador a definir a largura da viewport igual à largura do dispositivo e a não aplicar zoom inicial. Sem ela, dispositivos móveis renderizam a página como desktop, forçando o usuário a fazer zoom.",
            referencia: "Módulo 03 — Seção 4.1.1: Meta Tags Obrigatórias"
        },
        {
            tipo: "vf",
            enunciado: "A meta tag X-UA-Compatible (com valor IE=edge) força o Internet Explorer a usar a versão MAIS RECENTE do seu motor de renderização.",
            resposta: true,
            explicacao: "Correto! A meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\" instrui o IE a usar a versão mais moderna disponível, evitando o 'modo de compatibilidade' — que quebraria layouts modernos do Bootstrap. É uma das duas meta tags obrigatórias do template Bootstrap 3.",
            referencia: "Módulo 03 — Seção 4.1.1: Meta Tags Obrigatórias"
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
            explicacao: "Faltam DUAS meta tags essenciais: (1) meta http-equiv X-UA-Compatible (força o IE a usar a versão moderna); (2) meta viewport (habilita a responsividade em mobile). Sem a viewport, o site NÃO será responsivo em celulares.",
            referencia: "Módulo 03 — Seção 4.1.1: Meta Tags Obrigatórias"
        },
        {
            tipo: "multipla",
            enunciado: "Qual biblioteca JavaScript é dependência OBRIGATÓRIA do Bootstrap 3?",
            opcoes: ["Vue.js", "React.js", "jQuery", "Angular"],
            correta: 2,
            explicacao: "O Bootstrap 3 depende do jQuery. Todos os seus plugins foram construídos em cima dessa biblioteca. Sem o jQuery carregado ANTES do bootstrap.min.js, os plugins não funcionam. No Bootstrap 5 essa dependência foi removida, mas o M3 ainda exige jQuery.",
            referencia: "Módulo 03 — Seção 4.6: jQuery: A Dependência dos Plugins"
        },
        {
            tipo: "ordenar",
            enunciado: "Ordene os arquivos na ORDEM CORRETA em que devem ser incluídos no HTML:",
            itens: [
                "bootstrap.min.css (no head)",
                "jquery.min.js (antes do bootstrap.js)",
                "bootstrap.min.js (após o jQuery)"
            ],
            explicacao: "A ordem é: (1) CSS no head para evitar FOUC (flash de conteúdo sem estilo); (2) jQuery ANTES do bootstrap.js, porque os plugins dependem dele; (3) bootstrap.js por último. Essa ordem garante que os estilos sejam aplicados logo e os plugins funcionem corretamente.",
            referencia: "Módulo 03 — Seção 4.3: Integração de Arquivos CSS e JavaScript"
        },
        {
            tipo: "multipla-resposta",
            enunciado: "Marque TODOS os arquivos que compõem a estrutura padrão de um projeto Bootstrap 3 (versão compilada):",
            opcoes: [
                "bootstrap.min.css",
                "jquery.min.js",
                "bootstrap.min.js",
                "bootstrap.php",
                "bootstrap.json",
                "glyphicons-halflings-regular.woff"
            ],
            corretas: [0, 1, 2, 5],
            explicacao: "Um projeto Bootstrap 3 típico inclui: bootstrap.min.css (framework), jquery.min.js (dependência dos plugins), bootstrap.min.js (plugins JS) e os arquivos de fonte do Glyphicons (woff, ttf, eot, svg). NÃO existem bootstrap.php nem bootstrap.json — são extensões inventadas.",
            referencia: "Módulo 03 — Seção 4.5: Instalação e Estrutura de Pastas"
        },
        {
            tipo: "flashcard",
            enunciado: "Para que servem o HTML5 Shiv e o Respond.js no Bootstrap 3?",
            resposta: "São dois POLYFILLS (scripts de compatibilidade) para Internet Explorer 8 e anteriores. (1) HTML5 Shiv permite que o IE8 reconheça e estilize as novas tags semânticas do HTML5 (header, nav, section, etc). (2) Respond.js adiciona suporte a MEDIA QUERIES CSS3 no IE8, permitindo que o grid responsivo funcione. Ambos são incluídos via comentários condicionais (só carregam em IEs antigos).",
            referencia: "Módulo 03 — Seção 4.4: Compatibilidade com Navegadores Antigos (IE8)"
        },

        /* ============================================================
           TÓPICO 8 — jQuery E PLUGINS
           ============================================================ */

        {
            tipo: "vf-justificativa",
            enunciado: "O Bootstrap 3 pode ser usado SEM a biblioteca jQuery.",
            resposta: false,
            justificativas: [
                "Porque o jQuery é usado só para o CSS, e sem ele o layout quebra.",
                "Porque os plugins JavaScript do Bootstrap (dropdowns, modais, tooltips) foram construídos em cima do jQuery.",
                "Porque o jQuery é obrigatório por licença do Bootstrap."
            ],
            justificativaCorreta: 1,
            explicacao: "O Bootstrap 3 DEPENDE do jQuery para todos os seus plugins JavaScript. Sem o jQuery, funcionalidades como dropdowns, modais, tooltips, abas e carrosséis NÃO funcionam. CSS e grid continuam funcionando — só os COMPONENTES INTERATIVOS quebram. A dependência só foi removida no Bootstrap 5.",
            referencia: "Módulo 03 — Seção 4.6: jQuery: A Dependência dos Plugins"
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
            explicacao: "O jQuery DEVE ser carregado ANTES do bootstrap.min.js. Como os plugins do Bootstrap dependem do jQuery, carregar o Bootstrap primeiro causa erro de JavaScript (ele tenta usar $ antes do jQuery existir). A ordem correta: 1º jQuery, 2º Bootstrap.",
            referencia: "Módulo 03 — Seção 4.3: Integração de Arquivos CSS e JavaScript"
        },
        {
            tipo: "debug-multiplo",
            enunciado: "Esta página Bootstrap tem 3 erros de setup. Marque TODOS eles:",
            codigo: '\x3C!DOCTYPE html\x3E\n\x3Chtml\x3E\n\x3Chead\x3E\n  \x3Ctitle\x3EMinha Página\x3C/title\x3E\n\x3C/head\x3E\n\x3Cbody\x3E\n  \x3Ch1\x3EOlá\x3C/h1\x3E\n  \x3Cscript src="js/bootstrap.min.js"\x3E\x3C/script\x3E\n  \x3Cscript src="js/jquery.min.js"\x3E\x3C/script\x3E\n\x3C/body\x3E\n\x3C/html\x3E',
            opcoes: [
                { texto: "Falta a meta charset UTF-8", correta: true },
                { texto: "Faltam as meta tags X-UA-Compatible e viewport", correta: true },
                { texto: "A ordem dos scripts está invertida — jQuery deveria vir antes do Bootstrap", correta: true },
                { texto: "Falta o arquivo CSS do Bootstrap", correta: false },
                { texto: "Não se deve usar DOCTYPE em Bootstrap", correta: false }
            ],
            explicacao: "Erro 1: falta meta charset — caracteres especiais vão aparecer errados. Erro 2: faltam X-UA-Compatible e viewport — sem elas, não há responsividade. Erro 3: ordem dos scripts invertida — jQuery precisa vir primeiro. Os itens 4 e 5 são falsos: o CSS é opcional se não usar estilos, mas o ideal é incluí-lo; DOCTYPE é obrigatório em HTML5.",
            referencia: "Módulo 03 — Seção 4: Estrutura Base"
        }
    ]
};