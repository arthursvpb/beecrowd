# Arthur Vasconcellos <contatoarthursilveira@gmail.com>
# github.com/arthursvpb
# linkedin.com/in/arthursvpb
# facebook.com/arthursvpb
# twitter.com/arthursvpb

entrada = input().split()

a = entrada[0]
b = entrada[1]
c = entrada[2]
pi = 3.14159

triangulo = (float(a) * float(c)) / 2.0
circulo = float(pi) * (float(c) ** 2)
trapezio = (float(a) + float(b)) * float(c) / 2
quadrado = float(b) * float(b)
retangulo = float(a) * float(b)

print("TRIANGULO: {:.3f}\n"
      "CIRCULO: {:.3f}\n"
      "TRAPEZIO: {:.3f}\n"
      "QUADRADO: {:.3f}\n"
      "RETANGULO: {:.3f}".format(triangulo, circulo, trapezio, quadrado, retangulo))
