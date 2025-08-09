### 4) Faça um Programa que leia um vetor A com 10 números inteiros, calcule e mostre a soma dos quadrados dos elementos do vetor. ###

a1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
a2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

prod = list(map(lambda x,y : x*y, a1 , a2))
sep = len(prod)
listsum = 0

for x in range(sep):
    listsum += prod[x]
print(listsum)