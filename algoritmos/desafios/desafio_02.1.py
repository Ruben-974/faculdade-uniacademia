# JOGO DA FORCA

# CRIANDO VARIAVEIS

from random import choice


palavras = [
    "abada", "abafa", "abala", "abana", "abata", "abava", "acaba", "achar", "acham", "achas",
    "acama", "acana", "acara", "afaga", "afala", "afama", "afana", "afara", "afata", "afava",
    "agata", "alada", "alaga", "alama", "alana", "alara", "alava", "amada", "amala", "amana",
    "amara", "amata", "amava", "anana", "apaga", "apara", "arara", "arava", "aspas", "atada",
    "atala", "atara", "atava", "avara", "babam", "babar", "babas", "bagas", "bamba", "banal",
    "barba", "barca", "barra", "basta", "batas", "braca", "brama", "cabra", "cacar", "cacas",
    "cacha", "calca", "calma", "camba", "cansa", "canta", "capar", "capas", "carta", "casca",
    "caspa", "catar", "cavar", "chaga", "chama", "chata", "clava", "crava", "dadas", "danar",
    "datar", "davam", "falar", "falas", "famas", "farpa", "farsa", "farta", "favas", "galas",
    "gamar", "garra", "grama", "jarra", "lacra", "lagar", "lamas", "lanar", "lasca", "lavar",
    "mamar", "manca", "manda", "manga", "manha", "manta", "marca", "massa", "matar", "nadar",
    "nanar", "narra", "natal", "pagar", "panda", "parar", "parta", "pasta", "patas", "praca",
    "prata", "ralar", "rampa", "rapaz", "raspa", "rasta", "ratas", "sacra", "salva", "samba",
    "sanar", "sarda", "sarja", "sarna", "tarja", "trama", "trava", "valva", "vazar", "zanga",
    "zarpar", "halar", "lacar", "lazar", "macar", "manar", "nasal", "rarar", "rasar", "salar",
    "sarar", "tacar", "talar", "tapar", "tarar", "tasar", "vacar", "vagar", "valar", "varar",
    "xaras", "beber", "bebes", "bebem", "ceder", "cedes", "cedem", "cerne", "deter", "dever",
    "elege", "enche", "entre", "entes", "estes", "fedem", "feder", "fedes", "ferem", "feres",
    "fezes", "frege", "geres", "gerem", "ledes", "lerem", "leres", "medem", "medes", "meter",
    "metes", "metem", "mexem", "mexer", "mexes", "nenem", "perde", "prece", "preme", "reger",
    "reges", "regem", "reles", "remem", "remes", "rente", "reses", "retem", "retes", "rever",
    "sebes", "sedem", "sedes", "senes", "sente", "serem", "seres", "serve", "tecem", "tecer",
    "teces", "temem", "temer", "temes", "tende", "tenre", "terem", "teres", "teste", "tezes",
    "vezes", "vedes", "velem", "veles", "vende", "verde", "verse", "veste", "vetem", "vetes",
    "vexem", "vexes", "zeles", "zeres", "zerem", "neves", "lenes", "penes", "redes", "leves",
    "celes", "meses", "leses", "peses", "civil", "civis", "fingi", "iris", "iriri", "mirim",
    "minis", "miris", "siris", "vizir", "vivis", "fitis", "bitis", "kiwis", "litis", "mitis",
    "pitis", "vitis", "xiris", "finis", "vinil", "bobos", "bolos", "botos", "cocos", "colos",
    "comos", "coros", "docos", "donos", "foros", "fosos", "gomos", "goros", "jogos", "lotos",
    "mocos", "modos", "molos", "monos", "moros", "notos", "novos", "ogros", "olhos", "omos",
    "orcos", "osco", "ozono", "pocos", "polos", "pondo", "poros", "posso", "potro", "povos",
    "psoco", "robos", "rolos", "romos", "rosos", "rotos", "socos", "soros", "tocos", "tolos",
    "tomos", "tonos", "topos", "toros", "votos", "xoxos", "mofos", "bofos", "coxos", "fofos",
    "hortos", "mortos", "ortos", "portos", "rostos", "tortos", "fosso", "ossos", "cosso",
    "rosso", "urubu", "urucu", "gurus", "lupus", "mucum", "tucum", "fucus", "humus", "jugum",
    "causa", "pausa", "sauna", "fauna", "cauda", "lauda", "paula", "maula", "jaula", "sauva",
    "chuva", "chupa", "chuta", "chufa", "chula", "mudar", "mudas", "mudam", "durar", "duras",
    "duram", "furar", "furas", "furam", "jurar", "juras", "juram", "curar", "curas", "curam",
    "lugar", "sugar", "fugaz", "pulga", "culpa", "burra", "surra", "turba", "turva", "curva",
    "furta", "junta", "justa", "lutar", "mutar", "nutar", "bugar", "jugar", "mular", "fugir",
    "fugis", "fugiu", "sumir", "sumis", "sumiu", "subir", "subis", "subiu", "curtir", "curtis",
    "curtiu", "urgir", "urgis", "urgiu", "uniu", "punir", "punis", "puniu", "munir", "munis",
    "muniu", "zunir", "zunis", "zuniu", "funil", "futil", "sutil", "fuzil", "rubim", "nubil",
    "urdir", "urdis", "urdiu", "ruins", "viver", "vives", "vivem", "vivei", "ferir", "feris",
    "gerir", "geris", "pedir", "pedis", "medir", "medis", "doido", "coiso", "noivo", "poiso",
    "roido", "moido", "doudo", "couto", "mouro", "ouros", "pouco", "rouco", "bolou", "colou",
    "mouco", "copas", "colar", "molar", "polar", "solar", "rolar", "topar", "boiar", "noiar",
    "moiar", "goiar", "voar", "doar", "roer", "soer", "moer", "loer", "poer", "mover", "covil",
    "fungo", "longo", "bingo", "cinto", "lindo", "findo", "vindo", "tinto", "minto", "sinto",
    "pinho", "vinho", "minho", "linho", "ninho", "pinha", "vinha", "tinha", "linha", "minha",
    "sobra", "cobra", "dobra", "obra", "nobre", "pobre", "sobre", "corte", "morte", "forte",
    "porte", "ponta", "conta", "fonta", "monta", "ronda", "sonda", "banda", "manda", "canda",
    "venda", "renda", "senda", "tenda", "fenda", "lenda", "penda", "pisar", "visar", "lisar",
    "focar", "tocar", "locar", "jogar", "logar", "rogar", "vogar", "cegar", "pegar", "negar",
    "regar", "segar", "legar", "fervo", "servo", "verbo", "berro", "serro", "terra", "serra",
    "berra", "ferra", "perra", "mirra", "birra", "circo", "pinto", "cinto", "finto", "vento",
    "tento", "lento", "rento", "sento", "mento", "certo", "perto", "ferto", "aberta", "dente",
    "pente", "lente", "gente", "mente", "tente", "quente", "fonte", "ponte", "monte", "cante",
    "mante", "sante", "tante", "pisam", "visam", "lisam", "risam", "sugam", "fugam", "jugam",
    "puxam", "luxam", "fixam", "mixam", "boxam", "coxam", "roxam", "pixam", "taxam", "faxam"
]




