hobbies = [
  { "id": 1001, "name": "Book reading", "dangerousRank": 0 },
  { "id": 1002, "name": "Swimming", "dangerousRank": -9 },
  { "id": 1003, "name": "Acrobatics", "dangerousRank": 5 },
  { "id": 1004, "name": "Gunsmithing", "dangerousRank": 7 },
  { "id": 1005, "name": "Photography", "dangerousRank": 0 },
  { "id": 1006, "name": "Pet adoption & fostering", "dangerousRank": 8 },
  { "id": 1007, "name": "Animation", "dangerousRank": 0 },
  { "id": 1008, "name": "Video gaming", "dangerousRank": 2 },
  { "id": 1009, "name": "Cooking", "dangerousRank": 0 },
  { "id": 1010, "name": "Cycling", "dangerousRank": -8 },
  { "id": 1011, "name": "Eating", "dangerousRank": 2 },
  { "id": 1012, "name": "Skydiving", "dangerousRank": 7 },
  { "id": 1013, "name": "3D printing", "dangerousRank": 0 },
  { "id": 1014, "name": "Graphic design", "dangerousRank": 0 },
  { "id": 1015, "name": "Walking", "dangerousRank": -4 }
]

let users = [
	{
    "id": 2001,
    "name": "Klaus",
    "hobbiesIds": [ 1003, 1012, 1007 ]
  },
  {
    "id": 2002,
    "name": "Matilda",
    "hobbiesIds": [ 1010, 1012 ]
  },
  {
    "id": 2003,
    "name": "Mike",
    "hobbiesIds": [  ]
  },
  {
    "id": 2004,
    "name": "Mika",
    "hobbiesIds": [ 1014, 1006 ]
  }
]

function getElementById (id, array){
  for (let i = 0; i < array.length; i++){
    if (array[i].id == id){
      return array[i];
    }
  }
  return null;
}

function getUserHobbies (userId) {
  let userHobbies = []

  let user = getElementById (userId, users)
  if (user != null){

    let userHobbiesIds = user.hobbiesIds
    for (let j = 0; j < userHobbiesIds.length; j++){
      let hobbyId = userHobbiesIds[j];

      let hobby = getElementById(hobbyId, hobbies)
      userHobbies.push (hobby)        
    }
    return userHobbies
  }
  return null
 }


window.onload = function() { 
  let usersListsNode = document.createElement("ul");
  for ( let i = 0; i < users.length; i++){
    let userItemNode = document.createElement("li")
    let textnode = document.createTextNode(users[i].name)
    userItemNode.appendChild(textnode);
    usersListsNode.appendChild(userItemNode);
  
    let idHobbies = users[i].hobbiesIds;
    let hobbyListNode = document.createElement("ul")
    for (let j = 0; j < idHobbies.length; j++){
      let userHobbyId = idHobbies[j];
      let userHobby = getElementById(userHobbyId, hobbies);
      let hobbyItemNode = document.createElement("li")
      let userHobbyNameNode = document.createTextNode(userHobby.name);
       hobbyItemNode.appendChild(userHobbyNameNode);
      hobbyListNode.appendChild(hobbyItemNode);
    }
    userItemNode.appendChild(hobbyListNode);
  }
  document.getElementById("userSection")
          .appendChild(usersListsNode)
 
};


 
// 1. Создать функцию которая принимает id пользователя и возвращает массив с его хобби.
// Например для пользователя 2002 функция должна вернуть массив [ { "id": 1010, "name": "Cycling", "dangerousRank": -8 }, { "id": 1012, "name": "Skydiving", "dangerousRank": 7 } ]


// 2. Создать html страницу на которой в виде списка отобразить всех пользователей из массива users. 
// Наполнение списка произвести из JS кода.
// 3.Улучшаем код из пункта 2: под именем каждого пользователя отобразить список его хобби