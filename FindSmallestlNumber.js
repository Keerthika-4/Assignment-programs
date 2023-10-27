const number = [5, 29, -7, 84, 91, -3, 13];
let smallestNumber = 0;
for (let i = 0; i < number.length; i++) {
  if (smallestNumber > number[i]) {
    smallestNumber = number[i];
  }
}
console.log(smallestNumber);
