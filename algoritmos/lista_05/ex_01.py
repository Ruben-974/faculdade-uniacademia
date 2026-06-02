# Escrever uma função que receba um vetor com 10 valores e retorne quantos destes valores são negativos. 

def contar_negativos(lista):
    contar = 0
    for i in lista:
        if i < 0:
            contar += 1
    return contar


lista = [1, 3, -5, -7, 9, -3, -2, -2, 0, -1]
print(contar_negativos(lista))