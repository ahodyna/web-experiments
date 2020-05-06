let companies = [
  {
    name: "Mega Gears",
    sector: "Machinery",
    workers: 29000
  },
  {
    name: "Hipster dream",
    sector: "Public services",
    workers: 130
  },
  {
    name: "Flying omega",
    sector: "Machinery",
    workers: 43
  },
  {
    name: "Munich industries",
    sector: "Machinery",
    workers: 24000
  }
]



function filterBySector(array, sector) {
  let filteredResult = []
  for (let i = 0; i < array.length; i++) {
    if (array[i].sector == sector)
      filteredResult.push(array[i])
  }
  return filteredResult;
}

let machineryCompanies = filterBySector(companies, "Machinery");
console.log("machinery companies: " + machineryCompanies);

let publicServicesCompanies = filterBySector(companies, "Public services");
console.log("public services companies: " + publicServicesCompanies);

let financialCompanies = filterBySector(companies, "Financial");
console.log("financial companies: " + financialCompanies);





function findLargestCompanyInSector(array, sector) {
  let higherNumberOfWorkers = 0;
  let indexCompany = -1;
  for (let i = 0; i < array.length; i++) {
    if (array[i].sector == sector) {
      if (higherNumberOfWorkers < array[i].workers) {
        higherNumberOfWorkers = array[i].workers;
        indexCompany = array[i]
      }
    }
  }
  return indexCompany
}


let largestCompany = findLargestCompanyInSector(companies, "Machinery");
console.log("largest company name: " + largestCompany.name);


function summSectorWorkers(array, sector) {
  let sumWorkers = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i].sector == sector) {
      sumWorkers = sumWorkers + array[i].workers;

    }
  }
  return sumWorkers
}

let sumWorkersOfCompany = summSectorWorkers(companies, "Machinery");
console.log("total workers in machinery sector: " + sumWorkersOfCompany);