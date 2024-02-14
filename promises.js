// Promises are a way to handle asynchronous operations in JavaScript.
// They are easy to manage when dealing with multiple asynchronous operations where callbacks can create callback hell leading to unmanageable code.
// The Promise object represents the eventual completion (or failure) of an asynchronous operation and its resulting value.

// A Promise is in one of these states:
// pending: initial state, neither fulfilled nor rejected.
// fulfilled: meaning that the operation completed successfully.
// rejected: meaning that the operation failed.

// Example of a promise:
const myPromise = new Promise((resolve, reject) => {
  // This is an asynchronous operation
  setTimeout(() => { 
    if (Math.random() >= 0.5) {
      resolve('Success!');
    } else {
      reject('Failure!');
    }
  }
    , 1000);
}
);

// The Promise constructor takes a function as an argument, which takes two parameters, resolve and reject.
// These are methods used to determine the outcome of the promise.
// The resolve method is called when the promise is fulfilled.
// The reject method is called when the promise is rejected.
// The setTimeout function is used to simulate an asynchronous operation.
// If the random number generated is greater than or equal to 0.5, the promise is fulfilled with the value 'Success!'.
// If the random number generated is less than 0.5, the promise is rejected with the value 'Failure!'.

// The then method is used to handle the fulfilled state of the promise.
function getData() {
    // The readFile function returns a promise
    return readFilePromise('data.txt', 'utf8')
      .then(data => {
        return data; // Return data for the next .then()
      })
      .catch(err => {
        throw err; // Handle any errors
      });
}

// Promises provide a cleaner, more manageable approach to asynchronous coding.
// They avoid the nesting issue and make error handling more straightforward with then and catch methods.
