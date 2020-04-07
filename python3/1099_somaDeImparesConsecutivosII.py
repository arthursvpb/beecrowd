n = int(input())
contador = 0

for i in range(n):
    xy = str(input()).split(" ")
    x = int((xy[0]))
    y = int((xy[1]))
    maior = max(x, y)
    menor = min(x, y) + 1
    while(menor < maior):
        if((menor) % 2 != 0):
            contador += menor
        menor += 1
        i += 1
    print(contador)
    contador = 0