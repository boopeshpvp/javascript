function findLargestNumber() {
    let inputText = document.getElementById("textfield").value.trim();
    inputText = inputText.replace(/\s+/g, '')
    let splCharRegex = /^[a-zA-Z 0-9,+.-]+$/;
    let letterRegex = /[a-zA-Z]/;

    let splitedArray = inputText.split(",");
    splitedArray = splitedArray.filter(Boolean);

    let error = ""; result = "";

    if (inputText === "") {
        error = "Please enter a number";
    } else {
        if (!inputText.match(splCharRegex) && (inputText.match(letterRegex))) {
            error = "Both Special character(s) and letter(s) are not allowed"
        } else if (!inputText.match(splCharRegex)) {
            error = "Special Character(s) not allowed";
        } else if (inputText.match(letterRegex)) {
            error = "Letter(s) not allowed";
        } else if (splitedArray.length <= 1 || splitedArray.length > 2) {
            error = "Enter atleast or atmost 2 numbers"
        } else {
            let firstNumber = splitedArray[0];
            let secondNumber = splitedArray[1];
            largeNumber(firstNumber, secondNumber);
        }
    }
    document.getElementById("error").innerHTML = error;
    document.getElementById("result").innerHTML = result;
}

function largeNumber(a, b) {
    if (isNaN (Number(a)) || isNaN(Number(b)) ){
        result = "Not a number, Please enter valid number"
    } else {
        if (Number(a) === Number(b)) {
            result = "Both numbers are same"
        } else {
            if (Number(a) > Number(b)) {
             result = "Largest number is: " + Number(a);
            } else {
                result = "Largest number is: " + Number(b);
            }
        }
    }
}

function reset() {
    document.getElementById("textfield").value = "";
    document.getElementById("error").innerHTML = "";
    document.getElementById("result").innerHTML = ""
}





