import math

def imprimir_tabuleiro(tabuleiro):
    print('\n---------')
    for i in range(3):
        # Extrai a linha atual da lista 1D
        linha = tabuleiro[i*3 : (i+1)*3]
        
        # Formata as cores apenas para a exibição (o backend continua limpo)
        linha_formatada = []
        for celula in linha:
            if celula == 'x':
                linha_formatada.append(f'\033[31m{celula}\033[m')
            elif celula == 'o':
                linha_formatada.append(f'\033[34m{celula}\033[m')
            else:
                linha_formatada.append(celula)
                
        print(f" {linha_formatada[0]} | {linha_formatada[1]} | {linha_formatada[2]} ")
    print('---------\n')

def verificar_vitoria(tabuleiro, simbolo):
    # Todas as 8 combinações de índices que geram vitória
    vitorias = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8], # Linhas
        [0, 3, 6], [1, 4, 7], [2, 5, 8], # Colunas
        [0, 4, 8], [2, 4, 6]             # Diagonais
    ]
    # Se em alguma dessas combinações todos os itens forem o simbolo, é vitória
    for combo in vitorias:
        if tabuleiro[combo[0]] == tabuleiro[combo[1]] == tabuleiro[combo[2]] == simbolo:
            return True
    return False

def obter_jogadas_vazias(tabuleiro):
    # Retorna uma lista com os índices que ainda contêm números (não são 'x' nem 'o')
    return [i for i, valor in enumerate(tabuleiro) if valor not in ['x', 'o']]

def minimax(tabuleiro, profundidade, maximizando, simbolo_cpu, simbolo_jogador):
    # 1. Condições de Parada (Alguém ganhou ou empatou?)
    if verificar_vitoria(tabuleiro, simbolo_cpu):
        return 10 - profundidade # Pontuação positiva: CPU ganha
    if verificar_vitoria(tabuleiro, simbolo_jogador):
        return profundidade - 10 # Pontuação negativa: Jogador ganha
    if len(obter_jogadas_vazias(tabuleiro)) == 0:
        return 0 # Pontuação zero: Velha

    # 2. Turno da CPU (Tenta maximizar a pontuação)
    if maximizando:
        melhor_pontuacao = -math.inf
        for jogada in obter_jogadas_vazias(tabuleiro):
            memoria = tabuleiro[jogada]
            tabuleiro[jogada] = simbolo_cpu
            pontuacao = minimax(tabuleiro, profundidade + 1, False, simbolo_cpu, simbolo_jogador)
            tabuleiro[jogada] = memoria
            melhor_pontuacao = max(melhor_pontuacao, pontuacao)
        return melhor_pontuacao

    # 3. Turno do Jogador (A IA assume que o jogador vai fazer a melhor jogada para minimizar a pontuação da CPU)
    else:
        pior_pontuacao = math.inf
        for jogada in obter_jogadas_vazias(tabuleiro):
            memoria = tabuleiro[jogada]
            tabuleiro[jogada] = simbolo_jogador
            pontuacao = minimax(tabuleiro, profundidade + 1, True, simbolo_cpu, simbolo_jogador)
            tabuleiro[jogada] = memoria
            pior_pontuacao = min(pior_pontuacao, pontuacao)
        return pior_pontuacao

def jogada_cpu(tabuleiro, simbolo_cpu, simbolo_jogador):
    melhor_pontuacao = -math.inf
    melhor_jogada = None
    
    # Testa todas as casas vazias
    for jogada in obter_jogadas_vazias(tabuleiro):
        memoria = tabuleiro[jogada]
        tabuleiro[jogada] = simbolo_cpu
        # Chama o Minimax para avaliar o futuro daquela jogada
        pontuacao = minimax(tabuleiro, 0, False, simbolo_cpu, simbolo_jogador)
        tabuleiro[jogada] = memoria
        
        if pontuacao > melhor_pontuacao:
            melhor_pontuacao = pontuacao
            melhor_jogada = jogada
            
    return melhor_jogada

def jogar():
    # Usar uma lista 1D simples é muito mais eficiente do que matrizes aninhadas
    tabuleiro = ['0', '1', '2', '3', '4', '5', '6', '7', '8']
    
    print('Juiz: "Bem-vindo ao Tribunal Imparcial do Jogo da V#LHA!"')
    simbolo_jogador = input('Juiz: "Escolha o seu símbolo (x ou o): "').lower()
    
    while simbolo_jogador not in ['x', 'o']:
        simbolo_jogador = input('Juiz: "Inválido. Apenas x ou o: "').lower()
        
    simbolo_cpu = 'o' if simbolo_jogador == 'x' else 'x'
    
    # O loop principal foca apenas em rodar o jogo enquanto houver casas vazias
    while obter_jogadas_vazias(tabuleiro):
        imprimir_tabuleiro(tabuleiro)
        
        # ------------------ TURNO DO JOGADOR ------------------
        try:
            jogada = int(input("Sua vez. Digite a posição: "))
            if jogada < 0 or jogada > 8 or tabuleiro[jogada] in ['x', 'o']:
                print('Juiz: "Posição inválida ou já ocupada!"')
                continue
        except ValueError:
            print('Juiz: "Por favor, digite um número válido."')
            continue
            
        tabuleiro[jogada] = simbolo_jogador
        
        # Verificação IMEDIATA de vitória pós-jogada (O fim do Juiz Corrupto)
        if verificar_vitoria(tabuleiro, simbolo_jogador):
            imprimir_tabuleiro(tabuleiro)
            print('Juiz: "Incrível! O Jogador VENCEU!"')
            return
            
        if len(obter_jogadas_vazias(tabuleiro)) == 0:
            break
            
        # ------------------ TURNO DA CPU ------------------
        print("A CPU está calculando o futuro...")
        jogada_ia = jogada_cpu(tabuleiro, simbolo_cpu, simbolo_jogador)
        tabuleiro[jogada_ia] = simbolo_cpu
        
        if verificar_vitoria(tabuleiro, simbolo_cpu):
            imprimir_tabuleiro(tabuleiro)
            print('Juiz: "A CPU Venceu! A máquina é implacável."')
            return

    # Se saiu do loop e ninguém venceu...
    imprimir_tabuleiro(tabuleiro)
    print('Juiz: "Deu Velha! Um empate digno."')

# Inicia o jogo
if __name__ == "__main__":
    jogar()