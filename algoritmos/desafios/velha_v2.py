from random import randint, choice

def montar_tabulheiro(matriz):
    tabulheiro = '\n---------\n'
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

def previsao_nivel_dois(matriz, simbolo):

    save = []
    buscar_chave = []

    for i in range(len(matriz)):

        for j in range(len(matriz)):
            if matriz[i][j] not in 'xo':

                memoria_1 = matriz[i][j]
                save.append(matriz[i][j])
                matriz[i][j] = simbolo

                for k in range(len(matriz)):
                    for l in range(len(matriz)):

                        if matriz[k][l] not in 'xo':

                            memoria_2 = matriz[k][l]
                            matriz[k][l] = simbolo
                            #print(matriz[k][l], save)

                            if memoria_2 not in save:

                                if verificar_vitoria(matriz) != False:

                                    if memoria_1 not in buscar_chave:
                                        buscar_chave.append(memoria_1)
                                        buscar_chave.append(memoria_2)

                                        #print(matriz)

                                        #print(memoria_1, memoria_2, buscar_chave)

                                    else:
                                        matriz[i][j] = memoria_1
                                        matriz[k][l] = memoria_2
                                        return memoria_1
                                   
                            matriz[k][l] = memoria_2
                
                matriz[i][j] = memoria_1
    
    return False


def jogada_CPU(matriz, simbolo_CPU, simbolo_jogador):

    posicao = previsao_nivel_um(matriz, simbolo_CPU)
    if posicao != False:
        #print('Jogada Nivel 1 - CPU')
        return posicao
    
    posicao = previsao_nivel_um(matriz, simbolo_jogador)
    if posicao != False:
        #print('Jogada Nivel 1 - JOG')
        return posicao
    
    posicao = previsao_nivel_dois(matriz, simbolo_CPU)
    if posicao != False:
        #print('Jogada Nivel 2 - CPU')
        return posicao
    
    posicao = previsao_nivel_dois(matriz, simbolo_jogador)
    if posicao != False:
        #print(posicao)
        #print('Jogada Nivel 2 - JOG')
        return posicao

    valido = False

    while valido is False:
        posicao = str(randint(0, 8))
        valido = validar_jogada(posicao, matriz)
        if valido is True:
            #print('Jogada Randomica')
            return posicao

def verificar_velha(matriz):

    for i in range(len(matriz)):
        for j in range(len(matriz[i])):
            if matriz[i][j] not in 'xo':
                return False
    return True


def primeira_jogada_CPU(matriz):

    cont = 0

    for i in range(len(matriz)):
        for j in range(len(matriz)):
            if matriz[i][j] in 'xo':
                if cont >= 1:
                    return False
                cont += 1
    return True

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

    print(montar_tabulheiro(matriz_tabulheiro))
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

print(montar_tabulheiro(matriz_tabulheiro), '\n')

if velha == True:
    print('Juiz: "Deu Velha!"')
else:
    if venceu == simbolo_jogador:
        print(f'Juiz: "O Jogador venceu!"')
    else:
        print('Juiz: "O CPU venceu!"')




