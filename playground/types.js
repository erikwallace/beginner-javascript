/* eslint-disable */



/*
 * STRINGS
 *
 */

console.log('I am a string, and can be surrounded by single quotes, double quotes and backticks');

// Strings can be surrounded with single quotes, double quotes and backticks
const firstName = 'Josie';
const middleName = "The Brownie";
const lastName = `Wallace`;
const fullName = `${firstName} ${middleName} ${lastName}`;
const greeting = `hello my name is ${fullName}`;

// Concatenate strings together
console.log(firstName + ' ' + middleName + ' ' + lastName);

// Using backticks is easier for concatenating
console.log(`${greeting}`)

// This is why single quotes can be a pain in the ass, you have to escape apostrophes
const sentence1 = 'she\'s so cool';

// This is easier and works
const sentence2 = "she's so cool";

// Using backticks is the easiest way to do this - backticks are rare and can be escaped
const sentence3 = `she's so cool`;

// Use backticks for multistring lines - without backticks you have to use forward slashes for new lines
const song = `Ohh

yeah

I like

pizza`;

// Practical Example
const name = `Rutheford`;

// Interpolate - if you use backticks you can easily add a variable or statement with ${variableName}
const hello = `Hello my name is ${name}. Nice to meet you. I am ${1 + 39} years old`;

const html = `
  <div>
    <h2>${name}</h2>
    <p>${hello}</p>
  </div>
`;

document.body.innerHTML = html;



/*
 * NUMBERS
 *
 */

const personAge = 100.5;
const personName = 'wes';

const a = 10;
const b = 20;

// Helper methods
const round1 = Math.round(20.65);
const round2 = Math.round(1.17);
const floor1 = Math.floor(personAge);
const floor2 = Math.floor(20.99999999999999);
const ceil1 = Math.floor(20.99999999999999);
const random = Math.random(); // get a random number between 0 and 1

// Modulo operator % - gives you a remainder
const smarties = 20;
const kids = 3;
const eachKidGets = Math.floor(smarties / kids);
const dadGets = smarties % kids;
console.log(`Each kids gets ${eachKidGets}`);
console.log(`Dad gets ${dadGets}`);

// Floating point math - computers navtively use integers
const price = 1034 // use cents to store prices so you can work in whole numbers

// Powers
const age1 = (10 ** 4);
const age2 = (1000 ** 200) // Large numbers that can't be calculated will return as Infinity

console.log(age2);



/*
 * OBJECTS
 *
 */
const person = {
  first: 'Josie',
  last: 'Wallace',
  age: 6
};



/*
 * UNDEFINED AND NULL
 *
 */
let dog;
console.log(dog); // variable has been created but is has no value so it is undefined
dog = 'Josie';

let somethingUndefined;
const somethingNull = null;

// Cher has no last name, which is undefined
const cher = {
  first: 'cher'
};

// Teller changed his first name to his last name, it did have a value and then was changed to nothing (null)
const teller = {
  first: 'Raymond',
  last: 'Teller'
}

teller.first = 'Teller';
teller.last = null;



/*
 * BOOLEANS
 *
 */
const userAge1 = 18;
const ageVerification = userAge1 > 21;
console.log(`Age verfication pass ${ageVerification}`);

let userAge2 = 18;

// TRIPLE EQUALS - checks for VALUE and TYPE
/*
10 === 10 (true)
"10" === 10 (false)

// DOUBLE EQUALS - checks just VALUE
"10" == 10 (true)
*/