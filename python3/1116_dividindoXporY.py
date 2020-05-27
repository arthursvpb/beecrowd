c = int(input())

for i in range (c):
    numbers = (input().split(" "))
    try:
        result = float(numbers[0]) / float(numbers[1])
        print(result)
    except:
        print("divisao impossivel")

