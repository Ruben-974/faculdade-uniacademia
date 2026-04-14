# Chico tem 1,50 metro e cresce 2 centímetros por ano, enquanto Zé tem 1,30 metro e cresce 3 centímetros por ano. Construa um algoritmo que calcule e imprima quantos anos serão necessários para que Zé seja maior que Chico.

height_chico = 1.50
height_ze = 1.30
years = 0

while height_chico > height_ze:
    
    years = years + 1
    height_ze += 0.03
    height_chico += 0.02

    print(f'ze: {height_ze}')
    print(f'chico: {height_chico}')
    print(years)
