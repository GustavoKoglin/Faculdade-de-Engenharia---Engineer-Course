### 10) Faça um programa que leia uma matriz 3x3 de inteiros e multiplique os elementos da diagonal principal da matriz por um número k. Imprima a matriz na tela antes e depois da multiplicação. ###

numero = int(input("Digite um número inteiro onde irá multiplicar a matriz: "))
matriz = []

matriz.append(3)
matriz = [[1, 3, 5], [7, 9, 2], [4, 6, 8]]


for n in range(len(matriz)):
    print("Matriz antes da multiplicação: ")
    print(matriz[n])

for x in range(len(matriz)):
    print("Matriz depois da multiplicação: ")
    matriz[x][x] = matriz[x][x] * numero
    print(matriz[x])