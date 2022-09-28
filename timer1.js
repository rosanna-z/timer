// process.stdout.write('\x07');
// process.argv
/* Implement an alarm clock / timer which will beep 
after a specified amount of time has passed. The user can specify 
an unlimited number of alarms using command line arguments
*/


// Removes the first two elements
const newArray = process.argv.slice(2);

// Filters out the negatives & words
const newArray1 = newArray.filter(number => number > 0 && number !== NaN);

// Sorts the array from lowest to highest
let sortedArray = [];
sortedArray = newArray1.sort((a, b) => a - b);

//Multiplies each number
let newSeconds = []
newSeconds = sortedArray.map(x => x * 1000,);

//Beeps with timer
  for (let timer of newSeconds) {
    setTimeout(() => {
      process.stdout.write('\x07');
    }, timer);
  }
