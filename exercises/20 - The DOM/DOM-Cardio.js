// Make a div
const div = document.createElement('div');

// add a class of wrapper to it
div.classList.add('wrapper');

// put it into the body
document.body.appendChild(div);

// make an unordered list
const list = document.createElement('ul');
list.classList.add('list');

// add three list items with the words "one, two three" in them
const item1 = document.createElement('li');
list.insertAdjacentElement('beforeEnd', item1);
item1.textContent = 'one';

const item2 = document.createElement('li');
list.insertAdjacentElement('beforeEnd', item2);
item2.textContent = 'two';

const item3 = document.createElement('li');
list.insertAdjacentElement('beforeEnd', item3);
item3.textContent = 'three';

// put that list into the above wrapper
div.insertAdjacentElement('beforeEnd', list);

// create an image
const image = document.createElement('img');

// set the source to an image
image.src = 'http://picsum.photos/500';

// set the width to 250
image.width = 250;

// add a class of cute
image.classList.add('cute');

// add an alt of Cute Puppy
image.alt = 'Stunning photo';

// Append that image to the wrapper
div.insertAdjacentElement('beforeEnd', image);

// with HTML string, make a div, with two paragraphs inside of it
const textWrapper = document.createElement('div');

const p1 = document.createElement('p');
textWrapper.insertAdjacentElement('beforeEnd', p1);
p1.textContent =
  'Spring 1936. In the thick jungle of the South American continent, a renowned archeologist and expert on the occult is studying fragments of a map, when one of his exploration party pulls a gun. The archeologist pulls out a bullwhip and with such disarms the turncoat, sending him running - thus does Dr. Henry "Indiana" Jones stay alive.';

const p2 = document.createElement('p');
textWrapper.insertAdjacentElement('beforeEnd', p2);
p2.textContent =
  "He and a guide enter a dank and oppressively vast cave that contains several traps created by the ancient race which hid inside a famous handheld statue; Indy barely escapes such traps but is cornered by native tribesmen served by Belloq, an old enemy who arrogantly makes off with the statue, while Indy must flee for his life and escape on a friend's seaplane. Back in the US two agents from US Army intelligence tell him of Nazi German activities in archeology, including a gigantic excavation site in Egypt - a site that an intercepted cable indicates to Indy is the location of the Ark of the Covenant, the powerful chest bearing the Ten Commandments, that the Nazis can use to obliterate any enemy. Indy must recruit a former girlfriend (the daughter of his old professor) and an old chum in Cairo to infiltrate the Nazi site and make off with the Ark, but along the way Indy gets involved in a series of fights, chases, and traps, before the Nazis learn the full power of the Ark.";

// put this div before the unordered list from above
list.insertAdjacentElement('beforeBegin', textWrapper);

// add a class to the second paragraph called warning
textWrapper.lastElementChild.classList.add('warning');

// remove the first paragraph
textWrapper.firstElementChild.remove();

// create a function called generatePlayerCard that takes in three arguments: name, age, and height

// have that function return html that looks like this:
// <div class="playerCard">
//   <h2>NAME — AGE</h2>
//   <p>They are HEIGHT and AGE years old. In Dog years this person would be AGEINDOGYEARS. That would be a tall dog!</p>
// </div>
function generatePlayerCard(name, age, height) {
  const cardsHTML = `
        <div class="playerCard">
            <h2>${name} — ${age}</h2>
            <p>Their height is ${height} and ${age} years old. In Dog years this person would be ${age *
    7}. That would be a tall dog!</p>
            <button class="delete" type="button">&times; Delete</button>
        </div>
    `;
  return cardsHTML;
}

// TODO convert cm to in new function

// make a new div with a class of cards
const cards = document.createElement('div');
cards.classList.add('cards');

let cardsHTML = generatePlayerCard('Josie', 6, 36);
cardsHTML += generatePlayerCard('Eddie', 10, 48);
cardsHTML += generatePlayerCard('Gracie', 9, 52);
cardsHTML += generatePlayerCard('Betti', 8, 75);

// append those cards to the div
cards.innerHTML = cardsHTML;

// put the div into the DOM just before the wrapper element
div.insertAdjacentElement('beforebegin', cards);

// Bonus, put a delete Button on each card so when you click it, the whole card is removed

// select all the buttons!
const buttons = document.querySelectorAll('.delete');

// make out delete function
function deleteCard() {
  const selectedButton = event.currentTarget;
  selectedButton.closest('.playerCard').remove();
  console.log(event.currentTarget);
}
// loop over them and attach a listener
buttons.forEach(button => button.addEventListener('click', deleteCard));
