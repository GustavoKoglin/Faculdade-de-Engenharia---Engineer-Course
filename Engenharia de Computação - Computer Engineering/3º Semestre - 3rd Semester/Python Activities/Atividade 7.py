### 7) Faça um programa que permita ao usuário digitar o seu nome e em seguida mostre o nome do usuário de trás para frente utilizando somente letras maiúsculas. Dica: lembre−se que ao informar o nome o usuário pode digitar letras maiúsculas ou minúsculas. ###

print("Digite seu nome em maiúscula ou ninúscula.")
nome = str(input("Digite seu nome: "))
ni = ''.join(reversed(nome)) ## ni = Nome Invertido ##
nim = ni.upper() ## nim = Nome Invertido em Maiúscula ##
print(nim)