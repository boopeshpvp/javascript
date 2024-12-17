function calculation(type) {
    let inputText = document.getElementById("textfield").value.trim().replace(/\s+/g, '');
    let splitedInput = inputText.split(",");

    let splCharRegex = /^[a-zA-Z 0-9+-.]+$/;
    let letterRegex = /[a-zA-Z]/;

    let error = "";
    let result = "";

    let inputArray = [];
    for (let i = 0; i < splitedInput.length; i++) {
        if (splitedInput[i].length >= 1) {
            inputArray.push(splitedInput[i])
        }
    }

    if (inputText === "") {
        error = "Please enter a number";
    } else if (!splCharRegex.test(inputText) && letterRegex.test(inputText)) {
        error = "Both Special character(s) and letter(s) are not allowed"
    } else if (!splCharRegex.test(inputText)) {
        error = "Special Character(s) not allowed";
    } else if (letterRegex.test(inputText)) {
        error = "Letter(s) not allowed";
    } else if (inputArray.length < 2) {
        error = "Enter more than one number"
    } else {
        let numberArray = [];
        for (var i = 0; i < inputArray.length; i++) {
            if (isNaN(Number(inputArray[i]))) {
                error = "Please enter valid number"
            } else {
                numberArray.push(Number(inputArray[i]))
            }
        }
        if (error.length === 0) {
            result = calculate(type, numberArray)
        }
    }
    document.getElementById("error").innerHTML = error
    document.getElementById("answer").value = result;
}

function calculate(type, numberArray) {
    if (type == 'Addition') {
        var sum = 0;
        for (let i = 0; i < numberArray.length; i++) {
            sum += numberArray[i];
        }
        result = sum;
        return result;
    }
    else if (type == 'Multiplication') {
        var Multi = 1;
        for (let i = 0; i < numberArray.length; i++) {
            Multi *= numberArray[i];
        }
        result = Multi;
        return result;
    }
}

function reset() {
    document.getElementById("textfield").value = "";
    document.getElementById("error").innerHTML = "";
    document.getElementById("answer").value = ""
}

