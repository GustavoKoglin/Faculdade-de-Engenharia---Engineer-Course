### 2) Faça um Programa que leia um vetor de 5 números inteiros, mostre a soma, a multiplicação e os números. ###


import math
from math import prod

numero = []
somaNotas = 0
multNotas = 0

for algarismo in range(5):
    x =int(input("Digite um número da Lista: "))
    somaNotas += x
    numero.append(x)

print("A soma das notas é: ", somaNotas)
print("\n A multiplicação das notas é: ", math.prod(numero))
print("\n", numero)