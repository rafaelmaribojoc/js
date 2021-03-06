function addition(input1, input2) {
    return input1 + input2;
}

function multiply(input1, input2) {
    return input1 * input2;
}

function divide(input1, input2) {
    return input1 / input2;
}

function subtraction(input1, input2) {
    return input1 - input2;
}

function modulo(input1, input2) {
    return input1 % input2;
}

function calculator(input1, input2, operator) {
    return operator(input1, input2);
}

alert("Here's the result " + calculator(20, 3, modulo));
