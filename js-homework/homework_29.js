const square = document.getElementById('square');
let hDirection = 'right';

setInterval(() => {
    if (!square.style.left) {
        square.style.left = "0px";
    } else {
        let positionLeftNumber = getPixelNumber(square.style.left);

        if (positionLeftNumber >= 550) {
            hDirection = "left";
        } else if (positionLeftNumber == 0) {
            hDirection = "right";
        }

        if (hDirection == "right") {
            square.style.left = positionLeftNumber + 50 + 'px';
        } else if (hDirection == "left") {
            square.style.left = positionLeftNumber - 50 + 'px';
        }
    }
}, 100)


function getPixelNumber(str){
    let regex = "[0-9]+";
    let matches = str.match(regex);
     
    return Number(matches[0]);
}