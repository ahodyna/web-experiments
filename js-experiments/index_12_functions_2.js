function foo (name) {
  console.log (name.length)
}

foo("Kostia")  // 6
foo("Alya")    // 4


// ----------------------------------------
let towns = [
  {
    name: "Lviv",
    population: 700
  },
  {
    name: "Kyiv",
    population: 3000
  },
  {
    name: "Rivne",
    population: 300
  },
  {
    name: "Odesa",
    population: 1000
  }
]

let youthPercentage = 50;


function calculationPopulationPrecentage (town, percent) {
   return town.population * percent / 100;
}



for (let i = 0; i < towns.length; i++) {
  let youthAmount = calculationPopulationPrecentage(towns[i], youthPercentage)
  console.log(towns[i].name + "-" + towns[i].population + "-" + youthAmount)
}
