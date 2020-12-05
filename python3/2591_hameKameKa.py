c = int(input())
for i in range(c):
    string = input()
    c1 = 0
    c2 = 0

    i = 0
    while i < len(string):
        if(string[i] == 'a'):
            c1 += 1
        elif(string[i] == 'k'):
            break
        i += 1

    while i < len(string):
        if(string[i] == 'a'):
            c2 += 1
        elif(string[i] == 'm'):
            break
        i += 1

    print('k' + 'a'*(c1*c2))