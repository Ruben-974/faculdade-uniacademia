# JOGO DA FORCA - MODO TRAPAÇA (EVIL HANGMAN)
# Versão com recursos básicos (sem enumerate, lambda, max)

from random import choice

# Lista de palavras (5 letras, sem repetições triplas)
palavras = [
    "achar", "acham", "achas", "aspas",
    "babam", "babar", "babas", "bagas", "bamba", "banal", "barba", "barca", "barra", "basta", "batas", "braca", "brama",
    "cabra", "cacar", "cacas", "cacha", "calca", "calma", "camba", "cansa", "canta", "capar", "capas", "carta", "casca",
    "caspa", "catar", "cavar", "chaga", "chama", "chata", "clava", "crava",
    "dadas", "danar", "datar", "davam",
    "falar", "falas", "famas", "farpa", "farsa", "farta", "favas",
    "galas", "gamar", "garra", "grama",
    "jarra",
    "lacra", "lagar", "lamas", "lanar", "lasca", "lavar",
    "mamar", "manca", "manda", "manga", "manha", "manta", "marca", "massa", "matar",
    "nadar", "nanar", "narra", "natal",
    "pagar", "panda", "parar", "parta", "pasta", "patas", "praca", "prata",
    "ralar", "rampa", "rapaz", "raspa", "rasta", "ratas",
    "sacra", "salva", "samba", "sanar", "sarda", "sarja", "sarna",
    "tarja", "trama", "trava",
    "valva", "vazar", "zanga",
    "halar", "lacar", "lazar", "macar", "manar", "nasal", "rasar", "salar", "sarar",
    "tacar", "talar", "tapar", "tarar", "tasar", "vacar", "vagar", "valar", "varar", "xaras",
    "beber", "bebes", "bebem", "ceder", "cedes", "cedem", "cerne", "deter", "dever",
    "enche", "entre", "entes", "estes", "fedem", "feder", "fedes", "ferem", "feres",
    "fezes", "frege", "geres", "gerem", "ledes", "lerem", "leres", "medem", "medes", "meter",
    "metes", "metem", "mexem", "mexer", "mexes", "nenem", "perde", "prece", "preme", "reger",
    "reges", "regem", "reles", "remem", "remes", "rente", "reses", "retem", "retes", "rever",
    "sebes", "sedem", "sedes", "senes", "sente", "serem", "seres", "serve", "tecem", "tecer",
    "teces", "temem", "temer", "temes", "tende", "tenre", "terem", "teres", "teste", "tezes",
    "vezes", "vedes", "velem", "veles", "vende", "verde", "verse", "veste", "vetem", "vetes",
    "vexem", "vexes", "zeles", "zeres", "zerem", "neves", "lenes", "penes", "redes", "leves",
    "celes", "meses", "leses", "peses",
    "civil", "civis", "fingi", "mirim", "minis", "miris", "siris", "vizir", "vivis",
    "fitis", "bitis", "kiwis", "litis", "mitis", "pitis", "vitis", "xiris", "finis", "vinil",
    "bobos", "bolos", "botos", "cocos", "colos", "comos", "coros", "docos", "donos", "foros",
    "fosos", "gomos", "goros", "jogos", "lotos", "mocos", "modos", "molos", "monos", "moros",
    "notos", "novos", "ogros", "olhos", "omos", "orcos", "pocos", "polos", "pondo",
    "poros", "posso", "potro", "povos", "psoco", "robos", "rolos", "romos", "rosos", "rotos",
    "socos", "soros", "tocos", "tolos", "tomos", "tonos", "topos", "toros", "votos", "xoxos",
    "mofos", "bofos", "coxos", "fofos", "ortos", "fosso", "cosso", "rosso",
    "gurus", "lupus", "mucum", "tucum", "fucus", "humus", "jugum",
    "causa", "pausa", "sauna", "fauna", "cauda", "lauda", "paula", "maula", "jaula", "sauva",
    "chuva", "chupa", "chuta", "chufa", "chula", "mudar", "mudas", "mudam", "durar", "duras",
    "duram", "furar", "furas", "furam", "jurar", "juras", "juram", "curar", "curas", "curam",
    "lugar", "sugar", "fugaz", "pulga", "culpa", "burra", "surra", "turba", "turva", "curva",
    "furta", "junta", "justa", "lutar", "mutar", "nutar", "bugar", "jugar", "mular", "fugir",
    "fugis", "fugiu", "sumir", "sumis", "sumiu", "subir", "subis", "subiu", "urgir", "urgis", 
    "urgiu", "punir", "punis", "puniu", "munir", "munis", "muniu", "zunir", "zunis", "zuniu", 
    "funil", "futil", "sutil", "fuzil", "rubim", "nubil", "urdir", "urdis", "urdiu", "ruins", 
    "viver", "vives", "vivem", "vivei", "ferir", "feris", "gerir", "geris", "pedir", "pedis", 
    "medir", "medis", "doido", "coiso", "noivo", "poiso", "roido", "moido", "doudo", "couto", 
    "mouro", "ouros", "pouco", "rouco", "bolou", "colou", "mouco", "copas", "colar", "molar", 
    "polar", "solar", "rolar", "topar", "boiar", "noiar", "moiar", "goiar", "mover", "covil",
    "fungo", "longo", "bingo", "cinto", "lindo", "findo", "vindo", "tinto", "minto", "sinto",
    "pinho", "vinho", "minho", "linho", "ninho", "pinha", "vinha", "tinha", "linha", "minha",
    "sobra", "cobra", "dobra", "nobre", "pobre", "sobre", "corte", "morte", "forte",
    "porte", "ponta", "conta", "fonta", "monta", "ronda", "sonda", "banda", "manda", "canda",
    "venda", "renda", "senda", "tenda", "fenda", "lenda", "penda", "pisar", "visar", "lisar",
    "focar", "tocar", "locar", "jogar", "logar", "rogar", "vogar", "cegar", "pegar", "negar",
    "regar", "segar", "legar", "fervo", "servo", "verbo", "berro", "serro", "terra", "serra",
    "berra", "ferra", "perra", "mirra", "birra", "circo", "pinto", "cinto", "finto", "vento",
    "tento", "lento", "rento", "sento", "mento", "certo", "perto", "ferto", "dente",
    "pente", "lente", "gente", "mente", "tente", "fonte", "ponte", "monte", "cante",
    "mante", "sante", "tante", "pisam", "visam", "lisam", "risam", "sugam", "fugam", "jugam",
    "puxam", "luxam", "fixam", "mixam", "boxam", "coxam", "roxam", "pixam", "taxam", "faxam"
]

