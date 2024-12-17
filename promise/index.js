// const promise=new Promise((resolve,reject)=>{
//    resolve(
//        fetch('https://dummyjson.com/products/1')
//        .then((response)=>response.json())
//        .then((res)=>res)
//    ) 
// })
// .then((res)=>{
//     console.log("ress",res)
// })
// .catch((error)=>{
//     console.log(error)
// })

const promise=async()=> {
    try {
        const result=await fetch('https://dummyjson.com/products/1')
        const data=await result.json()
        console.log('data',data)
    } catch (error) {
        console.log('err',error)
    }
}
promise()


