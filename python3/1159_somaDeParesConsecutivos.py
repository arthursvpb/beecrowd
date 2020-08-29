while True:
    x = int(input())
    if(x == 0):
        break
    else:
        counter = 0
        soma = 0
        while (counter < 5):
            if(x % 2 == 0):
                soma += x
                counter += 1
            x += 1
        print(soma)
