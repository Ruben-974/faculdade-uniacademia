# Escrever um algoritmo que lê 10 valores, um de cada vez, e conte quantos deles estão no intervalo [10,20] e quantos deles estão fora do intervalo, escrevendo estas informações.

counter10_20 = 0
counter = 0

for i in range(10):
    number = int(input('Enter a number: '))
    if number >= 10 or number <= 20:
        counter10_20 += 1
    else:
        counter += 1

print(counter)
print(counter10_20)