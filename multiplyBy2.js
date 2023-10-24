function multiplyBy2(input) {

    let index = 0;
    let number = input[index];
    index++;

    while (true) {
        if (number < 0) {
            console.log("Negative number!");
            break;
        } else {

        
        console.log("Result: " + (number * 2).toFixed(2));

        number = input[index];
        index++;
        }
    }
}

multiplyBy2(["12", "43.2144", "12.3", "543.23", "-20"]);