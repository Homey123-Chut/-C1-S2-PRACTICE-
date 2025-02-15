let originalArray = [1, 2, 3, 4, 5];

function updateArray(array, index, newValue) {
  // Clone the array using the spread operator
  let clonedArray = [...array];
  
  // Update the cloned array at the specified index
  clonedArray[index] = newValue;
  
  // Return the updated cloned array
  return clonedArray;
}

let updatedArray = updateArray(originalArray, 2, 10);

console.log("Original array:", originalArray); // original array should not be modified...
console.log("Updated array:", updatedArray); // updated array should reflect the change
