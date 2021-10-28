
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅ Assertion Passed: ${actual}  === ${expected}`);
  } else if (actual !== expected) {
    console.log(`🛑 Assertion Failed: ${actual} !== ${expected}`);
  }

};


/* Implement the function findKeyByValue which takes in an object and a value. It should scan the 
object and return the first key which contains the given value. If no key with that given value is found, 
then it should return undefined */


const findKeyByValue = function(object, value){
  // Loop through object to obtain the keys with Object.keys() function and for...of 
  for (const key of Object.keys(object)){ 
    //console.log("A key from loop:", key); -> Verify
    // Create a condition to see if the object's key is equivalent to the value parameter 
    if(object[key] === value){ 
     // console.log("The key that matches this value:", key) -> Verify
     return key; // Return key
    } else {
     // console.log("This key isn't a match:", undefined); -> Verify
    }
  }
  return undefined;
}
  

const bestTVShowsByGenre = { 
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
