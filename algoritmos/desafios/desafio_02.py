# JOGO DA FORCA

palavra = 'ALGORITMOS'
letras_jogadas = ''
chances = 6
vitoria = False

while chances != 0 or vitoria:

    letra = input('\nDigite uma letra: ')

    for i in palavra:
        
        if i not in letras_jogadas:
            letras_jogadas += letra
            if not i in palavra:
                chances -= 1

        
        if i in letras_jogadas:
            print(f'{i}', end=' ')
        else:
            print('_', end=' ')

