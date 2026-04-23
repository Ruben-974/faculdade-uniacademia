# Escrever um algoritmo que leia um valor N inteiro e positivo e que calcula o valor de E. Imprime o resultado de E ao final.  
# E = 1 + 1 / 1! + 1 / 2! + 1 / 3! + 1 / N!


number = int(input('Enter a number: '))

if number >= 0:

    for i in range(1, number):
        factorial = 1
        print(f'{1} + {1} / {i}!', end=' + ')
        for i in range(1, i):
            factorial *= i