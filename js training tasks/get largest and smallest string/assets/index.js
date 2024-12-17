function string() {
    let input = document.getElementById("textfield").value.trim();
    let array = input.split(" ");
    let splCharRegex = /^[a-zA-Z 0-9]+$/;
    let numRegex = /[0-9]/;

    let filteredArray = array.filter(function (value) {
        return value.length > 0;
    })

    let result="";error="";

    if (input === "") {
        error  = "Please enter a sentence";
    } else if (!input.match(splCharRegex) && input.match(numRegex)) {
        error = "Both special Character(s) and Number(s) are not allowed";
    } else if (!input.match(splCharRegex)) {
        error = "Special Character(s) not allowed";
    } else if (input.match(numRegex)) {
        error= "Number(s) are not allowed";
    } else if (filteredArray.length <= 1) {
        error = "Please enter a sentence which has more than one word";
    } else {
        //Sort method

        // let small = filteredArray.sort(function (a, b) {
        //     return a.length - b.length;
        // });
        // let smallest = small[0];
        // let largest = small[small.length - 1];

        // if (smallest.length === largest.length) {
        //     document.getElementById("result").innerHTML = "All words are equal in length";
        //     document.getElementById("error").innerHTML = "";
        // } else {
        //     document.getElementById("result").innerHTML = "Smallest string is: " + smallest + " ;" + " Largest string is : " + largest;
        //     document.getElementById("error").innerHTML = "";
        //

        //For loop method for sorting
            let min =  filteredArray[0];
            let max =  filteredArray[0];
            for (let i = 1; i < filteredArray.length; i++) {
                if ( filteredArray[i].length < min.length) {
                    min =  filteredArray[i];
                };
                if ( filteredArray[i].length > max.length) {
                    max =  filteredArray[i];
                };
            };

            result = "Largest: " + max + "; " + " Smallest: " + min;

            if(max.length===min.length){
                result="All words are in equal length"
            }
    }
    document.getElementById("error").innerHTML = error;
    document.getElementById("result").innerHTML = result;
}



