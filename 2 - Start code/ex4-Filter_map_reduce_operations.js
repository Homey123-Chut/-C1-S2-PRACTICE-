let numbers = [1, 2, 3, 4, 5];

// Function to filter out even numbers
function filterEvenNumbers(arr) {
  return arr.filter(num => num % 2 === 0);  // Filters out even numbers
}

// Function to map array elements to their squared values
function squareNumbers(arr) {
  return arr.map(num => num * num);  // Squares each number
}

// Function to compute the sum of array elements
function sumArray(arr) {
  return arr.reduce((sum, num) => sum + num, 0);  // Sums all the elements
}

console.log("Even numbers:", filterEvenNumbers(numbers));  // [2, 4]
console.log("Squared numbers:", squareNumbers(numbers));  // [1, 4, 9, 16, 25]
console.log("Sum of numbers:", sumArray(numbers));  // 15
