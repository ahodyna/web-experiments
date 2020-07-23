let people = [
    { name: "Vasia", age: 17, deposit: 15000, bankName: "Privat" },
    { name: "Mary", age: 34, deposit: 0, bankName: "OTP" },
    { name: "Ignat", age: 27, deposit: 101200, bankName: "Privat" },
    { name: "Tomas", age: 82, deposit: 76000, bankName: "Mono" },
    { name: "July", age: 61, deposit: 345900, bankName: "Privat" },
    { name: "Philip", age: 12, deposit: 3200, bankName: "Mono" },
]


function oldestPeople(arr) {
    let maxAge = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].age > maxAge) {
            maxAge = arr[i].age;
        }
    }
    return maxAge;
}

console.log(oldestPeople(people))

// -----

function sumDeposit(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum = sum + arr[i].deposit;
    }
    return sum
}

console.log(sumDeposit(people))

// -------

function toBankDepositsMap(arr) {
    let bankDepositsMap = new Map();
    for (let i = 0; i < arr.length; i++) {
        if (bankDepositsMap.has(arr[i].bankName)) {
            let deposit = bankDepositsMap.get(arr[i].bankName)
            deposit = deposit + arr[i].deposit
            bankDepositsMap.set(arr[i].bankName, deposit)
        } else {
            bankDepositsMap.set(arr[i].bankName, arr[i].deposit)
        }
    }
    return bankDepositsMap
}

console.log(toBankDepositsMap(people))

// -------

function mostPopularBank(arr) {
    let popularBankMap = new Map();

    for (let i = 0; i < arr.length; i++) {
        if (popularBankMap.has(arr[i].bankName)) {
            let counter = popularBankMap.get(arr[i].bankName)
            counter++
            popularBankMap.set(arr[i].bankName, counter)
        } else {
            popularBankMap.set(arr[i].bankName, 1)
        }
    }    
    
    let higherNumberOfPeople = 0;
    let popularBankName = null;
    let bankNames = [...popularBankMap.keys()]
    for (let i = 0; i < bankNames.length; i++) {
        let bankUsersCount = popularBankMap.get(bankNames[i])
        if (higherNumberOfPeople < bankUsersCount) {
            higherNumberOfPeople = bankUsersCount
            popularBankName = bankNames[i]
        }
    }
    console.log(popularBankName)
}

mostPopularBank(people)

   // 1 вывести самого старого человека в консоль
   // 2 вывести сумму всех депозитов всех людей
   // 3 вывести сумму депозитов по банкам (используй мапу)
   // 4* вывести самый популярный банк (используй мапу)