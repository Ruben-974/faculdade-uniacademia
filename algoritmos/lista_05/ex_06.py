# Escrever a função que recebe por parâmetro uma string e um número. A função deve retornar os primeiros caracteres da string de acordo com o número passado por parâmetro.

def primeiros_caracteres(text, num):

    #if len(text) >= num:
    #    return text[:num]
    
    palavra = ''

    if num <= len(text):

        for i in range(num):
            palavra += text[i]

        return palavra


print(primeiros_caracteres('paralelepipedo', 16))
