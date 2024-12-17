// shallow copy & deep copy

//shallow copy

// let a=10
// let b=a
// b=30
// console.log(a)
// console.log(b);

// let a=[1,2,3,4]
// let b=a
// b[2]=10

// console.log(a)
// console.log(b)

//deep copy

// let a=[1,2,3,4]
// let b=[...a]
// b[2]=10
// console.log(a)
// console.log(b)

// let a=[1,2,3,4]
// let b=Object.assign([],a)
// b[2]=10
// console.log(a)
// console.log(b)

// let a=[{firstname:"boopesh",lastname:"t"}]
//     let b=JSON.parse(JSON.stringify(a))
//     b[0].firstname="king"
//     console.log(a)
//     console.log(b)