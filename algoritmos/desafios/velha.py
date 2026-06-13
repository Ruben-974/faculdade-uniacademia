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


continuar = True
msg_juiz = ''
historico_jogador = []

matriz_tabulheiro = [['0', '1', '2'],
                     ['3', '4', '5'],
                     ['6', '7', '8']]

print('VAMOS JOGAR O JOGO DA #!')
print('\nEscolha seu simbolo: x/o')

simbolo_jogador = str(input('Jogador: ')).lower()

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

while continuar:

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
