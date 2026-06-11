# Implemente uma função que retorne a média dos valores armazenados em um vetor de inteiros.

def media_vetor(lista):

    if len(lista) > 0:

        soma = 0

        for i in lista:
            soma += i
        
        return soma / len(lista)
    
    return 0

lista = []

print(media_vetor(lista))