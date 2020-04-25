let month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

// let j = 0;
// month[j].startsWith("J")
// month[0].startsWith("J")
// "January".startsWith("J")
// true

let counter = 0;
for (let i = 0; i < month.length; i++){
    if(month[i].startsWith("J")){
        counter += 1;
        console.log (month[i]);
    }
}
console.log (counter);



let highestNumberOfLetter = 0;
let indexOfElementWithHighestNumberOfLetter = -1;
for (let i = 0; i < month.length; i = i + 1) {
     if(highestNumberOfLetter < month[i].length){
        highestNumberOfLetter = month[i].length;
        indexOfElementWithHighestNumberOfLetter = i;
        // console.log (highestNumberOfLetter);
        // console.log (month[indexOfElementWithHighestNumberOfLetter]);        
    }
}

console.log (highestNumberOfLetter + " - " + month[indexOfElementWithHighestNumberOfLetter]);
