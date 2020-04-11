let month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
console.log("String:" + month.length);

for (let i = 0; i < month.length; i = i + 1 ) {
    console.log("Month: " + month[i] + "-" + month[i].length)
}

console.log("\n\n")


for (let i = 0; i < month.length; i = i + 1 ){
    if (month[i].startsWith("A") 
        || month[i].startsWith("O")
        || month[i].startsWith("Y")
    ) {
        console.log(month[i]);
    }
}

console.log("\n\n")




function isVowel (letter) {
    let vowels = [
        "A", "O", "I", "E", "U",
        "a", "o", "i", "e", "u"
    ]
    for (let i = 0; i < vowels.length; i = i + 1 ) {
       if (vowels[i] == letter) {
           return true;
       }
    }
    return false;
}
   
console.log(isVowel("q"))
console.log(isVowel("a"))
console.log(isVowel("A"))

console.log("The End!")