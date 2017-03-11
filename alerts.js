// Is the JavaScript file sourced? Check in the browser console by
// right clicking and selecting 'Inspect'. If the script is properly
// sourced you will see the log message: 'Script sourced!'.
console.log('Script sourced!');
var animal= prompt('What animal am I thinking of?');
// * Step One * - Create a variable from user input and conditional statement
  // var animal =promt ('What animal am i thinking of?')
// Once you have the animal variable. Write your conditional statement.
// Use these exact strings: 'Try again.' and 'How did you know?!'.
if (animal === 'cat')
  console.log('How did you know that!!');
 else
  console.log('Try agin');

// * Step Two * - Refactor into a function
// Call the function by passing the animal variable into it

function animalGuess(animalName){
    // if statement goes in here.
  if (animalName === 'cat'){
  console.log('How did you know that!!');
} else{
  console.log('Try agin');}

}
animalGuess(animal);
//The answer in the console will show twice because it's repeated as a function
// What will this log?
// console.log(animalName);
//the answer is the prompt or var animal
