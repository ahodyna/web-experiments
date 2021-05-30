// // // // // // // // // // // // // // // // // // // // // // // // 
// task 1
var users = [
    { name: "vasia", age: 15, country: "UK" }, 
    { name: "alina", age: 24, country: "UK" }, 
    { name: "margary", age: 24, country: "UK" }, 
    { name: "mary", age: 34, country: "UAH" } 
]

// use filter (with arrow function) to populate
var ukUsers = users.filter(elem => elem.country === 'UK'); 
console.log('ukUsers: ', ukUsers)


// use filter (with old fascion function) to populate
var matureUsersOver18Years = users.filter(function(elem){
    return elem.age > 18
});         
console.log('matureUsersOver18Years: ', matureUsersOver18Years)

// use filter (with arrow function) to populate
var usersWithLongNamesOver5Symbols = users.filter(elem => elem.name.length > 5);  
console.log('usersWithLongNamesOver5Symbols: ', usersWithLongNamesOver5Symbols)



// // // // // // // // // // // // // // // // // // // // // // // // 
// task 2
var cities = [
    { name: "Oslo", population: 100000, gdpPerCapita: 13000},
    { name: "Malmo", population: 400510, gdpPerCapita: 800},
    { name: "Nurenberg", population: 8324, gdpPerCapita: 4321},
    { name: "Seatle", population: 2783, gdpPerCapita: 98000},
]

// use map to create collection of objects: { name: 'xxx', totalGDP, yyy }
// use arrow function
var citiesTotalGDP = cities.map(elem => ({'name': elem.name, 'totalGDP': elem.population * elem.gdpPerCapita }));
console.log(citiesTotalGDP)

// use map to create collection of objects: { name: 'xxx', nameLength, yyy }
// use old fascion function


var citiesNameLength = cities.map(function(elem){
    return {'name': elem.name, 'nameLength': elem.name.length}
})
console.log(citiesNameLength)