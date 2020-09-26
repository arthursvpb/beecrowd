while True:
    n = int(input())
    if n == 0:
        break

    pCartas = []
    for i in range(1, n+1):
        pCartas.append(i)

    pLixo = []
    while len(pCartas) > 1:
        pLixo.append(pCartas.pop(0))
        pCartas.insert(len(pCartas)-1, pCartas.pop(0))

    # print("Discarded cards: " + str(pLixo).replace("[","").replace("]",""))
    print("Discarded cards: " +
          ''.join(str(pLixo).replace("[", "").replace("]", "")))
    print("Remaining card: " + str(pCartas[0]))