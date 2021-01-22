const users = [
    { name: "Mary", age: 17 },
    { name: "Alex", age: 27 },
    { name: null, age: 14 },
    { name: "Kolia", age: 22 },
    { name: "Mike", age: 55 },
]


function countNameLength(name) {
    if (name == null) {
        throw new Error("Name is empty");
    } else {
        return name.length;
    }
}

function analyseUsersForLargestName(users) {
    let nameMaxLength = -1;
    let chosenOne = null;

    for (let i = 0; i < users.length; i++) {
        let user = users[i];

        console.log("before ", i)
        let nameLength = countNameLength(user.name)
        console.log("after", i)

        if (nameMaxLength < nameLength) {
            nameMaxLength = nameLength;
            chosenOne = users[i];
        }
    }

    return chosenOne;
}


function makeAllAnalytiks() {
    try {
        console.log("starter alytics")
        let chosenOne = analyseUsersForLargestName(users);
        console.log("user with largest name: ", chosenOne);
    } catch (err) {
        console.log("error has been caught. message: ", err.message)
    }
    console.log("analys has been finished")
}

makeAllAnalytiks();
console.log("end")