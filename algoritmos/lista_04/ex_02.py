# Faça uma função que recebe a média final de um aluno por parâmetro e retorna o seu conceito, conforme a tabela abaixo: 

def calcular_conceito(n):
    if n >= 0 and n <= 49:
        return 'D'
    else:
        if n <= 69:
            return 'C'
        else:
            if n <= 89:
                return 'B'
            else:
                if n <= 100:
                    return 'A'



media = int(input('Digite sua média: '))
conceito = calcular_conceito(media)
print(f'Seu conceito é: {conceito}')
