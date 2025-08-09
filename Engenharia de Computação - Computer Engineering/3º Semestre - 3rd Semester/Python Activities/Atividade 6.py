### 6) Faça um programa que leia 2 strings e informe o conteúdo delas seguido do seu comprimento. Informe também se as duas strings possuem o mesmo comprimento e são iguais ou diferentes no conteúdo. Exemplo: 
# String 1: Brasil Hexa 2006
# String 2: Brasil! Hexa 2006!
# Tamanho de "Brasil Hexa 2006": 16 caracteres
# Tamanho de "Brasil! Hexa 2006!": 18 caracteres
# As duas strings são de tamanhos diferentes.
# As duas strings possuem conteúdos diferente. ###

########################################



str1 = str(input("Digite a String 1: "))
str2 = str(input("Digite a String 2: "))

len(str1)
len(str2)

if (len(str1)) > len(str2):
    print("String 1 é maior.")

if (len(str2)) > len(str1):
    print("String 2 é maior. ")

if (len(str2)) == len(str1):
    print("As strings possuem valor igual.")