function fizzBuzz() {
    var output = [];
    var count = 1;
    count++;

    if (count % 3 === 0 && count % 5 === 0) {
        output.push("fizzBuzz");
    } else if (count % 3 === 0) {
        output.push("Fizz");
    } else if (count % 5 === 0) {
        output.push("Buzz");
    } else {
        output.push(count);
    }

    console.log(output);
}

fizzBuzz();
