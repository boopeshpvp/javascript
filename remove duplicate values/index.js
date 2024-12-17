//remove duplicate values from array

// const numbers=['one','two','three','one','two']
// const result= numbers.filter((data,index)=>{
//     return numbers.indexOf(data)===index
// })
// console.log(result);

// const result=[...new Set(numbers)]
// console.log(result)

//     let crtData=[]
//  numbers.forEach((data)=>{
//     if(!crtData.includes(data)){
//       crtData.push(data)
//     }
// })
//  console.log(crtData)

//  const result=numbers.reduce((accumulator,currentvalue)=>{
//      if(!accumulator.includes(currentvalue)){
//         accumulator.push(currentvalue)
//      }
//      return accumulator
// },[])
// console.log(result)

// let crtData=[]
// numbers.forEach((data)=>{
//     if(crtData.indexOf(data)===-1){
//         crtData.push(data)
//     }
// })
// console.log(crtData)

//remove duplicate values and find its counts

// let count=[]
// numbers.forEach((data)=>count[data]=(count[data]||0)+1)
// console.log(count)

// const result= numbers.reduce((accumulator,currentvalue)=>{
//     accumulator[currentvalue]=(accumulator[currentvalue]||0)+1
//     return accumulator
// },[])

// console.log(result)

//remove duplicate values from array of object based on key

// const details=[
//     {name:'boopesh',age:18},
//     {name:"ganapathy",age:20},
//     {name:'boopesh',age:19},
//     {name:'raj',age:20},
//     {name:'raj',age:20},
//     ]
 
// const ids = details.map(data => data.name);
// const filtered = details.filter((data, index) =>{
//   return !ids.includes(data.name,index+1);
// })
// console.log(filtered);

//remove duplicate values and add the age in duplicate value and find a average.

// const details = [
//     { name: 'boopesh', age: 18 },
//     { name: "ganapathy", age: 20 },
//     { name: 'boopesh', age: 19 },
//     { name: 'raj', age: 20 }
// ];

// const result=details.reduce((accumulator,currentvalue)=>{
//     if(accumulator[currentvalue.name]){
//         accumulator[currentvalue.name].age+=currentvalue.age
//         accumulator[currentvalue.name].average=accumulator[currentvalue.name].age/2
//     }
//     else{
//         accumulator[currentvalue.name]={name:currentvalue.name,age:currentvalue.age}
//     }
//     return accumulator
// },[])
// console.log(Object.values(result))

// remove duplicate in string
// let name="efnwefwenw"
// let result=""
// for(i=0;i<name.length;i++){
//   if(!result.match(name[i])){
//       result+=name[i]
//   }
// }
// console.log(result)