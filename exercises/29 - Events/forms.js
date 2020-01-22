// console.log('it works');

// On form submission show a prompt

const wes = document.querySelector('.wes');

wes.addEventListener('click', function(event) {
  const shouldPageChange = confirm(
    'This website might be malicious. Do you want to proceed?'
  );
  // If cancel is selected from the prompt don't follow the link
  if (!shouldPageChange) {
    event.preventDefault();
  }
});

const signupForm = document.querySelector('[name="signup"]');

signupForm.addEventListener('submit', function(event) {
  const name = event.currentTarget.name.value;
  if (name.includes('Chad')) {
    alert('No Chads are allowed');
    event.preventDefault();
  }
});

function logEvent(event) {
  console.log(event.type);
  console.log(event.currentTarget.value);
}

// Other event types besides click
signupForm.name.addEventListener('keyup', logEvent);
signupForm.name.addEventListener('keydown', logEvent);
signupForm.name.addEventListener('focus', logEvent);
signupForm.name.addEventListener('blur', logEvent);

const photo = document.querySelector('.photo');

// Handle clicks and tabindex + enter
function handlePhotoClick(event) {
  if (event.type === 'click' || event.key === 'Enter') {
    console.log('You selected the photo');
  }
}

photo.addEventListener('click', handlePhotoClick);
photo.addEventListener('keyup', handlePhotoClick);
