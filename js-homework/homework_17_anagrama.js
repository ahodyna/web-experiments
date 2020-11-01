function toMap(str) {
    let anagramaMap = new Map();
    for (let i = 0; i < str.length; i++) {
        if (anagramaMap.has(str[i])) {
            let counter = anagramaMap.get(str[i])
            counter++
            anagramaMap.set(str[i], counter)
        } else {
            anagramaMap.set(str[i], 1);
        }
    }
    return anagramaMap
}


function isAnagrama(str1, str2) {
    let map1 = toMap(str1);
    let map2 = toMap(str2)
    let anagramaKeys1 = [...map1.keys()]

    if (map1.size != map2.size) {
        return false
    }
    for (let i = 0; i < anagramaKeys1.length; i++) {
        if (map1.get(anagramaKeys1[i]) != map2.get(anagramaKeys1[i])) {
            return false
        }
    }
    return true;
}


console.log(isAnagrama('alina', 'anila'))
console.log(isAnagrama('alina', 'anika'))
console.log(isAnagrama('alina', 'arila'))

// напишите функцию, которая принимает два слова. И возращает true, если слова являются анаграммами или false в противному случае.


// 2 варіант

let anagrama = (str1, str2) => {
    if (str1.length !== str2.length) {
        return false
    }
    str1 = str1.toLowerCase();
    str2 = str2.toLowerCase();

    str1 = str1.split('').sort();
    str2 = str2.split('').sort();

    for (let i = 0; i < str1.length; i++) {
        if (str1[i] !== str2[i]) {
            return false;
        }

    }
    return true;
}

