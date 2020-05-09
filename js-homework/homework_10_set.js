let users = [
    {
        name: "Peter",
        role: "USER",
        age: 12
    },
    {
        name: "Amy",
        role: "USER",
        age: 24
    },
    {
        name: "John",
        role: "USER",
        age: 12
    },
    {
        name: "Megan",
        role: "ADMIN",
        age: 12
    },
    {
        name: "John",
        role: "customer",
        age: 12
    }
]

function extractUniqueRoles(array) {
    let result = new Set();
    for (let i = 0; i < array.length; i++) {
      result.add(array[i].role.toUpperCase())
    }
    return result;
}


let roles = extractUniqueRoles(users);
console.log("roles: ", roles);

let roleToCheck1 = "ADMIN";
let roleToCheck2 = "ADmin";


console.log(roles.has(roleToCheck1.toUpperCase()))
console.log(roles.has(roleToCheck2.toUpperCase()))
console.log(roles.has(roleToCheck2))
console.log(roles.has("CUSTOMER"))