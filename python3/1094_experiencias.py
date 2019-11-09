casos = int(input())
total = 0
coelhos = 0
pcoelhos = 0
ratos = 0
pratos = 0
sapos = 0
psapos = 0

for i in range (casos):
    dado = str(input())
    dado = dado.split(" ")

    numero = int(dado[0])
    letra = dado[1]

    total += numero

    if (letra == 'C'):
        coelhos+= numero

    elif(letra == 'R'):
        ratos+= numero
    
    elif(letra == 'S'):
        sapos+= numero

pcoelhos = (coelhos / total) * 100
pratos = (ratos / total) * 100
psapos = (sapos / total) * 100
    
print("Total: {} cobaias\n"
      "Total de coelhos: {}\n"
      "Total de ratos: {}\n"
      "Total de sapos: {}\n"
      "Percentual de coelhos: {:.2f} %\n"
      "Percentual de ratos: {:.2f} %\n"
      "Percentual de sapos: {:.2f} %".format(total, coelhos, ratos, sapos, pcoelhos, pratos, psapos))
