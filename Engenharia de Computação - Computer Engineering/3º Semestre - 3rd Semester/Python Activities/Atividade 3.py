### Faça um Programa que peça a idade e a altura de 5 pessoas, armazene cada informação no seu respectivo vetor. Imprima a idade e a altura na ordem inversa a ordem lida. ###.

nome = []
idade = []
altura = []

for name in range(5):
    nome.append(input("Digite o nome: "))

for val_alt in range(5):
    h = float(input("Digite a altura: "))
    altura.append(h)
    altura.reverse()

for val_age in range(5):
    age = int(input("Digite a idade: "))
    idade.append(age)
    idade.reverse()

print("O nome é: ", nome + 1, ", a altura é: ", altura, "a idade é: ", idade)