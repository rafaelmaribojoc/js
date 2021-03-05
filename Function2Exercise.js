function lifesInWeeks(age) {
    var yearsRemaining = 100 - age;
    var daysLeft = yearsRemaining * 365;
    var weeksLeft = yearsRemaining * 52;
    var monthsLeft = yearsRemaining * 12;
    alert("You have " + daysLeft + " days, " + weeksLeft + " weeks, and " + monthsLeft + " months left");
}

lifesInWeeks(17);

// Output: "You have x days, y weeks, and z months left"
