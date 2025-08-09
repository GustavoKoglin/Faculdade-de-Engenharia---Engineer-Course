### 11) Faça um programa que leia duas matrizes A e B 2x2 de inteiros e imprima a matriz C que é a soma       das matrizes A e B. ###

m1 = [2, 6], [3, 9]
m2 = [4, 8], [2, 7]
m3 = []
for n in range(len(m1)):
    m3.append([])
    for y in range(len(m1)):
        m3[n].append(m1[n][y] + m2[n][y])
        print(m3[n]) 