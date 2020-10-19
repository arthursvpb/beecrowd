n = int(input())
for i in range(n):
    idioms = []
    people = int(input())

    for j in range(people):
        idioms.append(input())

    mainIdiom = idioms[0]
    for idiom in (idioms):
        if idiom != mainIdiom:
            mainIdiom = 'ingles'
            break

    print(mainIdiom)