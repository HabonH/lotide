const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅ Assertion Passed: ${actual}  === ${expected}`);
  } else if (actual !== expected) {
    console.log(`🛑 Assertion Failed: ${actual} !== ${expected}`);
  }

};

/* The function should take in a sentence (as a string) and then return a count of each of the letters 
in that sentence. */
// For example, countLetters('LHL') should return results indicating that L appears twice, and H once.
  // i.e. output would be {L: 2, H: 1}  

  const countLetters = function(string){
    let newObject = {};
     let trimStr = string.replace(/ /g,'')
     // Loop through each letter
    for(let i = 0; i < trimStr.length; i++){
      // Create a conditional to see that if letter repeats itself, increment by 1
    let letters = (trimStr[i]);
    if (!newObject[letters]){
      newObject[letters] = 1;
    } else {
      newObject[letters]++;
    } 
    
    }
    
    return newObject;
    };
    
    
    assertEqual(countLetters("lighthouse in the house"), { l: 1, i: 2, g: 1, h: 4, t: 2, o: 2, u: 2, s: 2, e: 3, n: 1 });