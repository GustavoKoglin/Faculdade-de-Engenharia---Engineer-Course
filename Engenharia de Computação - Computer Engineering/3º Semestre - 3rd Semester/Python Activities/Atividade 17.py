### 17) Construa uma função que desenhe um retângulo usando os characteres ‘+’ , ‘−’ e ‘| ‘. Esta função deve receber dois parâmetros, linhas e colunas, sendo que o value por omissão é o value mínimo igual a 1 e o value máximo é 20. Se valuees fora da faixa forem informados, eles devem ser modificados para valuees dentro da faixa de forma elegante.

numline = int(input("How many '+-----+' you want: ")) #This time I decided to make the codes in English.
numcol = int(input("How many '|   |', you want?: "))


def validdatavalue(value):                      ### Define o valor máximo = 20

    if value < 1 or value > 20:
        return 20
    else:
        return value


def makeline(numline):                          ### Define o número de linhas.
    character = "+"
    for i in range(numline):
        character += "-"
    character += "+"
    print(character)


def makecol(numline, numcol):                   ### Define o número de linhas e colunas para cada caractere
    for i in range(numcol):
        character = "|"
        character += " " * numline
        character += "|"
        print(character)


def drawrectangle(numline, numcol):
    makeline(numline)
    makecol(numline, numcol)
    makeline(numline)


drawrectangle(validdatavalue(numline), validdatavalue(numcol))