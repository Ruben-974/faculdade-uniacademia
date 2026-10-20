from item import Item
from listaItens import ListaItens

item1 = Item()
item1.setId('10')
item1.setNome('Caderno')
item1.setValor('9.90')

item2 = Item()
item2.setId('11')
item2.setNome('Lapis')
item2.setValor('1.90')

item3 = Item()
item3.setId('52')
item3.setNome('Borracha')
item3.setValor('1.40')

listaItens1 = ListaItens()

listaItens1.addItens(item1)
listaItens1.addItens(item2)
listaItens1.addItens(item3)

print(listaItens1.__str__())