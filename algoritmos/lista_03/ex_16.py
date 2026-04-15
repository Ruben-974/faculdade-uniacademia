# Escreva um algoritmo que lê um valor n inteiro e positivo e que calcula a
# seguinte soma:
# S = 1 + 1/2 + 1/3 + 1/4 + ... + 1/n
# O algoritmo deve escrever cada termo gerado e o valor final de S.

number = int(input('Enter a positive number: '))

if number > 0:

    for i in range(number+1):
        print(f'1/{i+1}', end=' + ')
        if i == number:
            print(f'1/{i + 1}')
            testee

else:
    print('Value invalid!')
