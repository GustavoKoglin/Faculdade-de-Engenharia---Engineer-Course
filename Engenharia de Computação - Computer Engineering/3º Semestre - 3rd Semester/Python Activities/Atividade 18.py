### 18) Construa uma função que receba uma data no formato DD/MM/AAAA e devolva uma string no formato D de mesPorExtenso de AAAA. Opcionalmente, valide a data e retorne NULL caso a data seja inválida. ###


import locale
from datetime import datetime

locale.setlocale(locale.LC_ALL, 'pt_BR')


def exercicio_18(data):
    try:
        datetime.strptime(data, "%d/%m/%Y")
    except ValueError:
        print("Formato de data inválido, data deve ser: dd/MM/yyyy")
        return None
    else:
        data_datetime = datetime.strptime(data, "%d/%m/%Y")
        return datetime.strftime(data_datetime, "%d de %B de %Y")

## Informei os mesmos dados na classe main, mas pode ser executado por aqui também.

dataDigitada = input("Digite a data no formato DD/MM/AAAA.:")
data_extenso = exercicio_18(dataDigitada)

if data_extenso is not None:
    print(data_extenso)