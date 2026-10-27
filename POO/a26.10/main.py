def programa():

    try:

        nomes = ['Joao', 'Maria', 'Jose', 'Lucas', 'Marcos', 'Nathan', 'Julia', 'Luiz']

        arq = open('arquivo.txt', 'w')

        for i in nomes:
            arq.write(f'{i}\n')

    except OSError as error:

        print(f'ERRO: {error}')

    finally:

        arq.close()
        print('Arquivo criado e fechado...')

    try:

        with open('arquivo.txt', 'r') as arq:
            linha = arq.read()
            print(linha)

    except FileNotFoundError as error:

        print(f'ERRO: {error}')

    finally:

        print('Arquivo lido e fechado...')


if __name__ == '__main__':
    programa()