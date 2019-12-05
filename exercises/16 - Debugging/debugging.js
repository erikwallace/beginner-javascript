const people = [
  { name: 'Wes', cool: true, country: 'Canada' },
  { name: 'Scott', cool: true, country: 'Merica' },
  { name: 'Snickers', cool: false, country: 'Dog Country' },
];

/*
 * Breakpoints
 *
 * Pauses devtools, lets you step through and look at different pieces of data
 */
people.forEach((person, index) => {
  //   debugger;
  console.log(person.name);
});

/*
 * Console Methods
 */

// Group console logs in a collapsed accordion
// people.forEach((person, index) => {
//   console.groupCollapsed(`${person.name}`);
//   console.log(`country is ${person.country}`);
//   console.log(`cool is ${person.cool}`);
//   console.log('DONE!');
//   console.groupEnd(`${person.name}`);
// });

/*
 * Grabbing Elements
 *
 * In devtools > select an element > console tab
 * $0 - get all of the markup for that element
 * $0.value - return the value of an input you are inspecting
 *
 * $0 = the last thing that was clicked
 * $1 = the 2nd last thing clicked...
 * $('p') = find the first paragraph in the code
 * $$('p') = find all paragraphs in the code
 */

// Scope

/*
 * Network Requests
 *
 * Tells you what files are used css, html, js
 * Tells you how long requests take (Network > Timing)
 */

/*
 * Break On Attribute
 *
 * Throw in breakpoints where you want to step through the code and slow it down
 * Figure out what happens when - on click, on XHR or fetch for API calls
 */

function doctorize(name) {
  //   console.count(`running Doctorize for ${name}`);
  return `Dr. ${name}`;
}

// Callstack, Stack Trace
function greet(name) {
  doesntExist(); // this will error, it doesn't exist
  return `Hello ${name}`;
}

// Calls the function doctorize and greet
function go() {
  const name = doctorize(greet('Wes'));
  console.log(name);
}

// Calls the function go
function shoelace() {
  console.log('Starting the app!');
  go();
}

// shoelace();

const button = document.querySelector('.bigger');
button.addEventListener('click', function(e) {
  const newFontSize =
    parseFloat(getComputedStyle(e.currentTarget).fontSize) + 1;
  e.currentTarget.style.fontSize = `${newFontSize}px`;
});

// A Dad joke fetch
async function fetchDadJoke() {
  const res = await fetch('https://icanhazdadjoke.com/', {
    headers: {
      Accept: 'text/plain',
    },
  });
  const joke = await res.text();
  console.log(joke);
  return joke;
}
