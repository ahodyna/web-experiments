let financialCenter = {
    countriesData: [
        {
            name: "Argentina",
            riskPercentages: 10
        },
        {
            name: "USA",
            riskPercentages: 3
        },
        {
            name: "Japan",
            riskPercentages: 1
        },
        {
            name: "Indonesia",
            riskPercentages: 8
        }
    ],
    defaultData: {
        name: "unknown country",
        riskPercentages: 30
    },
    calculateIncome: function(countryName, investmentAmount, incomePercentage) {
        let country = null;

        for (let i=0; i<this.countriesData.length; i++) {
            if (this.countriesData[i].name == countryName) {
                country = this.countriesData[i];
            }
        }

        if (country == null) {
            country = this.defaultData;
        }

        let incomeSaveAmount = investmentAmount * incomePercentage / 100 - investmentAmount * country.riskPercentages / 100;
        return incomeSaveAmount;
    }
} 

// financialCenter usage example 
let estimatedJapanIncome = financialCenter.calculateIncome("Japan", 10000, 12);
console.log("estimated Japan income: ", estimatedJapanIncome);
let estimatedArgentinaIncome = financialCenter.calculateIncome("Argentina", 10000, 15);
console.log("estimated Argentina income: ", estimatedArgentinaIncome);
let estimatedChinaIncome = financialCenter.calculateIncome("China", 10000, 25);
console.log("estimated China income: ", estimatedChinaIncome);
console.log("\n");


// homework data to analyse
let availableInternationalProjects = [
    {
        name: "Indonesia Oil initative",
        country: "Indonesia",
        investmentAmount: 7000,
        incomePercentage: 10
    },
    {
        name: "Nippon semiconductors inc.",
        country: "Japan",
        investmentAmount: 6800,
        incomePercentage: 7
    },
    {
        name: "Ternopil tourism",
        country: "Ukraine",
        investmentAmount: 4900,
        incomePercentage: 23
    }
]

// homework: use financialCenter to analyse available projects & chose the most cost-effective one
let maxIncome = 0;  
let companyIndex = -1;
for (let i = 0; i < availableInternationalProjects.length; i++) {
    let project = availableInternationalProjects[i];
    let estimatedCountryIncome = financialCenter.calculateIncome(project.country, project.investmentAmount, project.incomePercentage);
   if (estimatedCountryIncome > maxIncome){
       maxIncome = estimatedCountryIncome;
       companyIndex = i;
   }
}

console.log(availableInternationalProjects[companyIndex].name + ": " + maxIncome);
console.log("The end")