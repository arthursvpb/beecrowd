# Variáveis
vitoriasInter = 0
vitoriasGremio = 0
empates = 0
partidas = 0

# Loop do programa
while True:
    gols = input().split()
    golsInter = int(gols[0])
    golsGremio = int(gols[1])

    if(golsInter > golsGremio):
        vitoriasInter += 1
    elif(golsInter == golsGremio):
        empates += 1
    else:
        vitoriasGremio += 1

    partidas += 1

    continuar = int(input("Novo grenal (1-sim 2-nao)\n"))
    if(continuar == 2):
        break

if(vitoriasInter > vitoriasGremio):
    vencedor = "Inter venceu mais"
elif(vitoriasInter < vitoriasGremio):
    vencedor = "Gremio venceu mais"
else:
    vencedor = "Nao houve vencedor"

print("{} grenais".format(partidas))
print("Inter:{}".format(vitoriasInter))
print("Gremio:{}".format(vitoriasGremio))
print("Empates:{}".format(empates))
print("{}".format(vencedor))