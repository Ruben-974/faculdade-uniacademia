# Uma empresa deseja aumentar seus preços em 20%. Faça um algoritmo
# que leia o código e o preço de custo de cada produto e calcule o preço
# novo. Calcule também, a média dos preços com e sem aumento. Mostre o
# código e o preço novo de cada produto e, no final, as médias. A entrada de
# dados deve terminar quando for lido um código de produto negativo.

sum_prices = 0
sum_new_prices = 0
counter = 0

code = int(input('Enter a code: '))

while code >= 0:

    counter = counter + 1
    price = float(input('Enter a price: '))
    new_price = price + (price * 0.2)
    sum_prices = sum_prices + price
    sum_new_prices = sum_new_prices + new_price

    print(f'Code: {code}')
    print(f'New Price: {new_price:.2f}')

    code = int(input('Enter a code: '))

print(f'Average Price: {sum_prices/counter:.2f}')
print(f'Average New Price: {sum_new_prices/counter:.2f}')
