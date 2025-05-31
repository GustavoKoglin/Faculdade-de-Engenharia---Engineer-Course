### 8) Nome na vertical. Faça um programa que solicite o nome do usuário e imprima-o na vertical. Exemplo:
# F
# U
# L
# A
# N
# O

name = str(input("Digite um nome: "))
for n in range(len(name)):
    print(name[n])

    ## OU 
# nome = input("Digite palavra: ")
# for i in nome:
#    print(str.upper(i))