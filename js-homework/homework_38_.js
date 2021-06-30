// найти пересечение 2 масивов

let arrA = [3, 4, 5, 6, 3]
let arrB = [9, 5, 3, 4, 4, 3]


function findIntersection(arr1, arr2) {
    let result = [];

    let map = arr1.reduce((acc, i) => {
        acc[i] = acc[i] ? acc[i] + 1 : 1;
        return acc
    }, {})
    for (let i = 0; i < arr2.length; i++) {
        let current = arr2[i]
        let count = map[current]

        if (count && count > 0) {
            result.push(current)
            map[current] -= 1
        }

    }
    return result
}
console.log(findIntersection(arrA, arrB))
