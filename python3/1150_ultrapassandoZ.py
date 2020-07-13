x = int(input())
while True:
    y = int(input())
    if(y > x):
        break

limit = 0
counter = 0
while(limit < y):
    limit += x
    x+=1
    counter+=1

print(counter)
