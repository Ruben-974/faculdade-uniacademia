salario_bruto= int(input("Digite o seu salario bruto: "))
q_hora_extra= int(input("Quantidade de hora extra: "))
v_hora_extra= int(input("Valor de horas extra: "))

salario_total = salario_bruto+(q_hora_extra*v_hora_extra)
desconto_inss = salario_total*0.08
salario_com_desc = salario_total-desconto_inss
print(salario_com_desc)