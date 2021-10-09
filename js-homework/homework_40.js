let arrNum = [1, 2, 3, 4, 5, 13];

function findSum(arr, num) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            let sum = arr[i] + arr[j]
            if (sum === num) {
                let result = [];
                result.push(arr[i])
                result.push(arr[j])
                return result
            }
        }
    }
    return null
}

console.log(findSum(arrNum, 6 ))