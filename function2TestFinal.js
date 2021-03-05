// What: Tell your Robot to buy bottles of milk base on its calculation.

function buyMilk(money) {
    var buyBottlesOfMilk = Math.floor(money / 12);
    repeatingMoves();
    console.log("goToTheNearestStore");
    alert("Hi! I want to buy " + buyBottlesOfMilk + " bottles of milk");
    repeatingMoves();
    console.log("goToTheOwner");
    alert("Here's your " + buyBottlesOfMilk + " bottles of milk sir Rafael.");
}

buyMilk(50)

function repeatingMoves() {
    console.log("moveToTheGate");
    console.log("openTheGate");
    console.log("closeIt");
}
