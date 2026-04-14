nota = float(input('Digite sua nota: '))

if nota > 100:
    print('Nota Invalida')
else:
    if nota < 0:
        print('Nota Invalida')
    else:
        if nota >= 60:
            print('Aprovado!')
        else:
            print('Reprovado')