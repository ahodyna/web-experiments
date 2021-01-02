const square = document.getElementById('square');
let hDirection = 'right';
let vDirection = 'down';
let movementEnabled = true;

function stopSquare() {
movementEnabled = false;
}

function goSquare(){
    movementEnabled = true;
}

square.addEventListener('mousedown', stopSquare)
square.addEventListener('mouseup', goSquare)

setInterval(() => {
    if (!square.style.left) {
        square.style.left = "0px";
        square.style.top = "0px";
    } else {
        if (movementEnabled) {
            let positionTopNumber = getPixelNumber(square.style.top);
            let positionLeftNumber = getPixelNumber(square.style.left);

            if (positionLeftNumber >= 550) {
                hDirection = "left";
            } else if (positionLeftNumber == 0) {
                hDirection = "right";
            }

            if (positionTopNumber >= 450) {
                vDirection = "up";
            } else if (positionTopNumber == 0) {
                vDirection = "down";
            }

            if (vDirection == "up") {
                square.style.top = positionTopNumber - 50 + 'px';
            } else if (vDirection == "down") {
                square.style.top = positionTopNumber + 50 + 'px';
            }

            if (hDirection == "right") {
                square.style.left = positionLeftNumber + 50 + 'px';
            } else if (hDirection == "left") {
                square.style.left = positionLeftNumber - 50 + 'px';
            }
        }
    }
}, 1000)


function getPixelNumber(str) {
    let regex = "[0-9]+";
    let matches = str.match(regex);

    return Number(matches[0]);
}