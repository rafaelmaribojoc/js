// whith this symbol [] it means we can use it for retrieving data inside it and also we can input a lot of data like names or something.
// we can clearly have the output with just 'names[]', but the problem with it is, in order to have the output 
// we need to input number to call it inside the '[]' like ([1-etc]) so it will going to break your fingers HAHAHAHA, 
// so the case here is to point people randomly.
// so we use another var to contain some solving and then use its output.

function whosPaying(names) {
    var names = ["Rafael", "Joanna", "Ariane", "Shawn", "Chia", "Arend", "Princess"];
    var numberOfPeople = names.length;
    var randomPersonPosition = Math.floor(Math.random() * numberOfPeople);
    var randomPick = names[randomPersonPosition];
    return randomPick;
}

alert("Alright, " + whosPaying() + " you are the one who's going to pay for now HAHAHAHA");
