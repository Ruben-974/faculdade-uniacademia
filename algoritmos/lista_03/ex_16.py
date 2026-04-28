# Escreva um algoritmo que lê um valor n inteiro e positivo e que calcula a
# seguinte soma:
# S = 1 + 1/2 + 1/3 + 1/4 + ... + 1/n
# O algoritmo deve escrever cada termo gerado e o valor final de S.

n = int(input("Digite um numero: "))
if n > 0:
    s = 0
    for i in range(1, n + 1):
        termo = 1 / i
        print(f"Termo = {termo:.2f}")
        s = s + termo
print(f"S = {s:.2f}")