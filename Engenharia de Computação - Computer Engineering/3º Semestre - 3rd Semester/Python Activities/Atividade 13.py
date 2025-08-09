### 13) Faça um programa para imprimir:
# 1
# 1 2
# 1 2 3
# .....
# 1 2 3 ... n

### Para um n informado pelo usuário. Use uma função que receba um valor n inteiro imprima até a n- ésima line. ###




def line(number):
    for x in range(1, number + 1):
        print(f" {x} ", end='')
    print()

def sequence(number):
    for number in range(number + 1):
        line(number)
number = int(input("Type the chosen number: "))

sequence(number)