# Arthur Vasconcellos <contatoarthursilveira@gmail.com>
# github.com/arthursvpb
# linkedin.com/in/arthursvpb
# facebook.com/arthursvpb
# twitter.com/arthursvpb

peca1 = input().split()
peca2 = input().split()

total1 = int(peca1[1]) * float(peca1[2])
total2 = int(peca2[1]) * float(peca2[2])

print("VALOR A PAGAR: R$ {:.2f}".format(total1+total2))