TAM = 5
candidatas = []                # Lista de palavras ainda possíveis
for p in palavras:
    if len(p) == TAM:          # SÓ ADICIONA SE TIVER 5 LETRAS
        candidatas.append(p.upper())

letras_jogadas = ''            # String com letras já tentadas (evitamos set)
mascara = ['_'] * TAM          # O que é exibido ao jogador

chances = 6
cabeca = tronco = braco_d = braco_e = perna_d = perna_e = ' '

stick_man = (f'\n______'
f'\n|    {cabeca}'
f'\n|   {braco_e}{tronco}{braco_d}'
f'\n|   {perna_e} {perna_d} ')

# Função para desenhar o stickman conforme as chances
def atualiza_stickman():
    global cabeca, tronco, braco_e, braco_d, perna_e, perna_d, stick_man
    if chances == 5: cabeca = 'O'
    elif chances == 4: tronco = '|'
    elif chances == 3: braco_e = '/'
    elif chances == 2: braco_d = '\\'
    elif chances == 1: perna_e = '/'
    elif chances == 0: perna_d = '\\'
    stick_man = (f'\n______'
                f'\n|    {cabeca}'
                f'\n|   {braco_e}{tronco}{braco_d}'
                f'\n|   {perna_e} {perna_d} ')

# Loop principal
while '_' in mascara and chances > 0:
    # Exibe estado atual
    linha_mascara = ''
    for letra in mascara:
        linha_mascara += letra + ' '
    print(stick_man + '   ' + linha_mascara, 'Letras Jogadas:', letras_jogadas)

    letra = input('\nDigite uma letra: ').upper().strip()

    # Validação
    if len(letra) != 1 or not letra.isalpha():
        print('\n\033[33mDIGITE APENAS UMA LETRA VÁLIDA!\033[0m')
        continue

    # Verifica se já foi jogada (usando string)
    if letra in letras_jogadas:
        print('\n\033[33mLETRA JÁ JOGADA\033[0m')
        continue

    letras_jogadas += letra

    # Agrupa as palavras candidatas em famílias de acordo com a letra chutada
    familias = {}
    for palavra in candidatas:
        padrao = []
        for i in range(TAM):
            if palavra[i] == letra:
                padrao.append(letra)
            else:
                padrao.append('_')
        chave = ''
        for c in padrao:
            chave += c
        if chave not in familias:
            familias[chave] = []
        familias[chave].append(palavra)

    # Escolhe a maior família (sem usar max e lambda)
    melhor_chave = None
    maior_tamanho = -1
    for chave in familias:
        tamanho = len(familias[chave])
        if tamanho > maior_tamanho:
            maior_tamanho = tamanho
            melhor_chave = chave

    candidatas = familias[melhor_chave]

    # Atualiza a máscara com a nova informação
    mascara_antes = []
    for c in mascara:
        mascara_antes.append(c)   # cópia manual

    for i in range(TAM):
        if melhor_chave[i] != '_':
            mascara[i] = melhor_chave[i]

    # Se a máscara não mudou, é porque a letra NÃO está na palavra (erro)
    mudou = False
    for i in range(TAM):
        if mascara[i] != mascara_antes[i]:
            mudou = True
            break

    if not mudou:
        chances -= 1
        atualiza_stickman()
        print(f'\nA letra {letra} não está na palavra. Você perdeu uma vida.')
    else:
        print(f'\nA letra {letra} está na palavra!')

# Fim do jogo
linha_mascara = ''
for letra in mascara:
    linha_mascara += letra + ' '
print(stick_man + '   ' + linha_mascara, 'Letras Jogadas:', letras_jogadas)

if '_' not in mascara:
    print('\n\033[32mVOCÊ VENCEU!\033[0m')
else:
    if len(candidatas) > 0:
        palavra_final = choice(candidatas)
    else:
        palavra_final = '?????'
    print(f'\n\033[31mVOCÊ PERDEU! A palavra era {palavra_final}\033[0m')