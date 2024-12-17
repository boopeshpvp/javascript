// 1.Maximum between two numbers.

// let num1 = 10;
// let num2 = 20;

// if(num1>num2){
//     console.log("num1 is maximum number");
// }
// else {
//     console.log("num2 is maximum number");
// }

// 2.Maximum between three numbers

// let number1 = 10;
// let number2 = 20;
// let number3 = 30;

// if (number1 > number2 && number1 > number3) {
//   console.log("number1 is maximum number");
// } else if (number2 > number1 && number2 > number3) {
//   console.log("number2 is maximum number");
// } else {
//   console.log("number3 is maximum number");
// }

//number is postive, negative or zero

// let number=1

// if(number>0){
//     console.log("The given number is positive");
// }else if(number===0){
//     console.log("The given number is zero");
// } else{
//     console.log("The given number is negative");
// }

// divisible by 5 and 11 or not

// let number = 3;

// if (number % 5 === 0) {
//   console.log("The number is divisible by 5");
// } else if (number % 11 === 0) {
//   console.log("The number is divisible by 11");
// } else {
//   console.log("The is not divisible by 5 and 11");
// }

//Number is odd or even

// let number = 6;

// if (number % 2 === 0) {
//   console.log("The given number is even");
// } else {
//   console.log("The given number is odd");
// }

//

// leap year or not

// let year = 2001;

// if (year % 4 === 0) {
//   console.log("It is leap year");
// } else {
//   console.log("It is not leap year");
// }

//character is alphabet or not

// let character="d"
// let alphabet=["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
// for (let index = 0; index < alphabet.length; index++) {
//     if(character.toLowerCase()===alphabet[index]){
//         console.log("The character is alphabet");
//     }
//     }

//character vowel or consonant

// let character="a"

// if(character.toLowerCase()==="a"||character.toLowerCase()==="e"||character.toLowerCase()==="i"||character.toLowerCase()==="o"||character.toLowerCase()==="u"){
// console.log("The given character is vowel");
// }else{
//     console.log("The given character is consonants");
// }

// albhahet or digit or special character

// let character="$"

// let alphabet=["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
// let digits=[0,1,2,3,4,5,6,7,8,9]
// let specialCharacter=["!","@","#","$","%","^","&","*","(",")","+","_",":",",",".","/","?"]

// for(i=0;i<alphabet.length;i++){
//      if(character===specialCharacter[i]){
//         console.log("The given character is special character");
//     }else if(character===digits[i]){
//         console.log("The given character is digit");
//     }else  if(character===alphabet[i]){
//         console.log("The given character is alpabet")
// }
// }

//character is uppercase or lowercase

// let character="S"

// let lowercase=["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
// let upperCase=["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]

// for (let index = 0; index < lowercase.length; index++) {
//     if(character=== lowercase[index]){
//         console.log("The given albhabet is lowercase");
//     }
//     else if((character=== upperCase[index])) {
//         console.log("The given albhabet is uppercase");
//     }
// }

//Month number and no.of days in month

// let month=9
// let date=new Date()
// if(month===1||month===3||month===5||month===7||month===8||month===10||month===12){
//     date.setDate(31)
//     console.log(date.getDate());
// }
// else if(month===4||month===6||month===9||month===11){
//     date.setDate(30)
//     console.log(date.getDate());
// }
// else{
//     date.setDate(28)
//     console.log(date.getDate());
// }

// week number and week day

// let date = new Date();
// let weekNumber = date.getDay();
// switch (weekNumber) {
//   case 0:
//     console.log("Sunday");
//     break;
//   case 1:
//     console.log("Monday");
//     break;
//   case 2:
//     console.log("Tuesday");
//     break;
//   case 3:
//     console.log("Wednesday");
//     break;
//   case 4:
//     console.log("Thursday");
//     break;
//   case 5:
//     console.log("Friday");
//     break;
//   default:
//     console.log("Saturday");
// }

//Five subject marks and percentage and grade
// let sub1 = 90;
// let sub2 = 67;
// let sub3 = 89;
// let sub4 = 46;
// let sub5 = 99;
// function marks(tamil, english, maths, science, social) {
//   let total = tamil + english + maths + science + social;
//   let average = total / 5;
//   let grade;
//   if (average > 90) {
//     grade = "A";
//   } else if (average > 80) {
//     grade = "B";
//   } else if (average > 70) {
//     grade = "C";
//   } else if (average > 60) {
//     grade = "D";
//   } else if (average > 40) {
//     grade = "E";
//   } else {
//     grade = "F";
//   }
//   console.log("Percentage",average,"Grade",grade);
// }
// marks(sub1, sub2, sub3, sub4, sub5);

//electricity unit and charges

// let initialvalue = 453;

// if (initialvalue < 50) {
//   console.log(initialvalue * 0.5);
// } else if (initialvalue > 50 && initialvalue < 150) {
//   console.log(initialvalue * 0.75);
// } else if (initialvalue > 150 && initialvalue < 250) {
//   console.log(initialvalue * 1.2);
// } else {
//   console.log(initialvalue * 1.5);
// }

//Total number of notes in given amount

// function add (){
//   let sum=0
//   // console.log(arguments[0]);
//   // console.log(arguments.length);
//   for(let i=0;i<arguments.length;i++){
//        sum +=arguments[i]
//   }
//   return sum
// }
// // console.log(add(1,2));

// function add(a,b){
//   return a+b
// }
// console.log(add(3,4))


// function subtraction(a,b){
//   return a-b
// }
// console.log(subtraction(3,4))

// function multiplication(a,b){
//   return a*b
// }
// console.log(multiplication(3,4));

// function division (a,b){
//   return a/b
// }
// console.log(division(10,2));

// function exponent(a,b){
//   return a**b
// }
// console.log(exponent(5,2));

// function modulus(a,b){
//   return a%b
// }
// console.log(modulus(5,2));             

function arithemetic(a,b,c){
   c="add"
  // console.log(a+b);
  // console.log(a-b);
  // console.log(a*b);
  // console.log(a/b);
  // console.log(a%b);
  
  //  c="add"||"subract"||"multiply"||"divide"||"modulus"

   if(c==="add"){
    return a+b
   }
   else if(c==="subtract"){
    return a-b
   }
   else if(c==="multiply"){
    return a*b
   }else if(c==="divide"){
    return a/b
   }else{
    return a%b
   }
}
console.log(arithemetic(2,3))