// Create a function called eqArrays that takes in two arrays as parameters
const eqArrays = function(array1, array2) {
  if (array1.length !== array2.length) {
    return false;
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




const letterPositions = function(sentence) {
  const results = {};
  // logic to update results here
  // Loop through each letter
  for (let i = 0; i < sentence.length; i++) {
    let index = sentence[i]; {
      if (!results[index]) {
  
        results[index] = [i];
      }
  
    }

  }
  
  console.log(results);
  return results;
};

assertArraysEqual(letterPositions("hello").e, [1]);
