# Arthur Vasconcellos <contatoarthursilveira@gmail.com>
# github.com/arthursvpb
# linkedin.com/in/arthursvpb
# facebook.com/arthursvpb
# twitter.com/arthursvpb

entrada = input().split()

a = int(entrada[0])
b = int(entrada[1])
c = int(entrada[2])

maiorAB = (a+b+abs(a-b))/2
maiorBC = (b+c+abs(b-c))/2
maiorABC = (maiorAB+maiorBC+abs(maiorAB-maiorBC))/2

print("{:.0f} eh o maior".format(maiorABC))
