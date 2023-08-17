// Listen nennt man in JS arrays (quasi synonym hier)
// Indices start at 0
// arrays werden immer im plural geschrieben!

const numbers = [1, 2, 12, 5, 300]; // das ist ein array

// Access array elements

const thirdNumber = numbers[2];
console.log(thirdNumber);

numbers[2] = 77;
console.log(numbers);

const products = [
  {
    name: "iPhone",
    price: 1200,
  },
  {
    name: "console",
    price: 350,
  },
  {
    name: "toothbrush",
    price: 50,
  },
];

console.log(products[1].price);
