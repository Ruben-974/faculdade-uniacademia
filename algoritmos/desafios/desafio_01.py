from random import *

print('/-------/    GAME JOKENPÔ    /--------/')
print('/-------/ Escolha uma opção: /--------/')
print('/-------/     Pedra   [0]    /--------/')
print('/-------/     Papel   [1]    /--------/')
print('/-------/     Tesoura [2]    /--------/')
print()

escolha_usuario = int(input('--------> Sua escolha: '))
escolha_maquina = int(randint(0, 2))

print()

if escolha_usuario > 2 or escolha_usuario < 0:

    print('\033[31mEscolha invalida!')

else:

    print('------> Você escolheu:', escolha_usuario)
    print('------> O PC escolheu:', escolha_maquina)
    print()

    if escolha_usuario == escolha_maquina:
        print('\033[34mEMPATE!')
    else:
        if (escolha_usuario == 0 and escolha_maquina == 1) or (escolha_usuario == 1 and escolha_maquina == 2) or (escolha_usuario == 2 and escolha_maquina == 0):
            print('\033[31mO PC GANHOU!')
        else:
            print('\033[32mVOCÊ GANHOU!')

print()
print('\033[0m/-------/  GAME FINALIZADO  /--------/')
