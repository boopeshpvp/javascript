let marks = [
    { name: 'Raja', age: 18, marks: [90, 85, 95, 96, 84] },
    { name: 'Ravi', age: 18, marks: [84, 50, 95, 96, 84] },
    { name: 'Rani', age: 18, marks: [40, 85, 20, 96, 84] },
    { name: 'Deepak', age: 18, marks: [29, 65, 40, 76, 27] },
    { name: 'Kavya', age: 18, marks: [87, 85, 40, 89, 58] },
    { name: 'Ramya', age: 18, marks: [45, 50, 50, 76, 63] },
    { name: 'Deepa', age: 18, marks: [76, 30, 39, 36, 98] }
]

// marks.forEach((data)=>{
//    data.total=data.marks.reduce((accumulator,currentvalue)=>{
//       return accumulator+currentvalue
//    })
//    data.average=data.total/5
// })
// console.log(marks);

// marks.map((data)=>{
//   data.total=data.marks.reduce((accumulator,currentvalue)=>{
//       return accumulator+currentvalue
//    })
   
//     data.average=data.total/5
// })
// marks.sort((a,b)=>{return a.total-b.total})

// console.log(marks);


let one=marks.map(data=>{  
   let average=data.marks.reduce((accumulator,currentvalue)=>accumulator+currentvalue)/5
return {
      ...data,
      total:data.marks.reduce((accumulator,currentvalue)=>accumulator+currentvalue),      
      avg:average
}
})
  one.sort((a,b)=>{return a.total-b.total})

  let opt=one[one.length-1];
  let optdata={
   name:opt.name,
   total:opt.total,
   avg:opt.avg
  }
  
 console.log(optdata);


   // const total = one.reduce((accumulator, currentvalue) => {
   //   return accumulator['avg'] + currentvalue['avg'];
   // })
   // console.log(total);
   




















