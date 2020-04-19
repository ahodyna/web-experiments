let month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];



function printIsVowel (letter) {
    let vowels = [
        "A", "O", "I", "E", "U",
        "a", "o", "i", "e", "u"
    ]
    for (let i = 0; i < vowels.length; i = i + 1 ) {
        if (letter == vowels[i]) {
            console.log("vowel!");
            return;
        }
    }
    console.log("not vowel!");
}
   
printIsVowel("q");


function isVowel (letter) {
    let vowels = [
        "A", "O", "I", "E", "U",
        "a", "o", "i", "e", "u"
    ]
    for (let i = 0; i < vowels.length; i = i + 1 ) {
        if (letter == vowels[i]) {
            return true;
        }
    }
    return false;
}

console.log(isVowel("q"))

for (i = 0; i < month.length; i = i + 1) {
    console.log (month[i]);
    console.log (month[i][0]);
    console.log (isVowel( month[i][0] ) );
}

console.log("The End!")