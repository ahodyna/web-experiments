let someArray = [
  ["a","b","c","d"],
  ["e","f"]
]

console.log("extract single element: " + someArray[1][1])


for (let i=0; i < someArray.length; i++) {

  for (let j=0; j < someArray[i].length; j++) {
    console.log(i + " - " + j + " - " + someArray[i][j]);
  }
  console.log("--")
}

console.log("")
console.log("companies example")
let companies = [
  {
      name: "Alphabet Inc.",
      capitalization: 879150,
      sector: "Communication Services",
      industry: "Internet Content & Information",
      employees: ["Vasia", "Petia"]
  },
  {
      name: "Apple Inc.",
      capitalization: 1238000,
      sector: "Technology",
      industry:"Consumer Electronics",
      employees: ["Masha", "Zina"]
  }
]

for (let i=0; i < companies.length; i++) {
  let employeesToPrint = companies[i].employees;
  for (let j=0; j < employeesToPrint.length; j++) {
    console.log (employeesToPrint[j])
  }
}