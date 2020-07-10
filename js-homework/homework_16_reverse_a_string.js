function reverseString(str) {
    let newString = "";
    for (let i = 0; i < str.length; i++) {
        newString = str[i] + newString;
    }
    return newString;
}

function findString() {
    let text = document.getElementById('textInput').value

    let result = reverseString(text);
    document.getElementById('text').value = result;
}


//Создать веб страничку на которой есть инпут для ввода строки, кнопка и инпут для результатов. 
//Пользователь может ввести строку и нажать на кнопку.
//В результате пользователь должен увидеть свою строку развернутую задом наперед во втором инпуте.

//Пример ввода: Привет
//Ожидаемый вывод: тевирП