let arrNum = [3, 7, 1, 1, 2, 3, 3, 4, 2, 4]


function getUniqNum(arr) {

    let map = new Map();

    for (let i = 0; i < arr.length; i++) {
        if (map.get(arr[i])) {
            let value = map.get(arr[i]);
            value += 1;
            map.set(arr[i], value)
        } else {
            map.set(arr[i], 1);
        }
    }
    for (const [num, value] of map) {
        if (value === 1) {
            return num
        }
    }
    return null
}

console.log(getUniqNum(arrNum));
