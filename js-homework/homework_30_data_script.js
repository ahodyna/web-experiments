const fs = require('fs');


let file = fs.readFileSync('C:/Users/Alina/Desktop/city.list.json')
let openWeatherMapCities = JSON.parse(file)

console.log(openWeatherMapCities.length)

let uaCities = [];

for(let i=0; i < openWeatherMapCities.length; i++){
    if(openWeatherMapCities[i].country == "UA"){
        uaCities.push(openWeatherMapCities[i].name)
    }
}

let data = JSON.stringify(uaCities);
fs.writeFileSync('C:/Users/Alina/Desktop/homework-30_uaCities.json', data)
