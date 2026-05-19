# Escrever uma função contarImpar(n1, n2) que retorna o número de inteiros ímpares que existem entre n1 e n2 (inclusive ambos, se for o caso). A função deve funcionar inclusive se o valor de n2 for menor que n1.

def contarImpar(n1, n2):
    n3 = n1
    cont = 0

    if n1 > n2:
        n1 = n2
        n2 = n3

    for i in range(n1, n2+1):
        if i % 2 != 0:
            print(i)
            cont += 1

    return cont


num1 = int(input('Digite o 1º número: '))
num2 = int(input('Digite o 2º número: '))
impares = contarImpar(num1, num2)


print(f'Entre {num1} e {num2} existem {impares} números ímpares')

