function arrayFunction() {
    let inputText = document.getElementById("userInput").value;
    inputText     = inputText.replace(/\s+/g, '')
    let positionValue = document.getElementById("position").value;
    let replacedText  = document.getElementById("replaceInput").value;
    let splCharRegex  = /^[a-zA-Z,0-9]+$/;
    let letterRegex =/^[a-zA-Z]+$/
    let signRegex     = /[- 0]/
    let numberRegex   = /[0-9]/
    let splitedArray  = inputText.split(",");
    splitedArray      = splitedArray.filter(Boolean);

    let error = "";
    let result = "";

    if (inputText == ""||positionValue==""||replacedText=="") {
        error = "All the fields are mandatory"
    }
    else if (!inputText.match(splCharRegex)||!positionValue.match(splCharRegex)||!replacedText.match(splCharRegex)) {
        error = "Special Characters are not allowed in all fields"
    }
    else if (inputText.match(numberRegex)||(replacedText.match(numberRegex))) {
        error = "Numbers are not allowed in input and new element fields" 
    }
    else if (splitedArray.length <= 1) {
        error = "Please enter more than one word in input field"
    } else {
        if (positionValue.match(signRegex)) {
            error = "Negative values and 0 not allowed in position field " 
        }
        else if (positionValue.match(letterRegex)) {
            error = "Letters are not allowed in position field "
        }
        else if (splitedArray.length < positionValue) {
            error = "Enter valid position value"
        }
        else {
            splitedArray.splice(positionValue - 1, 1, replacedText);
            result =' The result is: ' + splitedArray
        }
    }

    document.getElementById("error").innerHTML = error;
    document.getElementById("result").innerHTML = result;
}
function reset(){
    document.getElementById("error").innerHTML = "";
    document.getElementById("result").innerHTML = "";
    document.getElementById("position").value = "";
    document.getElementById("replaceInput").value = "";
    document.getElementById("userInput").value = "";
}