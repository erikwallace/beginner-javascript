const butts = document.querySelector('.butts');
const coolButton = document.querySelector('.cool');

function handleClick() {
  console.log('🐛 IT GOT CLICKED!!!');
}

// Click events
butts.addEventListener('click', handleClick);
coolButton.addEventListener('click', handleClick);

/*
 * Anonymous functions cannot be removed
 * The function must have a name to reference
 * The code below unbinds an event from a function
 */
butts.removeEventListener('click', handleClick);

// Listen to events on multiple items
const buyButtons = document.querySelectorAll('button.buy');

// function buyItem() {
//   console.log('Buying item');
// }

// Use forEach to loop over all buyButton instances
// The parameter "buyButton" can be anything, it's a placeholder
// function handleBuyButtonClick(buyButton) {
//   console.log('Binding the buy button');
//   buyButton.addEventListener('click', buyItem);
// }

/*
 * target - what was clicked
 * dataset - data attribute
 * event.target - the thing that actually was clicked, could be HTML tag inside of a button like span or strong
 * event.currentTarget - the thing that fires the event listener
 */
function handleBuyButtonClick(event) {
  // console.log('You are buying it!');
  // console.log(parseFloat(event.target.dataset.price));
  console.log(event.currentTarget);
  // stop this event from bubbling up
  event.stopPropogation();
}

// Use forEach to loop over all buyButton instances
buyButtons.forEach(function(buyButton) {
  buyButton.addEventListener('click', handleBuyButtonClick);
});

window.addEventListener('click', function() {
  console.log('You clicked somewhere in the window');
});
