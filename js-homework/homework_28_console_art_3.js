function print(str) {
    process.stdout.write(str)
}

function drawPlusForEvenNumber(i, j, squareSize) {
    return i == (squareSize - 2) / 2 - j
        || i == (squareSize - 2) / 2 + j + 1
        || i == (j - 1) - (squareSize - 2) / 2
        || i == ((squareSize - 2) / 2 + 1) - j + 1 + (squareSize - 2)
}

function drawPlusForOddNumber(i, j, squareSize) {
    return i == (squareSize - 1) / 2 - j
        || i == (squareSize - 1) / 2 + j
        || i == j - (squareSize - 1) / 2
        || i == (squareSize - 1) / 2 - j + (squareSize - 1)
}

function shouldDrawPlus(i, j, squareSize) {
    if (squareSize % 2 == 0) {
        return drawPlusForEvenNumber(i, j, squareSize)
    }
    else {
        return drawPlusForOddNumber(i, j, squareSize)
    }
}


function drawRhombus(squareSize) {
    for (let i = 0; i < squareSize; i++) {
        for (let j = 0; j < squareSize; j++) {
            if (shouldDrawPlus(i, j, squareSize)) {
                print('+')
            } else {
                print('0')
            }
        }
        print('\n')
    }
}

drawRhombus(7)