palavra = '*****'
letras_jogadas =  ''
incognita = len(palavra)*'_'

chances = 6
cabeca = tronco = braco_d = braco_e = perna_d = perna_e = ' '

stick_man = (f'\n______'
f'\n|    {cabeca}'
f'\n|   {braco_e}{tronco}{braco_d}'
f'\n|   {perna_e} {perna_d}')

while incognita != palavra and chances != 0:

    # MOSTRA STICK MAN

    print(stick_man + '   ' + incognita)

    letra = input('\nDigite uma letra: ').upper()

    if len(letra) != 1:
        print('\n\033[33mDIGITE APENAS LETRA POR VEZ!\033[0m')

    else:

        save = palavras[:]
        print(save)

        for i in palavras[:]:
            if letra.lower() in i:
                palavras.remove(i)

        if len(palavras) == 0:
            palavras = save[:]

        palavra = choice(palavras).upper()


        print(palavra)

        incognita = ''

        # ESTRUTURA O STICK MAN DE ACORDO COM OS ERROS


        if letra not in palavra and letra not in letras_jogadas:
            chances -= 1
            if chances == 5:
                cabeca = 'O'
            if chances == 4:
                tronco = '|'
            if chances == 3:
                braco_e = '/'
            if chances == 2:
                braco_d = '\\'
            if chances == 1:
                perna_e = '/'
            if chances == 0:
                perna_d = '\\'
            
            stick_man = (f'\n______'
                        f'\n|    {cabeca}'
                        f'\n|   {braco_e}{tronco}{braco_d}'
                        f'\n|   {perna_e} {perna_d} ')

        # VERIFICA SE A LETRA JA FOI JOGADA, SE NAO, ADICIONA NO CONJUNTO DE LETRAS

        if letra in letras_jogadas:
            print('\n\033[33mLETRA JA JOGADA\033[0m')
        else:
            letras_jogadas += letra
            print(letras_jogadas)

        # ESTRUTURA A VARIAVEL INCOGNITA PARA QUE APAREÇA SOMENTE AS LETRAS QUE O USUARIO ACERTOU

        for i in range(len(palavra)):
            if palavra[i] in letras_jogadas:
                incognita += palavra[i]
            else:
                incognita += '_'

print(stick_man + '   ' + incognita)

if incognita == palavra:
    print('\n\033[32mVOCÊ VENCEU!\033[0m')
else:
    print('\n\033[31mVOCÊ PERDEU!\033[0m')