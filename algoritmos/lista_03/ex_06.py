# Construir um algoritmo que calcule a média aritmética de vários valores inteiros positivos, digitados pelo usuário. O final da leitura acontecerá quando for lido um valor negativo. 

value = 0
accumulator = 0
counter = -1

while value >= 0:

    accumulator = accumulator + value
    counter = counter + 1

    value = int(input('Enter a value: '))


print(f'Arithmetic mean {accumulator/counter}')
