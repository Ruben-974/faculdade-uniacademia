# Escrever   uma   função  somarIntervalo(n1,   n2)  que retorna a soma dos números inteiros que existem entre n1 e n2 (inclusive ambos). A função deve funcionar inclusive se o valor de n2 for menor que n1. 

def somarIntervalo(n1, n2):
    n3 = n1
    cont = 0

    if n1 > n2:
        n1 = n2
        n2 = n3

    for i in range(n1, n2+1):
        cont += i

    return cont


num1 = int(input('Digite o 1º número: '))
num2 = int(input('Digite o 2º número: '))
soma = somarIntervalo(num1, num2)

print(f'A soma entre {num1} e {num2} é {soma}')