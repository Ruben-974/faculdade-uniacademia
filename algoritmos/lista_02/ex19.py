nota = float(input('Digite sua nota: '))

if nota < 5:
    print('Conceito D')
else:
    if nota <= 6:
        print('Conceito C')
    else:
        if nota <= 8:
            print('Conceito B')
        else:
            if nota <= 10:
                print('Conceito A')
            