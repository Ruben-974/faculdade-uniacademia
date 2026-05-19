# Faça uma função que recebe por parâmetro o raio de uma esfera e calcule o seu volume (v = (4 x pi x R3)/3). 

def calcular_volume_esfera(r):
    return (4 * 3.14 * (r/2)**3)/3

raio = int(input('Digite o valor do raio: '))
volume_esfera = calcular_volume_esfera(raio)

print(f'O volume da esfera é: {volume_esfera:.2f}')