let salaries = [10000, 40000, 15000, 90000, 22000, 71000, 15];
let sum = 0;

// increment - increase variable by 1
// sum = sum + 1;
// sum += 1;
// sum++;

for (let i = 0; i < salaries.length; i++){
   sum = sum + salaries[i];
}
console.log ("salaries sum: " + sum);


// division by modulo
for (let i = 0; i < salaries.length; i++){
   if (i % 3 == 2) {
      console.log ("every third value: " + salaries[i]); 
   }
}

  
// highest salary
let highestSalary = 0;
for (let i = 0; i < salaries.length; i++){
   if (highestSalary < salaries[i]){
      highestSalary = salaries[i];    
   }
}
console.log("highest salary: " + highestSalary)


// smallest salary
let smallestSalary = Infinity;
for (let i = 0; i < salaries.length; i++){
   if (smallestSalary > salaries[i]) {
      smallestSalary = salaries[i];
   }
}
console.log("smallest salary: " + smallestSalary)


// average salary
let salariesSum = 0;
for (let i = 0; i < salaries.length; i++) {
   salariesSum += salaries[i];
}
let averageSalary = salariesSum / salaries.length;
console.log (averageSalary);