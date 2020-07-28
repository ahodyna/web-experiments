let countries = [
    {
        "name": "Ukraine",
        "cities": [
            {
                "name": "Odesa",
                "population": 1000
            },
            {
                "name": "Lviv",
                "population": 720
            },
            {
                "name": "Kyiv",
                "population": 3000
            },
            {
                "name": "Kharkiv",
                "population": 2100
            },
            {
                "name": "Nizhen",
                "population": 70
            },
            {
                "name": "Uzhhorod",
                "population": 120
            }
        ]
    },
    {
        "name": "Germany",
        "cities": [
            {
                "name": "Munich",
                "population": 1400
            },
            {
                "name": "Berlin",
                "population": 3800
            },
            {
                "name": "Drezden",
                "population": 530
            },
            {
                "name": "Weimar",
                "population": 66
            },
            {
                "name": "Bonn",
                "population": 330
            },
            {
                "name": "Hamburg",
                "population": 1900
            }
        ]
    },
    {
        "name": "France",
        "cities": [
            {
                "name": "Paris",
                "population": 2100
            },
            {
                "name": "Marseille",
                "population": 1600
            },
            {
                "name": "Strazbourg",
                "population": 270
            },
            {
                "name": "Lyon",
                "population": 720
            }
        ]
    }
]

function selectCountry(countriesArr) {
    let higherPopulation = 0;
    let selectedCountry = null;
    let cityName = null;
    for (let i = 0; i < countriesArr.length; i++) {

        let city = biggestCity(countriesArr[i])

        if (higherPopulation < city.population) {
            higherPopulation = city.population
            selectedCountry = countriesArr[i]
            cityName = city.name
        }
    }
    console.log(selectedCountry.name + ':' + cityName + ':' + higherPopulation)
}

function biggestCity(country) {
    let bigCity = 0;
    let city = null;
    for (let i = 0; i < country.cities.length; i++) {
        if (bigCity < country.cities[i].population) {
            bigCity = country.cities[i].population
            city = country.cities[i]
        }
    }
    return city
}

console.log('country with the largest city')
selectCountry(countries)

// -------

function selectSmallCountry(arrCountries) {
    let smalestPopulation = Infinity;
    let countryName = null;
 

    for (let i = 0; i < arrCountries.length; i++) {

        let countryPopulation = sumPopulation(arrCountries[i])

        if (smalestPopulation > countryPopulation) {
            smalestPopulation = countryPopulation
            countryName = arrCountries[i].name
        }
    }
    console.log(countryName + ':' + smalestPopulation)
}


function sumPopulation (country){
    let sum = 0;
   
    for (let i = 0; i < country.cities.length; i++) {
        sum = sum + country.cities[i].population
    }
    return sum
}

console.log('the smallest country')
selectSmallCountry(countries)


// ----------------------------------------
// 1. Вывести на консоль страну с самым большим городом
// 2. Вывести на консоль страну с самым маленьким количеством населения
// Для этих задач удобно будет создать вспомагательные функции которые принимали бы массив городов и что-то считали бы (возвращали)