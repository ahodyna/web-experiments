let carClasses = [
    {
        "price": 10000,
        "class": "Econom"
    },
    {
        "price": 20000,
        "class": "Comfort"
    },
    {
        "price": 30000,
        "class": "Bussiness"
    }
]

let cars = [
    {
        "name": "Mitsubishi lancer",
        "price": 12000,
        "amount": 2
    },
    {
        "name": "BMW X5",
        "price": 31500,
        "amount": 3
    },
    {
        "name": "Lada calina",
        "price": 7900,
        "amount": 7
    },
    {
        "name": "Audi A8",
        "price": 28300,
        "amount": 3
    },
    {
        "name": "Lexus M3",
        "price": 16500,
        "amount": 3
    }
]



$(document).ready(function () {

    $("#calculateButton").on('click', calculateTotalCost)
    $('#addSectionButton').on('click', addSection) 

    populateTable();
  
});



function populateTable() {
    $('#carsTableBody').html("")

    for (let i = 0; i < cars.length; i++) {
        let car = cars[i]
        totalCost = car.price * car.amount

        // $("div#mainPanel div table ")

        let className = findClassName(carClasses, car.price)

        let $tableRow = $("<tr id=row" + ">" +
            "<td>" + className + "</td>" +
            "<td>" + car.name + "</td>" +
            "<td>" + car.price + "</td>" +
            "<td>" + car.amount + "</td>" +
            "<td class='totalCost'>" + totalCost + "</td>" +
            "<td><button onclick='deleteCar(" + i + ")'>delete</button></td>" +  
            "</tr>");
        
        $("#carsTableBody").append($tableRow);
    }
}

function findClassName(classArr, price) {   // TODO: check calculation
    let nameClass = '';
    for (let i = 0; i < classArr.length; i++)
        if (price <= classArr[0].price) {
            nameClass = classArr[0].class
        }
        else if (price <= classArr[1].price || price < classArr[2].price) {
            nameClass = classArr[1].class
        } else {
            nameClass = classArr[2].class
        }
    return nameClass
}

function calculateTotalCost() {
    let $carCosts = $('tbody#carsTableBody tr td.totalCost')
    let sum = 0;
    for (let i = 0; i < $carCosts.length; i++) {

        let carClassTotalCostTD = $carCosts.get(i);
        let carClassTotalCost = $(carClassTotalCostTD).html()
        let carClassTotalCostNumber = parseFloat(carClassTotalCost)

        sum += carClassTotalCostNumber
    }
    $("#totalcost").val(sum)
}

 function addSection() {

    let $carInput = $('#carInput')
    let carName = $carInput.val()

    let $priceInput = $('#priceInput')
    let price = $priceInput.val()

    let $amountInput = $('#amountInput')
    let amountCars = $amountInput.val()
    
   let newTableRow = {
    "name": carName,
    "price": price,
    "amount": amountCars,
   }

   cars.push(newTableRow)

    $carInput.val('');
    $priceInput.val('');
    $amountInput.val('');

    populateTable()
}

function deleteCar(i){
    cars.splice(i, 1)

    populateTable()
}
// при загрузке страницы должна отобразится таблица c 5 колонками
// колонки: class, car, price, amount, total cost
    // class, - значение должно расчитываться основываясь на цене автомобиля
    // car, - марка автомобиля
    // price, - стоимость единицы авто данной марки
    // amount, - количество автомобилей данной марки на складе
    // total cost - суммарная стоимость автомобилей даннной марки

// под таблицей следует отобразить суммарную стоимость всех автомобилей
// суммарная стоимость всех автомобилей расчитывается при на жатии на кнопку calculate total cost, которая так же находится под таблицей

// все элементы пользовательского интерфейса должны быть отцентрированы по центру экрана

// для манипулирования с DOM элементами следует использовать jQuery
// для задачи стилей центрирования следует использовать flexbox