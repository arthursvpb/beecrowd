# Arthur Vasconcellos <contatoarthursilveira@gmail.com>
# github.com/arthursvpb
# linkedin.com/in/arthursvpb
# facebook.com/arthursvpb
# twitter.com/arthursvpb

nome = str(input())
salario = float(input())
vendas = float(input())
comissao = vendas * 0.15

salariofinal = salario + comissao

print("TOTAL = R$ {:.2f}".format(salariofinal))
