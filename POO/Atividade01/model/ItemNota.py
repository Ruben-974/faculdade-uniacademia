class ItemNota:
    def __init__(self, id, vrUnitario, quantidade):
        self.__id = id
        self.__vrUnitario = vrUnitario
        self.__quantidade = quantidade

    def setId(self, id):
        self.__id = id

    def getId(self):
        return self.__id

    def setVrUnitario(self, vrUnitario):
        self.__vrUnitario = vrUnitario

    def getVrUnitario(self):
        return self.__vrUnitario

    def setQuantidade(self, quantidade):
        self.__quantidade = quantidade

    def getQuantidade(self):
        return self.__quantidade

    def toString(self):
        return f"ItemNota[Valor: {self.getVrUnitario()}] - Quantidade: {self.getQuantidade()}"

        