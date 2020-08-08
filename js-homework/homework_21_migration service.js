let occupations = [
    {
        "id": "507f191e810c19729de860ea",
        "title": "Agricultural Engineer",
        "visaType": "MLTSSL"
    },
    {
        "id": "507f191e810c19729de860eb",
        "title": "Botanist",
        "visaType": "MLTSSL"
    },
    {
        "id": "507f191e810c19729de860ec",
        "title": "Cardiologist",
        "visaType": "MLTSSL"
    },
    {
        "id": "507f191e810c19729de860ed",
        "title": "Environmental Health Officer",
        "visaType": "Regional"
    },
    {
        "id": "507f191e810c19729de860ef",
        "title": "Financial Brokers",
        "visaType": "STSOL"
    },
    {
        "id": "507f191e810c19729de860eg",
        "title": "Medical Diagnostic Radiographer",
        "visaType": "MLTSSL"
    }
]

let candidates = [
    {
        "id": "507f391e000c19729de55400",
        "name": "Tomas",
        "surname": "Peterson",
        "occupationId": "507f191e810c19729de860ea"
    },
    {
        "id": "507f391e000c19729de55400",
        "name": "Peter",
        "surname": "Greenson",
        "occupationId": "507f191e810c19729de860ec"
    },
    {
        "id": "507f391e000c19729de55400",
        "name": "Elisa",
        "surname": "Stone",
        "occupationId": "507f191e810c19729de860ec"
    },
    {
        "id": "507f391e000c19729de55400",
        "name": "Li",
        "surname": "Unnan",
        "occupationId": "507f191e810c19729de860eb"
    },
    {
        "id": "507f391e000c19729de55400",
        "name": "Klaus",
        "surname": "Veild",
        "occupationId": "507f191e810c19729de860ec"
    },
    {
        "id": "507f391e000c19729de55400",
        "name": "Simon",
        "surname": "Huggersmit",
        "occupationId": "507f191e810c19729de860ed"
    },
    {
        "id": "507f391e000c19729de55400",
        "name": "Irulan",
        "surname": "Corrino",
        "occupationId": "507f191e810c19729de860eg"
    },
    {
        "id": "507f391e000c19729de55400",
        "name": "Frances",
        "surname": "Din",
        "occupationId": "507f191e810c19729de860ed"
    }
]


// написать веб приложение для эмиграционной службы, которое позволило бы пользователю управлять списком кандидатов
// приложение должно:
// 1. отображать текущий список кандидатов и список возможных специальностей на которые объявлен конкурс
// 2. позволять редактировать списки кандидатов (добавлять и удалять список)
// 3. отображаемые списки дожны быть отцентрированы по центру экрана

function createSection(elementIndex, name, surname, occupationId) {
    let componentSection = document.createElement('div')
    
    let labelNode = document.createElement('div');
    let fullnameTextNode = document.createTextNode("full name:" + name + ' ' + surname);
    labelNode.appendChild(fullnameTextNode);
    componentSection.appendChild(labelNode)

    let labelNode1 = document.createElement('div');
    let occupationTextNode = document.createTextNode("occupation: " + occupationId)
    labelNode1.appendChild(occupationTextNode);
    componentSection.appendChild(labelNode1)

    let button = document.createElement('button')
    let buttonText = document.createTextNode ('delete');
    button.appendChild(buttonText)
    button.addEventListener("click", function() {
        candidates.splice(elementIndex,1)
        populateUserSection();
    });

    componentSection.appendChild(button)

    return componentSection;
}


function populateUserSection() {
    let candidatesSections = document.getElementById("candidatesSections");
    candidatesSections.innerHTML = ""

    for (let i = 0; i < candidates.length; i++) {
        let userComponent = createSection(i, candidates[i].name, candidates[i].surname, candidates[i].occupationId)
        candidatesSections.appendChild(userComponent)
    }
}

populateUserSection()