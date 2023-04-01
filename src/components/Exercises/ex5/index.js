/**
 *Here is a small form implemented with plain JavaScript and DOM.
 Play with it to understand its behavior:
 This form switches between two modes:
  in the editing mode, you see the inputs, 
  and in the viewing mode, you only see the result. 
  The button label changes between “Edit” and “Save” depending on the mode you’re in. When you change the inputs, the welcome message at the bottom updates in real time.

Your task is to reimplement it in React. 
For your convenience, 
the markup was already converted to JSX, 
but you’ll need to make it show and hide the inputs like the original does.

Make sure that it updates the text at the bottom, too!
 */
function handleFormSubmit(e) {
  e.preventDefault();
  if (editButton.textContent === "Edit Profile") {
    editButton.textContent = "Save Profile";
    hide(firstNameText);
    hide(lastNameText);
    show(firstNameInput);
    show(lastNameInput);
  } else {
    editButton.textContent = "Edit Profile";
    hide(firstNameInput);
    hide(lastNameInput);
    show(firstNameText);
    show(lastNameText);
  }
}

function handleFirstNameChange() {
  firstNameText.textContent = firstNameInput.value;
  helloText.textContent =
    "Hello " + firstNameInput.value + " " + lastNameInput.value + "!";
}

function handleLastNameChange() {
  lastNameText.textContent = lastNameInput.value;
  helloText.textContent =
    "Hello " + firstNameInput.value + " " + lastNameInput.value + "!";
}

function hide(el) {
  el.style.display = "none";
}

function show(el) {
  el.style.display = "";
}

let form = document.getElementById("form");
let editButton = document.getElementById("editButton");
let firstNameInput = document.getElementById("firstNameInput");
let firstNameText = document.getElementById("firstNameText");
let lastNameInput = document.getElementById("lastNameInput");
let lastNameText = document.getElementById("lastNameText");
let helloText = document.getElementById("helloText");
form.onsubmit = handleFormSubmit;
firstNameInput.oninput = handleFirstNameChange;
lastNameInput.oninput = handleLastNameChange;

/**
 * export default function EditProfile() {
  return (
    <form>
      <label>
        First name:{' '}
        <b>Jane</b>
        <input />
      </label>
      <label>
        Last name:{' '}
        <b>Jacobs</b>
        <input />
      </label>
      <button type="submit">
        Edit Profile
      </button>
      <p><i>Hello, Jane Jacobs!</i></p>
    </form>
  );
}

 */
