let companyStockQuote = [ "Alphabet Inc.", "Apple Inc.", "Mitsubishi UFJ Financial Group", "Industrial and Commercial Bank of China Limited", "Samsung Electronics Co., Ltd", "JPMorgan Chase", "Amazon.com, Inc.", "Microsoft Corporation" ]
let companyMarketCapitalizationMillions = [ 879150, 1238000, 49591, 2921000, 332214, 276352, 1202000, 1328000 ]
let companySector = [ "Communication Services", "Technology", "Financial Services", "Financial Services", "Technology", "Financial Services", "Consumer Cyclical", "Technology" ]
let companyIndustry = [ "Internet Content & Information", "Consumer Electronics", "Banks-Diversified", "Banks-Diversified", "Consumer Electronics", "Banks-Diversified", "Internet Retail", "Software-Infrastructure" ]
let companyFullTimeEmployees = [ 118899, 137000, 140343, 445106, 320671, 256720, 798000, 144000 ]


let highestCapitalization = 0;
let indexCompany = -1;

for (let i = 0; i < companyMarketCapitalizationMillions.length; i++) {
    if (highestCapitalization < companyMarketCapitalizationMillions[i]) {
        highestCapitalization = companyMarketCapitalizationMillions[i];
        indexCompany = i;
    }
}
console.log (companyStockQuote[indexCompany] + " market cap: " + highestCapitalization);


let highestNumberEmployees = 0;

    for (let i = 0; i < companyFullTimeEmployees.length; i++){
        if (highestNumberEmployees < companyFullTimeEmployees[i]){
            highestNumberEmployees = companyFullTimeEmployees[i];
            indexCompany = i;
     }
    }
console.log (companyStockQuote[indexCompany]+ " full time employees: " + highestNumberEmployees);