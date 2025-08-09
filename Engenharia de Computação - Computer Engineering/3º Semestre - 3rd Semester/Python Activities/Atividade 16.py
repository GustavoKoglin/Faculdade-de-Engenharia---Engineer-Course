### 16) Faça um programa com uma função chamada somaImposto. A função possui dois parâmetros formaistaxaImposto, que é a quantia de imposto sobre vendas expressa em porcentagem e custo, que é o custo de um item antes do imposto. A função “altera” o valor de custo para incluir o imposto sobre vendas. ###

def somaimp(imptax, custo):
    custo = ((imptax/100) * custo) + custo
    return custo

imptax = float(input('Digite o valor do imposto, em porcentagem: '))
custo = float(input('Digite o valor do produto: '))
valf = somaimp(imptax, custo)
print(valf)