import Pessoa


def programa():

    pessoa1 = Pessoa.Pessoa()
    pessoa1.setNome('Pedro')

    print(pessoa1.getNome())



if __name__ == '__main__':
    programa()