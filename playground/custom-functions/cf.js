/*
 * Functions - group together a set of instructions, then often return a value
 */

// Define a function with placeholder parameters, use a default value for taxRate
function calculateBill(billAmount, taxRate = 0.13, tipPercent = 0.2) {
  // this is the function body
  const total = billAmount + billAmount * taxRate + billAmount * tipPercent; // these variables are temporary and scoped to only exist in THIS function
  return total; // allows you to capture and access the variable outside the function
}

// Call, run, or invoke a function and use arguments to pass in parameters
const myTotal1 = calculateBill(127); // use default tax rate
const myTotal2 = calculateBill(14, 0.15); // override default tax rate
console.log(`Bill total 1 = ${myTotal1}, Bill total 2 = ${myTotal2}`);

// Define greeting function
function sayHelloTo(firstName) {
  return `Hello ${firstName}`;
}

// const greeting = sayHelloTo('Mando');
// console.log(greeting);

function doctorize(name) {
  return `Dr. ${name}`;
}

function yell(name = 'Shania') {
  return `HEY ${name.toUpperCase()}`;
}

// Functions call call other functions - here yell uses doctorize
const yellName = yell(doctorize('rosenrosen'));
// console.log(yellName);

const myBill4 = calculateBill(100, undefined, 0.2);
console.log(`Bill total 4 = ${myBill4}`);
