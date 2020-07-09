while True:
    x = int(input())
    if(x == 0):
        break
    else:
        c = 1
        sequence = ""
        while(c <= x):
            sequence += str(c) + " "
            c += 1
    print(sequence.rstrip())
