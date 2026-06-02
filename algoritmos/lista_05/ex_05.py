# Escrever uma função que recebe por parâmetro um vetor de inteiros e retorna a soma de seus elementos. 

def somar_elementos(lista):
    cont = 0
    for i in lista:
        cont += i

    return cont

numeros = [10, 9, 7, 11, 15, 7, -8, 0, -4]

print('A soma total dos elementos é:', somar_elementos(numeros))