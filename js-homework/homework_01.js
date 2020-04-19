let month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
// console.log("String:" + month.length);

for (let i = 0; i < month.length; i = i + 1 ) {
    // console.log("Month: " + month[i] + "-" + month[i].length)
}

console.log("\n\n")


for (let i = 0; i < month.length; i = i + 1 ){
    if (month[i].startsWith("A") 
        || month[i].startsWith("O")
        || month[i].startsWith("Y")
    ) {
        // console.log(month[i]);
    }
}

console.log("\n\n")

