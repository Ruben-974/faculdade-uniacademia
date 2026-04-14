n1 = int(input('Digite o 1° número: '))
n2 = int(input('Digite o 2° número: '))

if n1+n2 < 8:
    print((n1+n2) / 2)

else:
    if n1+n2 == 8:
        print(n1*n2)
    else:
        if n1+n2 > 8:
            if n1>n2:
                print(n1/n2)
            else:
                print(n2/n1)
