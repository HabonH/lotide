// Create a function called eqArrays that takes in two arrays as parameters and compares them

const eqArrays = function(array1, array2) {
  if(array1.length !== array2.length){
    return false
  }
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      return false;
    } 
  }
  return true;
};
  
/* Implement assertArraysEqual which will take in two arrays and console.log an appropriate message
to the console */
const assertArraysEqual = function(actual, expected) {
  if (eqArrays(actual, expected)) {
    console.log(`✅ Assertion Passed: ${actual}  === ${expected}`);
  } else {
    console.log(`🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

// Our map function will take in two arguments:
    // An array to map
    // A callback function
  // The map function will return a new array based on the results of the callback function.

  const words = ["ground", "control", "to", "major", "tom"];

  const map = (array, callback) => {
    const results = [];
    
    for (let item of array){
    results.push(callback(item));
    }
    
    return results;
  };

  const results1 = map(words, word => word[0]);
  // console.log(results1);

// console.log(words, results1);
assertArraysEqual(words, results1);