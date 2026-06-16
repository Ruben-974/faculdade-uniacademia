def montar_tabulheiro(matriz):
    tabulheiro = '---------\n'
    for i in range(len(matriz)):
        linha = ''
        for j in range(len(matriz)):
            linha += f'{matriz[i][j]}'
            if j != 2:
                linha += ' | '
        tabulheiro += linha+'\n'
    return tabulheiro + '---------'


def validar_jogada(posicao, matriz):

    cont = 0
    for i in range(len(matriz)):
        for j in range(len(matriz[i])):
            if matriz[i][j] in 'xo' and int(posicao) == cont:
                return False
            cont += 1
    return True


def fazer_jogada(posicao, matriz, simbolo):

    for i in range(len(matriz)):
        for j in range(len(matriz[i])):
            if matriz[i][j] == posicao:
                matriz[i][j] = simbolo
                return matriz
    return matriz


def verificar_colunas(matriz):

    for i in range(len(matriz)):

        col = []
        cont = 0
        
        for j in range(len(matriz)):
            col.append(matriz[j][i])
        
        for j in range(len(col)):
            if col[j] == col[i]:
                cont += 1
                if cont == len(col):
                    return True
        
    return False


def verificar_linhas(matriz):

    for i in range(len(matriz)):

        lin = []
        cont = 0
        
        for j in range(len(matriz)):
            lin.append(matriz[i][j])
        
        for j in range(len(lin)):
            if lin[i] == lin[j]:
                cont += 1
                if cont == len(lin):
                    return True
        
    return False


def verificar_diagonais(matriz):

    diag = []
    cont = 0

    for j in range(len(matriz)):
        diag.append(matriz[j][j])

    for j in range(len(diag)):
        if diag[j] == diag[0]:
            cont += 1
            if cont == len(diag):
                return True
        
    diag = []
    cont = 0

    menor = matriz[0][len(matriz[0])-1]
    for i in range(len(matriz)):
        j = len(matriz) - 1 - i
        if matriz[i][j] < menor:
            diag.append(matriz[i][j])

    print(diag)

    for j in range(len(diag)):
        if diag[j] == diag[0]:
            cont += 1
            if cont == len(diag):
                return True


    return False



matriz_tabulheiro = [['0', '1', '2'],
                     ['3', '4', '5'],
                     ['6', '7', '8']]

continuar_jogo = True

# DEFININDO SIMBOLO

#simbolo_jogador = str(input('Jogador: ')).lower()
simbolo_jogador = 'o'

while simbolo_jogador not in 'xo' or len(simbolo_jogador) != 1:

    print('Juiz: "Jogue apenas x ou o!"')
    print('\nEscolha seu simbolo: x/o')

    simbolo_jogador = str(input('Jogador: ')).lower()
    
simbolo_CPU = 'o'
if simbolo_jogador == simbolo_CPU:
    simbolo_CPU = 'x'

posicao_jogador = '9'

while continuar_jogo:
    print(montar_tabulheiro(matriz_tabulheiro))

    print('\nEscolha sua posição: ')
    posicao_jogador = str(input('Jogador: '))

    if posicao_jogador not in '012345678' or len(posicao_jogador) != 1 or not validar_jogada(posicao_jogador, matriz_tabulheiro):
        print('Juiz: "Escolha uma posição valida!"')
    else:
        matriz_tabulheiro = fazer_jogada(posicao_jogador, matriz_tabulheiro, simbolo_jogador)
        print(verificar_colunas(matriz_tabulheiro))
        print(verificar_linhas(matriz_tabulheiro))
        print(verificar_diagonais(matriz_tabulheiro))

