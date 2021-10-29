const eqObjects = function (object1, object2) {
  // First, use the Object.keys function on both objects and compare their lengths. 
  /* > Edge case: They have the same number of keys. If not equal, 
  there's no point in going further: return false */
  let objOneKeys = Object.keys(object1);
  let objTwoKeys = Object.keys(object2);
  // console.log("Keys of object1", objOneKeys);
  //  console.log("Keys of object2", objTwoKeys);


  if (objOneKeys.length !== objTwoKeys.length) {
    return false
  } else {     // Loop through those keys!
    for (let key of objOneKeys) {
      // > Edge case: The value for each key in one object is the same as the value for that same key in the other object
      // Looping to get each value for each key
      // value in array.isArray(object1[key])
      if ((Array.isArray(object1[key]) && Array.isArray(object2[key]))) {
        if (!eqArrays(object1[key], object2[key])) {
          return false;
        }
      } else if (object1[key] !== object2[key]) {
        // console.log("Values are:", object1[key]);
        return false;
      }

    }
  }
  return true;
}

// FUNCTION IMPLEMENTATION
const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect; 
  // if the arrays executed in eqArrays function come back as true, then it would use the Passed console.log
  if (eqObjects(actual, expected)) {
    console.log(`✅ Assertion Passed: ${inspect(actual)}  === ${inspect(expected)}`);
    // Otherwise, it will say fail
  } else {
    console.log(`🛑 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
  }
};

assertObjectsEqual({a: 1}, {a :1});