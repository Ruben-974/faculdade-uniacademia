# Faça um algoritmo que leia uma quantidade não determinada de números
# positivos. Calcule a quantidade de números pares e ímpares, a média de
# valores pares e a média geral dos números lidos. O número que encerrará
# a leitura será zero.

amount_par_numbers = 0
amount_odd_numbers = 0
par_number = 0
odd_number = 0

number = int(input('Enter a number: '))

while number > 0 or number < 0:

    if number % 2:
        odd_number = odd_number + number
        amount_odd_numbers = amount_odd_numbers + 1
    else:
        par_number = par_number + number
        amount_par_numbers = amount_par_numbers + 1

    number = int(input('Enter a number: '))

average_numbers = (odd_number + par_number) / (amount_odd_numbers + amount_par_numbers)
average_par_numbers = par_number / amount_par_numbers

print(f'Amount par numbers: {amount_par_numbers}')
print(f'Amount odd numbers: {amount_odd_numbers}')
print(f'Average of numbers: {average_numbers}')
print(f'Average of par numbers: {average_par_numbers}')

