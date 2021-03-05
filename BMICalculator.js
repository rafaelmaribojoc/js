// Formula : Angela's weight is 65kg and her height is 1.8. (bmi = weight divided by height).

// Math.pow is used in caclculating number with exponents like 1.8 to the power of 2.
// Math.round is used in rounding numbers like if we say, 
// we have "2.5" number and if the number reaches the 5 (.5) it will round up to 3
// and if the number is below 5 (.4) it will round down to 2.

function bmiCalc(weight, height) {
    var bmi = weight / Math.pow(height, 2);
    return Math.round(bmi);
}

alert("The result is " + bmiCalc(65, 1.8));
