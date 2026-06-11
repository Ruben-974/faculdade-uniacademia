# Escrever uma função que substitui por zero todos os números negativos do vetor passado por parâmetro.


def negativos_vira_zero(lista):

    for i in range(len(lista)):
        if lista[i] < 0:
            lista[i] = 0
    return lista


lista = [1, 2, -4, -5, 9]

print(negativos_vira_zero(lista))