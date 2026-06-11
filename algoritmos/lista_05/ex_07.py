# Escrever a função que recebe por parâmetro uma string e um caracter. e a função deve retornar os primeiros caracteres da string até encontrar o caracter passado por parâmetro.

def limite_caracters(text, letra):

    if len(letra) == 1 and letra in text:

        palavra = ''
        cont = 0
        while text[cont] != letra:
            palavra += text[cont]
            cont += 1
        
        return palavra


print(limite_caracters('paralelepipedo', 'l'))