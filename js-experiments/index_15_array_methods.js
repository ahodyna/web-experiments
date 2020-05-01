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
  }
];

let petLovers = []
// petLovers.push("Masha");

for (let i = 0; i < people.length; i++){
  if(people[i].hasPet == true) {
    petLovers.push(people[i].name)
  }

}
console.log(petLovers)
console.log(petLovers[petLovers.length - 1])
console.log(petLovers)
