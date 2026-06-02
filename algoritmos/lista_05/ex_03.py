# Implemente uma função que retorne o menor elemento de um vetor de inteiros

def menor_inteiro(lista):
    menor = lista[0]
    for i in lista:
        if i < menor:
            menor = i
    return menor 


numeros = [10, 9, 7, 0, 11, 15, 7, 9, -8, 0, 1]
print(menor_inteiro(numeros))



