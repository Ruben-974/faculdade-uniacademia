opc = 0
alcool = 0
gasolina = 0 
diesel = 0
while opc != 4:
    opc = int(input(''))
    if opc == 1:
        alcool += 1 
    elif opc == 2:
        gasolina += 1
    elif opc == 3:
        diesel += 1
    elif opc == 4:
        print('MUITO OBRIGADO')

print('Alcool:', alcool)
print('Gasolina:', gasolina)
print('Diesel:', diesel)
