# Arthur Vasconcellos <contatoarthursilveira@gmail.com>
# github.com/arthursvpb
# linkedin.com/in/arthursvpb
# facebook.com/arthursvpb
# twitter.com/arthursvpb

entrada = int(input())

anos = int(entrada / 365)
anos_resto = int(entrada % 365)

meses = int(anos_resto / 30)
mes_resto = int(anos_resto % 30)

dias = int(mes_resto / 1)

print("{} ano(s)\n"
      "{} mes(es)\n"
      "{} dia(s)".format(anos, meses, dias))
