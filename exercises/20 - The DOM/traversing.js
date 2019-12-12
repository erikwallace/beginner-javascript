// console.log('it works');
const list = document.querySelector('.li3');
console.log(list);

/*
 * Nodes vs. Elements
 *
 * Node - any object in the DOM: document, document.body, <html>, <p>, <li> tags...
 *
 * Element - a specific type of node that can have a class or id
 */

// Get all of the child elements
console.log(`children are ${list.children}`);

// Looks at the fitst and last children
console.log(`firstElementChild is ${list.firstElementChild}`);
console.log(`lastElementChild is ${list.lastElementChild}`);

// Looks at the element before (previous) and after (next) in the markup
console.log(`previousElementSibling is ${list.previousElementSibling}`);
console.log(`nextElementSibling is ${list.nextElementSibling}`);

// Looks at the parent
// parentElement can be chained to keep going up the DOM
// ex. - variable.parentElement.parentElement.parentElement
console.log(`parentElement is ${list.parentElement}`);

/*
 * REMOVING
 * Removed elements can still be added again after removal, and can show up in console.log
 */
const welcomeMessage = document.createElement('p');
welcomeMessage.textContent = 'Welcome and hello.';
document.body.appendChild(welcomeMessage);
welcomeMessage.remove();
