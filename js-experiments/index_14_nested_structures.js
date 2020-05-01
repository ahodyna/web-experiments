let company = {
  name: "Exon mobile",
  capitalization: 100500,
  director: {
    name: "Vasia",
    salary: 10000
  },
  workers: [
    {
      name: "Mary",
      salary: 1000,
      hasPet: true
    },
    {
      name: "Peter",
      salary: 7000,
      hasPet: false
    }
  ]
}

console.log(company.director.name)
console.log(company.workers[1].name)

for (let i = 0; i < company.workers.length; i++){
  let worker = company.workers[i];
  console.log (worker.name + " - " + worker.salary);   // Peter - 7000
}
