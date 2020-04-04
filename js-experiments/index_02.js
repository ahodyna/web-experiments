let vasiaSalary = 15000;
let premium = 201;

let vasiaTotalReward = vasiaSalary + premium
let vasiaSingle = true
let vasiaIsCriminal = false

console.log('calculating user taxation')
if (vasiaTotalReward > 10000 && vasiaSingle) {
    console.log("apply 30% taxation")
    console.log("force him to donate 10$ to army")
} else if (vasiaTotalReward > 10000) {
    console.log("apply 20% taxation")
    console.log("force him to donate 10$ to army")
} else if (vasiaTotalReward > 1000) {
    console.log("apply 10% taxation")
} else {
    console.log("apply 5% taxation")
}
console.log("\n\n")

console.log('calculating user preferences')
if (!vasiaIsCriminal) {
    console.log("give him bonus 100$")
}


console.log("The end!")