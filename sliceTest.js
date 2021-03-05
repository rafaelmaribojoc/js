/*You have written 50 characters, you have 0 remaining*/

var tweet = prompt("Compose your tweet:");
var autoMessage = "You have written";
var autoMessage1 = "characters";
var autoMessage2 = ", ";
var autoMessage3 = "you have";
var autoMessage4 = "remaining.";
var yourTweetLength = tweet.length;
var sliceTweet = tweet.slice(0, 50);

alert(autoMessage + " " + yourTweetLength + " " + autoMessage1 + autoMessage2 + autoMessage3 + " " + (50 - yourTweetLength) + " " + autoMessage4);
