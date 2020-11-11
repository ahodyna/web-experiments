function print(str) {
    process.stdout.write(str)
}

function drawPlus(i, j, squareSize) {
    return i == (squareSize - 1) / 2 - j
        || i == (squareSize - 1) / 2 + j
        || i == j - (squareSize - 1) / 2
        || i == (squareSize - 1) / 2 - j + (squareSize - 1)

}

function drawRhombus(squareSize) {
    for (let i = 0; i < squareSize; i++) {
        for (let j = 0; j < squareSize; j++) {
            if (drawPlus(i, j, squareSize)) {
                print('+')
            } else {
                print('0')
            }
        }
        print('\n')
    }
}

drawRhombus(7)