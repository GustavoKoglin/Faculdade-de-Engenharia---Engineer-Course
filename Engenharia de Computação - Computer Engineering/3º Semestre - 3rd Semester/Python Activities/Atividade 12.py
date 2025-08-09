### 12) Faça um programa que leia as dimensões de duas matrizes A e B, e depois leia as duas matrizes (os elementos devem ser inteiros). Se as matrizes forem de tamanhos compatíveis para multiplicação, multiplique as matrizes. Imprima as matrizes A, B e a matriz resultante da multiplicação.   Faça um programa para imprimir:
# 1
# 2 2
# 3 3 3
# .....
# n n n n n n ... n

import random
import math
import numpy

lin1 = int(input('Digite quantas linhas a 1ª matriz terá: '))
col1 = int(input('Digite quantas colunas 1ª matriz terá: '))
lin2 = int(input('Digite quantas linhas a 2ª matriz terá: '))
col2 = int(input('Digite quantas colunas a 2ª matriz terá: '))
matriz1 = []
matriz2 = []
matriz3 = []
if col1 == lin2:
    for i in range(lin1):
        linha = []
        for j in range(col1):
            linha.append(int(input('Digite o valor de [' + str(i) + ',' + str(j) + ']: ')))
        matriz1.append(linha)
    for x in range(lin2):
        linha = []
        for y in range(col2):
            linha.append(int(input('Digite o valor de [' + str(x) + ',' + str(y) + ']: ')))
        matriz2.append(linha)
    matriz3 = numpy.dot(matriz1, matriz2)
    print('Primeira matriz: ')
    for d in matriz1:
        print(d)
    print('A Segunda matriz: ')
    for s in matriz2:
        print(s)
    print('Matriz Resultante: ')
    print(matriz3)
else:
    print('Matrizes não compatíveis para multiplicação')