//Create a var that stores the name that user enters via prompt.
var userName = prompt("What is your name?");

// Capitalise the first letter of their name.

// a. Isolate the first char
var firstChar = userName.slice(0,1);

// b. Turn the first the first char to UPPER CASE
var firstCharUpper = firstChar.toUpperCase();

// c. Isolate the rest of the characters
var restOfTheName = userName.slice(1,userName.length);

// d. Change the rest of the name to lower Case
var restOfTheNameLower = restOfTheName.toLowerCase();

// e. Concactenate the first char with the rest of the car
var combineName = firstCharUpper + restOfTheNameLower;

// We use the capitalised version of their name to greet them an alert

alert("Hello, " + combineName);