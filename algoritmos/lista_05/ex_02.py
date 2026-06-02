# Implemente uma função que retorne o maior elemento de um vetor de inteiros.

def maior_inteiro(lista):
    maior = lista[0]
    for i in lista:
        if i > maior:
            maior = i
    return maior 


numeros = [10, 9, 7, 0, 11, 15, 7, 9, -8, 0, 1]
print(maior_inteiro(numeros))

