# Escrever   um  algoritmo   que   gere   e   escreva   os   3   primeiros  números perfeitos. Um número perfeito é aquele que é igual a soma dos seus divisores. (Ex.: 6 = 1+2+3; 28= 1+2+4+7+14, etc). 

perfects = 0
number = 0

while perfects <= 3:
    number += 1
    sum_numbers = 0

    for i in range(1, number):
        if number%i==0:
            sum_numbers += i

    if sum_numbers == number:
        print(f'{number} is number perfect!')
        perfects += 1
    