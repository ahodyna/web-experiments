let names = [
  {
   "id": 100,
   "alternatives": "Kostia"
  },
  {
   "id": 101,
   "alternatives": "Alina"
  },
  {
   "id": 102,
   "alternatives": "Sania"
  }
 ]
 
 horoscope = [
  {
   "id": 200,
   "nameId": 100,
   "text": "Some horoscope for Konstantin"
  },
  {
   "id": 201,
   "nameId": 101,
   "text": "Some horoscope for Alina"
  },
  {
   "id": 202,
   "nameId": 103,
   "text": "Some horoscope for Sviatoslav"
  }
 ]

function findHoroscope() {
  let userName = document.getElementById('nameInput').value;
  let userId = null
  let horoscopeText = null

  for (let i = 0; i < names.length; i++){
    let user = names[i];
    if (userName == user.alternatives){
      userId = user.id;  
      break;
    }  
  }
  for (let j = 0; j < horoscope.length; j++){
  let horoscopeID = horoscope[j];
  if (userId == horoscopeID.nameId){
    horoscopeText = horoscopeID.text;
    break
  }
  }



  document.getElementById('outputField').value = horoscopeText;
}


 //1. Создать html страницу с полем ввода для имени, кнопкой "Найти гороскоп" и полем для вывода информации.
//Пользователь должен ввести имя в поле ввода и нажать на кнопку. 
//2. Если введенное имя будет найдено в списке известных имен, то для этого имени стоит найти текст гороскопа и вывести его в поле вывода.
//3. Если пользователь не найден, то  поле вывода стоит написать что введенное имя не найдено