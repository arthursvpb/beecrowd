n = int(input())

for i in range (n):
    valores = str(input())
    valores = valores.split(" ")
    v1 = float(valores[0])
    v2 = float(valores[1])
    v3 = float(valores[2])
    media = round((((v1*2)+(v2*3)+(v3*5))/10), 1)
    print(media)
