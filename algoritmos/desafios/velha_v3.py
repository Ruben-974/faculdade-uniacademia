from random import randint, choice

def montar_tabulheiro(matriz, simbolo_CPU, simbolo_jogador):
    tabulheiro = '\n---------\n'
    for i in range(len(matriz)):
        linha = ''
        for j in range(len(matriz)):
            
            if matriz[i][j] == simbolo_CPU:
                linha += f'\033[31m{matriz[i][j]}\033[m'
            if matriz[i][j] == simbolo_jogador:
                linha += f'\033[34m{matriz[i][j]}\033[m'
            if matriz[i][j] != simbolo_jogador and matriz[i][j] != simbolo_CPU:
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


def verificar_vitoria(matriz):
 
    diag_p = []
    diag_s = []
    
    possiveis_vitorias = [diag_p, diag_s]

    for i in range(len(matriz)):

        diag_p.append(matriz[i][i])
        diag_s.append(matriz[i][len(matriz)-i-1])

        lin = []
        col = []
        
        for j in range(len(matriz)):
            lin.append(matriz[i][j])
            col.append(matriz[j][i])
        
        possiveis_vitorias.append(lin)
        possiveis_vitorias.append(col)

    for i in range(len(possiveis_vitorias)):
        cont = 0
        for j in range(len(possiveis_vitorias[i])):
            if possiveis_vitorias[i][j] == possiveis_vitorias[i][0]:
                cont += 1
                if cont == len(possiveis_vitorias[i]):
                    return possiveis_vitorias[i][j]

    return False


def previsao_nivel_um(matriz, simbolo):

    for i in range(len(matriz)):

        for j in range(len(matriz)):
            if matriz[i][j] not in 'xo':
                
                memoria = matriz[i][j]
                matriz[i][j] = simbolo
                if verificar_vitoria(matriz) != False:
                    matriz[i][j] = memoria
                    return matriz[i][j]
                matriz[i][j] = memoria
    return False


def jogada_CPU(matriz, simbolo_CPU, simbolo_jogador):

    historico_jogador = historico_posicoes(matriz, simbolo_jogador)
    historico_CPU = historico_posicoes(matriz, simbolo_CPU)
    quinas = ['0', '2', '6', '8']
    laterais = ['1', '3', '5', '7']

    posicao = previsao_nivel_um(matriz, simbolo_CPU)
    if posicao != False:
        return posicao
    
    posicao = previsao_nivel_um(matriz, simbolo_jogador)
    if posicao != False:
        return posicao

    if len(historico_jogador) == 1:
        if historico_jogador[0] == '4': # Centro
            return '0'
        else:
            if historico_jogador[0] in quinas:
                return '4'
            else:
                if historico_jogador[0] in laterais:
                    if historico_jogador[0] == '1' or historico_jogador[0] == '3':
                        return '0'
                    if historico_jogador[0] == '5' or historico_jogador[0] == '7':
                        return '8'
                        

    if len(historico_jogador) == 2:

        print(historico_jogador, historico_CPU)
        if '4' in historico_jogador:
            for i in range(0, 9):
                if str(i) not in historico_CPU+historico_jogador and str(i) in ['0', '2', '6', '8']:
                    return str(i)
        else:
            for i in range(0, 9):
                if '4' in historico_CPU:
                    cont = 0
                    for j in range(len(historico_jogador)):
                        if historico_jogador[j] in ['0', '2', '6', '8']:
                            cont += 1
                            if cont == 2 and str(i) in ['1', '3', '5', '7']:
                                return str(i)
                    if cont != 2:
                        if historico_jogador == ['0', '7'] or historico_jogador == ['2', '3']:
                            return '6'
                        if historico_jogador == ['2', '7'] or historico_jogador == ['6', '5']:
                            return '8'
                        if historico_jogador == ['6', '1'] or historico_jogador == ['2', '3']:
                            return '0'
                        if historico_jogador == ['1', '8'] or historico_jogador == ['0', '5']:
                            return '2'
                
            return '4'
        
    valido = False

    while valido is False:
        posicao = str(randint(0, 8))
        valido = validar_jogada(posicao, matriz)
        if valido is True:
            print('Jogada Randomica')
            return posicao


def verificar_velha(matriz):

    for i in range(len(matriz)):
        for j in range(len(matriz[i])):
            if matriz[i][j] not in 'xo':
                return False
    return True


def historico_posicoes(matriz, simbolo):
    cont = 0
    historico = []

    for i in range(len(matriz)):
        for j in range(len(matriz)):
            if matriz[i][j] == simbolo:
                historico.append(str(cont))
            cont += 1
    return historico

# GERANDO MATRIZ

matriz_tabulheiro = [['0', '1', '2'],
                     ['3', '4', '5'],
                     ['6', '7', '8']]

# DEFININDO SIMBOLO
print('Juiz: "Vamos Jogar o Jogo da V#LHA!"')
print('Juiz: "Escolha o seu simbolo! x ou o"')
simbolo_jogador = str(input('Escolha do Jogador: ')).lower()
#simbolo_jogador = 'o'
velha = False
venceu = False

while simbolo_jogador not in 'xo' or len(simbolo_jogador) != 1:

    print('Juiz: "Jogue apenas x ou o!"')

    simbolo_jogador = str(input('\nEscolha do Jogador: ')).lower()

# DEFININDO SIMBOLO CPU

simbolo_CPU = 'o'
if simbolo_jogador == simbolo_CPU:
    simbolo_CPU = 'x'

while verificar_velha(matriz_tabulheiro) == False and verificar_vitoria(matriz_tabulheiro) == False:

    print(montar_tabulheiro(matriz_tabulheiro, simbolo_CPU, simbolo_jogador))
    print('\nJuiz: "Escolha sua posição"')

    posicao_jogador = str(input('Escolha do Jogador: '))

    if posicao_jogador not in '012345678' or len(posicao_jogador) != 1 or not validar_jogada(posicao_jogador, matriz_tabulheiro):

        print('Juiz: "Escolha uma posição valida!"')

    else:

        matriz_tabulheiro = fazer_jogada(posicao_jogador, matriz_tabulheiro, simbolo_jogador)

        velha = verificar_velha(matriz_tabulheiro)
        venceu = verificar_vitoria(matriz_tabulheiro)

        if velha == False and venceu == False:

            posicao_CPU = jogada_CPU(matriz_tabulheiro, simbolo_CPU, simbolo_jogador)
            matriz_tabulheiro = fazer_jogada(posicao_CPU, matriz_tabulheiro, simbolo_CPU)

print(montar_tabulheiro(matriz_tabulheiro, simbolo_CPU, simbolo_jogador), '\n')

if velha == True:
    print('Juiz: "Deu Velha!"')
else:
    if venceu == simbolo_jogador:
        print(f'Juiz: "O Jogador venceu!"')
    else:
        print('Juiz: "O CPU venceu!"')




