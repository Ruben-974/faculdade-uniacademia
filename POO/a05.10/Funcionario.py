from Pessoa import Pessoa

class Funcionario(Pessoa):

    def __init__(self):
        self.__matricula = None


    def setMatricula(self, matricula):
        self.__matricula = matricula


    def getMatricula(self):
        return self.__matricula


    def demitir(self):
        return super().demitir()


    def __str__(self):
        return f'ID: {super().getId()}\nNOME: {super().getNome()}\nMATRICULA_FACULDADE: {self.__matriculaFaculdade}'