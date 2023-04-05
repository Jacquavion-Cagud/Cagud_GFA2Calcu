function Addition() {
    var x = parseInt(Number1.value);

    var y = parseInt(Number2.value)

    var z = x + y;

    document.getElementById("Answer").innerHTML = "The sum of " + x + " and " + y + " is " + z + ". ";
}

function Subtraction() {
    var x = parseInt(Number1.value);

    var y = parseInt(Number2.value)

    var z = x - y;

    document.getElementById("Answer").innerHTML = "The difference of " + x + " and " + y + " is " + z + ". ";
}

function Multiplication() {
    var x = parseInt(Number1.value);

    var y = parseInt(Number2.value)

    var z = x * y;

    document.getElementById("Answer").innerHTML = "The product of " + x + " and " + y + " is " + z + ". ";
}

function Division() {
    var x = parseInt(Number1.value);

    var y = parseInt(Number2.value)

    var z = x / y;

    document.getElementById("Answer").innerHTML = "The quotient of " + x + " and " + y + " is " + z + ". ";
}

function Modulus() {
    var x = parseInt(Number1.value);

    var y = parseInt(Number2.value)

    var z = x % y;

    document.getElementById("Answer").innerHTML = "The remainder of " + x + " and " + y + " is " + z + ". ";
}