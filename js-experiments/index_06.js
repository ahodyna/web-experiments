function calculationTaxes (salary) {
  if (salary>20000) {
    return salary*0.2;
  } else {
    return salary*0.1;
  }
}



let salaries = [10000, 40000, 15000, 90000];

// console.log(salaries[1]);
let salariesSum = 0;
let taxesSum = 0;
let highestSalary = 0;

for (let i = 0; i < salaries.length; i = i + 1) {
  console.log(salaries[i]);
  salariesSum = salariesSum + salaries[i];
  taxesSum = taxesSum + calculationTaxes(salaries[i]);

  if (highestSalary < salaries[i]) {
    highestSalary = salaries[i]
  }
  
}

console.log("highestSalary: " + highestSalary)
console.log ("salariesSum: " + salariesSum);
console.log ("taxesSum: " + taxesSum);
console.log("the end");