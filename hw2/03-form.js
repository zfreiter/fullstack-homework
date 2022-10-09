/** Exercise 03 - Form **/

// Add your code here
const form = document.querySelector('form');

let nameDiv = document.createElement('div');
nameDiv.className = 'form-label row mx-auto';
form.append(nameDiv);

// Name section
let nameLable = document.createElement('label');
nameLable.setAttribute('for', 'name');
nameLable.textContent = 'Name *';
nameLable.className = 'form-label ps-0 pt-2 font-weight-bold';
nameLable.style.fontWeight = 'bold';
nameDiv.append(nameLable);

let nameInput = document.createElement('input');
nameInput.setAttribute('type', 'text');
nameInput.id = 'name';
nameInput.className = 'form-control';
nameInput.name = 'name';
nameDiv.append(nameInput);

// Email section
let emailLable = document.createElement('label');
emailLable.setAttribute('for', 'email');
emailLable.textContent = 'Email *';
emailLable.className = 'form-label ps-0 pt-2';
emailLable.style.fontWeight = 'bold';
nameDiv.append(emailLable);

let emailInput = document.createElement('input');
emailInput.setAttribute('type', 'text');
emailInput.id = 'email';
emailInput.className = 'form-control';
emailInput.name = 'email';
nameDiv.append(emailInput);

// Input box section
let textLable = document.createElement('label');
textLable.setAttribute('for', 'textarea');
textLable.textContent = 'Submit your message:';
textLable.className = 'form-label ps-0 pt-2';
textLable.style.fontWeight = 'bold';
nameDiv.append(textLable);

let textAreaInput = document.createElement('TEXTAREA');
textAreaInput.setAttribute('type', 'text');
textAreaInput.id = 'textarea';
textAreaInput.className = 'form-control p-0';
textAreaInput.name = 'textarea';
textAreaInput.rows = '3';
nameDiv.append(textAreaInput);

// checkbox section
let checkBox = document.createElement('input');
checkBox.setAttribute('type', 'checkbox');
checkBox.className = 'form-check-input pt-2';
checkBox.id = 'checkBox';
checkBox.name = 'checkBox';
form.append(checkBox);

let checkBoxLabel = document.createElement('label');
checkBoxLabel.setAttribute('for', 'checkBox');
checkBoxLabel.textContent = 'Sign up for the newsletter';
checkBoxLabel.className = 'form-check-label ms-2 ';
checkBoxLabel.style.fontWeight = 'bold';
form.append(checkBoxLabel);

// Button section
let buttonDiv = document.createElement('div');
buttonDiv.className = 'col-xs-4 pt-4 pb-4';
form.append(buttonDiv);

let submitButton = document.createElement('button');
submitButton.setAttribute('type', 'submit');
submitButton.className = 'btn btn-primary w-50 border rounded';
submitButton.textContent = 'Submit';
buttonDiv.append(submitButton);

let resetButton = document.createElement('button');
resetButton.setAttribute('type', 'reset');
resetButton.className = 'btn btn-secondary w-50 border rounded';
resetButton.textContent = 'Reset';
buttonDiv.append(resetButton);

form.addEventListener('submit', (event) => {
  event.preventDefault();
  new FormData(form);
  //   const data = new FormData(form);
  //   console.log([...data.values()]);
});
form.addEventListener('formdata', (event) => {
  // event.formData grabs the object
  const data = event.formData;

  // get the data
  const entries = [...data.entries()];
  console.log(entries);

  const values = [...data.values()];
  console.log(values);
});
