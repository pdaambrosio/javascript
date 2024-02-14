// defining an async function:
async function myAsyncFunction() {
    // Function body here
}

// defining an async function expression:
const myAsyncFunction = async function() {
    // Function body here
};

// defining an async arrow function:
const myAsyncFunction = async () => {
    // Function body here
};

// Example of an async function that fetches data from an API:
async function fetchData() {
    const response = await fetch('https://api.example.com/data');
    const data = await response.json();
    return data;
}

// Example of an async function that fetches data from an API with error handling:
async function fetchData() {
    try {
      const response = await fetch('https://api.example.com/data');
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching data:', error);
    }
}

// Example of an async function that fetches data from an API with error handling and HTTP error checking:
async function getDataFromApi(url) {
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      console.log(data);
      return data;
    } catch (error) {
      console.error('Could not fetch data from API:', error);
    }
}

// Call the function:
getDataFromApi('https://api.example.com/data');

// Example of an async function that reads a file:
const fs = require('fs').promises; // Node.js file system module with promises

async function readFile(filePath) {
  try {
    const data = await fs.readFile(filePath, 'utf8');
    console.log(data);
    return data;
  } catch (error) {
    console.error('Error reading file:', error);
  }
}

// Call the function:
readFile('path/to/your/file.txt')

// Example of an async function that executes a database query:
async function queryDatabase(query) {
    try {
      const db = require('your-db-client'); // replace with your DB client library
      await db.connect();
      const result = await db.query(query);
      console.log(result);
      return result;
    } catch (error) {
      console.error('Error querying database:', error);
    } finally {
      db.end(); // make sure to close the database connection
    }
}

// Call the function:
queryDatabase('SELECT * FROM your_table');

// Example of an async function that fetches data from multiple URLs:
async function fetchMultipleUrls(urls) {
    try {
      const requests = urls.map(url => fetch(url).then(res => res.json()));
      const results = await Promise.all(requests);
      return results; // An array of results from each URL
    } catch (error) {
      // If any request fails, the catch block is executed
      console.error('An error occurred while fetching the URLs:', error);
    }
}

// Call the function:
fetchMultipleUrls([
'https://api.example.com/data1',
'https://api.example.com/data2',
'https://api.example.com/data3'
]);

// Example of an async function that processes an array of items:
async function processArray(array) {
    for (let item of array) {
      await processItem(item); // Assume processItem returns a promise
    }
}

// Example of an async function that processes an array of items in parallel:
// This is useful when the order of processing is not important
async function processArray(array) {
    await Promise.all(array.map(item => processItem(item)));
}
