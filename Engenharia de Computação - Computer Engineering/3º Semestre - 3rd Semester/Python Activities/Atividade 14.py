### 14) Faça um programa, com uma função que necessite de três argumentos, e que forneça a soma desses três argumentos. ###

def calsoma(number1,number2,number3):
    soma = number1 + number2 + number3
    return soma

number1 = float(input('Digite o 1° Número: '))
number2 = float(input('Digite o 2° Número: '))
number3 = float(input('Digite o 3° Número: '))
s = calsoma(number1,number2,number3)
print(s)