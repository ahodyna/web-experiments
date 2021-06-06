const root = document.getElementById('root');

let cars = [
    {
        "id": 111,
        "name": "Audi A8"
    }, {
        "id": 222,
        "name": "BMW Z"
    }, {
        "id": 333,
        "name": "Mersedes XL"
    }
]

function prepareCarItem(car) {
    const carItem = document.createElement('div');

    const carNameSection = document.createElement('span');
    carNameSection.innerText = car.name
    carItem.appendChild(carNameSection)

    const editCarBtn = document.createElement('button');
    editCarBtn.innerText = 'edit car'
    editCarBtn.addEventListener('click', () => {
        window.location.assign(`#/edit/:${car.id}`)
        const root = document.getElementById('root')
        root.innerHTML = ''
        let carEdit = prepareCarEditComponent(car)
        root.appendChild(carEdit)

    })
    carItem.appendChild(editCarBtn)

    const deleteCarBtn = document.createElement('button');
    deleteCarBtn.innerText = 'delete car'
    deleteCarBtn.addEventListener('click', () => {
        const filteredCars = []
        for (let i = 0; i < cars.length; i++) {
            if (cars[i].id != car.id) {
                filteredCars.push(cars[i])
            }
        }
        cars = filteredCars
        renderCarsList()
    })
    carItem.appendChild(deleteCarBtn)

    return carItem;
}

function generateId() {
    return Math.ceil(Math.random() * 10000)
}

function prepareCarCreationSection() {
    const carCreationSection = document.createElement('div');

    const carNameInput = document.createElement('input');
    carCreationSection.appendChild(carNameInput)

    const createNewCarBtn = document.createElement('button');
    createNewCarBtn.innerText = "create car"
    createNewCarBtn.addEventListener('click', () => {
        cars.push({
            "id": generateId(),
            "name": carNameInput.value
        })
        renderCarsList()
    })
    carCreationSection.appendChild(createNewCarBtn)

    return carCreationSection;
}

function renderCarsList() {
    // root
    const carsList = document.createElement('div');

    for (let i = 0; i < cars.length; i++) {
        const carSection = prepareCarItem(cars[i])
        carsList.appendChild(carSection)
    }

    const root = document.getElementById('root')
    root.innerHTML = ''
    root.appendChild(carsList)

    const carCreationSection = prepareCarCreationSection()
    root.appendChild(carCreationSection)


}

function prepareCarEditComponent(car) {
    const carEditComponent = document.createElement('div');

    const carEditInput = document.createElement('input');
    carEditInput.value = car.name
    carEditComponent.appendChild(carEditInput)

    const carSaveBtn = document.createElement('button');
    carSaveBtn.innerText = "Save"
    carSaveBtn.addEventListener('click', () => {
        for (let i = 0; i < cars.length; i++) {
            if (cars[i].id == car.id) {
                cars[i].name = carEditInput.value
            }
        }
        renderCarsList()
    })
    carEditComponent.appendChild(carSaveBtn)

    return carEditComponent;
}


window.addEventListener('hashchange', (e) => {
    const hashIndex = e.newURL.indexOf('#')
    const hashValue = e.newURL.substring(hashIndex)
    console.log('hashchange!', hashValue, ' --- ', e.newURL)
})


renderCarsList()