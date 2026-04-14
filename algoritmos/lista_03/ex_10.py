# Escrever um algoritmo que leia um número n que indica quantos valores devem ser lidos a seguir. Para cada número lido, mostre o valor lido e o fatorial deste valor

times = int(input('How many numbers can you read? '))


for i in range(times):
    number = int(input('Enter a number: '))
    factorial = 1
    for i in range(1, number+1):
        factorial = factorial*i
    print(f'{number}! = {factorial}')