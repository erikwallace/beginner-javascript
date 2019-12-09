/*
 * The DOM
 *
 * window - has browser information like viewport width
 *
 * document - has info about everything between html tags
 *
 * navigator - has info about the device: battery level, gps coordinates
 *
 * Use querySelector for classes and elements - it replaces getElementsByClassName...
 * Use getElementById for #
 */

const p = document.querySelector('p');
const imgs = document.querySelectorAll('.item img');
const item2 = document.querySelector('.item2');
const item2Image = item2.querySelector('img'); // look inside of .item2
const heading = document.querySelector('h2');

console.log(heading.textContent);
console.log(heading.innerText);

// set the textContent property of heading
// heading.textContent = 'Josie is adorable';
// console.log(heading.textContent);
console.log(heading.innerHTML);
console.log(heading.outerHTML);

// Append pizza emoji
const pizzaList = document.querySelector('.pizza');
// pizzaList.textContent = `${pizzaList.textContent} 🍕`;

// This is faster than textContent
pizzaList.insertAdjacentText('beforeend', '🍕');

const pic = document.querySelector('.nice');
pic.classList.add('open');
pic.classList.remove('cool');
pic.classList.add('round');
console.log(pic.classList);

// Add the class .round on click
// classList gives you some nice utilities over addClass
function toggleRound() {
  pic.classList.toggle('round');
}

// Listen for a click then fire the function
pic.addEventListener('click', toggleRound);

/*
 * GET and SET attributes (don't do this)
 */
// SET image attributes
// Add alt text to an image
pic.setAttribute('alt', 'Adorable puppy');
pic.setAttribute('width', 500);

// GET pic attribute values
console.log(pic.getAttribute('alt'));

// Get the width of the image after it loads
// get works with naturalWidth, you can't set it though
pic.addEventListener('load', function() {
  console.log(pic.naturalWidth); // width of actual pixels - run after image downloads
});

/*
 * GET and SET data-attributes (reccomended)
 */
const custom = document.querySelector('.custom');
console.log(custom.dataset);

custom.addEventListener('click', function() {
  alert(`Welcome ${custom.dataset.name} ${custom.dataset.last}`);
});
