x = int(input())
y = int(input())

if(x > y):
    b = x
    s = y
elif(y > x):
    b = y
    s = x

for s in range(s+1, b):
    if(s % 5 == 2 or s % 5 == 3):
        print(s)
