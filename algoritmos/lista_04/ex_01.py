# Faça uma função que recebe a idade de uma pessoa em anos, meses e dias e retorna essa idade expressa em dias.

def calcular_dias(a, m, d):
    return a * 365 + m * 30 + d

anos = int(input('Digite a quantidade de anos: '))
meses = int(input('Digite a quantidade de meses: '))
dias = int(input('Digite a quantidade de dias: '))

print(calcular_dias(anos, meses, dias))
