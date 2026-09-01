class Produto:
    def __init__(self, id, codigo, descricao):
        self.__id = id
        self.__codigo = codigo
        self.__descricao = descricao

    def setId(self, id):
        self.__id = id

    def getId(self):
        return self.__id

    def setCodigo(self, codigo):
        self.__codigo = codigo

    def getCodigo(self):
        return self.__codigo

    def setDescricao(self, Descricao):
        self.__descricao = Descricao

    def getDescricao(self):
        return self.__descricao

    def toString(self):
        return f"Produto[{self.getCodigo()} - {self.getDescricao()}]"

        