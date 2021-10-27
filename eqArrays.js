

const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅ Assertion Passed: ${actual}  === ${expected}`);
  } else if (actual !== expected) {
    console.log(`🛑 Assertion Failed: ${actual} !== ${expected}`);
  }

};

// Create a function called eqArrays that takes in two arrays as parameters
const eqArrays = function(array1, array2) {
  
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
  


eqArrays([1, 2, 3], [1, 2, 3]); // => true
eqArrays([1, 2, 3], [3, 2, 1]); // => false

eqArrays(["1", "2", "3"], ["1", "2", "3"]); // => true
eqArrays(["1", "2", "3"], ["1", "2", 3]); // => false
assertEqual(eqArrays([1, 2, 3], [1, 5, 3]), true);