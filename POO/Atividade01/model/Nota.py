class Nota:
    def __init__(self, id, data, numero, empresa, participante):
        self.__id = id
        self.__data = data
        self.__numero = numero
        self.__empresa = empresa
        self.__participante = participante
        self.__itens = []

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

    def setEmpresa(self, empresa):
        self.__empresa = empresa

    def getEmpresa(self):
        return self.__empresa
    
    def setParticipante(self, participante):
        self.__participante = participante

    def getParticipante(self):
        return self.__participante

    def addItem(self, itens):
        self.__itens.append(itens)

    def getItens(self):
        return self.__itens

    def toString(self):
        return f"Nota[{self.getData()} - {self.getNumero()} - {self.getEmpresa().toString()} - {self.getParticipante().toString()} - {self.getItens()}]"
