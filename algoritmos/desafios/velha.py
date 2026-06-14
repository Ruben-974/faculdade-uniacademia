from random import randint


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

                return 'Juiz: "Posição já jogada!"'
            
            cont += 1
    return True


def fazer_jogada(posicao, matriz, simbolo):

    juiz = validar_jogada(posicao, matriz)

    if juiz == True:

        for i in range(len(matriz)):
            for j in range(len(matriz[i])):
                if matriz[i][j] == posicao:
                    matriz[i][j] = simbolo
                    return matriz, juiz
                
    return matriz, juiz


def verificar_vitoria(historico):

    if len(historico) >= 3:

        sequencia_vitoria = [['0', '1', '2'],
                            ['3', '4', '5'],
                            ['6', '7', '8'],
                            ['0', '3', '6'],
                            ['1', '4', '7'],
                            ['2', '5', '8'],
                            ['0', '4', '8'],
                            ['2', '4', '6']]
        
        for i in range(len(sequencia_vitoria)):
            cont = 0
            for j in range(len(historico)):
                if historico[j] in sequencia_vitoria[i]:
                    cont += 1
                    if cont == 3:
                        return True
    
    return False


def CPU_jogar(historico_CPU, historico_jogador, matriz, simbolo_CPU, simbolo_jogador):

    juiz = ''
    posicoes = ['0', '1', '2', '3', '4', '5', '6', '7', '8']

    # Verifica se vai Ganhar

    for i in posicoes:
        if i not in historico_CPU:
            historico_CPU.append(i)
            if not verificar_vitoria(historico_CPU):
                historico_CPU.pop()
            else:
                matriz_teste, juiz = fazer_jogada(i, matriz, simbolo_CPU)
                historico_CPU.pop()
                if juiz is True:
                    return i, matriz_teste
    
    # Verifica se vai Perder

    for i in posicoes:
        if i not in historico_jogador:
            historico_jogador.append(i)
            if not verificar_vitoria(historico_jogador):
                historico_jogador.pop()
            else:
                historico_jogador.pop()
                matriz_teste, juiz = fazer_jogada(i, matriz, simbolo_CPU)
                if juiz is True:
                    return i, matriz_teste
        
    # Jogada Randomica
    
    while juiz != True:
        gerar = str(randint(0, 8))

        matriz_teste, juiz = fazer_jogada(gerar, matriz, simbolo_CPU)

        if juiz is True:
            return gerar, matriz_teste


def verificar_velha(matriz):

    posicoes = ['0', '1', '2', '3', '4', '5', '6', '7', '8']

    for i in range(len(matriz)):
        for j in range(len(matriz[i])):
            if matriz[i][j] in posicoes:
                return False
    return True



continuar_jogo = True
msg_juiz = ''
historico_jogador = []
historico_CPU = []

matriz_tabulheiro = [['0', '1', '2'],
                     ['3', '4', '5'],
                     ['6', '7', '8']]

#matriz_tabulheiro = [['x', 'o', 'x'],
#                     ['o', 'x', 'o'],
#                     ['o', 'x', 'o']]

print('VAMOS JOGAR O JOGO DA #!')
print('\nEscolha seu simbolo: x/o')

#simbolo_jogador = str(input('Jogador: ')).lower()
simbolo_jogador = 'o'

while simbolo_jogador not in 'xo' or len(simbolo_jogador) != 1:

    print('Juiz: "Jogue apenas x ou o!"')
    print('\nEscolha seu simbolo: x/o')

    simbolo_jogador = str(input('Jogador: ')).lower()
    

simbolo_CPU = 'o'
if simbolo_jogador == simbolo_CPU:
    simbolo_CPU = 'x'

print(f'\nSimbolo Jogador: {simbolo_jogador}')
print(f'Simbolo CPU: {simbolo_CPU}')
print(f'\nVAMOS COMEÇAR!\n')

# CPU COMEÇANDO:

#jogada_CPU, matriz_tabulheiro = CPU_jogar(historico_CPU, historico_jogador, matriz_tabulheiro, simbolo_CPU, simbolo_jogador)
#historico_CPU.append(jogada_CPU)

while not verificar_velha(matriz_tabulheiro) and continuar_jogo:
    print(montar_tabulheiro(matriz_tabulheiro))

    print('\nEscolha sua posição: ')
    jogada_jogador = str(input('Jogador: '))

    if jogada_jogador not in '012345678' or len(jogada_jogador) != 1:
        print('Juiz: "Escolha uma posição valida!"')
    else:
        matriz_tabulheiro, msg_juiz = fazer_jogada(jogada_jogador, matriz_tabulheiro, simbolo_jogador)
        if msg_juiz != True:
            print(msg_juiz)
        else:
            historico_jogador.append(jogada_jogador)

            if verificar_vitoria(historico_jogador) is True:
                print('Juiz: O JOGADOR VENCEU!')
                print(montar_tabulheiro(matriz_tabulheiro))
                continuar_jogo = False
            else:
                if not verificar_velha(matriz_tabulheiro):
                    jogada_CPU, matriz_tabulheiro = CPU_jogar(historico_CPU, historico_jogador, matriz_tabulheiro, simbolo_CPU, simbolo_jogador)
                    historico_CPU.append(jogada_CPU)
                    if verificar_vitoria(historico_CPU) is True:
                        print('Juiz: O CPU VENCEU!')
                        print(montar_tabulheiro(matriz_tabulheiro))
                        continuar_jogo = False
                else:
                    print('Juiz: DEU #!')
                    print(montar_tabulheiro(matriz_tabulheiro))


            
            
