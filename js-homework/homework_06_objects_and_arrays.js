let companies = [
    {
        name: "Alphabet Inc.",
        capitalization: 879150,
        sector: "Communication Services",
        industry: "Internet Content & Information",
        employees: 118899
    },
    {
        name: "Apple Inc.",
        capitalization: 1238000,
        sector: "Technology",
        industry:"Consumer Electronics",
        employees: 137000
    },
    {
        name: "Mitsubishi UFJ Financial Group",
        capitalization: 49591,
        sector: "Financial Services",
        industry: "Banks-Diversified",
        employees: 140343
    },
    {
        name: "Industrial and Commercial Bank of China Limited",
        capitalization: 2921000,
        sector: "Financial Services",
        industry: "Banks-Diversified",
        employees: 445106
    },
    {
        name: "Samsung Electronics Co., Ltd",
        capitalization: 332214,
        sector: "Technology",
        industry: "Consumer Electronics",
        employees: 320671
    },
    {
        name: "JPMorgan Chase",
        capitalization: 276352,
        sector: "Financial Services",
        industry: "Banks-Diversified",
        employees: 256720
    },
    {
        name: "Amazon.com, Inc.",
        capitalization: 1202000,
        sector: "Consumer Cyclical",
        industry: "Internet Retail", 
        employees: 798000
    },
    {
        name: "Microsoft Corporation",
        capitalization: 1328000,
        sector: "Technology",
        industry: "Software-Infrastructure",
        employees: 144000
    }
]
 


let smallestNumberEmployees = Infinity;
let indexCompany = -1;

for (let i = 0; i < companies.length; i++) {
    if (smallestNumberEmployees > companies[i].employees) {
        smallestNumberEmployees = companies[i].employees;
        indexCompany = i;
    }
}
console.log (companies[indexCompany].name + " full time employees: " + smallestNumberEmployees)



let totalEmployers = 0;
let totalMarketCapitalization = 0;
for (let i = 0; i < companies.length; i++) {
    if (companies[i].sector == "Financial Services") {
        totalEmployers += companies[i].employees;
        totalMarketCapitalization +=companies[i].capitalization;
    }
}
console.log ("Financial Services. Total employers: " +  totalEmployers + ". Total market capitalization: " + totalMarketCapitalization)


// define function
function calculateTotalMarketCapitalization(array) {
    let sumMarketCapitalization = 0;
    for (let i = 0; i < array.length; i++){
        sumMarketCapitalization += array[i].capitalization;
    }
    return sumMarketCapitalization
}

let tmc = calculateTotalMarketCapitalization(companies);
console.log("Total market capitalization: " + tmc)