# JOGO DA FORCA

# CRIANDO VARIAVEIS

palavra = 'MOSQUITO'
letras_jogadas =  ''
letras_erradas = ''
incognita = len(palavra)*'_'
chances = 6
cabeca = tronco = braco_d = braco_e = perna_d = perna_e = ' '
stick_man = (f'______'
f'\n|    {cabeca}'
f'\n|   {braco_e}{tronco}{braco_d}'
f'\n|   {perna_e} {perna_d}')

while incognita != palavra and chances != 0:

    # MOSTRA STICK MAN

    print(stick_man + '   ' + incognita, 'Letras Jogadas:', letras_erradas)

    letra = input('\nDigite uma letra: ').upper()

    if len(letra) != 1 or letra not in 'QWERTYUIOPASDFGHJKLZXCVBNM':
        print('\n\033[33mDIGITE APENAS LETRAS SEM ACENTOS!\033[0m')

    else:

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
            
            stick_man = (f'______'
                        f'\n|    {cabeca}'
                        f'\n|   {braco_e}{tronco}{braco_d}'
                        f'\n|   {perna_e} {perna_d} ')

        # VERIFICA SE A LETRA JA FOI JOGADA, SE NAO, ADICIONA NO CONJUNTO DE LETRAS

        if letra in letras_jogadas:
            print('\n\033[33mLETRA JA JOGADA\033[0m')
        else:
            letras_jogadas += letra

            if letra not in palavra:
                letras_erradas += letra

        # ESTRUTURA A VARIAVEL INCOGNITA PARA QUE APAREÇA SOMENTE AS LETRAS QUE O USUARIO ACERTOU

        for i in range(len(palavra)):
            if palavra[i] in letras_jogadas:
                incognita += palavra[i]
            else:
                incognita += '_'

print(stick_man + '   ' + incognita, 'Letras Jogadas:', letras_erradas)

if incognita == palavra:
    print('\n\033[32mVOCÊ VENCEU!\033[0m')
else:
    print('\n\033[31mVOCÊ PERDEU!\033[0m')