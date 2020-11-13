function print(str) {
    process.stdout.write(str)
}

function shouldDrawPlus(i, j, squareSize) {
    const offset = squareSize % 2 == 0 ? 1 : 0
    return i == (squareSize - 1 - offset) / 2 - j
        || i == (squareSize - 1 - offset) / 2 + j + offset
        || i == (j - offset) - (squareSize - 1 - offset) / 2
        || i == (squareSize - 1 - offset) / 2 + offset - j + offset + (squareSize - 1 - offset)
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

drawRhombus(9)
console.log()
drawRhombus(10)