
function calculateTaxes(salary, isSigle) {
    if (salary > 10000 && isSigle) {
        let result = salary * 0.3 + 10;
        return result;
    } else if (salary > 10000) {
        let result = salary * 0.2 + 10
        return result;
    } else if (salary > 1000) {
        let result = salary * 0.1;
        return result;
    } else {
        let result = salary * 0.05;
        return result;
    }
}

let vasiaTaxes = calculateTaxes(9000, true)
console.log("vasia taxes: " + vasiaTaxes)

let maryTaxes = calculateTaxes(10000, true)
console.log("mary taxes: " + maryTaxes)

console.log("\n\n")

function multiply(a, b) {
    let result = a*b;
    return result;
}

let multiplicationResult = multiply(31, 100)
console.log("multiplication result: " + multiplicationResult)


console.log("The end!")