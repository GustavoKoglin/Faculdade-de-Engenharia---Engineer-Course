### 5) Faça um Programa que leia dois vetores com 10 elementos cada. Gere um terceiro vetor de 20 elementos, cujos valores deverão ser compostos pelos elementos intercalados dos dois outros vetores. ###

import itertools

vetor1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
vetor2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

res = vetor1 + vetor2 
res = list(itertools.chain(*zip(vetor1, vetor2)))
print("A lista intercalada é: " + str(res)) 