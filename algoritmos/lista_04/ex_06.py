# Escrever   uma   função  calcularQuociente(dividendo, divisor),   que   retorna   a   divisão   inteira   (sem   casas decimais)   de   dividendo   por   divisor   e   outra   função calcularResto(dividendo,   divisor)  que   retorna  o resto.

def calcularQuociente(dividendo, divisor):
    return dividendo // divisor


def calcularResto(dividendo,   divisor):
    return dividendo % divisor


dividendo = int(input('Digite o dividendo: '))
divisor = int(input('Digite o divisor: '))

quociente = calcularQuociente(dividendo, divisor)
resto = calcularResto(dividendo, divisor)

print(f'Da divisão: {dividendo}/{divisor}')
print(f'O quociente é: {quociente}')
print(f'O resto é: {resto}')

