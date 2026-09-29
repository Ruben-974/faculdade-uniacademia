class Filho:
    def __init__(self, id, dataAniversario, nome):
        self.__id = id
        self.__dataAniversario = dataAniversario
        self.__nome = nome

    def setId(self, id):
        self.__id = id


    def getId(self):
        return self.__id


    def setNome(self, nome):
        self.__nome = nome


    def getNome(self):
        return self.__nome


    def setDataAniversario(self, dataAniversario):
        self.__dataAniversario = dataAniversario


    def getDataAniversario(self):
        return self.__dataAniversario
    