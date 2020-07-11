function fizzbuzz(n) {
  for (let i = 1; i <= n; i++) {
    if (i % 3 == 0 && i % 5 == 0) {
      console.log(i + ' fizzbuzz')
    } else if (i % 3 == 0) {
      console.log(i + ' fizz')
    } else if (i % 5 == 0) {
      console.log(i + ' buzz')
    }
  }
}


fizzbuzz(33) 




// Напишите функцию, которая перебирает числа от 1 до n,
// где n — целое число, которое функция принимает в качестве параметра, при этом:
// выводит fizz для чисел, кратных 3;
// выводит buzz для чисел, кратных 5;
// выводит fizzbuzz для чисел, кратных и 3, и 5.