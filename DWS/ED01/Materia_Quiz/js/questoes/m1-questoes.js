/* ============================================================
   BANCO DE QUESTÕES — MÓDULO 01 (HTML)
   ------------------------------------------------------------
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
            enunciado: "A tag \x3Ctitle> deve ficar dentro da seção \x3Chead> do documento HTML.",
            resposta: true,
            explicacao: "Correto! A tag \x3Ctitle> pertence à seção \x3Chead> e define o texto exibido na aba/barra de título do navegador — ela NÃO aparece no corpo da página. O \x3Chead> guarda metadados (charset, title, links para CSS), enquanto o \x3Cbody> guarda o conteúdo visível.",
            referencia: "Módulo 01 — Seção 1.2: Estrutura Básica do Arquivo HTML"
        },
        {
            tipo: "vf",
            enunciado: "A tag \x3Cul> é usada para criar listas ordenadas em HTML.",
            resposta: false,
            explicacao: "Falso! A tag \x3Cul> cria listas NÃO ordenadas (Unordered List), com marcadores como •, ○ ou ▪. Para criar listas ORDENADAS — com números, letras ou algarismos romanos — usa-se a tag \x3Col> (Ordered List). Ambos os tipos usam \x3Cli> para cada item.",
            referencia: "Módulo 01 — Seção 2.2: Listas Não Ordenadas \x3Cul>"
        },
        {
            tipo: "vf",
            enunciado: "A tag \x3Cimg> é uma tag vazia, ou seja, não possui tag de fechamento.",
            resposta: true,
            explicacao: "Correto! \x3Cimg> é um void element (elemento vazio). Ela se fecha em si mesma e não tem \x3C/img>. O mesmo vale para \x3Cbr>, \x3Chr> e \x3Cinput>. Os dados da imagem são passados por atributos, não por conteúdo entre tags.",
            referencia: "Módulo 01 — Seção 5.1: A Tag \x3Cimg> e Sua Sintaxe"
        },
        {
            tipo: "vf",
            enunciado: "O atributo colspan mescla células verticalmente em uma tabela HTML.",
            resposta: false,
            explicacao: "Falso! O colspan mescla células HORIZONTALMENTE (em colunas). Quem mescla VERTICALMENTE (em linhas) é o rowspan. Mnemônico: col = coluna; row = linha.",
            referencia: "Módulo 01 — Seção 3.5: colspan e rowspan — Mesclagem de Células"
        },
        {
            tipo: "vf",
            enunciado: "O HTML cria páginas estáticas, sem animação.",
            resposta: true,
            explicacao: "Correto! O material destaca: 'O HTML cria páginas estáticas, sem animação'. Ele define ESTRUTURA e CONTEÚDO. Para interatividade e animações, é preciso JavaScript (comportamento) e CSS (efeitos visuais).",
            referencia: "Módulo 01 — Seção 1.1: O que é HTML? Definição e Propósito"
        },
        {
            tipo: "vf",
            enunciado: "O atributo alt é opcional em imagens e pode ser omitido sem prejuízo.",
            resposta: false,
            explicacao: "Falso! O alt é OBRIGATÓRIO para acessibilidade. Ele fornece descrição textual para leitores de tela e aparece quando a imagem não carrega. A única exceção é imagens puramente decorativas — nesse caso usa-se alt vazio, mas nunca omitir o atributo.",
            referencia: "Módulo 01 — Seção 5.3: O Atributo alt — Acessibilidade e Fallback"
        },
        {
            tipo: "vf",
            enunciado: "O método GET do formulário anexa os dados ao endereço (URL) do servidor.",
            resposta: true,
            explicacao: "Correto! O GET exibe os dados do formulário na própria URL. Isso tem limite de aproximadamente 2000 caracteres e baixa segurança. Já o POST envia os dados no corpo da requisição, invisíveis na URL, e é o método indicado para login, cadastro e senhas.",
            referencia: "Módulo 01 — Seção 4.1: A Tag form e Atributos"
        },

        /* ============================================================
           BLOCO 1 — VERDADEIRO OU FALSO (expansão)
           ============================================================ */
        {
            tipo: "vf",
            enunciado: "A tag \x3Cdiv> é um elemento de nível bloco (block) que agrupa conteúdo.",
            resposta: true,
            explicacao: "Correto! A div (division) é um container genérico de nível BLOCO, ou seja, ocupa toda a largura disponível e força quebra de linha antes e depois. Já a span é inline — fica na mesma linha do conteúdo ao redor.",
            referencia: "Módulo 01 — Seção 1.3: Sintaxe dos Comandos HTML"
        },
        {
            tipo: "vf",
            enunciado: "O atributo target=\"_blank\" em um link faz com que ele abra em uma NOVA aba ou janela do navegador.",
            resposta: true,
            explicacao: "Correto! O target define ONDE o link será aberto. Os valores principais são: _self (mesma aba, padrão), _blank (nova aba), _parent e _top (frames, obsoletos). Recomenda-se usar rel=\"noopener noreferrer\" junto com _blank por segurança.",
            referencia: "Módulo 01 — Seção 6.2: O Atributo target"
        },
        {
            tipo: "vf",
            enunciado: "A tag \x3Cfieldset> serve para agrupar campos de um formulário visualmente.",
            resposta: true,
            explicacao: "Correto! O fieldset agrupa campos relacionados dentro de um formulário. Ele costuma vir acompanhado de um legend (título do grupo). A dupla fieldset + legend cria uma caixa com borda e um título no topo.",
            referencia: "Módulo 01 — Seção 4.6: Agrupar e Organizar Campos"
        },
        {
            tipo: "vf",
            enunciado: "As tags \x3Cstrong> e \x3Cb> produzem o mesmo efeito VISUAL (negrito), mas \x3Cstrong> carrega significado semântico de importância.",
            resposta: true,
            explicacao: "Correto! Ambas deixam o texto em negrito, mas com propósitos diferentes. b é apenas ESTILO visual (bold), sem significado. strong indica IMPORTÂNCIA forte do conteúdo. Boa prática moderna: preferir strong (semântica) em vez de b (visual).",
            referencia: "Módulo 01 — Seção 7.4: Formatação de Texto"
        },
        {
            tipo: "vf",
            enunciado: "A tag \x3Cbr> é uma tag vazia (void element), ou seja, não precisa de fechamento.",
            resposta: true,
            explicacao: "Correto! A tag br (break) é void — não tem fechamento. Ela apenas insere uma quebra de linha. O mesmo vale para hr, img, input, meta e link.",
            referencia: "Módulo 01 — Seção 7.3: Quebra de Linha e Régua Horizontal"
        },
        {
            tipo: "vf",
            enunciado: "O placeholder de um input pode substituir o \x3Clabel> sem prejuízo para a acessibilidade.",
            resposta: false,
            explicacao: "Falso! O placeholder é apenas uma DICA visual — ele desaparece quando o usuário começa a digitar e NÃO é lido de forma confiável por leitores de tela. O label é a estrutura semântica correta. Regra de ouro: sempre tenha label; use placeholder apenas como complemento visual.",
            referencia: "Módulo 01 — Seção 4.3: Atributos da Tag input"
        },
        {
            tipo: "vf",
            enunciado: "A tag \x3Cfigcaption> é usada para adicionar uma legenda a uma imagem dentro de \x3Cfigure>.",
            resposta: true,
            explicacao: "Correto! A dupla figure + figcaption cria uma figura com legenda semântica. O figure agrupa a imagem (ou vídeo, gráfico, código) e o figcaption fornece a descrição/legenda.",
            referencia: "Módulo 01 — Seção 5.8: figure e figcaption — Legendas Semânticas"
        },

        /* ============================================================
           BLOCO 2 — MÚLTIPLA ESCOLHA (original)
           ============================================================ */
        {
            tipo: "multipla",
            enunciado: "Qual tag é usada para criar uma lista ORDENADA em HTML?",
            opcoes: ["\x3Col>", "\x3Cul>", "\x3Cli>", "\x3Cdl>"],
            correta: 0,
            explicacao: "A tag ol (Ordered List) cria listas ordenadas com numeração (1, 2, 3), letras (A, B, C) ou algarismos romanos (I, II, III), controlados pelo atributo type. A ul cria listas não ordenadas, li representa cada item e dl cria listas de definição.",
            referencia: "Módulo 01 — Seção 2.1: Listas Ordenadas ol"
        },
        {
            tipo: "multipla",
            enunciado: "Qual atributo da tag a define o destino do link?",
            opcoes: ["src", "link", "href", "url"],
            correta: 2,
            explicacao: "O href (Hypertext REFerence) é o atributo que define para onde o link aponta. O src é usado em imagens, scripts e iframes. Regra prática: href = para onde vai; src = de onde vem.",
            referencia: "Módulo 01 — Seção 6.1: A Tag a e Sua Sintaxe"
        },
        {
            tipo: "multipla",
            enunciado: "Qual tag representa uma LINHA de tabela em HTML?",
            opcoes: ["\x3Ctd>", "\x3Cth>", "\x3Ctr>", "\x3Ctable>"],
            correta: 2,
            explicacao: "A tag tr vem de 'table row' e representa uma linha da tabela. Dentro dela ficam as células: th (cabeçalho) e td (dados). A tag table é o contêiner principal.",
            referencia: "Módulo 01 — Seção 3.1: Estrutura da Tabela"
        },
        {
            tipo: "multipla",
            enunciado: "Qual valor do atributo type do input exibe asteriscos no lugar dos caracteres digitados?",
            opcoes: ["text", "password", "hidden", "secret"],
            correta: 1,
            explicacao: "O type password mostra asteriscos ou pontos enquanto o usuário digita, ocultando o conteúdo. O type text exibe os caracteres normalmente, e type hidden oculta o campo inteiro.",
            referencia: "Módulo 01 — Seção 4.2: A Tag input e Seus Tipos"
        },
        {
            tipo: "multipla",
            enunciado: "Qual tag define o título que aparece na ABA ou barra do navegador?",
            opcoes: ["\x3Ch1>", "\x3Ctitle>", "\x3Cheader>", "\x3Ccaption>"],
            correta: 1,
            explicacao: "A tag title fica dentro do head e define o texto da aba do navegador — não é exibido no conteúdo da página. A h1 é o título principal DENTRO do corpo.",
            referencia: "Módulo 01 — Seção 1.2: Estrutura Básica do Arquivo HTML"
        },
        {
            tipo: "multipla",
            enunciado: "Qual atributo mescla células VERTICALMENTE em uma tabela HTML?",
            opcoes: ["colspan", "rowspan", "cellspan", "merge"],
            correta: 1,
            explicacao: "O rowspan mescla células VERTICALMENTE (em linhas). Quem mescla horizontalmente é o colspan.",
            referencia: "Módulo 01 — Seção 3.5: colspan e rowspan — Mesclagem de Células"
        },
        {
            tipo: "multipla",
            enunciado: "Qual tag exibe o texto preservando EXATAMENTE os espaços, tabulações e quebras de linha como foram digitados?",
            opcoes: ["\x3Cp>", "\x3Cbr>", "\x3Cpre>", "\x3Cspan>"],
            correta: 2,
            explicacao: "A tag pre (preformatted) mantém espaços, tabulações e quebras de linha exatamente como escritos no código-fonte. É útil para exibir código ou arte ASCII.",
            referencia: "Módulo 01 — Seção 7.3: Quebra de Linha e Régua Horizontal"
        },
        {
            tipo: "multipla",
            enunciado: "Qual método HTTP envia os dados do formulário no CORPO da requisição, sem exibi-los na URL?",
            opcoes: ["GET", "POST", "PUT", "SEND"],
            correta: 1,
            explicacao: "O POST envia os dados no corpo da requisição — invisíveis na URL. É o método indicado para login, cadastro e qualquer dado sensível.",
            referencia: "Módulo 01 — Seção 4.1: A Tag form e Atributos"
        },

        /* ============================================================
           BLOCO 2 — MÚLTIPLA ESCOLHA (expansão)
           ============================================================ */
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
            enunciado: "Qual atributo do link define que ele será aberto em uma nova aba do navegador?",
            opcoes: ["href=\"_blank\"", "open=\"_blank\"", "target=\"_blank\"", "window=\"new\""],
            correta: 2,
            explicacao: "O atributo target com valor _blank é o correto. O href só define o DESTINO (URL). Adicione sempre rel=\"noopener noreferrer\" ao usar _blank.",
            referencia: "Módulo 01 — Seção 6.2: O Atributo target"
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
            tipo: "multipla",
            enunciado: "Qual é a estrutura CORRETA de um documento HTML5?",
            opcoes: [
                "html, depois body, depois head",
                "html, depois head, depois body",
                "head, depois html, depois body",
                "body, depois head, depois html"
            ],
            correta: 1,
            explicacao: "A estrutura correta é: html (raiz), contendo head (metadados) e, EM SEGUIDA, body (conteúdo visível). O head deve vir SEMPRE antes do body.",
            referencia: "Módulo 01 — Seção 1.2: Estrutura Básica do Arquivo HTML"
        },
        {
            tipo: "multipla",
            enunciado: "Qual atributo do form define a URL do programa que irá processar os dados enviados?",
            opcoes: ["method", "href", "action", "target"],
            correta: 2,
            explicacao: "O action define a URL (endereço) que irá PROCESSAR os dados do formulário. O method define COMO os dados serão enviados (GET ou POST).",
            referencia: "Módulo 01 — Seção 4.1: A Tag form e Atributos"
        },

        /* ============================================================
           BLOCO 3 — COMPLETE O CÓDIGO (original)
           ============================================================ */
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
            enunciado: "Complete o código abaixo para exibir uma imagem de foto.jpg:",
            codigo: '\x3Cimg {{GAP}}="foto.jpg" alt="Descrição da foto">',
            opcoes: ["src", "href", "image", "file"],
            correta: 0,
            explicacao: "O atributo correto é src (source). Ele especifica o CAMINHO do arquivo de imagem e é obrigatório em img.",
            referencia: "Módulo 01 — Seção 5.2: O Atributo src — A Fonte da Imagem"
        },
        {
            tipo: "complete",
            enunciado: "Complete o código abaixo para que a lista alfabética comece na letra C (3ª letra):",
            codigo: '\x3Col type="A" {{GAP}}="3">\n  \x3Cli>Primeiro item\x3C/li>\n  \x3Cli>Segundo item\x3C/li>\n\x3C/ol>',
            opcoes: ["begin", "start", "from", "first"],
            correta: 1,
            explicacao: "O atributo start define em que VALOR a lista ordenada começa. Com type A e start 3, a lista inicia em C.",
            referencia: "Módulo 01 — Seção 2.1.3: Atributo start — Valor Inicial"
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
            enunciado: "Complete o código abaixo para criar um link que abre o cliente de e-mail do usuário:",
            codigo: '\x3Ca href="{{GAP}}:usuario@email.com">Enviar e-mail\x3C/a>',
            opcoes: ["mail", "email", "mailto", "send"],
            correta: 2,
            explicacao: "O prefixo correto é mailto:, que instrui o navegador a abrir o cliente de e-mail padrão do usuário. Outros prefixos válidos: tel: (telefone), sms: (mensagem de texto).",
            referencia: "Módulo 01 — Seção 6.3: Tipos de Links — Links para E-mail"
        },

        /* ============================================================
           BLOCO 3 — COMPLETE O CÓDIGO (expansão)
           ============================================================ */
        {
            tipo: "complete",
            enunciado: "Complete o código abaixo para adicionar um TÍTULO à tabela:",
            codigo: '\x3Ctable>\n  \x3C{{GAP}}>Lista de Alunos\x3C/caption>\n  \x3Ctr>\x3Cth>Nome\x3C/th>\x3C/tr>\n\x3C/table>',
            opcoes: ["title", "caption", "header", "label"],
            correta: 1,
            explicacao: "O elemento correto é caption. Ele fica DENTRO da table e fornece um título visível para a tabela.",
            referencia: "Módulo 01 — Seção 3.6: Tabela-Resumo dos Elementos"
        },
        {
            tipo: "complete",
            enunciado: "Complete o código abaixo para que o link abra em uma NOVA ABA:",
            codigo: '\x3Ca href="https://site.com" {{GAP}}="_blank" rel="noopener">Visitar\x3C/a>',
            opcoes: ["window", "open", "target", "new"],
            correta: 2,
            explicacao: "O atributo correto é target. Com target=\"_blank\", o link abre em nova aba. Use sempre junto de rel=\"noopener noreferrer\" por segurança.",
            referencia: "Módulo 01 — Seção 6.2: O Atributo target"
        },
        {
            tipo: "complete",
            enunciado: "Complete o código abaixo para criar uma área de texto multilinha para comentários:",
            codigo: 'Deixe seu comentário:\n\x3C{{GAP}} name="comentario" rows="5" cols="30">\x3C/textarea>',
            opcoes: ["input", "text", "textarea", "multiline"],
            correta: 2,
            explicacao: "A tag correta é textarea. Ela cria uma área multilinha com atributos rows (número de linhas) e cols (número de colunas visuais).",
            referencia: "Módulo 01 — Seção 4.5: Tag textarea"
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

        /* ============================================================
           BLOCO 4 — APONTE O ERRO (original)
           ============================================================ */
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
            explicacao: "O primeiro li foi aberto mas nunca fechado com a barra correspondente. Embora a maioria dos navegadores 'conserte' isso automaticamente, o código está tecnicamente incorreto.",
            referencia: "Módulo 01 — Seção 1.3: Sintaxe dos Comandos HTML"
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
            referencia: "Módulo 01 — Seção 5.3: O Atributo alt — Acessibilidade e Fallback"
        },
        {
            tipo: "erro",
            enunciado: "Há um problema no formulário abaixo. Aponte qual é:",
            codigo: '\x3Cform action="login.php" method="get">\n  \x3Cinput type="text" name="usuario">\n  \x3Cinput type="password" name="senha">\n  \x3Cinput type="submit" value="Entrar">\n\x3C/form>',
            opcoes: [
                "type password não é válido em HTML",
                "Usar GET para enviar senha é inseguro; o correto é method post",
                "Falta o atributo type no form",
                "O código está correto"
            ],
            correta: 1,
            explicacao: "Senhas NUNCA devem ser enviadas via GET, porque os dados ficam visíveis na URL. O método POST envia os dados no corpo da requisição. Para login, SEMPRE use POST.",
            referencia: "Módulo 01 — Seção 4.1: A Tag form e Atributos"
        },
        {
            tipo: "erro",
            enunciado: "Há um erro estrutural no código abaixo. Aponte qual é:",
            codigo: '\x3Ctable border="1">\n  \x3Cth>Nome\x3C/th>\n  \x3Cth>Idade\x3C/th>\n  \x3Ctr>\n    \x3Ctd>Ana\x3C/td>\n    \x3Ctd>20\x3C/td>\n  \x3C/tr>\n\x3C/table>',
            opcoes: [
                "A tag table deveria ser tab",
                "As tags th devem estar dentro de uma linha tr",
                "border não aceita o valor 1",
                "O código está correto"
            ],
            correta: 1,
            explicacao: "As tags th (células de cabeçalho) devem SEMPRE estar dentro de uma linha tr. A estrutura correta é: table, depois tr, depois th (cabeçalho) ou td (dados).",
            referencia: "Módulo 01 — Seção 3.1: Estrutura da Tabela"
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
            explicacao: "A estrutura correta do documento HTML é: html, depois head (primeiro), depois body. O head contém metadados e deve vir ANTES do body.",
            referencia: "Módulo 01 — Seção 1.2: Estrutura Básica do Arquivo HTML"
        },

        /* ============================================================
           BLOCO 4 — APONTE O ERRO (expansão)
           ============================================================ */
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
            explicacao: "Definir apenas width faz o navegador calcular a altura proporcionalmente — o que normalmente é OK. Mas se você definir APENAS width e a imagem original tiver proporção diferente do esperado, ela pode ficar distorcida. Aqui também falta o alt obrigatório, mas o problema principal mencionado é a distorção.",
            referencia: "Módulo 01 — Seção 5.4: Atributos de Dimensão: width e height"
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
            enunciado: "Há um erro estrutural na tabela abaixo. Aponte qual é:",
            codigo: '\x3Ctable>\n  \x3Cthead>\n    \x3Ctd>Nome\x3C/td>\n    \x3Ctd>Idade\x3C/td>\n  \x3C/thead>\n\x3C/table>',
            opcoes: [
                "thead não pode ser usado em table",
                "Dentro de thead devem ser usados th (células de cabeçalho), não td",
                "Faltou a tag caption",
                "O código está correto"
            ],
            correta: 1,
            explicacao: "Dentro de thead, as células devem ser th (table header) — que já vêm em negrito e centralizadas por padrão e indicam cabeçalho. Usar td dentro de thead é semanticamente incorreto.",
            referencia: "Módulo 01 — Seção 3.1: Estrutura da Tabela"
        },
        {
            tipo: "erro",
            enunciado: "Há um problema no código abaixo. Aponte qual é:",
            codigo: '\x3Cform action="processa.php" method="get">\n  \x3Cinput type="password" name="senha">\n  \x3Cinput type="submit">\n\x3C/form>',
            opcoes: [
                "type password não pode ser usado em form",
                "Usar GET para enviar senha é inseguro — os dados ficam visíveis na URL",
                "Faltou o atributo name no submit",
                "O código está correto"
            ],
            correta: 1,
            explicacao: "Senhas NUNCA devem ser enviadas via GET, porque os dados ficam visíveis na URL, no histórico do navegador, em logs de servidor e podem ser vistos por terceiros. O correto é usar method=\"post\".",
            referencia: "Módulo 01 — Seção 4.1: A Tag form e Atributos"
        }
    ]
};