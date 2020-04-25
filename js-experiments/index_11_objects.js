let human = {
    name: "Mike",
    salary: 7000,
    hasPet: true
}

console.log(human.name + " - " + human.salary + " - " + human.hasPet)


let people = [
    {
        name: "Mike",
        salary: 7000,
        hasPet: true
    },
    {
        name: "Tom",
        salary: 17000,
        hasPet: false
    },
    {
        name: "Tim",
        salary: 11000,
        hasPet: false
    },
    {
        name: "Nicole",
        salary: 27000,
        hasPet: true
    }
]

for (let i = 0; i < people.length; i++) {
    if (!people[i].hasPet) {
        console.log(people[i].name)
    }   
}