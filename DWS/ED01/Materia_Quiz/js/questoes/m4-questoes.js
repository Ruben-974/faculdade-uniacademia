/* ============================================================
   BANCO DE QUESTÕES — MÓDULO 04 (JAVASCRIPT)
   ------------------------------------------------------------
   Total: 62 questões ÚNICAS
   Cobre os 5 tópicos do M4
   ------------------------------------------------------------
   Tipos: vf, vf-justificativa, multipla, multipla-resposta,
          complete, complete-multiplo, erro, debug-multiplo,
          associacao, ordenar, categorizacao, flashcard, predicao
   ⚠️ Use \x3C no lugar de < dentro das strings.
   ============================================================ */
window.QUIZ_DATA = {
    questoes: [

        /* ============================================================
           TÓPICO 1 — FUNDAMENTOS TEÓRICOS DE JAVASCRIPT
           ============================================================ */

        {
            tipo: "vf",
            enunciado: "JavaScript foi criado em 1995 por Brendan Eich, em apenas 10 dias, na Netscape.",
            resposta: true,
            explicacao: "Correto! Em 1995, a Netscape contratou Brendan Eich para criar uma linguagem de script simples. Ele desenvolveu a primeira versão em apenas 10 DIAS. A linguagem recebeu inicialmente o nome de Mocha, depois LiveScript, e finalmente JavaScript — nome escolhido por marketing.",
            referencia: "Módulo 04 — Seção 1.1: História e Origem"
        },
        {
            tipo: "vf-justificativa",
            enunciado: "JavaScript e Java são a MESMA linguagem, apenas com nomes diferentes.",
            resposta: false,
            justificativas: [
                "Porque JavaScript foi criada por Java, apenas renomeada por questões legais.",
                "Porque são linguagens COMPLETAMENTE diferentes em design e propósito — o nome foi uma jogada de marketing da Netscape.",
                "Porque Java é uma versão mais antiga de JavaScript."
            ],
            justificativaCorreta: 1,
            explicacao: "JavaScript e Java NÃO têm parentesco técnico. Java é COMPILADA, orientada a classes; JavaScript é INTERPRETADA, baseada em protótipos. O nome 'JavaScript' foi uma decisão de MARKETING da Netscape, aproveitando a popularidade do Java em 1995.",
            referencia: "Módulo 04 — Seção 1.1: História e Origem"
        },
        {
            tipo: "multipla",
            enunciado: "Qual é o nome OFICIAL da linguagem conhecida como JavaScript segundo o padrão internacional?",
            opcoes: ["Java", "LiveScript", "ECMAScript", "JScript"],
            correta: 2,
            explicacao: "ECMAScript é o nome OFICIAL da linguagem, definido pela ECMA International em 1997. 'JavaScript' continuou sendo o nome comercial. A versão 6 (ES6) foi um marco em 2015, introduzindo let, const, arrow functions, classes e template literals.",
            referencia: "Módulo 04 — Seção 1.1: História e Origem"
        },
        {
            tipo: "vf",
            enunciado: "JavaScript é uma linguagem de script interpretada — não precisa ser compilada antes da execução.",
            resposta: true,
            explicacao: "Correto! JavaScript é uma linguagem de SCRIPT: o código é interpretado diretamente pelo motor do navegador no momento em que a página carrega. Isso contrasta com linguagens compiladas como Java ou C++, que exigem uma etapa de compilação. Resultado: desenvolvimento ágil, sem passo intermediário.",
            referencia: "Módulo 04 — Seção 1.3.1: Linguagem de Script (Interpretada)"
        },
        {
            tipo: "multipla",
            enunciado: "Qual é a responsabilidade de cada tecnologia na 'camada web'?",
            opcoes: [
                "HTML = estilo, CSS = estrutura, JavaScript = comportamento",
                "HTML = estrutura, CSS = estilo, JavaScript = comportamento",
                "HTML = comportamento, CSS = estrutura, JavaScript = estilo",
                "Todas fazem a mesma coisa"
            ],
            correta: 1,
            explicacao: "HTML = conteúdo e estrutura (o esqueleto). CSS = apresentação visual (a pele e as roupas). JavaScript = comportamento e interatividade (os músculos e o cérebro). O princípio da Separação de Interesses (Separation of Concerns) mantém cada camada com sua responsabilidade específica.",
            referencia: "Módulo 04 — Seção 1.2: O Papel do JavaScript no Desenvolvimento Web"
        },
        {
            tipo: "flashcard",
            enunciado: "O que significa dizer que JavaScript é 'dinamicamente tipada' (latent typing)?",
            resposta: "Significa que NÃO é necessário declarar o tipo de uma variável ao criá-la. O tipo é inferido AUTOMATICAMENTE pelo motor JavaScript em tempo de execução, e uma mesma variável pode armazenar valores de tipos DIFERENTES ao longo da execução. Ex: `let x = 3; x = 'texto'; x = null;` — tudo válido. Linguagens estaticamente tipadas (Java, C#) exigem declarar o tipo e o mantêm fixo.",
            referencia: "Módulo 04 — Seção 1.3.3: Dinamicamente Tipada (Latent Typing)"
        },
        {
            tipo: "multipla",
            enunciado: "O que significa dizer que JavaScript é uma linguagem 'case-sensitive'?",
            opcoes: [
                "Que ignora maiúsculas e minúsculas",
                "Que diferencia maiúsculas de minúsculas em identificadores, palavras-chave e operadores",
                "Que só funciona em computadores com teclado QWERTY",
                "Que converte automaticamente tudo para maiúsculas"
            ],
            correta: 1,
            explicacao: "JavaScript diferencia maiúsculas de minúsculas. `nome`, `Nome` e `NOME` são TRÊS variáveis diferentes. Isso vale para variáveis, funções, palavras-chave (`if` ≠ `IF`) e operadores. É um erro comum de iniciantes: usar `Nome` quando a variável foi declarada como `nome`.",
            referencia: "Módulo 04 — Seção 1.3.5: Case Sensitive"
        },
        {
            tipo: "multipla-resposta",
            enunciado: "Marque TODAS as características CORRETAS da linguagem JavaScript:",
            opcoes: [
                "Interpretada (não compilada)",
                "Dinamicamente tipada",
                "Baseada em protótipos (prototype-based)",
                "Case-sensitive",
                "Compilada e executada como binário nativo"
            ],
            corretas: [0, 1, 2, 3],
            explicacao: "JavaScript é: interpretada, dinamicamente tipada, baseada em protótipos e case-sensitive. NÃO é compilada como binário nativo — o motor do navegador (ou Node.js) interpreta o código. Node.js é uma EXCEÇÃO: permite JS no servidor, mas continua sendo interpretado.",
            referencia: "Módulo 04 — Seção 1.3: Características da Linguagem"
        },

        /* ============================================================
           TÓPICO 2 — RECURSOS DA LINGUAGEM
           ============================================================ */

        {
            tipo: "vf",
            enunciado: "Variáveis declaradas com let e const têm escopo de BLOCO, enquanto var tem escopo de FUNÇÃO.",
            resposta: true,
            explicacao: "Correto! Variáveis com let/const só existem dentro do bloco { } onde foram declaradas. Já o var vaza do bloco: uma variável declarada dentro de um for continua acessível depois. Por isso, var deve ser EVITADO em código moderno.",
            referencia: "Módulo 04 — Seção 2.1: Variáveis e Constantes"
        },
        {
            tipo: "multipla",
            enunciado: "Qual palavra-chave cria variáveis que NÃO podem ser REATRIBUÍDAS após a declaração?",
            opcoes: ["var", "let", "const", "static"],
            correta: 2,
            explicacao: "const cria constantes — variáveis cujo VALOR não pode ser reatribuído. Atenção: const impede REATRIBUIÇÃO, mas se o valor for objeto ou array, o CONTEÚDO INTERNO ainda pode ser modificado (ex: usuario.nome = 'Ana' funciona). 'static' é de outras linguagens.",
            referencia: "Módulo 04 — Seção 2.1.3: const (Constante com Escopo de Bloco)"
        },
        {
            tipo: "complete-multiplo",
            enunciado: "Complete o código abaixo para declarar variáveis com os tipos CORRETOS de escopo e mutabilidade:",
            codigo: '{{GAP1}} PI = 3.14;        // valor imutável\n{{GAP2}} idade = 25;      // reatribuível\n{{GAP3}} nome = "João";    // reatribuível',
            gaps: [
                { opcoes: ["var", "let", "const"], correta: 2 },
                { opcoes: ["var", "let", "const"], correta: 1 },
                { opcoes: ["var", "let", "const"], correta: 1 }
            ],
            explicacao: "PI é constante (const). idade e nome precisam ser reatribuíveis, então usam let. Evite var em código moderno — ele tem escopo de função (mais amplo e confuso). Regra prática: comece com const, mude para let só quando precisar reatribuir.",
            referencia: "Módulo 04 — Seção 2.1: Variáveis e Constantes"
        },
        {
            tipo: "erro",
            enunciado: "Há um erro no código abaixo. Aponte qual é:",
            codigo: 'const usuario = { nome: "Ana" };\nusuario = { nome: "Maria" };',
            opcoes: [
                "const não permite REATRIBUIR o objeto inteiro — o correto seria let, ou modificar apenas a propriedade",
                "Objetos não podem ser atribuídos a const",
                "Falta ponto e vírgula",
                "O código está correto"
            ],
            correta: 0,
            explicacao: "const impede REATRIBUIÇÃO da variável. Aqui, usuario = {...} tenta REATRIBUIR, gerando 'Assignment to constant variable'. Você PODE modificar propriedades de um objeto const (ex: usuario.nome = 'Maria'). Use let se precisar substituir o objeto inteiro.",
            referencia: "Módulo 04 — Seção 2.1.3: const (Constante com Escopo de Bloco)"
        },
        {
            tipo: "multipla",
            enunciado: "Qual é o valor de `typeof null` em JavaScript?",
            opcoes: ["'null'", "'object'", "'undefined'", "'boolean'"],
            correta: 1,
            explicacao: "typeof null retorna 'object' — uma decisão HISTÓRICA do JavaScript, amplamente considerada um bug, mas mantida por compatibilidade. Quando a linguagem foi criada, os valores eram representados por tags binárias e null recebeu a mesma tag que objetos. Para verificar null, use === null, NÃO typeof.",
            referencia: "Módulo 04 — Seção 2.2.3: Verificação de Tipo com typeof"
        },
        {
            tipo: "multipla-resposta",
            enunciado: "Marque TODOS os tipos de dados PRIMITIVOS em JavaScript:",
            opcoes: ["String", "Number", "Object", "Boolean", "Undefined", "Array"],
            corretas: [0, 1, 3, 4],
            explicacao: "Os primitivos são: String, Number, Boolean, Undefined, Null, Symbol (ES6) e BigInt (ES2020). Object e Array NÃO são primitivos — são tipos de referência (arrays, na verdade, são objetos especiais). Toda vez que você guarda um objeto em uma variável, guarda uma REFERÊNCIA (endereço de memória).",
            referencia: "Módulo 04 — Seção 2.2: Tipos de Dados"
        },
        {
            tipo: "associacao",
            enunciado: "Relacione cada operador com sua descrição:",
            pares: [
                { esquerda: "==", direita: "Igualdade com COERÇÃO de tipo ('5' == 5 → true)" },
                { esquerda: "===", direita: "Igualdade ESTRITA sem coerção ('5' === 5 → false)" },
                { esquerda: "!=", direita: "Diferença com coerção" },
                { esquerda: "!==", direita: "Diferença estrita, sem coerção" }
            ],
            explicacao: "Sempre prefira === e !== em vez de == e !=. A coerção de tipo pode causar bugs sutis: `'' == 0` é true, `null == undefined` é true, `false == '0'` é true. Comparações estritas evitam surpresas.",
            referencia: "Módulo 04 — Seção 2.3.1: Operadores Relacionais"
        },
        {
            tipo: "multipla",
            enunciado: "Qual valor NÃO é considerado 'falsy' em JavaScript?",
            opcoes: ["0", "''", "[]", "null"],
            correta: 2,
            explicacao: "Array vazio ([]) é TRUTHY — o JavaScript considera qualquer objeto (incluindo array vazio) como verdadeiro em contexto booleano. Os valores FALSY são apenas: false, 0, '' (string vazia), null, undefined e NaN. Cuidado com essa pegadinha ao validar dados!",
            referencia: "Módulo 04 — Seção 2.3.2: Operadores Lógicos"
        },
        {
            tipo: "predicao",
            enunciado: "O que este código imprime no console?",
            codigo: 'console.log(2 + "2");\nconsole.log("2" + 2);\nconsole.log(2 - "2");',
            opcoes: [
                "22, 22, 0",
                "4, 22, 0",
                "22, 4, 0",
                "Erro em todas as linhas"
            ],
            correta: 0,
            explicacao: "O operador + funciona com STRINGS (concatenação) e NÚMEROS (soma). Quando um dos operandos é string, o + CONCATENA: 2 + '2' = '22' e '2' + 2 = '22'. Mas o operador - só faz subtração: 2 - '2' converte a string para número e dá 0. Esse é um clássico 'gotcha' do JavaScript!",
            referencia: "Módulo 04 — Seção 2.3: Operadores"
        },
        {
            tipo: "multipla",
            enunciado: "Quantas vezes o laço abaixo executa?",
            codigo: 'for (let i = 1; i \x3C= 5; i++) {\n  console.log(i);\n}',
            opcoes: ["4 vezes", "5 vezes", "6 vezes", "Infinitas vezes"],
            correta: 1,
            explicacao: "O laço executa 5 vezes: com i = 1, 2, 3, 4, 5. A condição i <= 5 é verdadeira enquanto i for menor ou igual a 5. Quando i vira 6, a condição falha e o loop para. Muito cuidado com <= vs < em laços — trocar o operador muda o número de execuções.",
            referencia: "Módulo 04 — Seção 2.4.3: Laço for"
        },
        {
            tipo: "flashcard",
            enunciado: "Qual é a diferença entre os laços `for`, `while` e `do...while`?",
            resposta: "FOR: usado quando se sabe quantas vezes o bloco deve executar (ex: percorrer um array). WHILE: usado quando NÃO se sabe o número de iterações — verifica a condição ANTES de cada execução (pode executar zero vezes). DO...WHILE: verifica a condição DEPOIS de executar — portanto, executa o bloco no MÍNIMO uma vez, mesmo se a condição inicial for falsa. Ex típico: pedir uma senha até o usuário acertar.",
            referencia: "Módulo 04 — Seção 2.4: Estruturas de Controle"
        },
        {
            tipo: "erro",
            enunciado: "Há um erro de ESCOPO no código abaixo. Aponte qual é:",
            codigo: 'function teste() {\n  if (true) {\n    let mensagem = "Olá";\n  }\n  console.log(mensagem);\n}',
            opcoes: [
                "let tem escopo de bloco — mensagem não existe fora do if",
                "Faltou declarar mensagem com var",
                "console.log deveria estar dentro do if",
                "O código está correto"
            ],
            correta: 0,
            explicacao: "let tem escopo de BLOCO. A variável mensagem só existe DENTRO do if. Tentar acessá-la fora (no console.log) gera 'ReferenceError: mensagem is not defined'. Para funcionar, declare mensagem FORA do if com let, ou use var (que tem escopo de função).",
            referencia: "Módulo 04 — Seção 2.1.2: let (Escopo de Bloco)"
        },
        {
            tipo: "multipla",
            enunciado: "O que é 'hoisting' em JavaScript?",
            opcoes: [
                "Um erro de sintaxe quando se esquece ponto e vírgula",
                "O comportamento que move declarações de variáveis/funções para o topo do escopo",
                "Uma forma de importar bibliotecas externas",
                "Um método para ordenar arrays"
            ],
            correta: 1,
            explicacao: "Hoisting ('içamento') move declarações para o topo do escopo onde foram declaradas. Variáveis declaradas com var são inicializadas como undefined (podem ser lidas antes da declaração sem erro). Já let e const sofrem hoisting MAS ficam na Temporal Dead Zone (TDZ) — acessá-las antes gera ReferenceError. Funções declaradas (function nome() {}) são totalmente içadas; expressões (const f = function(){}) não.",
            referencia: "Módulo 04 — Seção 2.1: Variáveis e Constantes"
        },
        {
            tipo: "multipla",
            enunciado: "Qual método de STRING remove espaços em branco do INÍCIO e do FIM?",
            opcoes: ["strip()", "trim()", "clean()", "cut()"],
            correta: 1,
            explicacao: "O trim() remove espaços em branco (incluindo tabs e quebras de linha) do INÍCIO e do FIM da string, sem alterar o meio. Muito usado em validações: `if (nome.value.trim().length > 2)`. Os métodos 'strip', 'clean' e 'cut' NÃO existem para strings em JavaScript.",
            referencia: "Módulo 04 — Seção 2.7: Métodos Nativos de Strings"
        },
        {
            tipo: "multipla-resposta",
            enunciado: "Marque TODOS os métodos que EXISTEM para strings em JavaScript:",
            opcoes: ["toUpperCase()", "includes()", "trim()", "length", "splice()", "startsWith()"],
            corretas: [0, 1, 2, 3, 5],
            explicacao: "toUpperCase() (maiúsculas), includes() (contém substring?), trim() (remove espaços), length (comprimento — é uma PROPRIEDADE, não método), startsWith() (começa com?). JÁ splice() é método de ARRAY, não de string. Cuidado com essa pegadinha entre métodos de string e de array.",
            referencia: "Módulo 04 — Seção 2.7: Métodos Nativos de Strings"
        },

        /* ============================================================
           TÓPICO 3 — FUNÇÕES
           ============================================================ */

        {
            tipo: "vf",
            enunciado: "Arrow functions NÃO possuem seu próprio this — elas herdam o this do contexto onde foram definidas.",
            resposta: true,
            explicacao: "Correto! Esse é um comportamento único das arrow functions. Funções tradicionais têm seu próprio this, que depende de como são chamadas. Já as arrow functions capturam o this do ESCOPO ONDE FORAM CRIADAS — 'lexical this'. Útil em callbacks, problemático quando você quer usar arrow como método de objeto.",
            referencia: "Módulo 04 — Seção 2.5.3: Arrow Functions (Funções Seta)"
        },
        {
            tipo: "multipla",
            enunciado: "Qual é a sintaxe CORRETA de uma arrow function que soma dois números?",
            opcoes: [
                "function somar(a, b) => a + b",
                "const somar = (a, b) => a + b;",
                "const somar = (a, b) -> a + b;",
                "arrow somar(a, b) { return a + b; }"
            ],
            correta: 1,
            explicacao: "A sintaxe correta é: `const somar = (a, b) => a + b;`. A seta é `=>` (igual seguido de maior). Quando o corpo é uma única expressão, o `return` é implícito e não precisa de chaves. Se houver apenas um parâmetro, os parênteses podem ser omitidos: `const dobro = x => x * 2;`.",
            referencia: "Módulo 04 — Seção 2.5.3: Arrow Functions (Funções Seta)"
        },
        {
            tipo: "complete",
            enunciado: "Complete o código abaixo para criar uma função que retorna o DOBRO de um número:",
            codigo: 'function dobro(n) {\n  {{GAP}} n * 2;\n}',
            opcoes: ["print", "return", "output", "give"],
            correta: 1,
            explicacao: "A palavra-chave `return` devolve um valor da função. Sem o return, a função executa mas devolve `undefined` implicitamente. `print`, `output` e `give` não existem em JavaScript. Cuidado: `console.log` apenas IMPRIME, não devolve valor.",
            referencia: "Módulo 04 — Seção 2.5.4: Parâmetros e Retorno"
        },
        {
            tipo: "predicao",
            enunciado: "O que este código imprime no console?",
            codigo: 'const numeros = [1, 2, 3, 4];\nconst dobrados = numeros.map(n => n * 2);\nconsole.log(dobrados);\nconsole.log(numeros);',
            opcoes: [
                "[2, 4, 6, 8] e [1, 2, 3, 4]",
                "[2, 4, 6, 8] e [2, 4, 6, 8]",
                "[1, 2, 3, 4] e [1, 2, 3, 4]",
                "[8, 6, 4, 2] e [1, 2, 3, 4]"
            ],
            correta: 0,
            explicacao: "map() cria um NOVO array com os resultados, SEM modificar o original. Por isso: dobrados = [2, 4, 6, 8] e numeros = [1, 2, 3, 4]. Isso é uma característica fundamental do map — não é destrutivo, preserva a imutabilidade dos dados originais.",
            referencia: "Módulo 04 — Seção 2.9: Métodos Nativos de Arrays"
        },
        {
            tipo: "associacao",
            enunciado: "Relacione cada método de array com sua função:",
            pares: [
                { esquerda: "push()", direita: "Adiciona item ao FINAL do array" },
                { esquerda: "unshift()", direita: "Adiciona item ao INÍCIO do array" },
                { esquerda: "pop()", direita: "Remove o ÚLTIMO item" },
                { esquerda: "shift()", direita: "Remove o PRIMEIRO item" }
            ],
            explicacao: "push/unshift ADICIONAM; pop/shift REMOVEM. push/pop operam no FIM (direita); unshift/shift operam no INÍCIO (esquerda). Truque: pense em 'push para dentro' (empurrar para dentro) e 'pop para fora'. Todos MODIFICAM o array original (diferente de map, filter e slice).",
            referencia: "Módulo 04 — Seção 2.9: Métodos Nativos de Arrays"
        },
        {
            tipo: "flashcard",
            enunciado: "Qual a diferença entre `map()`, `filter()`, `reduce()` e `forEach()` em arrays?",
            resposta: "MAP: cria um NOVO array aplicando uma transformação a cada elemento (tamanho IGUAL ao original). FILTER: cria um NOVO array com apenas os elementos que passam em um teste (tamanho PODE SER MENOR). REDUCE: reduz TODO o array a um ÚNICO valor (número, string, objeto). FOREACH: apenas ITERA, não devolve nada — usado para efeitos colaterais (como console.log ou manipular DOM). Os três primeiros não modificam o array original.",
            referencia: "Módulo 04 — Seção 2.9: Métodos Nativos de Arrays"
        },

        /* ============================================================
           TÓPICO 4 — DOM E SELEÇÃO
           ============================================================ */

        {
            tipo: "vf",
            enunciado: "O DOM (Document Object Model) representa a página HTML como uma árvore de objetos que o JavaScript pode manipular.",
            resposta: true,
            explicacao: "Correto! Quando o navegador carrega uma página, ele constrói uma ÁRVORE DOM na memória: cada elemento HTML se torna um NÓ dessa árvore. O objeto `document` é a raiz. Assim, o JavaScript pode ler, criar, modificar e remover elementos — tudo dinamicamente.",
            referencia: "Módulo 04 — Seção 3.1: O que é o DOM (Document Object Model)"
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
            enunciado: "Qual propriedade do DOM insere conteúdo tratando-o como TEXTO PURO (sem interpretar HTML), sendo segura contra XSS?",
            opcoes: ["innerHTML", "textContent", "innerText", "insertHTML"],
            correta: 1,
            explicacao: "O textContent insere o conteúdo como TEXTO PURO, sem interpretar marcação HTML. Isso torna o código SEGURO contra ataques de XSS (Cross-Site Scripting). Já o innerHTML INTERPRETA a marcação, o que é PERIGOSO com dados do usuário. Regra de ouro: use SEMPRE textContent para dados que vêm do usuário.",
            referencia: "Módulo 04 — Seção 3.3: Manipulação de Conteúdo: innerHTML"
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
            explicacao: "Usar innerHTML com dados fornecidos pelo usuário é PERIGOSO. Se o usuário digitar uma tag de script maliciosa, o navegador vai INTERPRETAR como código e executá-la — ataque XSS. Use SEMPRE textContent (insere texto puro) para dados não confiáveis.",
            referencia: "Módulo 04 — Seção 3.3: Manipulação de Conteúdo: innerHTML"
        },
        {
            tipo: "complete",
            enunciado: "Complete o código abaixo para ADICIONAR a classe de validação a um input:",
            codigo: 'input.classList.{{GAP}}("is-valid");',
            opcoes: ["add", "append", "insert", "set"],
            correta: 0,
            explicacao: "classList.add('is-valid') adiciona a classe. Outros métodos: remove() (remove), toggle() (alterna), contains() (verifica). 'append', 'insert' e 'set' não existem em classList. É muito usado para feedback visual em formulários.",
            referencia: "Módulo 04 — Seção 3.4: Manipulação de Classes CSS: classList"
        },
        {
            tipo: "multipla",
            enunciado: "Como remover uma classe de um elemento via JavaScript?",
            opcoes: [
                "elemento.classList.delete('classe')",
                "elemento.classList.remove('classe')",
                "elemento.classList.clear('classe')",
                "elemento.classList.erase('classe')"
            ],
            correta: 1,
            explicacao: "classList.remove('classe') é o método correto. Aceita múltiplos argumentos: remove('is-valid', 'is-invalid'). Métodos disponíveis: add(), remove(), toggle() e contains(). 'delete', 'clear' e 'erase' não existem em classList.",
            referencia: "Módulo 04 — Seção 3.4: Manipulação de Classes CSS: classList"
        },

        /* ============================================================
           TÓPICO 5 — EVENTOS
           ============================================================ */

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
            explicacao: "event.preventDefault() cancela o comportamento PADRÃO do evento (ex: submit recarregando a página, clique em link navegando). Já stopPropagation() impede que o evento continue subindo pela árvore DOM (borbulhamento). 'cancel' e 'stop' não existem no objeto event.",
            referencia: "Módulo 04 — Seção 3.5.4: O Objeto event"
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
            explicacao: "Falta o event.preventDefault()! Sem ele, o comportamento PADRÃO do submit é executado — o navegador RECARREGA a página e envia os dados. Isso apaga o console e interrompe o JavaScript. Sempre chame event.preventDefault() no início do listener para assumir o controle.",
            referencia: "Módulo 04 — Seção 3.5.3: O Evento submit e a Interceptação"
        },
        {
            tipo: "vf",
            enunciado: "O evento 'change' dispara a CADA alteração no valor de um input, enquanto 'input' só dispara ao perder o foco.",
            resposta: false,
            explicacao: "Falso — está INVERTIDO! O evento 'input' dispara IMEDIATAMENTE a cada alteração (digitação, colagem, autocomplete). Já o 'change' só dispara quando o elemento PERDE O FOCO após ter sido alterado. Para validação em tempo real (como no projeto do M4), use 'input'. Para validação ao sair do campo, use 'change'.",
            referencia: "Módulo 04 — Seção 3.5.1: Principais Tipos de Eventos"
        },
        {
            tipo: "multipla",
            enunciado: "O que acontece com um evento que 'borbulha' (bubbling) pela árvore DOM?",
            opcoes: [
                "Ele é executado apenas no elemento alvo",
                "Ele se propaga do elemento alvo SUBINDO pela árvore até o document",
                "Ele dispara apenas uma vez, depois para",
                "Ele é enviado para o servidor"
            ],
            correta: 1,
            explicacao: "No BORBULHAMENTO, o evento se propaga do elemento alvo PARA CIMA na árvore DOM (target → pai → avô → ... → document). Isso permite usar DELEGAÇÃO de eventos: em vez de adicionar um listener em cada filho, adiciona-se no pai e verifica-se `event.target`. O método stopPropagation() interrompe esse caminho.",
            referencia: "Módulo 04 — Seção 3.6: Fluxo de Eventos: Borbulhamento e Captura"
        },
        {
            tipo: "debug-multiplo",
            enunciado: "Este manipulador de evento tem 3 problemas. Marque TODOS eles:",
            codigo: 'const form = document.getElementById("formCadastro");\nform.addEventListener("submit", function() {\n  const nome = document.getElementByID("nome").value;\n  resultado.innerHtml = "Olá, " + nome;\n});',
            opcoes: [
                { texto: "Falta event.preventDefault() para impedir o reload da página", correta: true },
                { texto: "getElementByID está escrito errado (o correto é getElementById)", correta: true },
                { texto: "innerHtml está com H maiúsculo (o correto é innerHTML)", correta: true },
                { texto: "addEventListener não aceita o evento 'submit'", correta: false },
                { texto: "Não se pode declarar const dentro de um listener", correta: false }
            ],
            explicacao: "Erro 1: falta preventDefault — o form vai recarregar. Erro 2: getElementByID tem I e D maiúsculos — é getElementById (Id minúsculo). Erro 3: innerHtml com H maiúsculo não existe — é innerHTML. JavaScript é case-sensitive! Os itens 4 e 5 são falsos.",
            referencia: "Módulo 04 — Seção 3.5: Eventos em JavaScript"
        },
        {
            tipo: "associacao",
            enunciado: "Relacione cada tipo de evento com sua ocasião:",
            pares: [
                { esquerda: "click", direita: "Ao clicar em um elemento" },
                { esquerda: "input", direita: "A cada alteração no valor (tempo real)" },
                { esquerda: "change", direita: "Quando o valor muda e o campo perde o foco" },
                { esquerda: "submit", direita: "Ao tentar enviar um formulário" }
            ],
            explicacao: "click = clique; input = tempo real (a cada tecla); change = perde foco após mudar; submit = envio de form. A diferença entre input e change é crucial: input dispara milhares de vezes enquanto digita; change dispara uma vez ao sair do campo.",
            referencia: "Módulo 04 — Seção 3.5.1: Principais Tipos de Eventos"
        },

        /* ============================================================
           TÓPICO 6 — BOOTSTRAP 5 E UI
           ============================================================ */

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
            enunciado: "Qual classe do Bootstrap 5 cria um contêiner visual com bordas, padding e sombra — equivalente ao antigo .panel do BS3?",
            opcoes: [".box", ".card", ".panel", ".widget"],
            correta: 1,
            explicacao: "No Bootstrap 5, o .panel do BS3 foi SUBSTITUÍDO pelo .card. Ele cria uma 'caixa' com bordas arredondadas, sombra leve e padding interno. Estrutura: .card > .card-body (ou .card-header + .card-body + .card-footer). É um dos componentes mais usados do framework moderno.",
            referencia: "Módulo 04 — Seção 4.3: Componentes de Layout"
        },
        {
            tipo: "multipla-resposta",
            enunciado: "Marque TODAS as classes utilitárias de ESPAÇAMENTO que existem no Bootstrap 5:",
            opcoes: [".mb-3", ".p-4", ".mt-5", ".space-large", ".gap-huge", ".m-0"],
            corretas: [0, 1, 2, 5],
            explicacao: "O Bootstrap 5 usa uma escala numérica de 0 a 5 para espaçamentos: m (margin), p (padding) + direção (t, b, l, r, x, y) + tamanho (0-5). Ex: .mb-3 (margin-bottom nível 3), .p-4 (padding nível 4), .m-0 (zera margins). NÃO existem .space-large nem .gap-huge.",
            referencia: "Módulo 04 — Seção 4.4: Classes Utilitárias de Espaçamento"
        },
        {
            tipo: "multipla",
            enunciado: "Qual classe do Bootstrap 5 cria um alerta VERMELHO (perigo)?",
            opcoes: [".alert-red", ".alert-danger", ".alert-error", ".alert-critical"],
            correta: 1,
            explicacao: ".alert-danger cria um alerta vermelho. As variações contextuais no BS5 são: .alert-success (verde), .alert-danger (vermelho), .alert-warning (amarelo), .alert-info (azul claro), .alert-primary (azul), .alert-secondary (cinza). NÃO existem .alert-red nem .alert-critical.",
            referencia: "Módulo 04 — Seção 4.7: Componentes de Alerta"
        },
        {
            tipo: "predicao",
            enunciado: "Considerando o código abaixo, qual a aparência do input?",
            codigo: '\x3Cinput type="email" class="form-control is-invalid"\x3E',
            opcoes: [
                "Borda verde com ícone de check",
                "Borda vermelha com ícone de exclamação",
                "Borda cinza padrão",
                "Borda azul com ícone de informação"
            ],
            correta: 1,
            explicacao: "A classe .is-invalid do Bootstrap 5 aplica borda VERMELHA e um ícone de exclamação (feedback visual de campo inválido). É usada em conjunto com .form-control para validação visual. A classe oposta é .is-valid (borda verde + check).",
            referencia: "Módulo 04 — Seção 4.8: Componentes de Validação Visual"
        },

        /* ============================================================
           TÓPICO 7 — APLICAÇÃO PRÁTICA (JSON, Storage, Async)
           ============================================================ */

        {
            tipo: "vf",
            enunciado: "JSON.parse() converte uma STRING em um objeto JavaScript.",
            resposta: true,
            explicacao: "Correto! JSON.parse() pega uma string no formato JSON e devolve o objeto JavaScript correspondente. Ex: JSON.parse('{\"nome\":\"Ana\"}') retorna { nome: 'Ana' }. O inverso é JSON.stringify(), que converte um objeto em string JSON — útil para salvar no localStorage.",
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
            tipo: "complete-multiplo",
            enunciado: "Complete o código abaixo para SALVAR e RECUPERAR um array de usuários no localStorage:",
            codigo: '// Salvar\nlocalStorage.{{GAP1}}("usuarios", {{GAP2}}(usuarios));\n\n// Recuperar\nconst dados = {{GAP3}}(localStorage.{{GAP4}}("usuarios"));',
            gaps: [
                { opcoes: ["save", "setItem", "put"], correta: 1 },
                { opcoes: ["JSON.parse", "JSON.stringify", "String()"], correta: 1 },
                { opcoes: ["JSON.parse", "JSON.stringify", "Object()"], correta: 0 },
                { opcoes: ["getItem", "get", "readItem"], correta: 0 }
            ],
            explicacao: "Para salvar: setItem() + JSON.stringify() (converte objeto → string). Para recuperar: getItem() + JSON.parse() (converte string → objeto). Esses 4 métodos são a base para persistência local no navegador. Sem JSON.stringify/parse, o array viraria a string '[object Object],[object Object]'.",
            referencia: "Módulo 04 — Seção 5.8: Desafios e Extensões do Projeto"
        },
        {
            tipo: "vf-justificativa",
            enunciado: "localStorage é a melhor escolha para armazenar senhas de usuários permanentemente.",
            resposta: false,
            justificativas: [
                "Porque localStorage só funciona em navegadores modernos.",
                "Porque os dados ficam em TEXTO PURO no navegador e acessíveis via JavaScript — qualquer script na página pode ler.",
                "Porque localStorage tem limite de 1 KB."
            ],
            justificativaCorreta: 1,
            explicacao: "NUNCA armazene senhas em localStorage. Os dados ficam em TEXTO PURO e são acessíveis via JavaScript — qualquer script malicioso (ou extensão do navegador) pode ler. Para autenticação, use TOKENS e sempre valide no servidor. localStorage é seguro apenas para dados NÃO-SENSÍVEIS (preferências, progresso do quiz).",
            referencia: "Módulo 04 — Seção 5.8: Desafios e Extensões do Projeto"
        },
        {
            tipo: "multipla",
            enunciado: "O que o método fetch() retorna em JavaScript?",
            opcoes: [
                "Os dados diretamente em JSON",
                "Uma Promise que resolve com a resposta da requisição",
                "Uma string com o HTML da página",
                "Um objeto XMLHttpRequest"
            ],
            correta: 1,
            explicacao: "fetch() retorna uma PROMISE. Ela resolve quando a resposta chega (mesmo se for erro HTTP como 404). Para extrair os dados, chama-se .json() ou .text() — que retornam OUTRA Promise. Pode-se usar .then() ou async/await para lidar. É a forma moderna de fazer requisições HTTP, substituindo o antigo XMLHttpRequest.",
            referencia: "Módulo 04 — Seção 5.8: Desafios e Extensões do Projeto"
        },
        {
            tipo: "erro",
            enunciado: "Há um problema no código abaixo envolvendo const. Aponte qual é:",
            codigo: 'const PI = 3.14;\nPI = 3.14159;\nconsole.log(PI);',
            opcoes: [
                "const não pode armazenar números",
                "const não permite REATRIBUIÇÃO — usar let se o valor precisar mudar",
                "O valor de PI deveria ser 3.1416",
                "O código está correto"
            ],
            correta: 1,
            explicacao: "const cria uma CONSTANTE — o valor NÃO pode ser reatribuído. A linha 'PI = 3.14159' gera o erro 'Assignment to constant variable'. Se o valor precisa mudar, use let: 'let taxa = 3.14; taxa = 3.14159;'. Use const para valores que NUNCA vão mudar.",
            referencia: "Módulo 04 — Seção 2.1.3: const (Constante com Escopo de Bloco)"
        },
        {
            tipo: "ordenar",
            enunciado: "Ordene as etapas do FLUXO de um formulário com validação e armazenamento:",
            itens: [
                "Usuário digita no campo",
                "Evento 'input' dispara a validação em tempo real",
                "Usuário clica em 'Enviar' (evento submit)",
                "event.preventDefault() impede o reload",
                "Dados são validados e salvos no array",
                "Feedback é exibido e o formulário é resetado"
            ],
            explicacao: "Fluxo típico do projeto: (1) usuário digita → (2) input dispara validação → (3) clica em Enviar → (4) preventDefault evita reload → (5) dados validados e salvos → (6) feedback exibido e form limpo. Cada etapa depende da anterior.",
            referencia: "Módulo 04 — Seção 5.7: Fluxo Completo de Uso"
        },
        {
            tipo: "multipla",
            enunciado: "Por que try/catch é essencial ao usar JSON.parse() em dados de fontes externas?",
            opcoes: [
                "Porque JSON.parse é lento e precisa ser otimizado",
                "Porque JSON.parse lança exceção (SyntaxError) se a string for inválida, o que interromperia todo o script",
                "Porque try/catch é obrigatório em todo código JavaScript",
                "Porque sem try/catch, o JSON não é parseado"
            ],
            correta: 1,
            explicacao: "JSON.parse() LANÇA uma exceção (SyntaxError) se a string não for JSON válido. SEM try/catch, essa exceção interrompe o script e quebra a página. Com try/catch, você captura o erro, exibe uma mensagem amigável e o resto do código continua funcionando. É obrigatório ao lidar com dados externos.",
            referencia: "Módulo 04 — Seção 1.3.1: Linguagem de Script (Interpretada)"
        },
        {
            tipo: "categorizacao",
            enunciado: "Classifique cada item quanto ao seu PAPEL na aplicação:",
            categorias: ["Frontend", "Backend", "Persistência"],
            itens: [
                { texto: "Manipular o DOM com querySelector", categoria: "Frontend" },
                { texto: "Validar formulário antes de enviar", categoria: "Frontend" },
                { texto: "Processar dados enviados por POST", categoria: "Backend" },
                { texto: "Salvar usuários em banco MySQL", categoria: "Backend" },
                { texto: "localStorage.setItem('progresso', ...)", categoria: "Persistência" },
                { texto: "Ler JSON do localStorage", categoria: "Persistência" }
            ],
            explicacao: "Frontend = o que roda no NAVEGADOR (DOM, eventos, validação, fetch). Backend = o que roda no SERVIDOR (PHP, Node.js, banco de dados). Persistência = armazenamento de dados — pode ser localStorage (client-side) ou banco (server-side). O JS atua principalmente no Frontend, mas com Node.js também no Backend.",
            referencia: "Módulo 04 — Seção 1.3.2: Client-Side (Executada no Cliente)"
        },
        {
            tipo: "flashcard",
            enunciado: "O que é uma 'Promise' em JavaScript e para que serve?",
            resposta: "Promise é um OBJETO que representa a conclusão (ou falha) futura de uma operação assíncrona. Ela tem 3 estados: PENDING (aguardando), FULFILLED (resolveu com sucesso) e REJECTED (falhou). Serve para lidar com operações que demoram — como requisições de rede (fetch), leitura de arquivos ou timers. Você 'consome' uma Promise com .then() e .catch(), ou com async/await (mais moderno). Ex: `fetch(url).then(r => r.json()).then(dados => ...)`.",
            referencia: "Módulo 04 — Seção 5.8: Desafios e Extensões do Projeto"
        },
        {
            tipo: "vf",
            enunciado: "A palavra-chave `await` só pode ser usada dentro de uma função `async`.",
            resposta: true,
            explicacao: "Correto! `await` só funciona dentro de uma função marcada como `async`. Ela PAUSA a execução da função até que a Promise seja resolvida — mas SEM bloquear a página (o resto do código continua rodando). Ex: `async function carregar() { const r = await fetch(url); const dados = await r.json(); return dados; }`. É uma sintaxe mais limpa do que .then() encadeados.",
            referencia: "Módulo 04 — Seção 5.8: Desafios e Extensões do Projeto"
        },
        {
            tipo: "multipla",
            enunciado: "Qual a principal VANTAGEM do `aria-live=\"polite\"` em uma div de feedback?",
            opcoes: [
                "Deixa a animação mais suave",
                "Faz o leitor de tela ANUNCIAR mudanças na região sem interromper o que está sendo lido",
                "Remove o elemento do fluxo do layout",
                "Aumenta o contraste automaticamente"
            ],
            correta: 1,
            explicacao: "aria-live='polite' instrui leitores de tela a ANUNCIAR o conteúdo da região quando ele muda, mas sem interromper o que está sendo lido. É ideal para mensagens de sucesso/erro em formulários. O valor 'assertive' interrompe imediatamente (use com moderação). Melhora muito a ACESSIBILIDADE.",
            referencia: "Módulo 04 — Seção 5.8: Desafios e Extensões do Projeto"
        }
    ]
};