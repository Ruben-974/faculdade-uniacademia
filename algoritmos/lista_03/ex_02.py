# Escreva um algoritmo que leia 20 valores e encontre o maior e o menor deles. Mostre o resultado.

for i in range(20):
    valor = int(input('Digite um valor: '))
    if i == 0:
        maior = valor
        menor = valor
    if valor < menor:
        menor = valor
    if valor > maior:
        maior = valor

print(f'O maior valor digitado foi: {maior}')
print(f'O menor valor digitado foi: {menor}')