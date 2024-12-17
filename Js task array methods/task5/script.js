const user = [{
    id: 1,
    name: "Sigismundo",
    age: 17
  }, {
    id: 2,
    name: "Sebastian",
    age: 76
  }, {
    id: 3,
    name: "Ly",
    age: 63
  }, {
    id: 4,
    name: "Miltie",
    age: 44
  }, {
    id: 5,
    name: "Carce",
    age: 48
  }, {
    id: 6,
    name: "Tomaso",
    age: 13
  }, {
    id: 7,
    name: "Kendall",
    age: 11
  }, {
    id: 8,
    name: "Zacharie",
    age: 59
  }, {
    id: 9,
    name: "Hewett",
    age: 25
  }, {
    id: 10,
    name: "Mic",
    age: 55
  }, {
    id: 11,
    name: "Berne",
    age: 7
  }, {
    id: 12,
    name: "Henri",
    age: 72
  }, {
    id: 13,
    name: "Davie",
    age: 12
  }, {
    id: 14,
    name: "Saunderson",
    age: 55
  }, {
    id: 15,
    name: "Che",
    age: 79
  }];
//   1. To get the users who's age match with 19 to 59
// 2. Get all user count
// 3. Get who's age above 45
// 4. Get the user count of age between 18 to 39 and his details.

let userage=user.filter((data)=>{
   return data.age>=19 && data.age<=59
})
 console.log(userage);

let usercount=user.filter((data)=>{
  return data
})
let userlength=usercount.length;
console.log(userlength);

let abovefourties=user.filter((data)=>{
  return  data.age>45
})
  console.log(abovefourties);

 let userdetails=user.filter((data)=>{
  return(
    data.age>18 && data.age<39
    ) 
 })
 let userslength=userdetails.length;
 console.log(userslength);
 console.log(userdetails);
