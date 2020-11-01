// node.exe .\js-homework\homework_26_console_art.js

// Используя циклы нарисовать в консоли рисунок:
// 100001
// 010010
// 001100
// 001100
// 010010
// 100001


function print(str) {
    process.stdout.write(str)
}


let len = 110;

function shouldPrintPlusForEven(i, j, len) {
    return i == len / 2 - 1 && j == len / 2 - 1
    || i == len / 2 - 1 && j == len / 2
    || i == len / 2 && j == len / 2
    || i == len / 2 && j == len / 2 - 1;
}

function shouldPrintPlusForOdd(i, j, len) {
    return i == (len - 1) / 2 && j == (len - 1) / 2
}

function shouldPrintPlus(i, j, len) {
  if (len % 2 == 0 ){
      return shouldPrintPlusForEven(i, j, len)
  } else {
      return shouldPrintPlusForOdd (i, j, len)
  }     
}

for (let i = 0; i < len; i++) {
    for (let j = 0; j < len; j++) {
        if (shouldPrintPlus(i,j, len)) {
            print('+')
        } else if (j == i || j == len - i - 1) {
            print(' ')
        } else {
            print('0')
        }
    }
    print('\n')
}