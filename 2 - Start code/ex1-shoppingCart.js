// Function to calculate the total price of any shopping cart
function calculateTotalPrice(shoppingCart) {
  let totalPrice = 0;
  for (let item of shoppingCart) {
    totalPrice += item.price * item.quantity;
  }
  return totalPrice;
}

// Example shopping cart 1
let shoppingCart1 = [
  { name: "Apples", price: 2.5, quantity: 3 },
  { name: "Bananas", price: 1.5, quantity: 2 },
  { name: "Oranges", price: 3, quantity: 1 },
];

// Example shopping cart 2
let shoppingCart2 = [
  { name: "Milk", price: 1.2, quantity: 2 },
  { name: "Bread", price: 1.5, quantity: 1 },
  { name: "Eggs", price: 2, quantity: 1 },
];

// Calculate total price for different shopping carts
console.log("Total price for shoppingCart1:", calculateTotalPrice(shoppingCart1)); // 13.5
console.log("Total price for shoppingCart2:", calculateTotalPrice(shoppingCart2)); // 6.9
