function getMilk(money) {
    var wordsToSay = ("How many bottles of milk I can buy if I have 100 pesos?");
    var botlesOfMilk = Math.floor(money / 7);
    console.log("leaveHouse");
    console.log("moveForward");
    console.log("moveRight");
    console.log("moveForward");
    console.log("moveRight");
    console.log("moveForward");
    console.log("moveRight");
    alert("Hi! " + wordsToSay);
    alert("Robot: Hi Rafael! You can buy " + botlesOfMilk + " bottles of Milk.");
    console.log("leaveStore");
    console.log("turnRight");
    console.log("moveForward");
    console.log("moveLeft");
    console.log("moveForward");
    console.log("moveLeft");
    console.log("openTheGate");
    console.log("lockTheGate");
    console.log("turnRight");
    console.log("moveForward");
    console.log("moveLeft");
    console.log("giveTheMilk");
}

getMilk(100);
