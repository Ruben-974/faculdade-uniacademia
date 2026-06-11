# Implemente uma função que, dado um valor, retorne se esse valor pertence ou não a um vetor de inteiros.

def pertence(valor, lista):
    for i in lista:
        if i == valor:
            return True
        
    return False
    
lista = [1, 2, 3, 5]

print(pertence(2, lista))
