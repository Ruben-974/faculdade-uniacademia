class Item:

    def __init__(self):
        self.__id = None
        self.__nome = None
        self.__valor = None

    def setId(self, id):
        self.__id = id

    def getId(self):
        return self.__id

    def setNome(self, nome):
        self.__nome = nome

    def getNome(self):
        return self.__nome

    def setValor(self, valor):
        self.__valor = valor

    def getValor(self):
        return self.__valor

    def __str__(self):
        return f'ID: {self.getId()} - NOME: {self.getNome()} - VALOR: {self.getValor()}'