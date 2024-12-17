// let arr=[1,2,3,4]
// let initialValue=10
// let arrayReduce=arr.reduce((a,b)=>a+b,initialValue)
// console.log(arrayReduce);

// let array=[1,2,3,4,5]
// let arrReduce=array.reduce((accumulator,currentvalue,index)=>{
//     let data=accumulator+currentvalue
//     console.log(`accumulator:${accumulator},currentvalue:${currentvalue},index:${index},data:${data}`);
//     return data
// })
// console.log(arrReduce);


let data=[{a:10},{a:20},{a:30}]

let reducer=data.reduce((accumulator,currentvalue)=>{
  return accumulator+currentvalue.a;
},0)
console.log(reducer);












