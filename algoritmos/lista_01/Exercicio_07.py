n_kw= int(input('Digite o numero de Quilowatts: '))
v_kw= n_kw*0.12
v_icms= v_kw*0.18
v_energia= v_icms+v_kw
print(v_energia)