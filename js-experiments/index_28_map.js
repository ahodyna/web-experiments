let myMap = new Map();

myMap.set('Odesa', 1000000)
myMap.set('Lviv', 700000)
myMap.set('Odesa', 200000)

console.log(myMap)
console.log(myMap.get('Odesa'))
console.log(myMap.size)
// ----------------

let people = [
    {
        name: "Mary",
        salary: 1000,
        hasPet: true
    },
    {
        name: "Peter",
        salary: 7000,
        hasPet: false
    },
    {
        name: "Jack",
        salary: 3500,
        hasPet: false
    },
    {
        name: "Tim",
        salary: 13000,
        hasPet: true
    },
    {
        name: "Sarah",
        salary: 27000,
        hasPet: true
    },
    {
        name: "Tom",
        salary: 8900,
        hasPet: false
    }
];



function getSalary (arr, name){
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].name == name) {
            return arr[i].salary
        }
    }
}

let tmp = getSalary (people, "Sarah")
console.log (tmp)

let tmp2 = getSalary (people, "Tom")
console.log (tmp2)


let peopleMap = new Map()
for (let i=0; i<people.length; i++) {
    peopleMap.set (people[i].name, people[i])
}

console.log (peopleMap.get ('Tom').salary)
console.log (peopleMap.get ('Sarah').salary)



