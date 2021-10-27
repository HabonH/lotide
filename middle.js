
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



/*
 The middle function should return an array with only the middle element(s) of the provided array. This means
that the length of the returned elements could vary.
*/

// Implement middle which will take in an array
const middle = function(arr) {
  const odd = Math.floor(((arr.length - 1) / 2)); // Allows us to change odd to even by removing last index and dividing by two
  let middleNum = [];
  // Edge case: For arrays with one or two elements, there is no middle. Return an empty array.
  if (arr.length <= 2) {
    middleNum;
  /* Edge case: For arrays with odd number of elements, an array containing a single middle element should be
  returned. */
  } else if (arr.length % 2 === 1) { // if there's a number remaining, we'll use Math.floor in const odd to round it nearest number
    middleNum.push(arr[odd]);
    /* Edge case: For arrays with an even number of elements, an array containing the two elements in the middle
should be returned */
  } else {
    middleNum.push(arr[odd]); // returns one even number
    middleNum.push(arr[odd + 1]); // + 1 goes up and index to return another one. So both middle numbers

  }
  console.log(middleNum);
  return middleNum;
};



// Test code

assertArraysEqual(middle([1, 2, 3, 4, 5, 6, 7]), [4]);
