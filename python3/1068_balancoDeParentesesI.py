while True:
    try:
        expressao = str(input())
        parenteses = 0

        for i in range(len(expressao)):
            if(expressao[i] == "("):
                parenteses = parenteses + 1
            elif(expressao[i] == ')'):
                parenteses = parenteses - 1
            if(parenteses < 0):
                break

        # if(parenteses < 0 or parenteses != 0):
        if(parenteses != 0):
            print("incorrect")
        else:
            print("correct")
    except EOFError:
        break
