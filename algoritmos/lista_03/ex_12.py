# Escrever um algoritmo que leia uma quantidade desconhecida de números
# e conte quantos deles estão nos seguintes intervalos: [0,25], [26,50],
# [51,75] e [76,100]. A entrada de dados deve terminar quando for lido um
# número negativo.

number = 0
interval_00_25 = 0
interval_26_50 = 0
interval_51_75 = 0
interval_76_100 = 0

while number >= 0:
    number = int(input('Enter a number: '))
    if number >= 0 and number <= 25:
        interval_00_25 = interval_00_25 + 1
    else:
        if number >= 26 and number <= 50:
            interval_26_50 = interval_26_50 + 1
        else:
            if number >= 51 and number <= 75:
                interval_51_75 = interval_51_75 + 1
            else:
                if number >= 76 and number <= 100:
                    interval_76_100 = interval_76_100 + 1

print(f'Number of values between 00 and 025: {interval_00_25}')
print(f'Number of values between 26 and 050: {interval_26_50}')
print(f'Number of values between 51 and 075: {interval_51_75}')
print(f'Number of values between 76 and 100: {interval_76_100}')
