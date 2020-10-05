# n = numero de jogadores
# m = numero de partidas

[n, m] = [int(x) for x in input().split()]

players = 0
for i in range(n):
    counter = 0
    gols = [int(x) for x in input().split()]
    for gol in gols:
        if(gol > 0):
            counter += 1
    if(counter == m):
        players += 1
print(players)
