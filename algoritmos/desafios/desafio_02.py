from random import *

print('/-------/    GAME JOKENPÔ    /--------/')
print('/-------/ Escolha uma opção: /--------/')
print('/-------/     Pedra   [0]    /--------/')
print('/-------/     Papel   [1]    /--------/')
print('/-------/     Tesoura [2]    /--------/')
print()

vitorias_maquina = 0
vitorias_usuario = 0

partidas = int(input('Quantas patidas você irá jogar? '))

for c in range(partidas):

    escolha_usuario = int(input('--------> Sua escolha: '))
    escolha_maquina = int(randint(0, 2))

    print()

    if escolha_usuario > 2 or escolha_usuario < 0:

        print('\033[31mEscolha invalida!\033[0m')

    else:

        print('------> Você escolheu:', escolha_usuario)
        print('------> O PC escolheu:', escolha_maquina)
        print()

        if escolha_usuario == escolha_maquina:
            print('\033[34mEMPATE!\033[0m')
        else:
            if (escolha_usuario == 0 and escolha_maquina == 1) or (escolha_usuario == 1 and escolha_maquina == 2) or (escolha_usuario == 2 and escolha_maquina == 0):
                print('\033[31mO PC GANHOU!\033[0m')
                vitorias_maquina = vitorias_maquina + 1
            else:
                print('\033[32mVOCÊ GANHOU!\033[0m')
                vitorias_usuario = vitorias_usuario + 1

print()
print('\033[0m/------/  GAME FINALIZADO  /--------/')
print(f'/-----/ O usuario venceu {vitorias_usuario} /-----/')
print(f'/-----/ A maquina venceu {vitorias_maquina} /-----/')
print(f'/-----/ Houve no total {partidas-vitorias_maquina-vitorias_usuario} empates/-----/\033[0m')
print()

if vitorias_usuario > vitorias_maquina:
    print('\033[0m/-----/ MAIOR VENCEDOR: USUARIO /------/')
else:
    if vitorias_usuario < vitorias_maquina:
        print('\033[0m/-----/ MAIOR VENCEDOR: MAQUINA /------/')
    else:
        print('\033[0m/-----/ HOUVE EMPATE /-------/')