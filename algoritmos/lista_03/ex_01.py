# Escrever um algoritmo que lê 10 valores e conte quantos destes valores são negativos, escrevendo esta informação. 

valores_negativos = 0

for i in range(10):
    valor = int(input('Digite um valor: '))
    if valor < 0:
        valores_negativos = valores_negativos + 1

print(f'Voce digitou {valores_negativos} valores negativos!')