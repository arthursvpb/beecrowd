def inputAndCheck(n):
    while(True):
        if(0 <= n <= 10):
            return n
        print("nota invalida")
        n = float(input())


def inputFunction():
    entrada = float(input())
    nota1 = inputAndCheck(entrada)

    entrada = float(input())
    nota2 = inputAndCheck(entrada)

    media = (nota1 + nota2) / 2
    print("media = {:.2f}".format(media))

    x = 0
    while(x != 1):
        x = int(input("novo calculo (1-sim 2-nao)\n"))
        if(x == 1):
            inputFunction()
        elif(x == 2):
            break
        else:
            continue

inputFunction()
