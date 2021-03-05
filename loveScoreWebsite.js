// Today we will be going to make a Love Score website to measure how much of the chance or percentage they will get to their crushes.
// Math.random() is used in producing random floating points number.
// Math.floor() is used to round numbers.

var yourName = prompt("Your Name:");
var theirName = prompt("His/Her Name:");

var loveScore = Math.random() * 100;
loveScore = Math.floor(loveScore) + 1;
// alert("Hi " + yourName + ", there is " + loveScore + "% chance that you and " + theirName + " will be a couple.");

if (loveScore > 70) {
    alert("Nakakuha ka ng " + loveScore + "% lods. Wow naman Congrats! HAHAHAHAH");
}

if (loveScore > 30 && loveScore <= 70) {
    alert(loveScore + "% lang lods huwag ka nang manligaw.");
}

if (loveScore <= 30) {
    alert(loveScore + "% lang. Ok umuwi ka nalang lods!");
}
