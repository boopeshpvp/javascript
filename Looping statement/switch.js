//syntax

// switch (expression) {
//   case value1:
//   //code to be execute;
//   break;
//   case value2:
//   //code to be execute;
//   break;
//   case value3:
//   //code to be execute
//   break;
//   .
//   .
//   .
//   default:
//     //code to be execute
// }

let RecievedSalary = 10000;
let salary;
switch (RecievedSalary) {
  case 5000:
    salary = "You got minimum salary";
    break;
  case 10000:
    salary = "You got average salary";
    break;
  case 15000:
    salary = "You got the highest salary";
    break;
  default:
    salary = "salary credited";
}
console.log("salary", salary);

// let data = "new";

// switch (data) {
//   case "old":
//     console.log("old");
//     break;
//   case "new":
//     console.log("new");
//     break;
//   default:
//     console.log("na data");
// }
