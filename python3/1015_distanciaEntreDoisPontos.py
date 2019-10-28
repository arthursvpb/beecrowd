# Arthur Vasconcellos <contatoarthursilveira@gmail.com>
# github.com/arthursvpb
# linkedin.com/in/arthursvpb
# facebook.com/arthursvpb
# twitter.com/arthursvpb

from math import sqrt

entrada1 = input().split()
entrada2 = input().split()

x1 = float(entrada1[0])
y1 = float(entrada1[1])

x2 = float(entrada2[0])
y2 = float(entrada2[1])

distancia = sqrt(((x2-x1)**2) + (y2-y1)**2)
print("{:.4f}".format(distancia))
