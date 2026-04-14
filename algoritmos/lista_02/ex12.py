tempo_deposito = int(input('Anos depositados: '))

print('Taxa de juros: ', end='')

if tempo_deposito < 1:
    taxa = 0.55
else:
    if tempo_deposito < 2:
        taxa = 0.65
    else:
        if tempo_deposito < 3:
            taxa = 0.75
        else:
            if tempo_deposito < 4:
                taxa = 0.85
            else:
                if tempo_deposito < 5:
                    taxa = 0.90
                else:
                    taxa = 0.95

print(taxa)


