// Create a function called eqArrays that takes in two arrays as parameters
const eqArrays = function(array1, array2) {
  if (array1.length !== array2.length) {
    return false;
  }
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      return false;
    }
  }
  return true;
};


const assertArraysEqual = function(actual, expected) {
  if (eqArrays(actual, expected)) {
    console.log(`✅ Assertion Passed: ${actual}  === ${expected}`);
  } else {
    console.log(`🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const without = function(source, itemsToRemove) {
  let remainder = [];
  for (let sourceElement of source) {
    let exists = false;
    for (let toRemoveElement of itemsToRemove) {
      if (sourceElement === toRemoveElement) {
        exists = true;
      } 
    }
    if(exists === false){
      remainder.push(sourceElement);
    }
    
  }
  return remainder;
};


assertArraysEqual(without([1, 2, 3], [1]), [2, 3]);
assertArraysEqual(without(["1", "2", "3"], [1, 2, "3"]), ["1", "2"]);