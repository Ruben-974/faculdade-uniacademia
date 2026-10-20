import abc

class Pessoa(abc.ABC):

    def __init__(self):
        self.__id = None
        self.__nome = None


    def setId(self, id):
        self.__id = id


    def getId(self):
        return self.__id


    def setNome(self, nome):
        self.__nome = nome


    def getNome(self):
        return self.__nome


    def contratar(self):
        pass

    @abc.abstractmethod
    def demitir(self):
        pass


