function randomInteger(min, max) {
    // случайное число от min до (max+1)
    let rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
  }

  function findNumber(){
    let minValue = document.getElementById('minNumber').value;
    let maxValue = document.getElementById('maxNumber').value;
    let minNumberValue = Number.parseInt(minValue);
    let maxNumberValue = Number.parseInt(maxValue);
    
   let randomResult = randomInteger (minNumberValue, maxNumberValue); 
   document.getElementById('randomNumber').value = randomResult;
  }




