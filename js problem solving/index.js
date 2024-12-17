// sum of two numbers

// function addition(x,y){
//     return x+y
// }
// console.log(addition(10,20))

// find maximum number in array

// const arr=[255,10,5,455,20,7,34,22]
//inbuild

// arr.sort(function (a,b){return a-b})
// const result=arr[arr.length-1]
// console.log(result)

//without inbuild
// function maxNumber(arr){
// let large=arr[0]
// for(i=0;i<arr.length;i++){
//     if(arr[i]>large){
//         large=arr[i]
//     }
// }
// return large;
// }
// console.log(maxNumber(arr))


// Check palindrome or not(forwards and backward same)
// const result="madam"

// build in method
// const opt=result.split('').reverse().join('')
// if(result === opt){
//     console.log("String is palindrome")
// }
// else{
//     console.log("String is not palindrome")
// }

// without inbuild
// let text='';
// let lastData=result.length-1
// for(x of result){
//     if(x!==result[lastData]){
//         text=false;
//     }
//     else{
//         text=true
//     }
//     lastData--
// }
// console.log(text)


// function palindrome(str){
//     let res='';
//     let las='';
//     for(i=0;i<str.length;i++){
//         res+=str[i]
//     }
//     for(j=str.length-1;j>=0;j--){
//         las+=str[j]
//     }
//   if(res===las){
//       console.log('str is palindrome')
//   }
//   else{
//        console.log('str is not palindrome')
//   }
// }
// palindrome('madam')

// reverse a string
// let str="gamer"

// buildin method
// const reverseStr=str.split('').reverse().join('')
// console.log(reverseStr)

//wthout buildin
// let index=str.length-1
// let result='';
// for(x of str){
//     x=str[index];
//     index--;
//     result+=x
// }
// console.log(result)


// Write a JavaScript function that takes an array of numbers and returns a new array with only the even numbers. 
// let arr=[1,2,3,4,5,6,7,8]
// function getevenNumber(num){
//     let output=[];
//   for (let i=0;i<num.length;i++){
//       if(num[i]%2===0){
//           output=[...output,num[i]]
//       }
//   }
//   return output
// }
// console.log(getevenNumber(arr))

// const output=arr.filter((data)=>{
//     return data%2===0
// })
// console.log(output)












