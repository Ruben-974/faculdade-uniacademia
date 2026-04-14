# Escrever o algoritmo que leia os valores n1 e n2 e imprima o intervalo fechado (incluindo os limites) entre esses dois valores

number_1 = int(input('Enter a number: '))
number_2 = int(input('Enter a number: '))
number_save = number_1

if number_1 > number_2:
    number_1 = number_2
    number_2 = number_save

for i in range(number_1, number_2 + 1):
    print(i, end=' ')

