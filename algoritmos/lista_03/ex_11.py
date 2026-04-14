# Escrever um algoritmo que leia um número não determinado de valores e calcule a média aritmética dos valores lidos, a quantidade de valores positivos, a quantidade de valores negativos e o percentual de valores negativos e positivos. Mostre os resultados.


sum_value = 0
number_of_positives = 0
number_of_negatives = 0
porcentage_of_positives = 0
porcentage_of_negatives = 0

number_of_values = int(input('number of values: '))

if number_of_values > 0:

    for i in range(number_of_values):
        number = int(input('Enter a number: '))
        sum_value = sum_value+number
        if number > 0:
            number_of_positives = number_of_positives+1
        else:
            if number < 0:
                number_of_negatives = number_of_negatives+1

    arithmetic_mean = sum_value/number_of_values

    if number_of_positives > 0:
        porcentage_of_positives = 100/(number_of_values/number_of_positives)
        
    if number_of_negatives > 0:
        porcentage_of_negatives = 100/(number_of_values/number_of_negatives)

        

    print(f'Arithmetic mean = {arithmetic_mean:.2f}')
    print(f'Values positives = {number_of_positives}')
    print(f'Values negatives = {number_of_negatives}')
    print(f'% positives = {porcentage_of_positives:.2f}%')
    print(f'% negatives = {porcentage_of_negatives:.2f}%')

print('- Finished Program -')