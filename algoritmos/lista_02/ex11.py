horas = int(input('Horas trabalhadas: '))

if horas <= 40:
    salario = horas * 15
else:
    salario = 600 + (horas-40) * 21

print(salario)