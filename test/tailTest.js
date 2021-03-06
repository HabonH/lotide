const assertEqual = require('../assertEqual');
const tail = require('../tail');

const result = tail(["Hello", "Lighthouse", "Labs"]);

assertEqual(result.length, 2); // ensure we get back two elements
assertEqual(result[0], "Lighthouse"); // ensure first element is "Lighthouse"
assertEqual(result[1], "Labs"); // ensure second element is "Labs"

const words = ["Yo Yo", "Lighthouse", "Labs"];

tail(words); // no need to capture the return value since we are not checking it
assertEqual(words.length, 3); // Checking words array length after chopping it. Should return true, it's returning original array.
assertEqual(words.length, 2); // Assumed it was using tail function, but it's not. It's using const words array returned should return false.
