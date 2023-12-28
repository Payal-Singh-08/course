const form = document.getElementById('myForm');
const output = document.getElementById('output');

form.addEventListener('submit', function(event) {
  event.preventDefault();
  const name = form.elements['name'].value;
  const email = form.elements['email'].value;
  const message = form.elements['message'].value;

  if (name && email && message) {
    output.textContent = `Name: ${name}, Email: ${email}, Message: ${message}`;
    form.reset();
  } else {
    output.textContent = 'Please fill in all fields.';
  }
});
