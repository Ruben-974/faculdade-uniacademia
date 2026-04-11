# Faça um algoritmo que lê um valor N inteiro e positivo e que calcula e escreve o fatorial de N (N!)

value = int(input('Enter a value: '))
factorial = 1 

for i in range(value):
    factorial = (i+1)*factorial

print(f'The factorial of {value} is {factorial}.')
