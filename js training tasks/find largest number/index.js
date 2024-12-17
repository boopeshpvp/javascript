function dateandtime(){
    document.getElementById("currentdate").innerHTML=new Date();

   var currentDate=new Date();
   let year=currentDate.getFullYear();
   let month=currentDate.getMonth() +1;
   let date=currentDate.getDate();
   let day=currentDate.getDay();
   let time=currentDate.getTime();
   let hours=currentDate.getHours();
   let minute=currentDate.getMinutes();
   let second=currentDate.getSeconds();
   let millisecond=currentDate.getMilliseconds()

   let utcfullyear=currentDate.getUTCFullYear();
   let utcmonth=currentDate.getUTCMonth() +1;
   let utcdate=currentDate.getUTCDate();
   let utcday=currentDate.getUTCDay();
   let utchours=currentDate.getUTCHours();
   let utcminute=currentDate.getUTCMinutes();
   let utcsecond=currentDate.getUTCSeconds();
   let utcmillisecond=currentDate.getUTCMilliseconds();
   
   document.getElementById("year").innerHTML= "<span class=color>Local date is : </span>" + year+'/'+month+'/'+date;
   document.getElementById("time").innerHTML="<span class=color>Local time is : </span>" + hours+':'+minute+':'+second;
   document.getElementById("date").innerHTML="<span class=color>The Date is : </span>" + date;
   document.getElementById("day").innerHTML="<span class=color>The Day is : </span>" + day;
   document.getElementById("month").innerHTML="<span class=color>The month is : </span>" + month;
   document.getElementById("hour").innerHTML="<span class=color>The hours is : </span>" + hours;
   document.getElementById("minute").innerHTML="<span class=color>The minutes is : </span>" + minute;
   document.getElementById("second").innerHTML="<span class=color>The seconds is : </span>" + second;
   document.getElementById("millisecond").innerHTML="<span class=color>The milliseconds is : </span>" + millisecond;
   document.getElementById("fullyear").innerHTML="<span class=color>The Fullyear is : </span>" + year;
   document.getElementById("times").innerHTML="<span class=color>The time is : </span>" + time;

   document.getElementById("utcfullyear").innerHTML="<span class=color>The UTC Fullyear is : </span>" + utcfullyear;
   document.getElementById("utcdate").innerHTML="<span class=color>The UTC Date is : </span>" + utcdate;
   document.getElementById("utcday").innerHTML="<span class=color>The UTC Day is :</span> " + utcday;
   document.getElementById("utcmonth").innerHTML="<span class=color>The UTC month is :</span> " + utcmonth;
   document.getElementById("utchour").innerHTML="<span class=color>The UTC hours is : </span>" + utchours;
   document.getElementById("utcminute").innerHTML="<span class=color>The UTC minutes is : </span>" + utcminute;
   document.getElementById("utcsecond").innerHTML="<span class=color>The UTC seconds is :</span> " + utcsecond;
   document.getElementById("utcmillisecond").innerHTML="<span class=color>The UTC milliseconds is : </span>" + utcmillisecond;
}
function hide(){
    
    document.getElementById("currentdate").innerHTML=""
    document.getElementById("year").innerHTML= ""
   document.getElementById("time").innerHTML=""
   document.getElementById("date").innerHTML=""
   document.getElementById("day").innerHTML=""
   document.getElementById("month").innerHTML=""
   document.getElementById("hour").innerHTML=""
   document.getElementById("minute").innerHTML=""
   document.getElementById("second").innerHTML=""
   document.getElementById("millisecond").innerHTML=""
   document.getElementById("fullyear").innerHTML= ""
   document.getElementById("times").innerHTML=""

   document.getElementById("utcfullyear").innerHTML=""
   document.getElementById("utcdate").innerHTML=""
   document.getElementById("utcday").innerHTML=""
   document.getElementById("utcmonth").innerHTML=""
   document.getElementById("utchour").innerHTML=""
   document.getElementById("utcminute").innerHTML=""
   document.getElementById("utcsecond").innerHTML=""
   document.getElementById("utcmillisecond").innerHTML=""

}
let currentDate=new Date()
let array=[
    currentDate.getFullYear(),
    currentDate.getMonth() +1,
    currentDate.getDate(),
    currentDate.getDay(),
    currentDate.getTime(),
    currentDate.getHours(),
    currentDate.getMinutes(),
    currentDate.getSeconds(),
    currentDate.getMilliseconds()
]

console.log(array)
