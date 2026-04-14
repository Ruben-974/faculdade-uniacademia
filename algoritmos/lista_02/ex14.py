aluno = input('Digite o nome do aluno: ')
prova_1 = float(input('Valor do primeira prova [0 a 10]: '))
prova_2 = float(input('Valor do segunda prova [0 a 10]: '))
trabalho = float(input('Valor do trabalho [0 a 10]: '))

media = (prova_1*3 + prova_2*5 + trabalho*2)/10
print('Sua média foi: ', media)

faltas = int(input('Quantidade de faltas: '))

if faltas <= 15:
    if media >= 6:
        print('Aluno Aprovado')
    else:
        print('Prova Final')
else:
    print('Aluno reprovado!')
