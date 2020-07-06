function findNumber(){

    let numberInputValue = document.getElementById("numberInput").value
    document.getElementById("numbersList").innerHTML = ""

    for (let i = 0; i <= numberInputValue; i++){
        let itemNode = document.createTextNode(i);
        let userItemNode = document.createElement("li");
        userItemNode.appendChild(itemNode);

        document.getElementById("numbersList").appendChild(userItemNode);
    }
}

//Создать страницу на которой есть поле ввода, кнопка и список.
//Пользователь должен ввести в поле ввода число и нажать на кнопку.
//После нажатия на кнопку список должен заполнится числами от 0 до числа которое ввел пользователь.