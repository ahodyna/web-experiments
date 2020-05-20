let name = "Alia"

let user = {
  name: "Vasia",
  age: 26,
  introduce: function() {
    console.log(this.name)
  }
}

let user2 = user;   // user2 and user point to the same object
user = {}           // user updates his pointer and point to different object

user2.introduce()   // call object method (look to 'this' usage)
