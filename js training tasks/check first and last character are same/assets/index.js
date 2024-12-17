function stringHandling() {
    let inputText = document.getElementById("textfield").value.trim();
    inputText = inputText.toLowerCase();
    let splCharRegex = /^[a-zA-Z 0-9]+$/;
    let numRegex = /[0-9]/;
     let error="",result="";

    if (inputText === "") {
        error  = "Please enter a Character";
    } else if (!(splCharRegex).test(inputText) && (numRegex).test(inputText)) {
        error  = "Both special Character(s) and Numbers are not allowed";
    } else if (!(splCharRegex).test(inputText)) {
        error  = "Special Character(s) not allowed";
    } else if ((numRegex).test(inputText)) {
        error  = "Number(s) are not allowed";
    } else if (inputText.length <= 1) {
        error  = "Please enter more than one charcter";
    } else {
        let array=inputText.split("")
        if (array[0] === array[array.length-1]) {
            result = "The first and last characters are same";
        } else {
            error  = "The first and last characters are not same"
        }
    }
    
    document.getElementById("error").innerHTML = error;
    document.getElementById("result").innerHTML = result;
}
