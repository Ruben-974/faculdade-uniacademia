class Empresa:
    def __init__(self, id, codigo, razaoSocial, endereco, cnpj):
        self.__id = id
        self.__codigo = codigo
        self.__razaoSocial = razaoSocial
        self.__endereco = endereco
        self.__cnpj = cnpj

    def setId(self, id):
        self.__id = id

    def getId(self):
        return self.__id

    def setCodigo(self, codigo):
        self.__codigo = codigo

    def getCodigo(self):
        return self.__codigo

    def setRazaoSocial(self, razaoSocial):
        self.__razaoSocial = razaoSocial

    def getRazaoSocial(self):
        return self.__razaoSocial

    def setEndereco(self, endereco):
        self.__endereco = endereco

    def getEndereco(self):
        return self.__endereco

    def setCnpj(self, cnpj):
        self.__cnpj = cnpj

    def getCnpj(self):
        return self.__cnpj

    def toString(self):
        return f"Empresa[{self.getCodigo()}] - {self.getRazaoSocial()} - {self.getEndereco()} - {self.getCnpj()}"