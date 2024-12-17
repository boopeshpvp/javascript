function reverseStringHandling() {
    let inputText = document.getElementById("textfield").value.trim();

    let splCharRegex = /^[a-zA-Z 0-9]+$/;
    let numRegex = /[0-9]/;

    let error="";result="";

    if (inputText === "") {
        error = "Please enter a Character";
    } else if (!inputText.match(splCharRegex) && inputText.match(numRegex)) {
        error = "Both special Character(s) and Numbers are not allowed";
    } else if (!inputText.match(splCharRegex)) {
        error = "Special Character(s) not allowed";
    } else if (inputText.match(numRegex)) {
        error = "Numbers are not allowed";
    } else if (inputText.length <= 1) {
        error = "Please enter more than one charcter";
    } else {
        function reverseString(inputText) {
            let newString = "";
            for (let i = inputText.length - 1; i >= 0; i--) {
                newString += inputText[i];
            }
            return newString;
        }
       result = "The entered string after Reverse: " +reverseString(inputText);
    }

    document.getElementById("error").innerHTML = error;
    document.getElementById("result").innerHTML = result;
}
