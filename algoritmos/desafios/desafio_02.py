# JOGO DA FORCA

palavra = 'ABC'
letras_jogadas = incognita = ''
chances = 6
continuar = True
cabeca = tronco = braco_d = braco_e = perna_d = perna_e = forca = ' '
stick_man = (f'______'
f'\n|    {cabeca}'
f'\n|   {braco_e}{tronco}{braco_d}'
f'\n|   {perna_e} {perna_d} ')

while continuar:

    if chances == 0:
        print('VOCÊ PERDEU')
        continuar = False

    else:

        if incognita == palavra:
            print('VOCÊ VENCEU!')
            continuar = False
    
        else:

            incognita = ''

            letra = input('\nDigite uma letra: ').upper()

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
                    

            if letra in letras_jogadas:
                print('LETRA JA JOGADA')
            else:
                letras_jogadas += letra

            print(stick_man)
            print(f'LETRAS JOGADAS: {letras_jogadas} - CHANCES RESTANTES: {chances}')

            for i in range(len(palavra)):
                if palavra[i] in letras_jogadas:
                    incognita += palavra[i]
                else:
                    incognita += '_'
            
            print(incognita)

