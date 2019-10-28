notas = (input()).split(" ")

n1 = float(notas[0])
n2 = float(notas[1])
n3 = float(notas[2])
n4 = float(notas[3])

media = ((n1*2) + (n2*3) + (n3*4) + (n4*1)) / 10

print("Media: {:.1f}".format(media))

if (media >= 7.0):
    print("Aluno aprovado.")
    
elif (media < 5.0):
    print("Aluno reprovado.")
        
elif (5 <= media and media <= 6.9):
    print("Aluno em exame.")
    
    nota_exame = float(input())
    print("Nota do exame: {:.1f}".format(nota_exame))
    
    media = (nota_exame + media) / 2
    
    if (media >= 5):
        print("Aluno aprovado.")
    elif(media <= 4.9):
        print("Aluno reprovado.")
        
    print("Media final: {:.1f}".format(media))
