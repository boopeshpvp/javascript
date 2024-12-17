const arr=[1,2,3,4]

let res=arr.map((data)=>{
    return data*2
})
console.log("res",res);

let array=[
{key:1,value:10},
{key:2,value:20},
{key:3,value:30}
]
let newArray=array.map((data)=>{
    return {[data.key]:data.value}})
    console.log(newArray);