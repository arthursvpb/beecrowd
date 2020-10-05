# (255,0,255,255,255) = B

# preto <= 127
# branco > 127
# 2 marcadas ou nao marcada = desconsiderada

def findAnswer(questoes):
    preto = 0
    resposta = None
    for i, questao in enumerate(questoes):
        if(questao <= 127):
            preto += 1
            resposta = i

    if(preto == 1 and resposta != None):
        if(resposta == 0):
            resposta = "A"
        elif(resposta == 1):
            resposta = "B"
        elif(resposta == 2):
            resposta = "C"
        elif(resposta == 3):
            resposta = "D"
        elif(resposta == 4):
            resposta = "E"

        return resposta
    else:
        return "*"


while True:
    n = int(input())
    if(n == 0):
        break
    for i in range(n):
        questoes = [int(x) for x in input().split()]
        print(findAnswer(questoes))
