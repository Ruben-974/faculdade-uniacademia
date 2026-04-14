# Em uma eleição presidencial existem quatro candidatos. Os votos são informados através de códigos. Os dados utilizados para a contagem dos votos obedecem à seguinte codificação:  
# 1,2,3,4 = voto para os respectivos candidatos;
# 5 = voto nulo;
# 6 = voto em branco.

# Elabore um algoritmo que leia o código do candidato em um voto. Calcule e escreva as seguintes informações: 
# a) total de votos para cada candidato;
# b) total de votos nulos;
# c) total de votos em branco.
# Como finalizador do conjunto de votos, utilize o valor 0

option = -1
candidate_A = 0
candidate_B = 0
candidate_C = 0
candidate_D = 0
null_vote = 0
white_vote = 0

while option != 0:

    print('[1] Candidate A - [2] Candidate B - [3] Candidate C')
    print('[4] Candidate D - [5] Null Vote   - [6] White Vote')
    option = int(input('--- Your option: '))
    if option == 0:
        print('Finished program!')
    else:
        if option == 1:
            candidate_A = candidate_A + 1
        else:
            if option == 2:
                candidate_B = candidate_B + 1
            else:
                if option == 3:
                    candidate_C = candidate_C + 1
                else:
                    if option == 4:
                        candidate_D = candidate_D + 1
                    else: 
                        if option == 5:
                            null_vote = null_vote + 1
                        else: 
                            if option == 6:
                                white_vote = white_vote + 1
                            else:
                                print('Invalid option!')


print(f'Candidate A votes: {candidate_A}')
print(f'Candidate A votes: {candidate_B}')
print(f'Candidate A votes: {candidate_C}')
print(f'Candidate A votes: {candidate_D}')
print(f'Candidate A votes: {candidate_A}')
print(f'Null votes: {null_vote}')
print(f'White votes: {white_vote}')

