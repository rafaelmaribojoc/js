/* When the users type their names you should make it all formal
(Capitalise the first letter of their names.)*/

var firstName = prompt("First Name:");
var lastName = prompt("Last Name:");
// First Name Set
var firstNameFirstChar = firstName.slice(0, 1);
var firstNameFirstCharUpper = firstNameFirstChar.toUpperCase();
var restOfTheFirstName = firstName.slice(1, firstName.length);
var restOfTheFirstNameLower = restOfTheFirstName.toLowerCase();
var firstNameFinal = firstNameFirstCharUpper + restOfTheFirstNameLower;
// Last Name Set
var lastNameFirstChar = lastName.slice(0, 1);
var lastNameFirstCharUpper = lastNameFirstChar.toUpperCase();
var restOfTheLastName = lastName.slice(1, lastName.length);
var restOfTheLastNameLower = restOfTheLastName.toLowerCase();
var lastNameFinal = lastNameFirstCharUpper + restOfTheLastNameLower;
var fuckingCombineAll = firstNameFinal + " " + lastNameFinal;
alert(fuckingCombineAll);
