# Escrever uma função verificarEstacao(dia, mes), que retorna qual a estação do ano da data passada por parâmetro. Lembrando que a primavera começa no dia 23 de setembro, o verão em 21 de dezembro, o outono em 21 de março e o inverno em 21 de junho. 

def verificarEstacao(d, m):

    if (d > 30 or d < 1) or (m > 12 or m < 1):
        return
    else:
        if ((m == 9) and (d >= 23)) or ((m == 12) and (d < 21)) or (m > 9 and m < 12):
            return 'primavera'
        else:
            if ((m == 12) and (d >= 21)) or ((m == 3) and (d < 21)) or (m >= 1 and m < 3):
                return 'verao'
            else:
                if ((m == 3) and (d >= 21)) or ((m == 6) and (d < 21)) or (m > 3 and m < 6):
                    return 'outono'
                else:
                    if ((m == 6) and (d >= 21)) or ((m == 9) and (d < 23)) or (m > 6 and m < 9):
                        return 'inverno'


dia = int(input('Digite um dia: '))
mes = int(input('Digite o número do mes: '))


print(f'A estação do dia {dia} do mês {mes} é: {verificarEstacao(dia, mes)}')

