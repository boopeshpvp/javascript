function arrayFunction() {
    let inputText = document.getElementById("userInput").value;
    inputText = inputText.replace(/\s+/g, '')
    let positionValue = document.getElementById("position").value;
    let replacedText = document.getElementById("replaceInput").value;
    let splCharRegex = /^[a-zA-Z,0-9]+$/;
    let letterRegex = /^[a-zA-Z]+$/
    let signRegex = /[- 0]/
    let numberRegex = /[0-9]/
    let splitedInput = inputText.split(",");
    // splitedArray      = splitedArray.filter(Boolean);
    let splitedArray = [];
    for (i = 0; i < splitedInput.length; i++) {
        if (splitedInput[i].length > 1) {
            splitedArray.push(splitedInput[i])
        }
    }

    let error = "", error1 = "", error2 = "", error3 = ""; result = "";

    if (inputText == "" || positionValue == "" || replacedText == "") {
        error = "All the fields are mandatory"
    }
    else if (!inputText.match(splCharRegex)) {
        error1 = "Special Characters are not allowed"
    }
    else if (inputText.match(numberRegex)) {
        error1 = "Numbers are not allowed "
    }
    else if (splitedArray.length <= 1) {
        error1 = "Please enter more than one word"
    }
    else if (positionValue.match(signRegex)) {
        error2 = "Negative values and 0 not allowed"
    }
    else if (!positionValue.match(splCharRegex)) {
        error2 = "Special Characters are not allowed"
    }
    else if (positionValue.match(letterRegex)) {
        error2 = "Letters are not allowed "
    }
    else if (splitedArray.length < positionValue) {
        error2 = "Enter valid position value"
    }
    else if (!replacedText.match(splCharRegex)) {
        error3 = "Special Characters are not allowed"
    }

    else if ((replacedText.match(numberRegex))) {
        error3 = "Numbers are not allowed "
    }
    else {
        splitedArray.splice(positionValue - 1, 1, replacedText);
        result = ' The result is: ' + splitedArray
    }
    
    document.getElementById("error").innerHTML = error;
    document.getElementById("error1").innerHTML = error1;
    document.getElementById("error2").innerHTML = error2;
    document.getElementById("error3").innerHTML = error3;
    document.getElementById("result").innerHTML = result;
}
function reset() {
    document.getElementById("error").innerHTML = "";
    document.getElementById("result").innerHTML = "";
    document.getElementById("position").value = "";
    document.getElementById("replaceInput").value = "";
    document.getElementById("userInput").value = "";
    document.getElementById("error1").innerHTML = "";
    document.getElementById("error2").innerHTML = "";
    document.getElementById("error3").innerHTML = "";
}