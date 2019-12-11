const myParagraph = document.createElement('p');
myParagraph.textContent = 'I am a descriptive paragraph';
myParagraph.classList.add('fancy');
// console.log(myParagraph);

const myImage = document.createElement('img');
myImage.src = 'http://picsum.photos/500';
myImage.alt = 'Stunning photo';

const myDiv = document.createElement('div');
myDiv.classList.add('wrapper');
// console.log(myDiv);

// appendChild first
myDiv.appendChild(myParagraph);
myDiv.appendChild(myImage);

// Add to the page
document.body.appendChild(myDiv);

// Note: Use appendChild over append due to poor support

// Add a heading above myDiv with insertAdjacentElement
const heading = document.createElement('h2');
heading.textContent = 'Award Winning Photographs';

myDiv.insertAdjacentElement('afterbegin', heading);

// Create a list with 5 items
const myList = document.createElement('ul');
myList.classList.add('grocery-list');

// Add the third item to the ul
const list3 = document.createElement('li');
list3.textContent = 'Three';
myList.appendChild(list3);

// Add the ul to the page
document.body.insertAdjacentElement('afterbegin', myList);

// Add the rest of the list items 1, 2, 4, 5
const li5 = document.createElement('li');
li5.textContent = 'Five';
myList.append(li5);

const li1 = li5.cloneNode(true);
li1.textContent = 'One';
myList.insertAdjacentElement('afterbegin', li1);

const li4 = document.createElement('li');
li4.textContent = 'Four';
li5.insertAdjacentElement('beforebegin', li4);

const li2 = document.createElement('li');
li2.textContent = 'Two';
li1.insertAdjacentElement('afterend', li2);

myList.insertAdjacentElement('afterbegin', li1);
li2.insertAdjacentElement('afterbegin', li1);
console.log(myList.outerHTML);
