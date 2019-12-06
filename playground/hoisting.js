/*
 * HOISTING
 *
 * Allows you to access functions and variables before they have been created
 * The example below works because of hoisting
 * When JavaScript compiles functions and variables are hoisted to the top of the script
 *
 * Variable declarations are hoisted to the top, but not the values - this is confusing
 */

/* eslint-disable */

// Hoisting Functions
sayHello();

function sayHello() {
  console.log('Ahoy');
  console.log(add(10, 42));
}

function add(a, b) {
  return a + b;
}

/*
 * Hoisting Variables
 *
 * The example below will be undefined, the variable age will be hoisted to the top - NOT the value
 */
let age;
console.log(`Person age is ${age}`);

/*
 * Organization! A good use for hoisting
 *
 */

 // At the top of the file list the functions that are used
 checkLogin();
 checkPermissions();
 checkModules();

 function checkLogin() {
   console.log('Checking log in');
}

function checkPermissions() {
  console.log('Checking permissions');
}

function checkModules() {
  console.log('Check what modiles are used');
}