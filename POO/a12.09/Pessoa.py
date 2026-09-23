class Pessoa:

    def __init__(self):
        self.__nome = None
        self.__idade = None
        self.__nacionalidade = "Brasileiro"
        self.__dataNascimento = "12/01/2006"


    def getNome(self):
        return self.__nome


    def setNome(self, nome):
        self.__nome = nome


    def getIdade(self):
        return self.__idade


    def setIdade(self, idade):
        self.__idade = idade


    def getNacionalidade(self):
        return self.__nacionalidade


    def setNacionalidade(self, nacionalidade):
        self.__nacionalidade = nacionalidade


    def getDataNascimento(self):
        return self.__dataNascimento


    def setDataNascimento(self, dataNascimento):
        self.__dataNascimento = dataNascimento
