var autoMessage = "Hi";
var firstName = prompt("First Name:");
var lastName = prompt("Last Name:");
var autoComma = ", ";
var autoMessage2 = "you have written";
var autoMessage3 = "characters";
var autoMessage4 = "you have";
var autoMessage5 = "remaining";
var composedMessage = prompt("Your message:");
var composedMessageLength = composedMessage.length;

alert(autoMessage + " " + firstName + " " + lastName + autoComma + autoMessage2 + " " + composedMessageLength + " " + autoMessage3 + autoComma + autoMessage4 + " " + (180 - composedMessageLength) + " " + autoMessage3 + " " + autoMessage5);

/* Hi Rafael Cave, you have written 190 characters, you have 40 characters remaining*/
