// const totalandaverage=(tamil,english,maths,science,social)=>{
//     total=tamil+english+maths+science+social
//     average=total/5
//     console.log({total:`${total}`,average:`${average}`});

// }
// totalandaverage(90, 85, 95, 96, 84)

//forloop

// const  marks = [90, 85, 95, 96, 84];
// let Total=0;
// let output;
// for(i=0;i<marks.length;i++){
//     Total += marks[i]
//   let average =Total/5
//     output={Total,average}
// }
// console.log(output);

//forEach

// const marks=[90,85,95,96,84]
// let total=0;
// let output;
// marks.forEach((value)=>{
//     total += value;
//     average =total/5
//     output={total,average}
// })

// console.log(output);

//Reduce

const marks=[90,85,95,96,84]

let Total=marks.reduce((accumlator,currentvalue)=>{
      return accumlator+currentvalue
})
 let average=Total/5;
let output={Total,average}
console.log(output);
   


