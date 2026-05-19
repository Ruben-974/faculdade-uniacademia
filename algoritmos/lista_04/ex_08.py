# Escreva uma função que receba  como parâmetro um valor n inteiro e positivo e que calcule a seguinte soma: S = 1 + 1/2 + 1/3 + 1/4 + ... + 1/n. A função deverá retornar o valor de S. 


def calcularS(n):
    soma = 0
    for i in range(n):
        soma += 1/(i+1)
    return soma


s = int(input('Digite um número: '))

print(f'O valor de S é: {calcularS(s):.2f}')

