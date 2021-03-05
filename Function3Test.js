// What: Tell your Robot to buy bottles of milk base on its calculation.

function buyMilk(money, costPerBottle) {
    repeatingScenario();
    alert("Hi! I want to buy " + calcBottles(money, costPerBottle) + " bottles of milk");
    repeatingScenario2();
    return calcChange(money, costPerBottle);
}

function repeatingScenario() {
    console.log("moveToTheGate");
    console.log("openTheGate");
    console.log("closeIt");
    console.log("goToTheNearestStore");
    alert("Ummmm~");
}

function repeatingScenario2() {
    console.log("moveToTheGate");
    console.log("openTheGate");
    console.log("closeIt");
    console.log("goToTheOwner");
    alert("Alright");
}

function calcBottles(startingMoney, costPerBottle) {
    var buyBottlesOfMilk = Math.floor(startingMoney / costPerBottle);
    return buyBottlesOfMilk;
}

function calcChange(startingAmount, costPerBottle) {
    var change = startingAmount % costPerBottle;
    return change;
}

alert("Hi sir Rafael, Here's your " + buyMilk(100, 7) + " pesos change.");
