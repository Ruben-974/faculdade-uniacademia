class Funcionario:

    def __init__(self, id, codigo, nome):
        self.__id = id
        self.__codigo = codigo
        self.__nome = nome
        self.__filhos = []


    def setId(self, id):
        self.__id = id


    def getId(self):
        return self.__id


    def setNome(self, nome):
        self.__nome = nome


    def getNome(self):
        return self.__nome


    def setCodigo(self, codigo):
        self.__codigo = codigo


    def getCodigo(self):
        return self.__codigo

    
    def setFilhos(self, filhos):
        self.__filhos = filhos


    def getFilhos(self):
        return self.__filhos


    def addFilhos(self, filho):
        self.__filhos.append(filho)


    def delFilho(self, filho):
        self.__filhos.remove(filho)


    def __str__(self):
        return f'ID: {self.__id}\nCODIGO: {self.__codigo}\nNOME: {self.__nome}\nFILHOS: {self.__filhos}'