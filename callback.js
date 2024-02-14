// callback function is a function that is passed as an argument to another function
// and is executed after some operation has been completed. This is a common pattern in JavaScript

// Example of a callback function:
function greeting(name) {
  alert('Hello ' + name);
}

function processUserInput(callback) {
  var name = prompt('Please enter your name.');
  callback(name);
}

processUserInput(greeting);
// In this example, the processUserInput function takes a callback, which is the greeting function.
// The processUserInput function will call the callback at the end of the user input.
// The greeting function is defined and passed as an argument to the processUserInput function.
// The processUserInput function will then execute the callback, which will cause an alert dialog to appear.
// The prompt dialog will appear when the processUserInput function is called, asking for the user's name.
// When the user enters their name, the greeting callback will be called, displaying an alert dialog with the user's name.

// Example of a callback function that takes an error as the first argument:
function getData(callback) {
    // An asynchronous operation like reading a file
    readFile('data.txt', 'utf8', (err, data) => {
      if (err) {
        return callback(err); // Pass the error to the callback
      }
      callback(null, data); // Pass the data to the callback
    });
}

// Callbacks were the original method for handling asynchronous operations in JavaScript.
// However, they can lead to deeply nested code (often called “callback hell”) and make error handling difficult.
