const scriptURL = "https://script.google.com/macros/s/AKfycbzOTM-AB2jQ2s2Ls9vA9QOzbfrTyfsA4-8PDX1-6n4tQMGmFFwHkSf4WtEI2qzLmA5U9g/exec";

const form = document.forms['contact-form']

form.addEventListener('submit', e => {
  
  e.preventDefault()
  
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
  .then(response => alert("Thank you! Form is submitted" ))
  .then(() => { window.location.reload(); })
  .catch(error => console.error('Error!', error.message))
});
