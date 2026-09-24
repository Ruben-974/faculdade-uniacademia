/* ============================================================
   BANCO DE QUESTÕES — MÓDULO 01 (HTML)
   ------------------------------------------------------------
   Total: 65 questões ÚNICAS (sem duplicatas)
   Cobre os 8 tópicos do M1
   ------------------------------------------------------------
   Tipos: vf, vf-justificativa, multipla, multipla-resposta,
          complete, complete-multiplo, erro, debug-multiplo,
          associacao, ordenar, categorizacao, flashcard, predicao
   ⚠️ Use \x3C no lugar de < dentro das strings.
   ============================================================ */
window.QUIZ_DATA = {
    questoes: [

        /* ============================================================
           TÓPICO 1 — ESTRUTURA E SINTAXE
           ============================================================ */

        {
            tipo: "vf",
            enunciado: "A tag \x3Ctitle> deve ficar dentro da seção \x3Chead> do documento HTML.",
            resposta: true,
            explicacao: "Correto! O \x3Ctitle> pertence ao \x3Chead> e define o texto exibido na aba/barra do navegador — não aparece no corpo da página. O \x3Chead> guarda metadados (charset, title, links para CSS), enquanto o \x3Cbody> guarda o conteúdo visível.",
            referencia: "Módulo 01 — Seção 1.2: Estrutura Básica do Arquivo HTML"
        },
        {
            tipo: "vf",
            enunciado: "O HTML cria páginas estáticas, sem animação.",
            resposta: true,
            explicacao: "Correto! O material destaca: 'O HTML cria páginas estáticas, sem animação'. Ele define ESTRUTURA e CONTEÚDO. Para interatividade e animações, é preciso JavaScript e CSS.",
            referencia: "Módulo 01 — Seção 1.1: O que é HTML? Definição e Propósito"
        },
        {
            tipo: "vf",
            enunciado: "A tag \x3Cbr> é uma tag vazia (void element), ou seja, não precisa de fechamento.",
            resposta: true,
            explicacao: "Correto! A tag br é void — não tem fechamento. Ela apenas insere uma quebra de linha. O mesmo vale para hr, img, input, meta e link.",
            referencia: "Módulo 01 — Seção 7.3: Quebra de Linha e Régua Horizontal"
        },
        {
            tipo: "vf",
            enunciado: "A tag \x3Cimg> possui tag de fechamento obrigatória: \x3C/img>.",
            resposta: false,
            explicacao: "Falso! \x3Cimg> é uma tag VAZIA (void element) — NÃO possui tag de fechamento. Ela se fecha em si mesma. O mesmo vale para br, hr e input.",
            referencia: "Módulo 01 — Seção 5.1: A Tag img e Sua Sintaxe"
        },
        {
            tipo: "vf-justificativa",
            enunciado: "A seção \x3Chead> deve vir ANTES da seção \x3Cbody> no documento HTML.",
            resposta: true,
            justificativas: [
                "Porque o \x3Chead> contém metadados que precisam ser lidos pelo navegador antes de renderizar o conteúdo.",
                "Porque o \x3Cbody> não funciona se não houver um \x3Chead> antes.",
                "Porque o \x3Chead> é uma tag mais importante hierarquicamente."
            ],
            justificativaCorreta: 0,
            explicacao: "A ordem correta é: html → head → body. O navegador precisa ler os metadados (charset, title, links para CSS) ANTES de renderizar o conteúdo. Sem o charset, por exemplo, acentos podem aparecer errados na página inteira.",
            referencia: "Módulo 01 — Seção 1.2: Estrutura Básica do Arquivo HTML"
        },
        {
            tipo: "multipla",
            enunciado: "Qual é a estrutura CORRETA de um documento HTML5?",
            opcoes: [
                "html → body → head",
                "html → head → body",
                "head → html → body",
                "body → head → html"
            ],
            correta: 1,
            explicacao: "A estrutura correta é: html (raiz), contendo head (metadados) e, EM SEGUIDA, body (conteúdo visível). O head deve vir SEMPRE antes do body.",
            referencia: "Módulo 01 — Seção 1.2: Estrutura Básica do Arquivo HTML"
        },
        {
            tipo: "multipla",
            enunciado: "Qual tag define o título que aparece na ABA ou barra do navegador (e não no corpo da página)?",
            opcoes: ["\x3Ch1>", "\x3Ctitle>", "\x3Cheader>", "\x3Ccaption>"],
            correta: 1,
            explicacao: "A tag title fica dentro do head e define o texto da aba do navegador — não é exibido no conteúdo da página. A h1 é o título principal DENTRO do corpo. header é uma seção semântica do HTML5, e caption é o título de uma tabela.",
            referencia: "Módulo 01 — Seção 1.2: Estrutura Básica do Arquivo HTML"
        },
        {
            tipo: "ordenar",
            enunciado: "Ordene a hierarquia correta do documento HTML, de fora para dentro:",
            itens: [
                "\x3Chtml>",
                "\x3Chead>",
                "\x3Ctitle>",
                "\x3Cbody>"
            ],
            explicacao: "A estrutura correta é: html envolve tudo; dentro dele, o head vem PRIMEIRO (contém metadados, incluindo o title); e o body vem DEPOIS (contém o conteúdo visível). O title fica dentro do head.",
            referencia: "Módulo 01 — Seção 1.2: Estrutura Básica do Arquivo HTML"
        },
        {
            tipo: "erro",
            enunciado: "Há um erro estrutural no documento abaixo. Aponte qual é:",
            codigo: '\x3Chtml>\n  \x3Cbody>\n    \x3Chead>\n      \x3Ctitle>Meu site\x3C/title>\n    \x3C/head>\n    \x3Ch1>Bem-vindo\x3C/h1>\n  \x3C/body>\n\x3C/html>',
            opcoes: [
                "A tag title deveria estar dentro do body",
                "A seção head deve vir ANTES do body, nunca dentro dele",
                "A tag h1 não pode estar dentro do body",
                "O código está correto"
            ],
            correta: 1,
            explicacao: "A estrutura correta do documento HTML é: html → head (primeiro) → body. O head contém metadados e deve vir ANTES do body. Do jeito que está, o head está aninhado dentro do body, o que é semanticamente inválido.",
            referencia: "Módulo 01 — Seção 1.2: Estrutura Básica do Arquivo HTML"
        },
        {
            tipo: "debug-multiplo",
            enunciado: "Este documento tem 3 erros. Marque TODOS eles:",
            codigo: '\x3Chtml>\n  \x3Cbody>\n    \x3Chead>\n      \x3Ctitle>Meu site\x3C/title>\n    \x3C/head>\n    \x3Ch1>Bem-vindo\x3Ch1>\n  \x3C/body>\n\x3C/html>',
            opcoes: [
                { texto: "A seção head está dentro do body (deveria vir antes)", correta: true },
                { texto: "A tag title não deveria estar no head", correta: false },
                { texto: "A tag h1 não foi fechada (falta </h1>)", correta: true },
                { texto: "A tag html deveria ser HTML em maiúsculas", correta: false },
                { texto: "O body deveria vir antes do head", correta: true }
            ],
            explicacao: "Os 3 erros são: (1) o head está DENTRO do body, quando deveria vir ANTES; (2) a tag h1 não foi fechada corretamente (falta </h1>); (3) consequência direta do erro 1 — o body aparece antes do head, invertendo a ordem correta. Os outros itens são falsos: title pertence ao head; tags HTML são case-insensitive.",
            referencia: "Módulo 01 — Seção 1.2: Estrutura Básica do Arquivo HTML"
        },

        /* ============================================================
           TÓPICO 2 — LISTAS
           ============================================================ */

        {
            tipo: "vf",
            enunciado: "A tag \x3Cul> cria listas NÃO ordenadas (com marcadores como •, ○, ▪).",
            resposta: true,
            explicacao: "Correto! ul = Unordered List. Os marcadores são controlados pelo atributo type (disc, circle, square, none). Para listas ORDENADAS, usa-se ol.",
            referencia: "Módulo 01 — Seção 2.2: Listas Não Ordenadas ul"
        },
        {
            tipo: "multipla",
            enunciado: "Qual tag é usada para criar uma lista de DEFINIÇÃO (termo + descrição)?",
            opcoes: ["\x3Col>", "\x3Cul>", "\x3Cdl>", "\x3Cdir>"],
            correta: 2,
            explicacao: "A tag dl (Definition List) cria listas de definição, usadas para pares termo + descrição. Dentro dela usam-se dt (Definition Term) e dd (Definition Description).",
            referencia: "Módulo 01 — Seção 2.4: Listas de Definição"
        },
        {
            tipo: "multipla",
            enunciado: "Qual valor do atributo type em uma lista \x3Col> cria uma listagem com letras maiúsculas (A, B, C)?",
            opcoes: ["\"1\"", "\"A\"", "\"a\"", "\"I\""],
            correta: 1,
            explicacao: "type=\"A\" cria lista alfabética MAIÚSCULA. Outros valores: \"1\" (numérica, padrão), \"a\" (minúscula), \"I\" (romano maiúsculo), \"i\" (romano minúsculo).",
            referencia: "Módulo 01 — Seção 2.1.2: Atributo type — Tipo de Ordenação"
        },
        {
            tipo: "complete",
            enunciado: "Complete o código abaixo para que a lista alfabética comece na letra C:",
            codigo: '\x3Col type="A" {{GAP}}="3">\n  \x3Cli>Primeiro item\x3C/li>\n  \x3Cli>Segundo item\x3C/li>\n\x3C/ol>',
            opcoes: ["begin", "start", "from", "first"],
            correta: 1,
            explicacao: "O atributo start define em que VALOR a lista ordenada começa. Com type=\"A\" e start=\"3\", a lista inicia em C (1=A, 2=B, 3=C).",
            referencia: "Módulo 01 — Seção 2.1.3: Atributo start — Valor Inicial"
        },
        {
            tipo: "erro",
            enunciado: "Há um erro no código abaixo. Aponte qual é:",
            codigo: '\x3Cul>\n  \x3Cli>Primeiro item\n  \x3Cli>Segundo item\x3C/li>\n  \x3Cli>Terceiro item\x3C/li>\n\x3C/ul>',
            opcoes: [
                "A tag ul deveria ser ol",
                "Falta fechar a tag li do primeiro item",
                "A tag li não pode ser usada dentro de ul",
                "O código está correto"
            ],
            correta: 1,
            explicacao: "O primeiro li foi aberto mas nunca fechado com </li>. Embora a maioria dos navegadores 'conserte' isso automaticamente, o código está tecnicamente incorreto. Sempre feche todas as tags!",
            referencia: "Módulo 01 — Seção 1.3: Sintaxe dos Comandos HTML"
        },
        {
            tipo: "debug-multiplo",
            enunciado: "Esta lista tem 3 erros. Marque TODOS eles:",
            codigo: '\x3Col>\n  \x3Cli>Primeiro item\n  \x3Cli>Segundo item\x3C/li>\n  \x3Cul>\n    \x3Cli>Subitem\x3C/li>\n  \x3C/ul>\n\x3C/ol>',
            opcoes: [
                { texto: "O primeiro li não foi fechado com </li>", correta: true },
                { texto: "Uma ul está aninhada fora de um li (deveria estar dentro de um li)", correta: true },
                { texto: "Falta o </li> do segundo item antes de abrir a ul", correta: true },
                { texto: "ol não pode conter ul dentro", correta: false },
                { texto: "Subitem deveria usar <p> em vez de <li>", correta: false }
            ],
            explicacao: "Em HTML, para aninhar uma lista dentro de outra, a sublista DEVE ficar DENTRO de um <li> pai. Aqui faltam 3 fechamentos: o </li> do primeiro item, o </li> do segundo item (antes da ul), e a ul está fora do li.",
            referencia: "Módulo 01 — Seção 2.3: Listas Aninhadas"
        },
        {
            tipo: "associacao",
            enunciado: "Relacione cada TIPO DE LISTA com sua tag e uso:",
            pares: [
                { esquerda: "ol", direita: "Ordenada — quando a ordem importa" },
                { esquerda: "ul", direita: "Não ordenada — quando a ordem não importa" },
                { esquerda: "dl", direita: "Definição — termo + descrição" },
                { esquerda: "li", direita: "Item individual dentro de ol ou ul" }
            ],
            explicacao: "ol = ordenada (numerada); ul = não ordenada (com marcadores); dl = definição (com dt e dd); li = item genérico usado dentro de ol e ul.",
            referencia: "Módulo 01 — Seção 2.5: Resumo dos Tipos de Listas"
        },
        {
            tipo: "categorizacao",
            enunciado: "Classifique cada tag de lista na categoria correta:",
            categorias: ["Ordenada", "Não ordenada", "Definição"],
            itens: [
                { texto: "\x3Col>", categoria: "Ordenada" },
                { texto: "\x3Cul>", categoria: "Não ordenada" },
                { texto: "\x3Cdl>", categoria: "Definição" },
                { texto: "\x3Cdt>", categoria: "Definição" },
                { texto: "\x3Cdd>", categoria: "Definição" },
                { texto: "\x3Cli>", categoria: "Não ordenada" }
            ],
            explicacao: "ol = ordenada (numerada); ul = não ordenada (com marcadores); dl = definição (com dt para termo e dd para descrição); li é usado dentro de ol E ul. As tags dt e dd só existem dentro de dl.",
            referencia: "Módulo 01 — Seção 2.5: Resumo dos Tipos de Listas"
        },

        /* ============================================================
           TÓPICO 3 — TABELAS
           ============================================================ */

        {
            tipo: "vf",
            enunciado: "O atributo colspan mescla células HORIZONTALMENTE em uma tabela HTML.",
            resposta: true,
            explicacao: "Correto! colspan = coluna. Ele mescla horizontalmente. Para mesclar verticalmente (em linhas), usa-se rowspan.",
            referencia: "Módulo 01 — Seção 3.5: colspan e rowspan — Mesclagem de Células"
        },
        {
            tipo: "vf-justificativa",
            enunciado: "O atributo rowspan mescla células verticalmente em uma tabela.",
            resposta: true,
            justificativas: [
                "Porque row = linha; rowspan estende a célula por várias linhas.",
                "Porque row = coluna; rowspan estende a célula por várias colunas.",
                "Porque rowspan só funciona em tabelas sem borda."
            ],
            justificativaCorreta: 0,
            explicacao: "row = linha em inglês. rowspan estende a célula verticalmente, ocupando várias linhas. colspan = coluna; estende horizontalmente. Mnemônico: col = coluna; row = linha.",
            referencia: "Módulo 01 — Seção 3.5: colspan e rowspan — Mesclagem de Células"
        },
        {
            tipo: "multipla",
            enunciado: "Qual tag representa uma LINHA de tabela em HTML?",
            opcoes: ["\x3Ctd>", "\x3Cth>", "\x3Ctr>", "\x3Ctable>"],
            correta: 2,
            explicacao: "A tag tr vem de 'table row'. Dentro dela ficam as células: th (cabeçalho) e td (dados). A tag table é o contêiner principal.",
            referencia: "Módulo 01 — Seção 3.1: Estrutura da Tabela"
        },
        {
            tipo: "multipla",
            enunciado: "Qual tag fornece um TÍTULO a uma tabela, geralmente exibido acima dela?",
            opcoes: ["\x3Ctitle>", "\x3Ccaption>", "\x3Cth>", "\x3Cheader>"],
            correta: 1,
            explicacao: "A tag caption é usada DENTRO da table para fornecer uma legenda/título visível. A tag title pertence ao head do documento (título da aba).",
            referencia: "Módulo 01 — Seção 3.6: Tabela-Resumo dos Elementos"
        },
        {
            tipo: "erro",
            enunciado: "Há um erro estrutural na tabela abaixo. Aponte qual é:",
            codigo: '\x3Ctable border="1">\n  \x3Cth>Nome\x3C/th>\n  \x3Cth>Idade\x3C/th>\n  \x3Ctr>\n    \x3Ctd>Ana\x3C/td>\n    \x3Ctd>20\x3C/td>\n  \x3C/tr>\n\x3C/table>',
            opcoes: [
                "A tag table deveria ser tab",
                "As tags th devem estar dentro de uma linha tr",
                "border não aceita o valor 1",
                "O código está correto"
            ],
            correta: 1,
            explicacao: "As tags th devem SEMPRE estar dentro de uma linha tr. A estrutura correta é: table → tr → th (cabeçalho) ou td (dados).",
            referencia: "Módulo 01 — Seção 3.1: Estrutura da Tabela"
        },
        {
            tipo: "erro",
            enunciado: "Há um erro estrutural na tabela abaixo. Aponte qual é:",
            codigo: '\x3Ctable>\n  \x3Cthead>\n    \x3Ctd>Nome\x3C/td>\n    \x3Ctd>Idade\x3C/td>\n  \x3C/thead>\n\x3C/table>',
            opcoes: [
                "thead não pode ser usado em table",
                "Dentro de thead devem ser usados th (células de cabeçalho), não td",
                "Faltou a tag caption",
                "O código está correto"
            ],
            correta: 1,
            explicacao: "Dentro de thead, as células devem ser th (table header) — que já vêm em negrito e centralizadas por padrão. Usar td dentro de thead é semanticamente incorreto.",
            referencia: "Módulo 01 — Seção 3.1: Estrutura da Tabela"
        },

        /* ============================================================
           TÓPICO 4 — FORMULÁRIOS
           ============================================================ */

        {
            tipo: "vf",
            enunciado: "O método GET do formulário anexa os dados ao endereço (URL) do servidor.",
            resposta: true,
            explicacao: "Correto! O GET exibe os dados do formulário na própria URL. Isso tem limite de aproximadamente 2000 caracteres e baixa segurança. Já o POST envia os dados no corpo da requisição, invisíveis na URL, e é o método indicado para login, cadastro e senhas.",
            referencia: "Módulo 01 — Seção 4.1: A Tag form e Atributos"
        },
        {
            tipo: "vf-justificativa",
            enunciado: "É MAIS SEGURO usar o método GET do que o POST para enviar senhas em um formulário de login.",
            resposta: false,
            justificativas: [
                "Porque o GET criptografa os dados automaticamente.",
                "Porque o GET anexa os dados à URL, ficando visíveis no histórico, logs e barra de endereço.",
                "Porque o GET tem limite de 2000 caracteres, o que torna o login mais rápido."
            ],
            justificativaCorreta: 1,
            explicacao: "O GET anexa os dados à URL — senhas ficariam visíveis na barra de endereço, no histórico do navegador, em logs de servidor e em servidores proxy. Já o POST envia os dados no CORPO da requisição, invisíveis na URL. Para login, SEMPRE POST.",
            referencia: "Módulo 01 — Seção 4.1: A Tag form e Atributos"
        },
        {
            tipo: "multipla",
            enunciado: "Qual valor do atributo type do input exibe ASTERISCOS no lugar dos caracteres digitados?",
            opcoes: ["text", "password", "hidden", "secret"],
            correta: 1,
            explicacao: "O type password oculta os caracteres com asteriscos. O type text exibe normalmente, e hidden oculta o campo inteiro (não aparece na tela).",
            referencia: "Módulo 01 — Seção 4.2: A Tag input e Seus Tipos"
        },
        {
            tipo: "multipla",
            enunciado: "Qual método HTTP envia os dados do formulário no CORPO da requisição, sem exibi-los na URL?",
            opcoes: ["GET", "POST", "PUT", "SEND"],
            correta: 1,
            explicacao: "O POST envia os dados no corpo da requisição — invisíveis na URL. É o método indicado para login, cadastro e qualquer dado sensível. O GET anexa à URL e é usado para buscas.",
            referencia: "Módulo 01 — Seção 4.1: A Tag form e Atributos"
        },
        {
            tipo: "multipla",
            enunciado: "Qual atributo do form define a URL do programa que irá processar os dados enviados?",
            opcoes: ["method", "href", "action", "target"],
            correta: 2,
            explicacao: "O action define a URL (endereço) que irá PROCESSAR os dados do formulário. O method define COMO os dados serão enviados (GET ou POST).",
            referencia: "Módulo 01 — Seção 4.1: A Tag form e Atributos"
        },
        {
            tipo: "multipla",
            enunciado: "Qual tag agrupa um conjunto de opções dentro de um dropdown (select)?",
            opcoes: ["\x3Coptgroup>", "\x3Cgroup>", "\x3Coptions>", "\x3Cselectgroup>"],
            correta: 0,
            explicacao: "A tag optgroup agrupa visualmente opções dentro de um select, usando o atributo label para definir o rótulo do grupo.",
            referencia: "Módulo 01 — Seção 4.8: Exemplo com Endereço (optgroup e datalist)"
        },
        {
            tipo: "multipla",
            enunciado: "Qual tag cria uma área de texto MULTILINHA para entrada livre do usuário?",
            opcoes: ["\x3Cinput type=\"text\">", "\x3Ctext>", "\x3Ctextarea>", "\x3Cmultiline>"],
            correta: 2,
            explicacao: "A textarea cria uma área de digitação com múltiplas linhas. Seus atributos rows e cols definem as dimensões visuais.",
            referencia: "Módulo 01 — Seção 4.5: Tag textarea"
        },
        {
            tipo: "multipla",
            enunciado: "Qual atributo HTML permite exibir SUGESTÕES de preenchimento automaticamente ao digitar em um input?",
            opcoes: ["autocomplete", "suggestions", "datalist", "autofill"],
            correta: 2,
            explicacao: "O datalist fornece uma lista de sugestões para um input. Ele é referenciado pelo atributo list do input: input list=\"cidades\" + datalist id=\"cidades\".",
            referencia: "Módulo 01 — Seção 4.8: Exemplo com Endereço (optgroup e datalist)"
        },
        {
            tipo: "multipla-resposta",
            enunciado: "Marque TODOS os tipos de input que EXISTEM em HTML:",
            opcoes: ["text", "password", "checkbox", "radio", "sentence", "color"],
            corretas: [0, 1, 2, 3, 5],
            explicacao: "Existem: text, password, checkbox, radio, color (entre outros: email, number, date, range, submit, reset). Não existe input type='sentence' em HTML.",
            referencia: "Módulo 01 — Seção 4.2: A Tag input e Seus Tipos"
        },
        {
            tipo: "complete",
            enunciado: "Complete o código abaixo para que o checkbox já venha MARCADO por padrão:",
            codigo: '\x3Cinput type="checkbox" name="termos" {{GAP}}> Aceito os termos',
            opcoes: ["selected", "checked", "default", "marked"],
            correta: 1,
            explicacao: "O atributo correto é checked (sem valor). Ele deixa o checkbox ou radio pré-marcado. Já selected é usado em options de um select.",
            referencia: "Módulo 01 — Seção 4.3: Atributos da Tag input"
        },
        {
            tipo: "complete",
            enunciado: "Complete o código abaixo para agrupar opções de estado por região:",
            codigo: '\x3Cselect name="estado">\n  \x3C{{GAP}} label="Sudeste">\n    \x3Coption value="SP">São Paulo\x3C/option>\n    \x3Coption value="RJ">Rio de Janeiro\x3C/option>\n  \x3C/optgroup>\n\x3C/select>',
            opcoes: ["group", "optgroup", "selectgroup", "fieldset"],
            correta: 1,
            explicacao: "A tag correta é optgroup. Ela agrupa visualmente opções dentro de um select, com um rótulo definido no atributo label.",
            referencia: "Módulo 01 — Seção 4.8: Exemplo com Endereço (optgroup e datalist)"
        },
        {
            tipo: "complete-multiplo",
            enunciado: "Complete o formulário para que envie a senha de forma SEGURA para processar.php:",
            codigo: '\x3Cform action="processar.php" method="{{GAP1}}">\n  \x3Cinput type="{{GAP2}}" name="senha">\n  \x3Cinput type="submit" value="Entrar">\n\x3C/form>',
            gaps: [
                { opcoes: ["get", "post", "send"], correta: 1 },
                { opcoes: ["text", "password", "hidden"], correta: 1 }
            ],
            explicacao: "method=\"post\" é o correto para enviar senhas — os dados vão no corpo da requisição, invisíveis na URL. Já type=\"password\" oculta os caracteres digitados com asteriscos. A dupla POST + password é o padrão para qualquer formulário de login.",
            referencia: "Módulo 01 — Seção 4.1 e 4.2: form e input"
        },
        {
            tipo: "erro",
            enunciado: "Há um problema no formulário abaixo. Aponte qual é:",
            codigo: '\x3Cform action="processa.php" method="get">\n  \x3Cinput type="password" name="senha">\n  \x3Cinput type="submit">\n\x3C/form>',
            opcoes: [
                "type password não pode ser usado em form",
                "Usar GET para enviar senha é inseguro — os dados ficam visíveis na URL",
                "Faltou o atributo name no submit",
                "O código está correto"
            ],
            correta: 1,
            explicacao: "Senhas NUNCA devem ser enviadas via GET. Os dados ficam visíveis na URL, no histórico do navegador, em logs de servidor. O correto é method=\"post\".",
            referencia: "Módulo 01 — Seção 4.1: A Tag form e Atributos"
        },
        {
            tipo: "debug-multiplo",
            enunciado: "Este formulário tem 3 erros. Marque TODOS eles:",
            codigo: '\x3Cform action="login.php" method="get">\n  \x3Clabel>Email:\x3C/label>\n  \x3Cinput type="email" id="email">\n  \x3Cinput type="password" name="senha">\n  \x3Cinput type="submit" value="Entrar">\n\x3C/form>',
            opcoes: [
                { texto: "Usar GET para login expõe a senha na URL — deveria ser POST", correta: true },
                { texto: "Falta o atributo for no label, apontando para o id do input", correta: true },
                { texto: "Falta o atributo name no input de email", correta: true },
                { texto: "O input type='password' não existe em HTML", correta: false },
                { texto: "O input submit deveria ser type='button'", correta: false }
            ],
            explicacao: "Erro 1: GET expõe a senha — deve ser POST. Erro 2: o label precisa de for=\"email\" para associar ao input. Erro 3: sem name, o valor do input NÃO é enviado ao servidor — é como se o campo não existisse.",
            referencia: "Módulo 01 — Seção 4.1 e 4.3: form e atributos de input"
        },
        {
            tipo: "associacao",
            enunciado: "Relacione cada TIPO DE INPUT com o uso correto:",
            pares: [
                { esquerda: "text", direita: "Entrada de texto simples" },
                { esquerda: "password", direita: "Senha com caracteres ocultos" },
                { esquerda: "checkbox", direita: "Múltiplas seleções (SIM/NÃO)" },
                { esquerda: "radio", direita: "Seleção única entre várias opções" }
            ],
            explicacao: "text = texto livre; password = oculta caracteres; checkbox = várias opções independentes; radio = apenas uma escolha. A diferença entre checkbox e radio é: checkbox aceita múltiplas, radio apenas uma.",
            referencia: "Módulo 01 — Seção 4.2: A Tag input e Seus Tipos"
        },
        {
            tipo: "categorizacao",
            enunciado: "Classifique cada tag quanto à sua localização no formulário:",
            categorias: ["Dentro do form", "Fora do form"],
            itens: [
                { texto: "\x3Cinput>", categoria: "Dentro do form" },
                { texto: "\x3Cselect>", categoria: "Dentro do form" },
                { texto: "\x3Ctextarea>", categoria: "Dentro do form" },
                { texto: "\x3Ch1>", categoria: "Fora do form" },
                { texto: "\x3Ctable>", categoria: "Fora do form" },
                { texto: "\x3Cfieldset>", categoria: "Dentro do form" }
            ],
            explicacao: "Tags de ENTRADA de dados (input, select, textarea, fieldset, legend, label, button) ficam DENTRO do form. Tags de ESTRUTURA e conteúdo (h1-h6, p, div, table) ficam FORA — o form é para dados a enviar, não para layout.",
            referencia: "Módulo 01 — Seção 4.6: Agrupar e Organizar Campos"
        },

        /* ============================================================
           TÓPICO 5 — IMAGENS
           ============================================================ */

        {
            tipo: "vf",
            enunciado: "O atributo alt é opcional em imagens e pode ser omitido sem prejuízo.",
            resposta: false,
            explicacao: "Falso! O alt é OBRIGATÓRIO para acessibilidade. Ele fornece descrição textual para leitores de tela e aparece quando a imagem não carrega. A única exceção são imagens decorativas — mas mesmo aí usa-se alt vazio, nunca omitir.",
            referencia: "Módulo 01 — Seção 5.3: O Atributo alt — Acessibilidade e Fallback"
        },
        {
            tipo: "vf",
            enunciado: "A tag \x3Cfigcaption> é usada para adicionar uma legenda a uma imagem dentro de \x3Cfigure>.",
            resposta: true,
            explicacao: "Correto! A dupla figure + figcaption cria uma figura com legenda semântica. O figure agrupa a imagem (ou vídeo, gráfico, código) e o figcaption fornece a descrição/legenda.",
            referencia: "Módulo 01 — Seção 5.8: figure e figcaption — Legendas Semânticas"
        },
        {
            tipo: "complete-multiplo",
            enunciado: "Complete a tag de imagem com os atributos obrigatórios (caminho e descrição):",
            codigo: '\x3Cimg {{GAP1}}="foto.jpg" {{GAP2}}="Foto da família">',
            gaps: [
                { opcoes: ["src", "href", "path"], correta: 0 },
                { opcoes: ["title", "alt", "desc"], correta: 1 }
            ],
            explicacao: "src (source) define o CAMINHO da imagem. alt (alternative text) fornece a descrição textual, obrigatória para acessibilidade. Lembre-se: src = de onde vem; href = para onde vai. E alt ≠ title — o title é apenas uma dica de ferramenta.",
            referencia: "Módulo 01 — Seção 5.2 e 5.3: src e alt"
        },
        {
            tipo: "erro",
            enunciado: "Há um erro no código abaixo. Aponte qual é:",
            codigo: '\x3Cimg src="logo.png" width="150" height="80">',
            opcoes: [
                "width e height não podem ser usados juntos",
                "Falta o atributo alt, obrigatório para acessibilidade",
                "src deveria ser href para imagens",
                "O código está correto"
            ],
            correta: 1,
            explicacao: "O atributo alt está ausente. Ele é OBRIGATÓRIO para acessibilidade: leitores de tela leem seu conteúdo para usuários com deficiência visual, e ele aparece quando a imagem não carrega.",
            referencia: "Módulo 01 — Seção 5.3: O Atributo alt"
        },
        {
            tipo: "erro",
            enunciado: "Há um problema no código abaixo. Aponte qual é:",
            codigo: '\x3Cimg src="banner.jpg" width="800">',
            opcoes: [
                "src deveria ser href",
                "A imagem pode ficar distorcida sem height definido proporcional",
                "Falta o atributo type",
                "O código está correto"
            ],
            correta: 1,
            explicacao: "Definir apenas width faz o navegador calcular a altura proporcionalmente — o que normalmente é OK. Mas se a imagem original tiver proporção diferente do esperado, ela pode ficar distorcida. Aqui também falta o alt obrigatório.",
            referencia: "Módulo 01 — Seção 5.4: Atributos de Dimensão: width e height"
        },

        /* ============================================================
           TÓPICO 6 — LINKS
           ============================================================ */

        {
            tipo: "vf",
            enunciado: "O atributo target=\"_blank\" em um link faz com que ele abra em uma NOVA aba ou janela do navegador.",
            resposta: true,
            explicacao: "Correto! O target define ONDE o link será aberto. Os valores principais são: _self (mesma aba, padrão), _blank (nova aba), _parent e _top (frames, obsoletos). Recomenda-se usar rel=\"noopener noreferrer\" junto com _blank por segurança.",
            referencia: "Módulo 01 — Seção 6.2: O Atributo target"
        },
        {
            tipo: "multipla",
            enunciado: "Qual atributo da tag \x3Ca> define o DESTINO do link?",
            opcoes: ["src", "link", "href", "url"],
            correta: 2,
            explicacao: "O href (Hypertext REFerence) define para onde o link aponta. O src é usado em imagens, scripts e iframes. 'link' e 'url' não existem como atributos de a. Regra: href = para onde vai; src = de onde vem.",
            referencia: "Módulo 01 — Seção 6.1: A Tag a e Sua Sintaxe"
        },
        {
            tipo: "multipla",
            enunciado: "Qual atributo do link define que ele será aberto em uma nova aba do navegador?",
            opcoes: ["href=\"_blank\"", "open=\"_blank\"", "target=\"_blank\"", "window=\"new\""],
            correta: 2,
            explicacao: "O atributo target com valor _blank é o correto. O href só define o DESTINO (URL). Adicione sempre rel=\"noopener noreferrer\" ao usar _blank.",
            referencia: "Módulo 01 — Seção 6.2: O Atributo target"
        },
        {
            tipo: "complete",
            enunciado: "Complete o código abaixo para criar um link para o site exemplo.com:",
            codigo: '\x3Ca {{GAP}}="https://exemplo.com">Visitar site\x3C/a>',
            opcoes: ["src", "href", "link", "url"],
            correta: 1,
            explicacao: "O atributo correto é href (Hypertext REFerence). Ele define o DESTINO do link. O src é usado em img, script e iframe.",
            referencia: "Módulo 01 — Seção 6.1: A Tag a e Sua Sintaxe"
        },
        {
            tipo: "complete",
            enunciado: "Complete o código abaixo para criar um link que abre o cliente de e-mail:",
            codigo: '\x3Ca href="{{GAP}}:usuario@email.com">Enviar e-mail\x3C/a>',
            opcoes: ["mail", "email", "mailto", "send"],
            correta: 2,
            explicacao: "O prefixo correto é mailto:, que instrui o navegador a abrir o cliente de e-mail padrão com o endereço preenchido. Outros: tel: (telefone), sms: (mensagem).",
            referencia: "Módulo 01 — Seção 6.3: Tipos de Links — Links para E-mail"
        },
        {
            tipo: "complete-multiplo",
            enunciado: "Complete o link para que abra em uma NOVA ABA com segurança:",
            codigo: '\x3Ca href="https://site.com" {{GAP1}}="_blank" {{GAP2}}="noopener noreferrer">Visitar\x3C/a>',
            gaps: [
                { opcoes: ["window", "target", "open"], correta: 1 },
                { opcoes: ["rel", "sec", "safe"], correta: 0 }
            ],
            explicacao: "target=\"_blank\" faz o link abrir em nova aba. rel=\"noopener noreferrer\" é a prática de SEGURANÇA recomendada: impede que a página de destino acesse a janela de origem e evita vazamento de referência. Sempre use os dois juntos.",
            referencia: "Módulo 01 — Seção 6.2: O Atributo target"
        },
        {
            tipo: "ordenar",
            enunciado: "Ordene as pseudo-classes de links na ordem CORRETA (LVHA):",
            itens: [
                ":link",
                ":visited",
                ":hover",
                ":active"
            ],
            explicacao: "A ordem LVHA é obrigatória: :link (não visitado) → :visited (visitado) → :hover (mouse sobre) → :active (durante o clique). Se inverter, o navegador aplica a regra errada em determinados estados. Decore como 'LoVe HAte'.",
            referencia: "Módulo 01 — Seção 6.5: Estilização com CSS (Pseudo-classes)"
        },
        {
            tipo: "flashcard",
            enunciado: "Qual a diferença entre os atributos src e href?",
            resposta: "src (source) = ORIGEM. Usado em <img>, <script>, <iframe> para indicar DE ONDE VEM o recurso. href (Hypertext REFerence) = DESTINO. Usado em <a> para indicar PARA ONDE VAI o link. Mnemônico: src = source (de onde vem); href = referência (para onde vai).",
            referencia: "Módulo 01 — Seção 5.2 e 6.1: src e href"
        },

        /* ============================================================
           TÓPICO 7 — FORMATAÇÃO DE TEXTO
           ============================================================ */

        {
            tipo: "vf",
            enunciado: "As tags \x3Cstrong> e \x3Cb> produzem o mesmo efeito VISUAL (negrito), mas \x3Cstrong> carrega significado semântico de importância.",
            resposta: true,
            explicacao: "Correto! Ambas deixam o texto em negrito, mas com propósitos diferentes. b é apenas ESTILO visual (bold), sem significado. strong indica IMPORTÂNCIA forte do conteúdo. Boa prática moderna: preferir strong (semântica) em vez de b (visual).",
            referencia: "Módulo 01 — Seção 7.4: Formatação de Texto"
        },
        {
            tipo: "multipla",
            enunciado: "Qual tag exibe o texto preservando EXATAMENTE os espaços, tabulações e quebras de linha?",
            opcoes: ["\x3Cp>", "\x3Cbr>", "\x3Cpre>", "\x3Cspan>"],
            correta: 2,
            explicacao: "A tag pre (preformatted) mantém espaços, tabulações e quebras exatamente como escritos no código-fonte. É útil para exibir código ou arte ASCII.",
            referencia: "Módulo 01 — Seção 7.3: Quebra de Linha e Régua Horizontal"
        },
        {
            tipo: "predicao",
            enunciado: "O que este código HTML renderiza na tela?",
            codigo: '\x3Cul type="square">\n  \x3Cli>Notebook\x3C/li>\n  \x3Cli>Mouse\x3C/li>\n  \x3Cli>Teclado\x3C/li>\n\x3C/ul>',
            opcoes: [
                "Uma lista NUMERADA (1, 2, 3) com os três itens",
                "Uma lista com MARCADORES QUADRADOS (▪) e os três itens",
                "Uma lista com marcadores CIRCULARES VAZADOS (○) e os três itens",
                "Uma lista SEM marcadores, só os três itens"
            ],
            correta: 1,
            explicacao: "ul cria lista NÃO ordenada. O type=\"square\" define marcadores quadrados (▪). Os outros valores de type para ul são: disc (• — padrão), circle (○ — vazado) e none (sem marcador). Como o type é 'square', os itens aparecem com quadradinhos à esquerda.",
            referencia: "Módulo 01 — Seção 2.2.2: Atributo type — Tipo de Marcador"
        },
        {
            tipo: "flashcard",
            enunciado: "O que faz a tag \x3Cpre>?",
            resposta: "Mantém EXATAMENTE os espaços, tabulações e quebras de linha como foram digitados no código-fonte. Diferente da tag <p>, que colapsa espaços extras e quebras, a <pre> preserva tudo. É ideal para exibir blocos de código ou arte ASCII.",
            referencia: "Módulo 01 — Seção 7.3: Quebra de Linha e Régua Horizontal"
        },

        /* ============================================================
           TÓPICO 8 — INTERNET, REDES E BOAS PRÁTICAS
           ============================================================ */

        {
            tipo: "vf",
            enunciado: "A Internet é um conjunto de redes interligadas que NÃO possui um administrador central único.",
            resposta: true,
            explicacao: "Correto! Segundo o material: 'A Internet é um conjunto de redes ligadas por todo o planeta. A administração é feita individualmente por empresas ou órgãos públicos. Não existe um administrador central, o que torna a conexão de baixo custo.'",
            referencia: "Módulo 01 — Seção 8.1: O que é a Internet e Sua História"
        },
        {
            tipo: "vf",
            enunciado: "O protocolo TCP/IP é o padrão de comunicação usado pela Internet.",
            resposta: true,
            explicacao: "Correto! O TCP/IP (Transmission Control Protocol / Internet Protocol) é o conjunto de protocolos que permite que computadores de redes diferentes 'conversem' entre si. O TCP garante entrega completa e ordenada; o IP endereça e roteia os pacotes.",
            referencia: "Módulo 01 — Seção 8.4: O Protocolo TCP/IP"
        },
        {
            tipo: "vf",
            enunciado: "WWW (World Wide Web) e Internet são exatamente a mesma coisa.",
            resposta: false,
            explicacao: "Falso! São conceitos diferentes: Internet é a INFRAESTRUTURA (a rede mundial de computadores, criada em 1969 com a ARPANET); WWW é um SERVIÇO que roda SOBRE a Internet — o sistema de documentos interligados por hipertexto, criado no CERN no final dos anos 80. Existem outros serviços que usam a Internet, como e-mail, FTP e SSH.",
            referencia: "Módulo 01 — Seção 8.5: A World Wide Web (WWW)"
        },
        {
            tipo: "vf",
            enunciado: "O DNS (Domain Name System) traduz nomes de domínio (como exemplo.com) em endereços IP numéricos.",
            resposta: true,
            explicacao: "Correto! O DNS é um sistema hierárquico e distribuído que traduz nomes facilmente memorizáveis (exemplo.com) nos endereços IP numéricos necessários para localizar servidores na rede. Sem ele, teríamos que decorar números como 146.164.2.68.",
            referencia: "Módulo 01 — Seção 8.6: DNS (Domain Name System)"
        },
        {
            tipo: "multipla",
            enunciado: "Qual sigla corresponde a uma rede de abrangência LOCAL (escritório, casa)?",
            opcoes: ["WAN", "MAN", "LAN", "TCP"],
            correta: 2,
            explicacao: "LAN = Local Area Network — rede local (casa, escritório, universidade). MAN = Metropolitan Area Network (cidade). WAN = Wide Area Network (longa distância, como a própria Internet). TCP é protocolo, não tipo de rede.",
            referencia: "Módulo 01 — Seção 8.2: Redes de Computadores"
        },
        {
            tipo: "multipla",
            enunciado: "Qual é a estrutura CORRETA de uma URL?",
            opcoes: [
                "servidor://protocolo/caminho",
                "protocolo://servidor/caminho/arquivo",
                "arquivo/caminho/servidor://protocolo",
                "caminho://arquivo/servidor"
            ],
            correta: 1,
            explicacao: "A URL (Uniform Resource Locator) tem o formato: protocolo://servidor/caminho/arquivo. Ex: https://www.exemplo.com/paginas/contato.html. O protocolo indica como se comunicar (http, https, ftp); o servidor é o endereço da máquina; o caminho aponta para o recurso específico.",
            referencia: "Módulo 01 — Seção 8.8: URL (Uniform Resource Locator)"
        },
        {
            tipo: "multipla",
            enunciado: "Qual foi o marco de criação da Internet, quando os militares abandonaram o controle da ARPANET?",
            opcoes: ["1969", "1975", "1983", "1991"],
            correta: 2,
            explicacao: "1983 é o marco de criação da Internet, quando os militares abandonaram o controle da ARPANET, permitindo que a rede se expandisse para instituições acadêmicas e científicas. Em 1969 surgiu a ideia inicial (ARPANET); em 1991 a Internet chegou ao Brasil.",
            referencia: "Módulo 01 — Seção 8.1: O que é a Internet e Sua História"
        },
        {
            tipo: "multipla",
            enunciado: "O que é um navegador (browser) na arquitetura Cliente-Servidor?",
            opcoes: [
                "Um servidor que armazena documentos HTML",
                "Um software CLIENTE que solicita e interpreta documentos da Web",
                "Um protocolo de comunicação entre redes",
                "Um banco de dados de páginas HTML"
            ],
            correta: 1,
            explicacao: "O navegador é o software CLIENTE. Ele SOLICITA documentos na Internet e os INTERPRETA, exibindo para o usuário. Os servidores web (como Apache e IIS) são programas que ENVIAM os documentos para as máquinas que os solicitam.",
            referencia: "Módulo 01 — Seção 8.7: Tecnologia Cliente-Servidor"
        },
        {
            tipo: "multipla-resposta",
            enunciado: "Marque TODOS os exemplos de NAVEGADORES (browsers):",
            opcoes: ["Google Chrome", "Apache", "Mozilla Firefox", "IIS", "Microsoft Edge", "Nginx"],
            corretas: [0, 2, 4],
            explicacao: "São navegadores: Google Chrome, Mozilla Firefox e Microsoft Edge. Apache, IIS e Nginx são SERVIDORES WEB — programas que ficam nas máquinas onde estão os documentos, enviando-os para os clientes que os solicitam.",
            referencia: "Módulo 01 — Seção 8.7: Tecnologia Cliente-Servidor"
        },
        {
            tipo: "associacao",
            enunciado: "Relacione cada tipo de REDE com sua abrangência:",
            pares: [
                { esquerda: "LAN", direita: "Rede local (casa, escritório)" },
                { esquerda: "MAN", direita: "Rede metropolitana (cidade)" },
                { esquerda: "WAN", direita: "Rede de longa distância (ex: Internet)" }
            ],
            explicacao: "LAN (Local Area Network) = rede local. MAN (Metropolitan Area Network) = cobre uma cidade. WAN (Wide Area Network) = longa distância, como a própria Internet.",
            referencia: "Módulo 01 — Seção 8.2: Redes de Computadores"
        },
        {
            tipo: "flashcard",
            enunciado: "Qual a diferença entre a Internet e a WWW (World Wide Web)?",
            resposta: "INTERNET é a INFRAESTRUTURA — a rede mundial de computadores interligados, criada em 1969 com a ARPANET, que usa o protocolo TCP/IP. WWW é um SERVIÇO que roda SOBRE a Internet — o sistema de documentos interligados por hipertexto, criado no CERN no final dos anos 80, que usa o protocolo HTTP/HTTPS. A Internet também suporta outros serviços (e-mail, FTP, SSH).",
            referencia: "Módulo 01 — Seção 8.5: A World Wide Web (WWW)"
        },
        {
            tipo: "erro",
            enunciado: "Há um problema na URL abaixo. Aponte qual é:",
            codigo: 'htp://www.exemplo.com/paginas/contato.html',
            opcoes: [
                "O protocolo 'htp' está errado — o correto é 'http'",
                "O caminho '/paginas/contato.html' não pode ter barra",
                "www.exemplo.com não é um servidor válido",
                "A URL está correta"
            ],
            correta: 0,
            explicacao: "O protocolo 'htp' está escrito errado — falta um 't'. O correto é 'http' (Hypertext Transfer Protocol) ou 'https' (versão segura). Sem o protocolo correto, o navegador não consegue estabelecer a comunicação com o servidor.",
            referencia: "Módulo 01 — Seção 8.8: URL (Uniform Resource Locator)"
        },
        {
            tipo: "ordenar",
            enunciado: "Ordene as etapas para PUBLICAR um site, na ordem correta:",
            itens: [
                "Registro do domínio",
                "Desenvolvimento do site (HTML, CSS, JS)",
                "Configuração do DNS",
                "Configuração do servidor web",
                "Hospedagem do site"
            ],
            explicacao: "A sequência típica é: (1) registrar o domínio; (2) desenvolver o site; (3) configurar o DNS para apontar o domínio ao servidor; (4) configurar o servidor web (Apache, IIS, etc.); (5) contratar a hospedagem. Algumas etapas podem ocorrer em paralelo, mas essa é a ordem lógica.",
            referencia: "Módulo 01 — Seção 8.9: Home Page — Etapas para Publicar um Site"
        },

        /* ============================================================
           QUESTÕES TRANSVERSAIS (cobrem múltiplos tópicos)
           ============================================================ */

        {
            tipo: "multipla-resposta",
            enunciado: "Marque TODAS as tags que são VOID elements (não possuem tag de fechamento):",
            opcoes: ["\x3Cimg>", "\x3Cdiv>", "\x3Cbr>", "\x3Cinput>", "\x3Cp>", "\x3Chr>"],
            corretas: [0, 2, 3, 5],
            explicacao: "São void elements: img, br, input e hr. Não são: div e p (ambos têm fechamento obrigatório: </div> e </p>). Void elements se fecham em si mesmos e não podem conter conteúdo.",
            referencia: "Módulo 01 — Seção 1.3: Sintaxe dos Comandos HTML"
        },
        {
            tipo: "multipla-resposta",
            enunciado: "Marque TODOS os tipos de lista que EXISTEM em HTML:",
            opcoes: ["Ordenada (ol)", "Não ordenada (ul)", "De definição (dl)", "Numérica (nl)", "Alfabética (al)"],
            corretas: [0, 1, 2],
            explicacao: "Existem 3 tipos de lista em HTML: ol (ordenada), ul (não ordenada) e dl (definição, com dt e dd). 'nl' e 'al' não existem em HTML.",
            referencia: "Módulo 01 — Seção 2.5: Resumo dos Tipos de Listas"
        },
        {
            tipo: "associacao",
            enunciado: "Relacione cada TAG com sua função correta:",
            pares: [
                { esquerda: "\x3Chtml>", direita: "Envolve todo o documento" },
                { esquerda: "\x3Chead>", direita: "Guarda metadados (title, charset, links)" },
                { esquerda: "\x3Ctitle>", direita: "Texto exibido na aba do navegador" },
                { esquerda: "\x3Cbody>", direita: "Contém o conteúdo visível da página" }
            ],
            explicacao: "O html é a raiz; o head guarda metadados que NÃO aparecem na página; o title é o texto da aba; o body contém tudo que o usuário vê (textos, imagens, listas).",
            referencia: "Módulo 01 — Seção 1.2: Estrutura Básica do Arquivo HTML"
        },
        {
            tipo: "categorizacao",
            enunciado: "Classifique cada tag como elemento BLOCK ou INLINE:",
            categorias: ["Block", "Inline"],
            itens: [
                { texto: "\x3Cdiv>", categoria: "Block" },
                { texto: "\x3Cspan>", categoria: "Inline" },
                { texto: "\x3Cp>", categoria: "Block" },
                { texto: "\x3Ca>", categoria: "Inline" },
                { texto: "\x3Ch1>", categoria: "Block" },
                { texto: "\x3Cstrong>", categoria: "Inline" }
            ],
            explicacao: "Elementos BLOCK ocupam toda a largura disponível e forçam quebra de linha (div, p, h1-h6, ul, ol, table, form). Elementos INLINE ficam na mesma linha do conteúdo ao redor (span, a, strong, em, img, br).",
            referencia: "Módulo 01 — Seção 1.3: Sintaxe dos Comandos HTML"
        },
        {
            tipo: "flashcard",
            enunciado: "Para que serve o atributo start em uma lista \x3Col>?",
            resposta: "Define em que VALOR a numeração da lista começa. Uso: <ol start=\"3\"> começa em 3 (ou C, se type=\"A\"; ou III, se type=\"I\"). Sem o start, a lista começa sempre em 1 (ou A, ou I, dependendo do type). É útil quando a lista continua em outra página/seção.",
            referencia: "Módulo 01 — Seção 2.1.3: Atributo start — Valor Inicial"
        },
        {
            tipo: "vf",
            enunciado: "A tag \x3Cdiv> é um elemento de nível bloco (block) que agrupa conteúdo.",
            resposta: true,
            explicacao: "Correto! A div (division) é um container genérico de nível BLOCO, ou seja, ocupa toda a largura disponível e força quebra de linha antes e depois. Já a span é inline — fica na mesma linha do conteúdo ao redor.",
            referencia: "Módulo 01 — Seção 1.3: Sintaxe dos Comandos HTML"
        },
        {
            tipo: "erro",
            enunciado: "Há um problema no formulário abaixo. Aponte qual é:",
            codigo: '\x3Clabel>Email:\x3C/label>\n\x3Cinput type="email" id="email">',
            opcoes: [
                "Falta o atributo for no label, apontando para o id do input",
                "O input deveria ter type text",
                "O label deveria vir depois do input",
                "O código está correto"
            ],
            correta: 0,
            explicacao: "Falta a associação entre label e input. O correto é: label for=\"email\" + input id=\"email\". Sem o for correspondente ao id, ao clicar no rótulo o campo NÃO recebe foco, e leitores de tela não associam corretamente.",
            referencia: "Módulo 01 — Seção 4.3: Atributos da Tag input"
        },
        {
            tipo: "erro",
            enunciado: "Há um problema estrutural no formulário abaixo. Aponte qual é:",
            codigo: '\x3Cfieldset>\n  \x3Cinput type="text" name="nome">\n  \x3Cinput type="email" name="email">\n\x3C/fieldset>',
            opcoes: [
                "Faltou o legend para dar título ao grupo",
                "fieldset não pode conter inputs",
                "Faltou fechar com legend",
                "O código está correto"
            ],
            correta: 0,
            explicacao: "A tag fieldset deve vir acompanhada de um legend. O legend é o TÍTULO do grupo e deve ser o PRIMEIRO filho do fieldset. Sem ele, o agrupamento fica sem descrição, o que é ruim para acessibilidade.",
            referencia: "Módulo 01 — Seção 4.6: Agrupar e Organizar Campos"
        },
        {
            tipo: "complete",
            enunciado: "Complete o código abaixo para criar um campo de SENHA (que oculta os caracteres):",
            codigo: '\x3Cinput type="{{GAP}}" name="senha">',
            opcoes: ["text", "password", "secret", "hidden"],
            correta: 1,
            explicacao: "O type password faz o navegador exibir asteriscos ou pontos enquanto o usuário digita. O type text mostra os caracteres, hidden esconde o campo inteiro.",
            referencia: "Módulo 01 — Seção 4.2: A Tag input e Seus Tipos"
        },
        {
            tipo: "complete",
            enunciado: "Complete o código abaixo para adicionar um TÍTULO à tabela:",
            codigo: '\x3Ctable>\n  \x3C{{GAP}}>Lista de Alunos\x3C/caption>\n  \x3Ctr>\x3Cth>Nome\x3C/th>\x3C/tr>\n\x3C/table>',
            opcoes: ["title", "caption", "header", "label"],
            correta: 1,
            explicacao: "O elemento correto é caption. Ele fica DENTRO da table e fornece um título visível para a tabela.",
            referencia: "Módulo 01 — Seção 3.6: Tabela-Resumo dos Elementos"
        }
    ]
};