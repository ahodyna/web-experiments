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


function login() {
  let inputeFieldElement = document.getElementById("inputeField");
  let userName = inputeFieldElement.value;

  let userIndex = -1;
  for (let i = 0; i < users.length; i++){
    if (userName.toUpperCase() == users[i].name.toUpperCase()){
      userIndex = i;
    }
  }

  let outputFieldElement = document.getElementById("outputField");
  if (userIndex == -1) {
    outputFieldElement.setAttribute("value", "user not found");
  }else {
    outputFieldElement.setAttribute("value", "Hello " + users[userIndex].name);
  }
}

