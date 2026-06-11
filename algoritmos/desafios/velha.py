def visualizar_tabulheiro(matriz):
    tabulheiro = ''
    for i in range(len(matriz)):
        linha = ''
        for j in range(len(matriz)):
            linha += f'{matriz[i][j]}'
            if j != 2:
                linha += ' | '
        tabulheiro += linha+'\n'
    return tabulheiro


def fazer_jogada(posicao, matriz, simbolo):
    if autorizar_jogada(matriz, simbolo):
        for i in range(len(matriz)):
            for j in range(len(matriz)):
                if matriz[i][j] == posicao:
                    matriz[i][j] = simbolo
                    return matriz, visualizar_tabulheiro(matriz)


def autorizar_jogada(matriz, simbolo):
    if simbolo == 'x' or simbolo == 'o':
        for i in range(len(matriz)):
            for j in range(len(matriz)):
                if matriz[i][j] != 'x' or matriz[i][j] != 'o':
                    return True
                else:
                    return 'Posição já jogada'
    else:
        return 'Jogue apenas x ou o'


matriz_tabulheiro = [['0', '1', '2'],
                    ['3', '4', '5'],
                    ['6', '8', '9']]




matriz_tabulheiro, matriz_tabulheiro_visual = fazer_jogada('0', matriz_tabulheiro, 'y')
print(matriz_tabulheiro_visual)
