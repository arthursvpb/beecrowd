# runtime error

n = input()
numbers = [int(x) for x in input().split(' ')]

c = 0
for number in numbers:
    c += number-1

print(c)