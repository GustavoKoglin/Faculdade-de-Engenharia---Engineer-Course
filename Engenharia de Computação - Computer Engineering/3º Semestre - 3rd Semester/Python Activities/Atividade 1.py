### 1) Faça um Programa que peça as quatro notas de 10 alunos, calcule e armazene num vetor a média de cada aluno, imprima o número de alunos com média maior ou igual a 7.0.####

alunosAcimaMedia = 0
mediaAlunos = []
nomeAlunos = []

for nome in range(10):
    nomeAlunos.append(input("Digite o nome do aluno: "))

for aluno in range(10):
    somaNotas = 0

    for notas in range (4):
        print('Digite a ', notas + 1, 'ª nota do', aluno + 1,'º aluno: ')
        somaNotas += float(input())

    mediaAlunos.append(somaNotas/4)

    if mediaAlunos[aluno] >= 7:
        alunosAcimaMedia += 1

print(nomeAlunos + 1, " Média do alunos: ", mediaAlunos)
print(" Numero de alunos acima da média: ", alunosAcimaMedia)