class ListaItens:

    def __init__(self):
        self.__id = None
        self.__itens = []

    def setId(self, id):
        self.__id = id

    def getId(self):
        return self.__id

    def setId(self, id):
        self.__id = id

    def getId(self):
        return self.__id

    def addItens(self, item):
        self.__itens.append(item)

    def delItens(self, item):
        self.__itens.remove(item)

    def __str__(self):
        text = ''
        for c in self.__itens:
            text += f'{c}\n'
        return text
