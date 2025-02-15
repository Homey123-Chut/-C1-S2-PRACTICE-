

function findAverage(numbers) {
  if (numbers.length === 0) {
    return 0;  // Handle empty array case to avoid NaN
  }

  let total = 0;
  for (let i = 0; i < numbers.length; i++) {
    total += numbers[i];
  }

  return total / numbers.length;
}

let numbersArray = [10, 20, 30, 40];
console.log(findAverage(numbersArray));  // Should print 25

let emptyArray = [];
console.log(findAverage(emptyArray));  // Should print 0 or handle empty array case
