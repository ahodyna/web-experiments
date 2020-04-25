let people = [ "Mary", "Peter", "Jack", "Tim", "Sarah", "Tom" ]
let salaries = [ 16000, 7000, 32000, 9000, 55000, 1000 ]
let petOwnership = [ true, true, true, false, false, true ]


// people.length == salaries.length && petOwnership.length == people.length
// people.length == salaries.length && false
// false && false
// false

if (people.length == salaries.length && petOwnership.length == people.length) {
   for (let i = 0; i < people.length; i++) {
      console.log(i + "-" + people[i] + "-" + salaries[i] + "-" + petOwnership[i]);
   }
} else {
   console.log("array length aren't equal");
}

