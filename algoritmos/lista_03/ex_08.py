# Escrever um algoritmo que leia uma variável n e calcule a tabuada de 1 até n. Mostre a tabuada na forma: 
# 1 x n = n
# 2 x n = 2n 
# 3 x n = 3n 
# ............... 
# n x n = n

number = int(input('Enter a number: '))
for i in range(number):
    print(f'{number} x {i+1} = {number*(i+1)}')



