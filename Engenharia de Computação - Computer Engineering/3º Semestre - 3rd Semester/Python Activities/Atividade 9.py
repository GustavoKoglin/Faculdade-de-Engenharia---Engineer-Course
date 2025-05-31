## 9) Nome na vertical em escada. Modifique o programa anterior de forma a mostrar o nome em formato de escada.
# F
# FU
# FUL
# FULA
# FULAN
# FULANO

name = str(input("Digite um nome ou palavra: "))
name2 = ""
for n in range(len(name)):
    name2 = name2 + name[n]
    print(name2)