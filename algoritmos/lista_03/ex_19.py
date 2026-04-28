# Escrever um algoritmo que leia um valor N inteiro e positivo e que calcula o valor de E. Imprime o resultado de E ao final.  
# E = 1 + 1 / 1! + 1 / 2! + 1 / 3! + 1 / N!

e = 1
n = int(input("Digite um numero: "))
if n > 0:
    for i in range(1, n + 1):
        fat = 1
        for j in range(1, i + 1):
            fat = fat * j
        e = e + (1 / fat)
    print(f"E = {e:.2f}")