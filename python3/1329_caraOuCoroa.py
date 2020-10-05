# maria = cara = 0
# joao = coroa = 1

# mostrar quantas vezes cada um venceu

while True:
    maria, joao = 0, 0
    n = input()
    if(n == '0'):
        break
    jogadas = input().split(" ")

    for jogada in jogadas:
        if (jogada == '0'):
            maria += 1
        elif(jogada == '1'):
            joao += 1

    print(f"Mary won {maria} times and John won {joao} times")
