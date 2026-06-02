# Implemente uma função que ordene um vetor de inteiros de tamanho 10

def menor_inteiro(lista):
    menor = lista[0]
    for i in lista:
        if i < menor:
            menor = i

    return menor 


def tirar_valor(lista, valor):

    nova_lista = []

    for i in range(len(lista)):
        if lista[i] != valor:
            nova_lista.append(lista[i])

    return nova_lista


def ordenar_numeros(lista):

    ordenado = []

    while len(lista) != 0:
        for i in range(len(lista)):
            if lista[i] == menor_inteiro(lista):
                ordenado.append(lista[i])
        lista = tirar_valor(lista, menor_inteiro(lista))
    
    return ordenado

        

numeros = [10, 9, 7, 11, 15, 7, -8, 0, -4]
print(ordenar_numeros(numeros))