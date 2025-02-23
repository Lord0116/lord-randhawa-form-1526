// DECLARING VARIABLES
// Declare variables that will
// store references for
// <input type="button" id="submit-button">,
// <input type="text" id="fullname">,
// <input type="text" id="email">
// <textarea id="message"></textarea>

let fullname = document.getElementById("fname");
let email = document.getElementById("email");
let mssg = document.getElementById("mssg");
let submit = document.getElementById("submit");

// Declare variable that will
// store regular expression for email

let validemail = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;

// READY TO START CODING
// Start with your function here
// (come up with the meaningful name).

submit.onclick = function () {
  // START WITH INITIALLY 2 "EMPTY BUCKETS" (DATA/ERRORS)
  // Declare object that will store the form-data
  // Declare array that will store the errors

  let data = {};
  let errors = [];

  // Check if fullname is not empty.
  // If so:

  if (fullname.value) {
    data.fullname = fullname.value;
  }
  // Pass the collected value
  // to your object "data".
  // Otherwise:
  else {
    errors.push("Full Name is missing");
  }
  // Create a corresponding error-message
  // and add it to your array "errors".
  // End your conditional here.

  // Check if email is not empty.
  if (email.value) {
    // Pass the collected value
    // to your object "data".
    // Check if email is valid.
    // If so:

    if (validemail.test(email.value)) {
      data.email = email.value;
    }
    // Otherwise:
    // Create a corresponding error-message
    // and add it to your array "errors".
    else {
      errors.push("Enter a valid email");
    }
    // End your nested conditional here.
  }
  // Otherwise:
  // Create a corresponding error-message
  // and add it to your array "errors"
  else {
    errors.push("Email is missing");
  }

  // End your outer conditional here.

  // Check if message is not empty.
  if (mssg.value) {
    // If so:
    // Pass the collected value
    // to your object "data".
    data.message = mssg.value;
  }

  // Otherwise:
  // Create a corresponding error-message
  else {
    errors.push("Message is missing");
  }
  // and add it to your array "errors"
  // End your conditional here.

  // Check if there is anything in array errors
  // If so:
  if (errors.length > 0) {
    // Print it in JavaScript console.
    console.log(errors);
  }
  // Otherwise:
  // Print the data in JavaScript console.
  else {
    console.log(data);
    // Clear text-fields
    fullname.value = "";
    email.value = "";
    mssg.value = "";
    errors = [];
  }

  // End your conditional here.

  // Close your function here
};
// Register your form to "click" event.
