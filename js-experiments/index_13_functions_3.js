// function square(a) {
//   return a * a;
// }
// console.log(square(2));


let people = [
  {
    name: "Mary",
    salary: 1000,
    hasPet: true
  },
  {
    name: "Peter",
    salary: 7000,
    hasPet: false
  },
  {
    name: "Jack",
    salary: 3500,
    hasPet: false
  },
  {
    name: "Tim",
    salary: 13000,
    hasPet: true
  },
  {
    name: "Sarah",
    salary: 27000,
    hasPet: true
  },
  {
    name: "Tom",
    salary: 8900,
    hasPet: false
  }
];


function calculateTaxes(human) {
  if (human.hasPet == true) {
    return human.salary * 0.1;
  } else {
    return human.salary * 0.15;
  }
}

let totalTaxes = 0;
for (i = 0; i < people.length; i++) {
  totalTaxes += calculateTaxes(people[i]);
}
console.log(totalTaxes)