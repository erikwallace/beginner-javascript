/*
 * BEST PRACTICES
 *
 * Limit use of global variables
 * Use unique, descriptive names
 */

/* eslint-disable */

/*
 * Global Variables
 *
 * Can be accessed everywhere
 * Use sparingly, they can cause issues with variables with the same name
 */

// not attached to window
const firstName = 'Josie';

// not attached to window
let lastName = 'Wallace';

// IS attached to window - ex. window.age
// Be careful with var, they are NOT block scoped
var age = 6;

/*
 * Variables in functions are NOT available outside the function
 * Variables can only be accessed in a function if they are returned
 */
function go() {
  const hairColor = 'brown';
  const eyeColor = 'blue';
}

// go();

/*
 * Block scoped variables
 *
 * How do you access a variable inside { block }?
 * Declare it outside, then set it inside the block
 * Nice because these keep variables from leaking into other code
 */
let cool;
if (1 === 1) {
  cool = true;
}

console.log(cool);

/*
 * Function scoped variable
 * Best practice - access allow declare it before and return it
 */
function allowAccess(name) {
  let allow;
  if (name === 'admin') {
    allow = true;
  }
  console.log(allow);
  return allow;
}

/*
 * Scope Lookup
 * JavaScript - Lexical or static scope
 * JS looks at where functions are defined, not run
 */
const dog = 'Josie';

function logDog(dog) {
  console.log(dog);
}

function getDogName() {
  const dog = 'Eddie';
  logDog('Jackson Colt');
}

getDogName();



/*
 * Function Scoping
 */
function sayHello(name) {
  function yell() {
    console.log(name.toUpperCase())
  }
  yell();
}

yell();