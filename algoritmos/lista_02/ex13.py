ano = int(input('Ano do carro: '))
kg = int(input('Kg do carro: '))

if ano < 1970:
    if kg < 1200:
        print('Classe: 1\nTaxa de registro: 16,50')
    else:
        if kg > 1700:
            print('Classe: 3\nTaxa de registro: 46,50')
        else:
            print('Classe: 2\nTaxa de registro: 25,50')
else:
    if ano > 1980:
        
        if kg < 1200:
            print('Classe: 4\nTaxa de registro: 27,00')
        else:
            if kg > 1700:
                print('Classe: 6\nTaxa de registro: 52,50')
            else:
                print('Classe: 5\nTaxa de registro: 30,50')
    else:
        if kg < 1600:
            print('Classe: 7\nTaxa de registro: 19,50')
        else:
            print('Classe: 8\nTaxa de registro: 55,50')
