//  Write a function and get the input as a parameter return constrain's given below
// Input : [2.5%, 2.5%, 5%, 450, 700, 850];
// constrain: 
// [0] = CGST
// [1] = SGST
// [2] = IGST
// [3] = Raja's bill amount in ruppes
// [4] = Ravi's bill amount in ruppes
// [5] = Rani's bill amount in ruppes

// 1. Calculate total bill amount
// 2. Calculate total tax amount
// 3. Calculate total payable amount
// Return these three details as object

// Output: {totalAmount: XXXX, taxAmount: YYYY, billAmount: PayableAmount}


// const input= [2.5, 2.5, 5,450 , 700, 850]
// const totaltaxAmount=(arg)=>{
// let totalAmount=0;
// let tAmount=0
// for(i=3;i<arg.length;i++){
//     totalAmount+=arg[i]
// }

// for(i=0;i<3;i++){
//     tAmount+=arg[i]
//     taxAmount=totalAmount/tAmount
// }

// let billAmount=totalAmount+taxAmount

// console.log({totalAmount,taxAmount,billAmount});
// }

// totaltaxAmount(input)


// const amount=(a,b,c,d,e,f)=>{
//   let constrain=[a,b,c,d,e,f]
//  let output= constrain.map((data)=>{
//     return totalbillamont=data.d
//   })
//   console.log(output);
// }
// amount(2.5, 2.5, 5, 450, 700, 850)

// let Input = [2.5 , 2.5 , 5 , 330, 700, 850];
// let result;
// const data=(arg)=>{
//    let totalbillamount=arg.filter((item)=>{
//         return item>400
//     }) 
//     let totalAmount=totalbillamount.reduce((accumulator,currentvalue)=>{
//        return accumulator+currentvalue
//     })
   
//     let totaltaxamount=arg.filter((item)=>{
//         return item<20
//     })
//     let taxamount=totaltaxamount.reduce((accumulator,currentvalue)=>{
//        return accumulator+currentvalue
//     })
//     let taxAmount=totalAmount/taxamount

//     let billAmount=totalAmount+taxAmount

//    result={totalAmount,taxAmount,billAmount}
//    console.log(result);
// }
// data(Input)


//  Write a function and get the input as a parameter return constrain's given below
// Input : [2.5%, 2.5%, 5%, 450, 700, 850];
// constrain: 
// [0] = CGST
// [1] = SGST
// [2] = IGST
// [3] = Raja's bill amount in ruppes
// [4] = Ravi's bill amount in ruppes
// [5] = Rani's bill amount in ruppes

// 1. Calculate total bill amount
// 2. Calculate total tax amount
// 3. Calculate total payable amount
// Return these three details as object

// Output: {totalAmount: XXXX, taxAmount: YYYY, billAmount: PayableAmount}

let Input = [2.5,2.5, 5, 450, 700, 850];
function data(CGST,SGST,IGST,...amount) {
     totalamount=amount.reduce((accumulator,currentvalue)=>accumulator+currentvalue)
     totaltax=CGST+SGST+IGST
     taxAmount=totaltax*totalamount/100
     billamount=totalamount+taxAmount
    }
data(2.5,2.5, 5, 450, 700, 850)
let output={totalamount,taxAmount,billamount}
console.log(output);



