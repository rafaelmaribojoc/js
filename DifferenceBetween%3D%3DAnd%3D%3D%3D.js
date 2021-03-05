// Basically, we can simply tell that triple equals (===) is seeking for exact Data Types of Variables
// while double equals (==) doesn't care nor seeking for exact Data Types
// Data types are the string, boolean, & numbers (in Javascript).

var a = 4;
var b = "4";

// Answer: No, Daddy, because Triple Equals is seeking for exact Data Types if they
// really have the same Data Types.

/* if (a === b) {
    alert("Yes, Daddy!");
}
    else{
        alert("No, Daddy!");
    }*/

// Answer: Yes, Daddy, because Double Equals doesn't care nor seeking for exact Data Types.
if (a == b) {
    alert("Yes, Daddy!");
}
    else {
        alert("No, Daddy!");
    }
