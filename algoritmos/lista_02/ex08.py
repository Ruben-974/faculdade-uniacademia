ano_de_nascimento = int(input('Digite o ano que você nasceu: '))
idade = 2026 - ano_de_nascimento
print('A sua idade é:', idade)
if idade <= 3:
    print("Bebe")
else:
    if idade <= 11:
        print('Criança')
    else:
        if idade <= 17:
            print('Adolecente')
        else:
            if idade <= 64:
                print('Adulto')
            else:
                print('Idoso')





















