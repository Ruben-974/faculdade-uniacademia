class Nota:
    def __init__(self, id, data, numero):
        self.__id = id
        self.__data = data
        self.__numero = numero

    def setId(self, id):
        self.__id = id

    def getId(self):
        return self.__id

    def setData(self, data):
        self.__data = data

    def getData(self):
        return self.__data

    def setNumero(self, numero):
        self.__numero = numero

    def getNumero(self):
        return self.__numero

    def toString(self):
        return f"Nota[{self.getNumero()}] - {self.getData()}"

        