function removeChars(str, chars) {
  let newStr = '';

  for (let i in str) {
    switch (str[i]) {
      case 'a':
        break;
      case 'e':
        break;
      case 'i':
        break;
      case 'o':
        break;
      case 'u':
        break;
      default:
        newStr += str[i];
    }
  }
  return newStr;
}

console.log(removeChars('Battle of the Vowels: Hawaii vs. Grozny', 'aeiou'));
