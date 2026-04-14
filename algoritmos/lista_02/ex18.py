n1 = float(input('Digite o 1° número: '))
n2 = float(input('Digite o 2° número: '))
print('[1] Somar | [2] Multiplicar | [3] Divisão')
codigo = int(input('Escolha uma opção [1, 2 ou 3]: '))

if codigo == 1:
    print('O resuldado é:', n1+n2)
else:
    if codigo == 2:
        print('O resuldado é:', n1*n2)
    else:
        if codigo == 3:
            print('O resuldado é:', n1/n2)
        else:
            print('Código invalido!')