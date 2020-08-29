n = int(input())

for i in range(n):
    xy = str(input()).split(" ")
    x = int((xy[0]))
    y = int((xy[1]))

    soma = 0
    count = 0
    while (count < y):
        if(x % 2 != 0):
            count += 1
            soma += x
        x += 1

    print(soma)
