i = 0
j = 1

while(i <= 2):
    for n in range(3):
        i = round(i, 1)
        j = round(j, 1)
        if(i % 1 == 0 and j % 1 == 0):
            print("I={:.0f} J={:.0f}".format(i, j))
            j += 1
        elif(i % 1 == 0 and j % 1 != 0):
            print("I={:.0f} J={:.1f}".format(i, j))
            j += 1
        elif(i % 1 != 0 and j % 1 == 0):
            print("I={:.1f} J={:.0f}".format(i, j))
            j += 1
        elif(i % 1 != 0 and j % 1 != 0):
            print("I={:.1f} J={:.1f}".format(i, j))
            j += 1

    i += 0.2
    j = i + 1
