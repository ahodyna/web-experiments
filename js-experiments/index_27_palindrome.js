function isPalindrome(text) {
  let str = text.toUpperCase();
  for (let i = 0, j = str.length - 1; i < str.length; i++, j--) {
    
    if (str[i] != str[j]) {
      return false
    }

  }
  return true
}

console.log(isPalindrome('Alla'))

console.log(isPalindrome('alina'))

// Написать функцию, которая проверяет, является ли переданная ей строка полиндромом