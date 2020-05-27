def inputAndCheck(n):
    while(True):
        if(0 <= n <= 10):
            return n
        print("nota invalida")
        n = float(input())


entrada = float(input())
nota1 = inputAndCheck(entrada)

entrada = float(input())
nota2 = inputAndCheck(entrada)

media = (nota1 + nota2) / 2

print("media = {:.2f}".format(media))
