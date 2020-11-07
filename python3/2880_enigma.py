possiblePositions = 0

encrypted = list(str(input()))
encryptedLength = len(encrypted)

crib = list(str(input()))
cribLength = len(crib)

for i in range(0, encryptedLength - cribLength + 1):

    differentlLetters = 0
    for j in range(cribLength):

        if(encrypted[j] == crib[j]):
            break
        else:
            differentlLetters += 1

    if(differentlLetters == cribLength):
        possiblePositions += 1

    if(len(encrypted) == cribLength):
        break

    encrypted.pop(0)

print(possiblePositions)