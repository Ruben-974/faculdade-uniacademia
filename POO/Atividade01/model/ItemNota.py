class ItemNota:
    def __init__(self, id, vrUnitario, quantidade, produto):
        self.__id = id
        self.__vrUnitario = vrUnitario
        self.__quantidade = quantidade
        self.__produto = produto

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

    def setProduto(self, produto):
        self.__produto = produto

    def getProduto(self):
        return self.__produto

    def toString(self):
        return f"ItemNota[Valor: {self.getVrUnitario()} - Quantidade: {self.getQuantidade()} - {self.__produto.toString()}]"

        