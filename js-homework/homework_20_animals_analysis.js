let classes = [
    { "id": 100, "name": "Mammal" },
    { "id": 101, "name": "Insects" },
    { "id": 102, "name": "Birds" },
]

let animals = [
    {
        "classId": 101,
        "name": "dance fly",
        "marketPrice": 1541
    },
    {
        "classId": 100,
        "name": "Virginia opossum",
        "marketPrice": 4351
    },
    {
        "classId": 101,
        "name": "German wasp",
        "marketPrice": 1204
    },
    {
        "classId": 101,
        "name": "assassin bug",
        "marketPrice": 1432
    },
    {
        "classId": 102,
        "name": "White-tailed tropicbird",
        "marketPrice": 8090
    },
    {
        "classId": 100,
        "name": "Giant panda",
        "marketPrice": 9871
    },
    {
        "classId": 101,
        "name": "long-nosed weevil",
        "marketPrice": 543
    },
    {
        "classId": 102,
        "name": "Gentoo penguin",
        "marketPrice": 5780
    },
    {
        "classId": 102,
        "name": "Southern cassowary",
        "marketPrice": 2231
    },
    {
        "classId": 101,
        "name": "emperor gum moth",
        "marketPrice": 4451
    },
    {
        "classId": 100,
        "name": "Human",
        "marketPrice": 33213
    },
    {
        "classId": 102,
        "name": "Keel-billed toucan",
        "marketPrice": 651
    },
    {
        "classId": 100,
        "name": "Reindeer",
        "marketPrice": 5476
    },
    {
        "classId": 102,
        "name": "Bald eagle",
        "marketPrice": 6400
    }
]

// 1 вывести в консоль название класса с самым дорогим животным

function getMostExpensiveAnimalClassName(classesArr) {
    let mostExpensiveAnimalClassName = null;

    let mostExpensiveClassId = mostExpensiveAnimal(animals)

    for (let i = 0; i < classesArr.length; i++) {
        if (mostExpensiveClassId == classesArr[i].id)
            mostExpensiveAnimalClassName = classesArr[i].name
    }
    return mostExpensiveAnimalClassName
}


function mostExpensiveAnimal(animalArr) {

    let priceAnimal = 0;
    let mostExpensiveClass = null;

    for (let i = 0; i < animalArr.length; i++) {
        if (priceAnimal < animalArr[i].marketPrice) {
            priceAnimal = animalArr[i].marketPrice
            mostExpensiveClass = animalArr[i].classId
        }
    }
    return mostExpensiveClass
}

console.log(getMostExpensiveAnimalClassName(classes))



// 2. написать веб приложение (сайтик) с инпутом и кнопкой, которое:
// - позволило бы пользователю ввести название интересующего класса в инпут
// - при нажатии кнопки 'Calculate class amount' пользователю должна быть показана суммарная стоимость животных в этом классе

