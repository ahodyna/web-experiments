let text = "hello";


function countUniqueChars(str) {
    let mySet = new Set();
    for (let i = 0; i < str.length; i++) {
        mySet.add(str[i])
    }
    return mySet.size
}

let result = countUniqueChars(text)
console.log(result)




// // Написать функцию, которая считает количето уникальных символов в строке

