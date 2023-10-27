function palindrome(name) {
  for (let i = 0; i < name.length / 2; i++) {
    if (name[i] === name[name.length - i - 1]) {
      return true;
    } else {
      return false;
    }
  }
}
console.log(palindrome("malayalam"));
