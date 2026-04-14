salario_atual = float(input("Digite o seu salario: "))
if salario_atual < 0:
    print("Salario invalido")
else:
    tempo = int(input("Digite o tempo de empresa em anos"))
    if tempo < 0:
        print('Tempo invalido')
    else:
        if tempo <= 1:
            percentual = 1.1
        else:
            percentual = 1.2
        salario_reajustado = salario_atual * percentual
        print('Salario reajustado: ', salario_reajustado)