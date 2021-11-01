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
  return middleNum;
};

module.exports = middle;

// Test code
