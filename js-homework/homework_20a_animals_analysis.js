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

// 2. написать веб приложение (сайтик) с инпутом и кнопкой, которое:
// - позволило бы пользователю ввести название интересующего класса в инпут
// - при нажатии кнопки 'Calculate class amount' пользователю должна быть показана суммарная стоимость животных в этом классе
 

function CalculateClassAmount (){

    let className = document.getElementById("textInput").value 
    
     let sum = 0;
    let classId = null

     for (let i = 0; i < classes.length; i++){
         if (className == classes[i].name)
            classId = classes[i].id
     }

    for (let i = 0; i < animals.length; i++){
        if (classId == animals[i].classId){
            sum = sum + animals[i].marketPrice
        }
    }

    document.getElementById("text").value = sum;
}
    

   
