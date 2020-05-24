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



function calculate() {
    let inputeFieldElement = document.getElementById("countryInput");
    let country = inputeFieldElement.value;

    let investmentAmountInput = document.getElementById("investmentAmountInput");
    let investmentAmount = investmentAmountInput.value;

    let incomePercentageInput = document.getElementById("incomePercentageInput");
    let incomePercentage = incomePercentageInput.value;

    let income = financialCenter.calculateIncome(country, investmentAmount, incomePercentage);

    let calculationOutput = document.getElementById("calculationOutput");
    calculationOutput.value = income

}