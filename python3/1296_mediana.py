from math import sqrt


def checkTriangle(a, b, c):
    if (a + b <= c or a + c <= b or b + c <= a):
        return 0
    return 1


while True:
    try:
        # Pode ser usado  m1, m2, m3 = [float(x) for x in input().split()]
        x = str(input())
        a = float(x.split(" ")[0])
        b = float(x.split(" ")[1])
        c = float(x.split(" ")[2])

        if(checkTriangle(a, b, c) == 1):
            p = (a + b + c) / 2
            area = 4 * sqrt(p * (p - a) * (p - b) * (p - c)) / 3
            print("{:.3f}".format(area))
        else:
            print("-1.000")
    except:
        break
