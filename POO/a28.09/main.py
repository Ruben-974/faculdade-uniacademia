from Empresa import Empresa
from Funcionario import Funcionario
from Filho import Filho


empresa1 = Empresa(1, 'CacauShow')
funcionario1 = Funcionario(5, 35, 'Pedro')
filho1 = Filho(8, '12/03/2005', 'João')

empresa1.setFuncionarios(funcionario1)
funcionario1.setFilhos(filho1)
