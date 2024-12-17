function toCheckvowelornot() {
    let inputstring = document.getElementById("textfield").value.trim();
    let splcharRegex = /^[a-zA-Z 0-9]+$/;
    let numRegex = /[0-9]/;
    let inputstringLc=inputstring.toLowerCase();

    if (inputstring == "") {
        document.getElementById("error").innerHTML = "Please enter a Character";
        document.getElementById("result").innerHTML = "";
    } else if (!inputstring.match(splcharRegex) && inputstring.match(numRegex)) {
        document.getElementById("error").innerHTML = "Both special Character(s) and Numbers are not allowed";
        document.getElementById("result").innerHTML = "";
    } else if (!inputstring.match(splcharRegex)) {
        document.getElementById("error").innerHTML = "Special Character(s) not allowed";
        document.getElementById("result").innerHTML = "";
    } else if (inputstring.match(numRegex)) {
        document.getElementById("error").innerHTML = "Numbers are not allowed";
        document.getElementById("result").innerHTML = "";
    } else if (inputstring.length > 1) {
        document.getElementById("error").innerHTML = "Please enter only one Character";
        document.getElementById("result").innerHTML = "";
    } else {
        if (inputstringLc == "a" || inputstringLc == "e" || inputstringLc == "i" || inputstringLc == "o" || inputstringLc == "u") {
        document.getElementById("result").innerHTML =inputstring + " is a vowel";
        document.getElementById("error").innerHTML = "";
        }else {
            document.getElementById("result").innerHTML = inputstring +" is not a vowel";
            document.getElementById("error").innerHTML = "";
        }
    }
}