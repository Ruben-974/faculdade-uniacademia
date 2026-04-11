# Escreva um algoritmo que leia 20 valores e encontre o maior e o menor deles. Mostre o resultado.

valores_negativos = 0

for i in range(10):
    valor = int(input('Digite um valor: '))
    if valor < 0:
        valores_negativos = valores_negativos + 1

print(f'Voce digitou {valores_negativos} valores negativos!')