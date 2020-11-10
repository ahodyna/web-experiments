function print(str) {
    process.stdout.write(str)
}

function drawPlus(i, j){

}

function drawRhombus(squareSize){
    for (let i = 0; i < squareSize; i++){
        for (let j = 0; j < squareSize; j++) {
            if (drawPlus(i, j)){
                print ('+')
            }else {
                print ('0')
            }
        }
    }
}