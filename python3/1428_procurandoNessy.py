c = 0
x = 0
y = 0

c = int(input())
for i in range(c):
    xy = input().split(" ")
    x = int((xy[0]))
    y = int((xy[1]))
    result = int(x/3) * int(y/3)
    print(result)