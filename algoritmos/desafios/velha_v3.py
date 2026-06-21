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


def fazer_jogada(posicao, matriz, simbolo):
    for i in range(len(matriz)):
        for j in range(len(matriz[i])):
            if matriz[i][j] == posicao:
                matriz[i][j] = simbolo


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


def previsao(matriz, simbolo):

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


def jogada_CPU(matriz, simbolo_CPU, simbolo_jogador, historico_jogador, historico_CPU):

    quinas = ['0', '2', '6', '8']
    laterais = ['1', '3', '5', '7']

    posicao = previsao(matriz, simbolo_CPU)
    if posicao != False:
        return posicao
    
    posicao = previsao(matriz, simbolo_jogador)
    if posicao != False:
        return posicao

    if len(historico_jogador) == 1:
        if historico_jogador[0] == '4' or historico_jogador[0] == '1' or historico_jogador[0] == '3':
            return '0'
        else:
            if historico_jogador[0] in quinas:
                return '4'
            else:
                if historico_jogador[0] == '5' or historico_jogador[0] == '7':
                    return '8'
                        

    if len(historico_jogador) == 2:
        if historico_jogador[0] == '4':
            return '2'
        else:
            if historico_CPU[0] == '4' and historico_jogador[0] in quinas and historico_jogador[1] in quinas:
                return '1'
            else:
                if historico_jogador[1] in laterais:
                    if historico_jogador[0] in ['0', '2']:
                        return '6'
                    if historico_jogador[0] in ['2', '5']:
                        return '8'
                    if historico_jogador[0] in ['6', '8']:
                        return '0'
                    if historico_jogador[0] in ['8', '0']:
                        return '2'
                
            return '4'
    
    for i in range(9):
        if str(i) not in historico_CPU + historico_jogador:
            return str(i)


matriz_tabulheiro = [['0', '1', '2'],
                     ['3', '4', '5'],
                     ['6', '7', '8']]

historico_jogador = []
historico_CPU = []

velha = len(historico_jogador + historico_CPU) == 9

print('Juiz: "Vamos Jogar o Jogo da V#LHA!"')
print('Juiz: "Escolha o seu simbolo! x ou o"')

simbolo_jogador = str(input('Escolha do Jogador: ')).lower()

while simbolo_jogador not in 'xo' or len(simbolo_jogador) != 1:

    print('Juiz: "Jogue apenas x ou o!"')

    simbolo_jogador = str(input('\nEscolha do Jogador: ')).lower()

simbolo_CPU = 'o'
if simbolo_jogador == simbolo_CPU:
    simbolo_CPU = 'x'

while velha == False and verificar_vitoria(matriz_tabulheiro) == False:

    print(montar_tabulheiro(matriz_tabulheiro, simbolo_CPU, simbolo_jogador))
    print('\nJuiz: "Escolha sua posição"')
    posicao_jogador = str(input('Escolha do Jogador: '))

    if posicao_jogador not in '012345678' or len(posicao_jogador) != 1 or posicao_jogador in (historico_CPU + historico_jogador):
        print('Juiz: "Escolha uma posição valida!"')

    else:
        historico_jogador.append(posicao_jogador)
        fazer_jogada(posicao_jogador, matriz_tabulheiro, simbolo_jogador)
        velha = len(historico_jogador + historico_CPU) == 9

        if velha == False and verificar_vitoria(matriz_tabulheiro) == False:

            posicao_CPU = jogada_CPU(matriz_tabulheiro, simbolo_CPU, simbolo_jogador, historico_jogador, historico_CPU)
            historico_CPU.append(posicao_CPU)
            fazer_jogada(posicao_CPU, matriz_tabulheiro, simbolo_CPU)

            velha = len(historico_jogador + historico_CPU) == 9

print(montar_tabulheiro(matriz_tabulheiro, simbolo_CPU, simbolo_jogador), '\n')

if velha == True:
    print('Juiz: "Deu Velha!"')
else:
    if verificar_vitoria(matriz_tabulheiro) == simbolo_CPU:
        print('Juiz: "O CPU venceu!"')
    else:
        print('Juiz: "O Jogador venceu!"')
