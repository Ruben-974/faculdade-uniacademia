# Escrever um algoritmo que leia um valor N inteiro e positivo e que calcula o valor de E. Imprime o resultado de E ao final.  
# E = 1 + 1 / 1! + 1 / 2! + 1 / 3! + 1 / N!

result_E = 0
number = int(input('Enter a number: '))

if number >= 0:
    print('1 + ', end='')
    for i in range(1, number+1):
        factorial = 1
        if i != number:
            print(f'{1} / {i}!', end=' + ')
        else:
            print(f'{1} / {i}!', end='')
        for i in range(1, i):
            factorial *= i
        result_E += 1/factorial
print(f' = {result_E:.2f}')