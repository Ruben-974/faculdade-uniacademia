# Escrever um algoritmo que lê 10 valores, um de cada vez, e conte quantos deles estão no intervalo [10,20] e quantos deles estão fora do intervalo, escrevendo estas informações.

interval_counter = 0
not_interval_counter = 0

for i in range(10):
    number = int(input('Enter a number: '))
    if number >= 10 and number <= 20:
        interval_counter += 1
    else:
        not_interval_counter += 1

print(interval_counter)
print(not_interval_counter)