//syntax

// if (condition1) {
//  code to be execute
// } else if (condition2) {
//   code to be execute
// } else if (condition3) {
//  code to be execute
// } else {
//  code to be execute
// }


let month = 6;
let monthName;

if (month == 1) {
  monthName = 'Jan';
} else if (month == 2) {
  monthName = 'Feb';
} else if (month == 3) {
  monthName = 'Mar';
} else if (month == 4) {
  monthName = 'Apr';
} else if (month == 5) {
  monthName = 'May';
} else if (month == 6) {
  monthName = 'Jun';
} else if (month == 7) {
  monthName = 'Jul';
} else if (month == 8) {
  monthName = 'Aug';
} else if (month == 9) {
  monthName = 'Sep';
} else if (month == 10) {
  monthName = 'Oct';
} else if (month == 11) {
  monthName = 'Nov';
} else if (month == 12) {
  monthName = 'Dec';
} else {
  monthName = 'Invalid month';
}
console.log(monthName);

let TrafficSignalcolor="orange"

if(TrafficSignalcolor==="red"){
  console.log("Stop the vehicles");
}
else if(TrafficSignalcolor==="orange"){
  console.log("Ready to drive the vehicles")
}
else if(TrafficSignalcolor==="green"){
  console.log("Drive the vehicles")
}
else{
  console.log("Signals are not avalible");
}
