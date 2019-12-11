// console.log("It's Alive!");

// Add basic HTML to the page
item.innerHTML = `
    <div class="greeting">
        <h1>Hello and Good Morning</h2>
    </div>
`;
// console.log(item.innerHTML);

const item = document.querySelector('.item');

const width = 800;
const src = `https://picsum.photos/${width}`;
const desc = 'Adorable boxer puppy';
const title = 'Cute Dog';
const myHTML = `
    <div class="wrapper">
        <h2>${title}</h2>
        <img src="${src}" alt="${desc}" />
    </div>
`;

// turn a string into a DOM element we can access easily
const myFragment = document.createRange().createContextualFragment(myHTML);

console.log(myFragment.querySelector('img'));

document.body.appendChild(myFragment);

/*
 * XSS - cross site scripting
 * There are security issues when you collect data
 * Scrub HTML for security vulnerabilities - later module
 */
