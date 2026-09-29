class Empresa:

    def __init__(self, id, nome):
        self.__id = id
        self.__nome = nome
        self.__funcionarios = []


    def setId(self, id):
        self.__id = id


    def getId(self):
        return self.__id


    def setNome(self, nome):
        self.__nome = nome


    def getNome(self):
        return self.__nome


    def setFuncionarios(self, funcionarios):
        self.__funcionarios = funcionarios


    def getFuncionarios(self):
        return self.__funcionarios


    def addFuncionarios(self, funcionario):
        self.__funcionarios.append(funcionario)


    def delFuncionarios(self, funcionario):
        self.__funcionarios.remove(funcionario)


    def __str__(self):
        return f'ID: {self.__id}\nNOME: {self.__nome}\nFUNCIONARIOS: {self.__funcionarios}'
    
