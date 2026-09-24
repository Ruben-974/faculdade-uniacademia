/* ============================================================
   BANCO DE QUESTÕES — MÓDULO 04 (JAVASCRIPT)
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
            enunciado: "JavaScript foi criado em 1995 por Brendan Eich, em apenas 10 dias, na Netscape.",
            resposta: true,
            explicacao: "Correto! Em 1995, a Netscape contratou Brendan Eich para criar uma linguagem de script simples para tornar as páginas web mais interativas. Ele desenvolveu a primeira versão em apenas 10 DIAS. A linguagem recebeu inicialmente o nome de Mocha, depois LiveScript, e finalmente JavaScript — nome escolhido por marketing, aproveitando a popularidade do Java na época.",
            referencia: "Módulo 04 — Seção 1.1: História e Origem"
        },
        {
            tipo: "vf",
            enunciado: "JavaScript e Java são a mesma linguagem, apenas com nomes diferentes.",
            resposta: false,
            explicacao: "Falso! Apesar do nome similar, JavaScript e Java são linguagens COMPLETAMENTE DIFERENTES em design, arquitetura e propósito. O nome 'JavaScript' foi uma decisão de MARKETING da Netscape para surfar na popularidade do Java. São linguagens sem parentesco técnico real — Java é compilada, orientada a classes; JavaScript é interpretada, baseada em protótipos.",
            referencia: "Módulo 04 — Seção 1.1: História e Origem"
        },
        {
            tipo: "vf",
            enunciado: "Em JavaScript, o operador typeof null retorna a string 'object' — uma particularidade histórica da linguagem.",
            resposta: true,
            explicacao: "Correto! typeof null === 'object' é uma decisão HISTÓRICA do JavaScript, amplamente considerada um bug, mas mantida por compatibilidade. Quando a linguagem foi criada, os valores eram representados por tags binárias e null recebeu a mesma tag que objetos. Corrigir isso quebraria milhares de sites. Por isso, para verificar se algo é null, use === null, não typeof.",
            referencia: "Módulo 04 — Seção 2.2.3: Verificação de Tipo com typeof"
        },
        {
            tipo: "vf",
            enunciado: "Os operadores == e === fazem exatamente a mesma coisa em JavaScript.",
            resposta: false,
            explicacao: "Falso! O == faz comparação com COERÇÃO DE TIPO — '5' == 5 retorna true. Já o === faz comparação ESTRITA, sem coerção — '5' === 5 retorna false. A recomendação é usar SEMPRE === e !== para evitar resultados inesperados, como '' == 0 (true) ou null == undefined (true).",
            referencia: "Módulo 04 — Seção 2.3.1: Operadores Relacionais"
        },
        {
            tipo: "vf",
            enunciado: "Variáveis declaradas com let e const têm escopo de BLOCO, enquanto var tem escopo de FUNÇÃO.",
            resposta: true,
            explicacao: "Correto! Essa é a diferença fundamental entre as três palavras-chave. Variáveis com let/const só existem dentro do bloco { } onde foram declaradas — fora dele, geram erro de referência. Já o var vaza do bloco: uma variável declarada dentro de um for continua acessível depois. Por isso, var deve ser EVITADO em código moderno.",
            referencia: "Módulo 04 — Seção 2.1: Variáveis e Constantes"
        },
        {
            tipo: "vf",
            enunciado: "O evento change dispara a CADA alteração no valor de um input, enquanto input só dispara ao perder o foco.",
            resposta: false,
            explicacao: "Falso — está INVERTIDO! O evento input dispara IMEDIATAMENTE a cada alteração (digitação, colagem, autocomplete). Já o change só dispara quando o elemento PERDE O FOCO após ter sido alterado. Para validação em tempo real (como no projeto do M4), usamos input. Para validação ao sair do campo, usamos change.",
            referencia: "Módulo 04 — Seção 3.5.1: Principais Tipos de Eventos"
        },
        {
            tipo: "vf",
            enunciado: "O atributo aria-live='polite' em uma div de mensagens dinâmicas melhora a acessibilidade para leitores de tela.",
            resposta: true,
            explicacao: "Correto! O aria-live='polite' instrui leitores de tela a ANUNCIAR o conteúdo da região quando ele muda, mas sem interromper o que está sendo lido. É ideal para mensagens de sucesso/erro em formulários. O valor 'polite' espera a pausa natural; 'assertive' interrompe imediatamente.",
            referencia: "Módulo 04 — Seção 5.8: Desafios e Extensões do Projeto"
        },

        /* ============================================================
           BLOCO 1 — VERDADEIRO OU FALSO (expansão)
           ============================================================ */
        {
            tipo: "vf",
            enunciado: "Os métodos map, filter e reduce são métodos nativos de array em JavaScript.",
            resposta: true,
            explicacao: "Correto! Todos os três são métodos de ARRAY: map (transforma cada elemento, criando um novo array), filter (filtra elementos que atendem a uma condição) e reduce (reduz o array a um único valor, como soma). São a base da programação funcional em JavaScript. Cada um recebe uma função de callback.",
            referencia: "Módulo 04 — Seção 2.9: Métodos Nativos de Arrays"
        },
        {
            tipo: "vf",
            enunciado: "As palavras-chave let e const foram introduzidas no ECMAScript 2015 (ES6).",
            resposta: true,
            explicacao: "Correto! Antes do ES6 (2015), só existia var. Com o ES6, surgiram let (escopo de bloco, reatribuível) e const (escopo de bloco, NÃO reatribuível). Essas duas palavras resolveram vários problemas de escopo que o var causava, e são o padrão moderno. Hoje, evite var em código novo.",
            referencia: "Módulo 04 — Seção 2.1: Variáveis e Constantes"
        },
        {
            tipo: "vf",
            enunciado: "Arrow functions NÃO possuem seu próprio this — elas herdam o this do contexto onde foram definidas.",
            resposta: true,
            explicacao: "Correto! Esse é um comportamento único das arrow functions. Funções tradicionais têm seu próprio this, que depende de como são chamadas. Já as arrow functions capturam o this do ESCOPO ONDE FORAM CRIADAS — o chamado 'lexical this'. Isso é útil em callbacks, mas problemático quando você quer usar arrow como método de objeto.",
            referencia: "Módulo 04 — Seção 2.5.3: Arrow Functions (Funções Seta)"
        },
        {
            tipo: "vf",
            enunciado: "JSON.parse() converte uma STRING em um objeto JavaScript.",
            resposta: true,
            explicacao: "Correto! JSON.parse() pega uma string no formato JSON e devolve o objeto JavaScript correspondente. O inverso é JSON.stringify(), que converte um objeto em string JSON — útil para salvar no localStorage. Esses dois métodos são inseparáveis em desenvolvimento web.",
            referencia: "Módulo 04 — Seção 5.8: Desafios e Extensões do Projeto"
        },
        {
            tipo: "vf",
            enunciado: "try/catch é usado para capturar erros que ocorrem em tempo de execução do JavaScript.",
            resposta: true,
            explicacao: "Correto! O bloco try contém o código que pode gerar erro. Se algo falhar, o controle passa para o bloco catch, que recebe o objeto de erro como parâmetro. Opcionalmente, há o bloco finally, executado SEMPRE (com ou sem erro). É essencial para lidar com JSON.parse inválido, fetch com erro de rede, etc.",
            referencia: "Módulo 04 — Seção 1.3.1: Linguagem de Script (Interpretada)"
        },
        {
            tipo: "vf",
            enunciado: "O método fetch() retorna uma Promise, que pode ser resolvida com await ou com .then().",
            resposta: true,
            explicacao: "Correto! fetch() retorna uma Promise que resolve quando a resposta chega. Você pode consumir com .then() (promises tradicionais) ou com async/await (sintaxe moderna, mais limpa). Além disso, é preciso chamar .json() ou .text() na resposta para extrair os dados — isso também retorna uma Promise.",
            referencia: "Módulo 04 — Seção 5.8: Desafios e Extensões do Projeto"
        },
        {
            tipo: "vf",
            enunciado: "localStorage salva dados no navegador do usuário e persiste mesmo após fechar e reabrir a página.",
            resposta: true,
            explicacao: "Correto! localStorage salva dados no NAVEGADOR de forma PERSISTENTE — os dados continuam lá mesmo após fechar a aba, reabrir o navegador ou reiniciar o computador. Ele só aceita STRINGS, então objetos precisam ser convertidos com JSON.stringify. O sessionStorage é parecido, mas apaga ao fechar a aba.",
            referencia: "Módulo 04 — Seção 5.8: Desafios e Extensões do Projeto"
        },

        /* ============================================================
           BLOCO 2 — MÚLTIPLA ESCOLHA (original)
           ============================================================ */
        {
            tipo: "multipla",
            enunciado: "Qual palavra-chave cria variáveis que NÃO podem ser REATRIBUÍDAS após a declaração?",
            opcoes: ["var", "let", "const", "static"],
            correta: 2,
            explicacao: "O const cria constantes — variáveis cujo VALOR não pode ser reatribuído. Tentar fazer PI = 3.14 depois de const PI = 3.14159 gera erro. Atenção: const impede REATRIBUIÇÃO, mas se o valor for objeto ou array, o CONTEÚDO INTERNO ainda pode ser modificado. 'static' é de outras linguagens (Java, C#).",
            referencia: "Módulo 04 — Seção 2.1.3: const (Constante com Escopo de Bloco)"
        },
        {
            tipo: "multipla",
            enunciado: "Qual método de array CRIA UM NOVO array com o resultado da aplicação de uma função a cada elemento?",
            opcoes: ["push()", "map()", "forEach()", "join()"],
            correta: 1,
            explicacao: "O map() cria um NOVO array aplicando uma função de transformação a cada elemento. Ex: [1,2,3].map(x => x * 2) retorna [2,4,6]. O push() adiciona itens ao array original (modifica); o forEach() apenas ITERA sem criar novo array; o join() une os elementos em uma string. map() é ideal para transformar dados.",
            referencia: "Módulo 04 — Seção 2.9: Métodos Nativos de Arrays"
        },
        {
            tipo: "multipla",
            enunciado: "Qual método de STRING remove espaços em branco do início e do fim?",
            opcoes: ["strip()", "trim()", "clean()", "cut()"],
            correta: 1,
            explicacao: "O trim() remove espaços em branco (incluindo tabs e quebras de linha) do INÍCIO e do FIM da string, sem alterar o meio. Muito usado em validações: if (nome.value.trim().length > 2). Os métodos 'strip', 'clean' e 'cut' NÃO existem para strings em JavaScript.",
            referencia: "Módulo 04 — Seção 2.7: Métodos Nativos de Strings"
        },
        {
            tipo: "multipla",
            enunciado: "Qual método do DOM seleciona APENAS O PRIMEIRO elemento que corresponde a um seletor CSS?",
            opcoes: ["getElementById()", "querySelector()", "querySelectorAll()", "getElementsByClassName()"],
            correta: 1,
            explicacao: "O querySelector() aceita QUALQUER seletor CSS (tag, classe, id, atributo, combinador) e retorna o PRIMEIRO elemento encontrado (ou null). Já o querySelectorAll() retorna TODOS em uma NodeList. O getElementById() só aceita ID.",
            referencia: "Módulo 04 — Seção 3.2: Seleção de Elementos do DOM"
        },
        {
            tipo: "multipla",
            enunciado: "Qual método do objeto event cancela o comportamento PADRÃO do navegador (ex: recarregar a página ao enviar um formulário)?",
            opcoes: [
                "event.stopPropagation()",
                "event.cancel()",
                "event.preventDefault()",
                "event.stop()"
            ],
            correta: 2,
            explicacao: "O event.preventDefault() cancela o comportamento PADRÃO do evento (ex: submit recarregando a página, clique em link navegando). Já o stopPropagation() impede que o evento continue subindo pela árvore DOM (borbulhamento). 'cancel' e 'stop' não existem no objeto event.",
            referencia: "Módulo 04 — Seção 3.5.4: O Objeto event"
        },
        {
            tipo: "multipla",
            enunciado: "Qual classe do Bootstrap 5 aplica BORDA VERDE e ÍCONE DE CHECK em um campo válido?",
            opcoes: [".has-success", ".is-valid", ".valid", ".form-success"],
            correta: 1,
            explicacao: "No Bootstrap 5, a validação visual usa .is-valid (verde, check) e .is-invalid (vermelho, exclamação). No Bootstrap 3 (M3), era diferente: .has-success e .has-error eram aplicadas ao .form-group. Essa mudança de nomenclatura é uma das diferenças entre BS3 e BS5.",
            referencia: "Módulo 04 — Seção 4.8: Componentes de Validação Visual"
        },
        {
            tipo: "multipla",
            enunciado: "Como se chama a característica do JavaScript que permite que uma MESMA variável armazene valores de tipos DIFERENTES ao longo da execução?",
            opcoes: [
                "Tipagem forte",
                "Tipagem estática",
                "Tipagem dinâmica",
                "Tipagem binária"
            ],
            correta: 2,
            explicacao: "JavaScript é DINAMICAMENTE TIPADO (latent typing). Isso significa que o tipo é inferido em TEMPO DE EXECUÇÃO, não na declaração. Ex: let x = 3 (Number); x = 'texto' (String); x = null — tudo válido. Linguagens como Java e C# são estaticamente tipadas: o tipo é fixado na declaração e nunca muda.",
            referencia: "Módulo 04 — Seção 1.3.3: Dinamicamente Tipada (Latent Typing)"
        },
        {
            tipo: "multipla",
            enunciado: "Qual propriedade do DOM insere conteúdo tratando-o como TEXTO PURO (sem interpretar HTML), sendo segura contra XSS?",
            opcoes: ["innerHTML", "textContent", "innerText", "insertHTML"],
            correta: 1,
            explicacao: "O textContent insere o conteúdo como TEXTO PURO, sem interpretar marcação HTML. Isso torna o código SEGURO contra ataques de XSS (Cross-Site Scripting): se um usuário malicioso digitar uma tag de script no campo, ela aparece como texto literal em vez de ser executada pelo navegador. Já o innerHTML INTERPRETA a marcação, o que é PERIGOSO com dados do usuário. Regra de ouro: use SEMPRE textContent para dados que vêm do usuário.",
            referencia: "Módulo 04 — Seção 3.3: Manipulação de Conteúdo: innerHTML"
        },

        /* ============================================================
           BLOCO 2 — MÚLTIPLA ESCOLHA (expansão)
           ============================================================ */
        {
            tipo: "multipla",
            enunciado: "Qual método de array retorna um NOVO array contendo apenas os elementos que satisfazem uma condição?",
            opcoes: ["map()", "filter()", "reduce()", "find()"],
            correta: 1,
            explicacao: "O filter() retorna um NOVO array com apenas os elementos que passam no teste da função. Ex: [1,2,3,4].filter(x => x > 2) retorna [2,3,4]. O map() transforma cada elemento sem filtrar; o reduce() reduz a um único valor; o find() retorna apenas o PRIMEIRO elemento que satisfaz a condição.",
            referencia: "Módulo 04 — Seção 2.9: Métodos Nativos de Arrays"
        },
        {
            tipo: "multipla",
            enunciado: "Qual método de array REDUZ todos os elementos a um único valor (ex: soma de todos os números)?",
            opcoes: ["sum()", "reduce()", "join()", "concat()"],
            correta: 1,
            explicacao: "O reduce() aplica uma função acumuladora a cada elemento, retornando um único valor final. Ex: [1,2,3].reduce((acc, n) => acc + n, 0) retorna 6. O segundo argumento (0) é o valor INICIAL do acumulador. 'sum' não existe. join() une em string e concat() junta arrays.",
            referencia: "Módulo 04 — Seção 2.9: Métodos Nativos de Arrays"
        },
        {
            tipo: "multipla",
            enunciado: "Qual método de array retorna o PRIMEIRO elemento que satisfaz uma condição, ou undefined se nenhum satisfizer?",
            opcoes: ["filter()", "find()", "some()", "indexOf()"],
            correta: 1,
            explicacao: "O find() retorna o PRIMEIRO elemento que passa no teste. Se nenhum passar, retorna undefined. Já o some() retorna true/false (se ALGUM satisfaz). E o filter() retorna TODOS os que satisfazem em um novo array. indexOf() busca por valor exato, não por condição.",
            referencia: "Módulo 04 — Seção 2.9: Métodos Nativos de Arrays"
        },
        {
            tipo: "multipla",
            enunciado: "Qual método de array verifica se TODOS os elementos satisfazem uma condição, retornando true ou false?",
            opcoes: ["some()", "every()", "all()", "check()"],
            correta: 1,
            explicacao: "O every() retorna true apenas se TODOS os elementos passarem no teste. Ex: [2,4,6].every(x => x % 2 === 0) retorna true. Já o some() retorna true se ALGUM elemento passar. 'all' e 'check' não existem em arrays JavaScript.",
            referencia: "Módulo 04 — Seção 2.9: Métodos Nativos de Arrays"
        },
        {
            tipo: "multipla",
            enunciado: "O que o método JSON.stringify() faz?",
            opcoes: [
                "Converte uma string em objeto",
                "Converte um objeto em string JSON",
                "Valida se um JSON está correto",
                "Formata um JSON com indentação"
            ],
            correta: 1,
            explicacao: "O JSON.stringify() converte um objeto (ou array, número, string) em uma STRING no formato JSON. É essencial para salvar no localStorage, que só aceita strings. Ex: JSON.stringify({ nome: 'Ana' }) retorna uma string. O inverso é JSON.parse().",
            referencia: "Módulo 04 — Seção 5.8: Desafios e Extensões do Projeto"
        },
        {
            tipo: "multipla",
            enunciado: "Qual método salva um valor no localStorage com uma chave?",
            opcoes: [
                "localStorage.save('chave', valor)",
                "localStorage.set('chave', valor)",
                "localStorage.setItem('chave', valor)",
                "localStorage.put('chave', valor)"
            ],
            correta: 2,
            explicacao: "O método correto é setItem(chave, valor). Para ler, usa-se getItem(chave). Para remover um item, removeItem(chave); para limpar tudo, clear(). Os métodos 'save', 'set' e 'put' NÃO existem em localStorage. Lembre-se: o valor deve ser string (use JSON.stringify para objetos).",
            referencia: "Módulo 04 — Seção 5.8: Desafios e Extensões do Projeto"
        },
        {
            tipo: "multipla",
            enunciado: "Qual é a sintaxe CORRETA de um template literal (string com interpolação de variáveis) em JavaScript?",
            opcoes: [
                "'Olá, ' + nome + '!'",
                "\"Olá, ${nome}!\"",
                "`Olá, ${nome}!`",
                "'Olá, {nome}!'"
            ],
            correta: 2,
            explicacao: "Template literals usam ACENTO GRAVE (backtick) em vez de aspas simples ou duplas, e permitem interpolar variáveis com ${expressão}. Ex: `Olá, ${nome}!`. Também respeitam quebras de linha sem precisar de barra invertida. A forma com + é a concatenação tradicional; as formas com aspas e chaves não interpolam.",
            referencia: "Módulo 04 — Seção 5.3.1: A Função formatarDados"
        },
        {
            tipo: "multipla",
            enunciado: "Qual palavra-chave cria uma classe em JavaScript moderno (ES6+)?",
            opcoes: ["class", "Class", "object", "prototype"],
            correta: 0,
            explicacao: "A palavra-chave class foi introduzida no ES6 para criar classes de forma mais clara (ainda que 'por baixo dos panos' o JavaScript continue baseado em protótipos). Sintaxe: class Pessoa { constructor(nome) { this.nome = nome; } }. A palavra deve ser escrita em minúsculas — 'Class' não existe.",
            referencia: "Módulo 04 — Seção 1.3.4: Baseada em Protótipos (Prototype-Based)"
        },

        /* ============================================================
           BLOCO 3 — COMPLETE O CÓDIGO (original)
           ============================================================ */
        {
            tipo: "complete",
            enunciado: "Complete o código abaixo para declarar uma variável de escopo de bloco que PODE ser reatribuída:",
            codigo: '{{GAP}} idade = 25;\nidade = 26; // válido',
            opcoes: ["var", "let", "const", "static"],
            correta: 1,
            explicacao: "O let cria variáveis com ESCOPO DE BLOCO que PODEM ser reatribuídas. O const também tem escopo de bloco, mas NÃO permite reatribuição. O var tem escopo de função (mais amplo e confuso). Como o código faz uma reatribuição (idade = 26), precisamos de let. Se fosse const, geraria erro 'Assignment to constant variable'.",
            referencia: "Módulo 04 — Seção 2.1.2: let (Escopo de Bloco)"
        },
        {
            tipo: "complete",
            enunciado: "Complete o código abaixo para converter o texto '25' em um número válido para validação:",
            codigo: 'const idade = {{GAP}}("25");\nconsole.log(idade + 5); // 30',
            opcoes: ["parseString", "parseInt", "Number", "toNumber"],
            correta: 2,
            explicacao: "O Number() converte uma string em número. Number('25') retorna 25 (Number), Number('abc') retorna NaN. Também poderíamos usar parseInt() ou parseFloat(), mas Number() é mais direto e cobre decimais. Não existe parseString nem toNumber em JavaScript. Sem a conversão, '25' + 5 resultaria em '255' (concatenação).",
            referencia: "Módulo 04 — Seção 2.8: Métodos Nativos de Números"
        },
        {
            tipo: "complete",
            enunciado: "Complete o código abaixo para adicionar um novo usuário ao array:",
            codigo: 'let usuarios = [];\nusuarios.{{GAP}}({ nome: "Ana", idade: 28 });',
            opcoes: ["add()", "append()", "push()", "insert()"],
            correta: 2,
            explicacao: "O push() adiciona um ou mais itens ao FINAL de um array, modificando o array original. Existem também unshift() (adiciona no início), pop() (remove do fim) e shift() (remove do início). 'add', 'append' e 'insert' não existem em arrays JavaScript — são de outras linguagens.",
            referencia: "Módulo 04 — Seção 2.9: Métodos Nativos de Arrays"
        },
        {
            tipo: "complete",
            enunciado: "Complete o código abaixo para verificar se a string contém o caractere '@':",
            codigo: 'function validarEmail(valor) {\n  return valor.{{GAP}}("@") && valor.includes(".");\n}',
            opcoes: ["has()", "contains()", "includes()", "search()"],
            correta: 2,
            explicacao: "O includes() verifica se uma string CONTÉM uma substring, retornando true ou false. Ex: 'usuario@email.com'.includes('@') retorna true. Também funciona em arrays. Os métodos 'has' e 'contains' NÃO existem em strings JavaScript. O search() existe, mas retorna o índice, não um booleano.",
            referencia: "Módulo 04 — Seção 2.7: Métodos Nativos de Strings"
        },
        {
            tipo: "complete",
            enunciado: "Complete o código abaixo para REMOVER as classes de validação de um input após limpar o formulário:",
            codigo: '[nome, email, idade].forEach(i => i.classList.{{GAP}}("is-valid", "is-invalid"));',
            opcoes: ["delete()", "clear()", "remove()", "erase()"],
            correta: 2,
            explicacao: "O classList.remove() remove uma ou mais classes de um elemento. Aceita múltiplos argumentos: remove('is-valid', 'is-invalid') remove AMBAS se presentes. Existem também: add() (adiciona), toggle() (alterna) e contains() (verifica). 'delete', 'clear' e 'erase' não existem em classList.",
            referencia: "Módulo 04 — Seção 3.4: Manipulação de Classes CSS: classList"
        },

        /* ============================================================
           BLOCO 3 — COMPLETE O CÓDIGO (expansão)
           ============================================================ */
        {
            tipo: "complete",
            enunciado: "Complete o código abaixo para filtrar apenas números PARES de um array:",
            codigo: 'const pares = numeros.{{GAP}}(n => n % 2 === 0);',
            opcoes: ["map", "filter", "reduce", "each"],
            correta: 1,
            explicacao: "O método correto é filter — ele retorna um NOVO array com os elementos que passam no teste. A arrow function n => n % 2 === 0 retorna true para números pares. Já o map() transformaria cada elemento sem filtrar; o reduce() reduziria a um único valor; 'each' não existe.",
            referencia: "Módulo 04 — Seção 2.9: Métodos Nativos de Arrays"
        },
        {
            tipo: "complete",
            enunciado: "Complete o código abaixo para converter a string JSON em um objeto JavaScript:",
            codigo: 'const texto = \'{"nome":"Ana","idade":28}\';\nconst pessoa = JSON.{{GAP}}(texto);',
            opcoes: ["stringify", "parse", "decode", "toObject"],
            correta: 1,
            explicacao: "O método correto é JSON.parse() — ele converte uma STRING no formato JSON em um OBJETO JavaScript. O inverso é JSON.stringify(), que converte objeto em string. 'decode' e 'toObject' não existem em JSON. Muito usado ao recuperar dados do localStorage.",
            referencia: "Módulo 04 — Seção 5.8: Desafios e Extensões do Projeto"
        },
        {
            tipo: "complete",
            enunciado: "Complete o código abaixo para salvar um array de usuários no localStorage:",
            codigo: 'localStorage.{{GAP}}("usuarios", JSON.stringify(usuarios));',
            opcoes: ["save", "set", "setItem", "put"],
            correta: 2,
            explicacao: "O método correto é setItem(chave, valor). Ele salva um par chave-valor no localStorage. Como o localStorage só aceita STRINGS, usamos JSON.stringify() para converter o array em texto. Para recuperar depois: JSON.parse(localStorage.getItem('usuarios')).",
            referencia: "Módulo 04 — Seção 5.8: Desafios e Extensões do Projeto"
        },
        {
            tipo: "complete",
            enunciado: "Complete o código abaixo para criar uma mensagem com interpolação usando template literal:",
            codigo: 'const mensagem = `Olá, {{GAP}}! Você tem ${idade} anos.`;',
            opcoes: ["[nome]", "{nome}", "${nome}", "$nome"],
            correta: 2,
            explicacao: "A sintaxe correta de interpolação em template literals é ${expressão}. O cifrão é obrigatório — sem ele, o navegador trata como texto literal. As formas [nome], {nome} e $nome não funcionam. Ex: ${nome} insere o VALOR da variável nome dentro da string.",
            referencia: "Módulo 04 — Seção 5.3.1: A Função formatarDados"
        },
        {
            tipo: "complete",
            enunciado: "Complete o código abaixo para capturar um erro de conversão JSON inválida:",
            codigo: '{{GAP}} {\n  const dados = JSON.parse(textoInvalido);\n} catch (erro) {\n  console.error("JSON inválido:", erro.message);\n}',
            opcoes: ["try", "catch", "attempt", "test"],
            correta: 0,
            explicacao: "O bloco correto é try. Ele envolve o código que pode falhar. Se algo der erro, o controle passa para o catch, que recebe o objeto de erro. É essencial para lidar com JSON.parse() de dados corrompidos, fetch com falha de rede, etc. Sem o try, o erro interromperia todo o JavaScript.",
            referencia: "Módulo 04 — Seção 1.3.1: Linguagem de Script (Interpretada)"
        },

        /* ============================================================
           BLOCO 4 — APONTE O ERRO (original)
           ============================================================ */
        {
            tipo: "erro",
            enunciado: "Há um erro LÓGICO no código JavaScript abaixo. Aponte qual é:",
            codigo: 'if (idade = 18) {\n  console.log("Maior de idade");\n}',
            opcoes: [
                "O console.log está com sintaxe errada",
                "Usou = (atribuição) em vez de === ou == (comparação)",
                "if não pode ser usado com números",
                "O código está correto"
            ],
            correta: 1,
            explicacao: "O operador = é ATRIBUIÇÃO, não comparação! O código 'idade = 18' ATRIBUI o valor 18 à variável idade e retorna 18 (que é truthy), então o if SEMPRE será verdadeiro. O correto é usar === (comparação estrita) ou == (comparação com coerção): if (idade === 18). Esse é um dos erros mais comuns e perigosos em JavaScript.",
            referencia: "Módulo 04 — Seção 2.3.1: Operadores Relacionais"
        },
        {
            tipo: "erro",
            enunciado: "Há um problema de ESCOPO no código abaixo. Aponte qual é:",
            codigo: 'for (var i = 0; i \x3C 3; i++) {\n  console.log(i);\n}\nconsole.log(i); // ainda funciona!',
            opcoes: [
                "var não pode ser usado em for",
                "var tem escopo de função, então i vaza para fora do bloco — o ideal é usar let",
                "Falta declarar i antes do for",
                "O código está correto"
            ],
            correta: 1,
            explicacao: "Usar var dentro de um for faz a variável VAZAR para fora do bloco, porque var tem escopo de FUNÇÃO (não de bloco). Resultado: i ainda existe e vale 3 após o loop. Em código moderno, use let: 'for (let i = 0; ...)'. Com let, a variável i só existe DENTRO do loop, e tentar acessá-la depois gera 'ReferenceError: i is not defined'.",
            referencia: "Módulo 04 — Seção 2.1.1: var (Escopo de Função ou Global)"
        },
        {
            tipo: "erro",
            enunciado: "Há um problema no manipulador de evento abaixo. Aponte qual é:",
            codigo: 'form.addEventListener("submit", function(event) {\n  const nome = document.getElementById("nome").value;\n  console.log(nome);\n});',
            opcoes: [
                "addEventListener não aceita 'submit'",
                "Falta event.preventDefault() — o formulário vai recarregar a página e perder os dados",
                "Não se pode acessar .value dentro do listener",
                "O código está correto"
            ],
            correta: 1,
            explicacao: "Falta o event.preventDefault()! Sem ele, o comportamento PADRÃO do submit é executado — o navegador RECARREGA a página e envia os dados. Isso apaga o console e interrompe o JavaScript. O correto é interceptar o evento logo no início: form.addEventListener('submit', function(event) { event.preventDefault(); });",
            referencia: "Módulo 04 — Seção 3.5.3: O Evento submit e a Interceptação"
        },
        {
            tipo: "erro",
            enunciado: "Há um problema de SEGURANÇA no código abaixo. Aponte qual é:",
            codigo: 'const nomeDigitado = input.value;\nresultado.innerHTML = "Olá, " + nomeDigitado;',
            opcoes: [
                "innerHTML não existe em JavaScript",
                "Usar innerHTML com dados do usuário abre brecha para XSS; o correto é textContent",
                "Não se pode concatenar strings com +",
                "O código está correto"
            ],
            correta: 1,
            explicacao: "Usar innerHTML com dados fornecidos pelo usuário é PERIGOSO. Se o usuário digitar uma tag de script maliciosa no campo, o navegador vai INTERPRETAR como código e executá-la — ataque conhecido como XSS (Cross-Site Scripting). Para dados não confiáveis, use SEMPRE textContent (insere texto puro) ou sanitize a marcação antes. Segurança em primeiro lugar!",
            referencia: "Módulo 04 — Seção 3.3: Manipulação de Conteúdo: innerHTML"
        },
        {
            tipo: "erro",
            enunciado: "Há um erro no código abaixo envolvendo const. Aponte qual é:",
            codigo: 'const PI = 3.14;\nPI = 3.14159;\nconsole.log(PI);',
            opcoes: [
                "const não pode armazenar números",
                "const não permite REATRIBUIÇÃO — usar let se o valor precisar mudar",
                "O valor de PI deveria ser 3.1416",
                "O código está correto"
            ],
            correta: 1,
            explicacao: "const cria uma CONSTANTE — o valor NÃO pode ser reatribuído. A linha 'PI = 3.14159' gera o erro 'Assignment to constant variable'. Se o valor precisa mudar, use let: 'let taxa = 3.14; taxa = 3.14159;'. Use const apenas para valores que NUNCA vão mudar. É uma boa prática: comece com const, mude para let só se necessário.",
            referencia: "Módulo 04 — Seção 2.1.3: const (Constante com Escopo de Bloco)"
        },

        /* ============================================================
           BLOCO 4 — APONTE O ERRO (expansão)
           ============================================================ */
        {
            tipo: "erro",
            enunciado: "Há um erro LÓGICO no código abaixo. Aponte qual é:",
            codigo: 'let contador = 0;\nfor (let i = 0; i \x3C 5; i++) {\n  contador = contador + i;\n}\nconsole.log(contador);',
            opcoes: [
                "O código está correto e exibe 10",
                "O for nunca executa porque i começa em 0",
                "contador deveria ser const",
                "O código está correto mas exibe 15"
            ],
            correta: 0,
            explicacao: "O código está CORRETO! Ele soma 0+1+2+3+4 = 10. O for executa normalmente (i vai de 0 a 4), e cada iteração adiciona i a contador. Resposta: 10. Cuidado para não confundir: usar const em contador não funcionaria, pois ele é reatribuído a cada iteração.",
            referencia: "Módulo 04 — Seção 2.4.3: Laço for"
        },
        {
            tipo: "erro",
            enunciado: "Há um erro no código abaixo relacionado a escopo. Aponte qual é:",
            codigo: 'function teste() {\n  if (true) {\n    let mensagem = "Olá";\n  }\n  console.log(mensagem);\n}',
            opcoes: [
                "let tem escopo de bloco — mensagem não existe fora do if",
                "Faltou declarar mensagem com var",
                "console.log deveria estar dentro do if",
                "O código está correto"
            ],
            correta: 0,
            explicacao: "O let tem escopo de BLOCO. A variável mensagem só existe DENTRO do if. Tentar acessá-la fora (no console.log) gera 'ReferenceError: mensagem is not defined'. Para funcionar, você precisaria declarar mensagem FORA do if com let, ou usar var (que tem escopo de função).",
            referencia: "Módulo 04 — Seção 2.1.2: let (Escopo de Bloco)"
        },
        {
            tipo: "erro",
            enunciado: "Há um problema no código abaixo. Aponte qual é:",
            codigo: 'const usuario = { nome: "Ana" };\nusuario = { nome: "Maria" };',
            opcoes: [
                "const não permite REATRIBUIR o objeto inteiro — o correto seria let, ou modificar propriedades",
                "Objetos não podem ser atribuídos a const",
                "Falta ponto e vírgula",
                "O código está correto"
            ],
            correta: 0,
            explicacao: "const impede REATRIBUIÇÃO da variável. Aqui, usuario = {...} tenta REATRIBUIR, gerando 'Assignment to constant variable'. Mas atenção: você PODE modificar propriedades de um objeto const (ex: usuario.nome = 'Maria' funciona). O correto seria usar let, ou modificar apenas a propriedade.",
            referencia: "Módulo 04 — Seção 2.1.3: const (Constante com Escopo de Bloco)"
        },
        {
            tipo: "erro",
            enunciado: "Há um problema no manipulador de evento abaixo. Aponte qual é:",
            codigo: 'form.addEventListener("submit", (event) => {\n  const nome = document.getElementById("nome").value;\n  resultado.innerHTML = `Olá, ${nome}`;\n});',
            opcoes: [
                "Falta event.preventDefault() — o formulário vai recarregar a página e perder os dados",
                "Arrow function não pode ser usada em addEventListener",
                "getElementById não funciona dentro de listeners",
                "O código está correto"
            ],
            correta: 0,
            explicacao: "Falta o event.preventDefault()! Sem ele, o comportamento PADRÃO do submit é executado — o navegador RECARREGA a página, enviando os dados e apagando o resultado. O correto é chamar event.preventDefault() logo no início do listener, para assumir o controle total.",
            referencia: "Módulo 04 — Seção 3.5.3: O Evento submit e a Interceptação"
        },
        {
            tipo: "erro",
            enunciado: "Há um problema de SEGURANÇA no código abaixo. Aponte qual é:",
            codigo: 'const comentario = document.getElementById("comentario").value;\nresultado.innerHTML = comentario;',
            opcoes: [
                "innerHTML com dados de usuário abre brecha para XSS — o correto é textContent",
                "comentario deveria ser const",
                "getElementById não pode acessar value",
                "O código está correto"
            ],
            correta: 0,
            explicacao: "Usar innerHTML com dados do usuário é PERIGOSO. Se o usuário digitar uma marcação de script maliciosa no comentário, o navegador vai INTERPRETAR como código e executá-la — ataque XSS (Cross-Site Scripting). Para dados não confiáveis, use SEMPRE textContent, que insere como TEXTO PURO, sem interpretar HTML.",
            referencia: "Módulo 04 — Seção 3.3: Manipulação de Conteúdo: innerHTML"
        }
    ]
};