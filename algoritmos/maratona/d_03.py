x = 1
y = 1

while x != 0 or y != 0:
    x, y = input().split()
    x = int(x)
    y = int(y)

    if x == 0 or y ==0:
        break

    elif x >= 1 and y >= 1:
        print('primeiro')
    elif x >= 1 and y <=1: 
        print('quarto')
    elif x <= 1 and y <= 1:
        print('terceiro')
    elif x <= 1 and y >= 1:
        print('segundo')
