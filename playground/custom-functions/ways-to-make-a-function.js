/*
 * DIFFERENT WAYS TO WRITE FUNCTIONS
 */

// Because functions like doctorize1 are hoisted I can call it before it is defined in the code
console.log(doctorize1('Shania'));

/*
 * Custom Functions
 * How are these different from anonymous functions?
 * JavaScript hoists these functions to the top, so they can be called anywhere in the code
 * Even before they have been defined
 */
function doctorize1(firstName) {
  return `Dr. ${firstName}`;
}

// Anon Function (has no name)
// function (firstName) {
//   return `Dr. ${firstName}`;
// }

// Function Expression - anonymous function inside of a variable
//
const doctorize2 = function(firstName) {
  return `Dr. ${firstName}`;
};

/* eslint-disable */

/*
 * Arrow Functions (ES6) - these are anon functions
 * More compact - fat arrow replaces function, return isn't needed
 * Different scope
 *
 * function = '=>'
 * If there's only one argument you don't need ( ) around them
 */

// This right arrow function is the same as...
const inchesToCentimeters1 = inches => inches * 2.54;

// ...This
function inchesToCentimeters2(inches) {
  return inches * 2.54;
}

// ...Also this
function inchesToCentimeters3(inches) {
  const cm = inches * 2.54;
  return cm;
}

console.log(inchesToCentimeters1(3));
console.log(inchesToCentimeters2(3));
console.log(inchesToCentimeters3(3));



// Another example of an arrow function - this is the same as...
const add1 = (a, b = 3) => a + b;

// This
function add2(a, b = 3) {
  const total = a + b;
  return total;
}

console.log(add1(1));
console.log(add2(1));


/*
 * HOW DO YOU RETURN AN OBJECT?
 * This can be more concise, but this is easier to read
 */
function makeABaby1(first, last) {
  const baby = {
    name: `${first} ${last}`,
    age: 0
  }
  return baby;

}

// Return an object as an => function
// This is hard to read
const makeABaby2 = (first, last) => ({ name: `${first} ${last}`, age: 0 });

console.log(makeABaby1('Josie', 'Wallace'));
console.log(makeABaby2('Eddie', 'Wallace'));


/*
 * IIFE
 * These are invoked immediately because they are wrapped in ( )
 * Things wrapped in ( ) are run first
 */
(function(age) {
  return `You are cool and age ${age}`;
})(40);


/*
 * METHODS
 * Functions that live inside of an object - ex. console.log
 * log is a method - method is a function living inside of the object console.
 */
const wes = {
  name: 'Josie Wallace',
  // Method!
  sayHello: function() {
    console.log(`Hey ${this.name}`);
    return 'Hey Wes';
  },
  // Short hand Method (most common way)
  yellHello() {
    console.log('HEY JOSIE');
  },
  // Arrow function
  whisperHello: () => {
    console.log('hii josie I\'m a mouse');
  }
}


/*
 * CALLBACK FUNCTIONS
 * Run a function when something is done - ex. after a button is clicked
 */
const button = document.querySelector('.clickMe');

// Callback function option 1
function handleClick() {
  console.log('Nice job clicking, I\'m proud of you!');
}

// Callback function option 2
button.addEventListener('click', function() {
  console.log('Nice job clicking!');
});


/*
 * TIMER CALLBACK
 */
setTimeout(function() {
  console.log('Done! Time to eat!');
}, 1000);