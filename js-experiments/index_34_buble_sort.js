function sortBuble(originalArr) {

    // const arr = Array.from(originalArr)

    const arr = []
    for (let i = 0; i < originalArr.length; i++){
        arr.push(originalArr[i])
    }

    for (let i = 0; i < arr.length; i++) {

        for (let j = 0; j < arr.length - 1 - i; j++) {
            if (arr[j] > arr[j + 1]) {
                let tmp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = tmp
            }
        }
    }

    return arr;
}

array = [24, 76, 98, 34, 74]

const sortedArray = sortBuble(array);
console.log('sortedArray 1: ' + sortedArray);

array.length = 0
console.log('sortedArray 2: ' + sortedArray);
