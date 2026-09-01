from model.Produto import Produto 
from model.Empresa import Empresa
from model.Participante import Participante
from model.Nota import Nota
from model.ItemNota import ItemNota


produto1 = Produto(1, 'PRD-001', 'Caneta esferográfica azul') 
print(produto1.toString())

produto2 = Produto(2, 'PRD-002', 'Caderno sem pauta') 
print(produto2.toString())

empresa1 = Empresa(5, 'EMP-001', 'Gi Graficas', 'Teresopolis', '84.808.684/0001-42')
print(empresa1.toString())

participante1 = Participante(1, 'PRT-001', 'Marcos Papelaria', '12.438.684/1233-42')
print(participante1.toString())

itemnota1 = ItemNota(1, 5.90, 50, produto1)
print(itemnota1.toString())
itemnota2 = ItemNota(2, 9.90, 20, produto2)
print(itemnota2.toString())

nota1 = Nota(1, '12/03/2005', '278937198-1231', empresa1, participante1)
nota1.addItem(itemnota1)
nota1.addItem(itemnota2)

print(nota1.getItens())
print(nota1.toString())
print(f'Valor total da nota: {nota1.getVrTotal():.2f}R$')
