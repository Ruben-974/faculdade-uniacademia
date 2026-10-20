from Pessoa import Pessoa

class Estagiario(Pessoa):

    def __init__(self):
        self.__matriculaFaculdade = None


    def setMatriculaFaculdade(self, matriculaFaculdade):
        self.__matriculaFaculdade = matriculaFaculdade


    def getMatriculaFaculdade(self):
        return self.__matriculaFaculdade


    def demitir(self):
        return super().demitir()


    def __str__(self):
        return f'ID: {super().getId()}\nNOME: {super().getNome()}\nMATRICULA_FACULDADE: {self.__matriculaFaculdade}'