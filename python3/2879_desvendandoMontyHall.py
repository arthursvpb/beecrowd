n = int(input())
winCount = 0

for i in range(n):
    doorNumber = int(input())
    if(doorNumber != 1):
        winCount += 1

print(winCount)