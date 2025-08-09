### 15) Faça um programa, com uma função que necessite de um argumento. A função retorna o valor de caractere ‘P’, se seu argumento for positivo, e ‘N’, se seu argumento for zero ou negativo. ###

def character(number1):
    test = 'C'
    if number1 > 0:
        test = 'P'
    elif number1 <= 0:
        test = 'N'
    return test
argument = float(input('Digite um Número: '))
result = character(argument)
print(result)