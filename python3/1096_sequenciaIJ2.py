i = 1
j = 7
aux = 0

while(i <= 9):
    print("I={} J={}".format(i, j))
    aux += 1
    if(aux == 3):
        i += 2
        aux = 0
    j -= 1
    if(j < 5):
        j = 7
    
    
