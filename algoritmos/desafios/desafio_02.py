# JOGO DA FORCA

# CRIANDO VARIAVEIS

palavra = 'ALGORITMOS'
letras_jogadas = incognita = ''
chances = 6
continuar = True
cabeca = tronco = braco_d = braco_e = perna_d = perna_e = forca = ' '
stick_man = (f'______'
f'\n|    {cabeca}'
f'\n|   {braco_e}{tronco}{braco_d}'
f'\n|   {perna_e} {perna_d} ')

while continuar:

    # VERIFICA SE O USUARIO PERDEU

    if chances == 0:
        print('\n\033[31mVOCÊ PERDEU!\033[0m')
        continuar = False

    else:

        # VERIFICA SE O USUARIO VENCEU

        if incognita == palavra:
            print('\n\033[32mVOCÊ VENCEU!\033[0m')
            continuar = False
    
        else:

            # PEDE UM LETRA AO USUARIO E REINICIA A VARIAVEL INCOGNITA

            incognita = ''

            letra = input('\nDigite uma letra: ').upper()

            if len(letra) > 1:
                print('\n\033[33mDIGITE UMA LETRA POR VEZ!\033[0m')

            else:

                # ESTRURA O STICK MAN DE ACORDO COM OS ERROS

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

                # VERIFICA QUAIS LETRAS O USUARIO JA ACERTOU, E QUAIS AINDA NAO, SALVANDO NA VARIAVEL INCOGNITA

                for i in range(len(palavra)):
                    if palavra[i] in letras_jogadas:
                        incognita += palavra[i]
                    else:
                        incognita += '_'

            # MOSTRA O STICK MAN
                
            print(stick_man + '   ' + incognita)

