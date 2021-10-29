const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`✅ Assertion Passed: ${actual}  === ${expected}`);
  } else if (actual !== expected) {
    console.log(`🛑 Assertion Failed: ${actual} !== ${expected}`);
  }

};

const eqArrays = function (array1, array2) {
  if(array1.length !== array2.length){ 
    return false;
  } 
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      return false;
    }
  }
  return true;
};


// Returning the last result test ran
//////////

// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
// Two objects are equal when:

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


const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
console.log(eqObjects(ab, ba)); // --> should be true

const abc = { a: "1", b: "2", c: "3" };
console.log(eqObjects(ba, abc)); // --> should be false

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
assertEqual(eqObjects(cd, dc), true); // => true

const cd2 =
{
  c: "1",
  d: ["2", 3, 4]
};
assertEqual(eqObjects(cd, cd2), false); // => false