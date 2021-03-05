// We will gonna have a party and check if your name's friend is there else don't let them enter the party.

var groupOfFN = ["Rafael", "Joanna", "Chia", "Arriane", "Shawn", "Princess", "Rex"];
var userName = prompt("Name:");

if (groupOfFN.includes(userName)) {
    alert("Welcome bitch!");
} else {
    alert("You are not allowed here!");
}
