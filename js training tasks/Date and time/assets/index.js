function dateandtime() {
    let currentDate = new Date();
    document.getElementById("date").innerHTML = currentDate;
    let month = currentDate.getMonth() + 1;

    let parameter = ["Local date is :", "Local FullYear is :", "The month is :", "The date is :", "The day is :", "The local time is :", "The time is :", "The Hours is :", "The minutes is :", "The seconds is :", "The milliseconds is :", "The UTC Full Year is :", "The UTC Month is :", "The UTC Date is :", "The UTC Day is :", "The UTC Hours is :", "The UTC Minutes is :", "The UTC seconds is :", "The UTC Milliseconds is :"]
    let heading = "";
    for (i = 0; i < parameter.length; i++) {
        heading = "<div>" + parameter[i] + "</div>";
        document.getElementById("content").innerHTML += heading;
    }

    let output = [currentDate.getFullYear() + '/' + month + '/' + currentDate.getDate(), currentDate.getFullYear(), month, currentDate.getDate(), currentDate.getDay(), currentDate.getHours() + ':' + currentDate.getMinutes() + ':' + currentDate.getSeconds(), currentDate.getTime(), currentDate.getHours(), currentDate.getMinutes(), currentDate.getSeconds(), currentDate.getMilliseconds(), currentDate.getUTCFullYear(), month, currentDate.getUTCDate(), currentDate.getUTCDay(), currentDate.getUTCHours(), currentDate.getUTCMinutes(), currentDate.getUTCSeconds(), currentDate.getUTCMilliseconds()]

    let result = ""
    for (i = 0; i < output.length; i++) {
        result = "<div>" + output[i] + "</div>";
        document.getElementById("result").innerHTML += result;
    }
}
function hide() {
    document.getElementById("date").innerHTML = "";
    document.getElementById("content").innerHTML = "";
    document.getElementById("result").innerHTML = "";
}
