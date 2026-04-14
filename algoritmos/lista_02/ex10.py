salario = float(input('Digite seu salario: '))

financiamento = float(input('Digite o valor do finaciamento: '))

if salario * 5 >= financiamento:
    print('Finaciamento concedido')
else:
    print('Finaciamento negado')