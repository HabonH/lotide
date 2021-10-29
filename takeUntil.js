// Create a function called eqArrays that takes in two arrays as parameters
const eqArrays = function(array1, array2) {
  if(array1.length !== array2.length){
    return false
  }
  // Create a loop to go over the arrays
  for (let i = 0; i < array1.length; i++) {
    // Compared elements in both arrays. If they match, result will be true
    if (array1[i] !== array2[i]) {
      return false;
      // Otherwise, result will be false and we'll return false right away
    } 
  }
  return true;
};
// Returning the last result test ran
  
  
/* Implement assertArraysEqual which will take in two arrays and console.log an appropriate message
to the console */
const assertArraysEqual = function(actual, expected) {
  // if the arrays executed in eqArrays function come back as true, then it would use the Passed console.log
  if (eqArrays(actual, expected)) {
    console.log(`✅ Assertion Passed: ${actual}  === ${expected}`);
    // Otherwise, it will say fail
  } else {
    console.log(`🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

// It will take in two parameters as well:
  // The array to work with
  // The callback (which Lodash calls "predicate") 
      // The callback should only be provided one value: The item in the array.
        // until the callback provided returns a truthy value.

const takeUntil = function(array, callback) {
  let numbers = [];  
  for(let element of array){
      if(callback(element) === false){
        numbers.push(element);
      }
    }
    return numbers;
  }

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(results1);

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log(results2);

assertArraysEqual(results1, ([1, 2, 5, 7, 2, 2, 4, 5]));
assertArraysEqual(results2, (["I've", 'been', 'to', 'Hollywood', "I've", 'been', 'to', 'Redwood']));
