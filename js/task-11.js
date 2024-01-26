function sum(numbers) {
  "use strict";
  let sum = 0;

  return numbers.length < 0
    ? 0
    : numbers.forEach((element) => {
        sum += element;
      });
}
console.log(sum([1, 5.2, 4, 0, -1])); //9,2
