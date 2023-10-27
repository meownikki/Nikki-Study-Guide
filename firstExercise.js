// Writing local JS Lesson
// This is just a js file locally
// JS was traditionally used for front-end development in the browser.
// Node.js gives us the ability to run JS on the server.

// In order to run your code with Node.js you need to run the following command in your terminal:
// node <pathtoyour/filename.js>
// console.log("Hello World!");

// Function Definition:
// Defines the functions
// Can have parameters: variables coming from outside the function
function nameOfFunction(param1, para2) {
  param1 = null;
  if (param1) {
    return 1;
  } else {
    console.log("error");
  }
}

function addTwo(param1, param2) {
  // param1 = 15;
  // param2 = 20;
  let sum = param1 + param2;
  return sum;
}

// Function Call is actually using the function
// nameOfFunction(1, 2);
// console.log(nameOfFunction(true));


// You might have heard parameters and arguments
// Parameter is the placeholder in the function definition
// Argument is the actual value when calling the function
console.log(addTwo(2, 7))



// Path: secondExercise.js
