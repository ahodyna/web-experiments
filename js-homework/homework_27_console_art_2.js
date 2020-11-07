// создать функцию drawDiagonal(squareSize, diagonalSize):
// где
// - squareSize - размерность рисунка например 6
// - diagonalSize - ширина диагональной линии

// Пример результатов:
// drawDiagonal(6, 1)
// +00000
// 0+0000
// 00+000
// 000+00
// 0000+0
// 00000+

// drawDiagonal(6, 2)
// ++0000
// 0++000
// 00++00
// 000++0
// 0000++
// 00000+

// drawDiagonal(6, 3)
// ++0000
// +++000
// 0+++00
// 00+++0
// 000+++
// 0000++

function print(str) {
    process.stdout.write(str)
}

function shouldPrintPlus(i, j, diagonalSize) {
    return i < j + diagonalSize / 2 && i >= j
        || j < i + diagonalSize / 2 && j >= i
}

function drawDiagonal(squareSize, diagonalSize) {
    for (let i = 0; i < squareSize; i++) {
        for (let j = 0; j < squareSize; j++) {
            if (shouldPrintPlus(i, j, diagonalSize)) {
                print('+')
            } else {
                print('0')
            }
        }
        print('\n')
    }
}


drawDiagonal(6, 5)

