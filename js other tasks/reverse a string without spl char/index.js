const data='abc*&egh$dnh#@qwe'

const splcharRegex=/[a-zA-Z 0-9.]+$/
let string=''
for (i=0;i<data.length;i++){
    if(!data[i].match(splcharRegex)){
        continue;
    }
    else{
      string+=data[i]  
    }
}

const reverseString=string.split('')
reverseString.reverse()
const output=reverseString.join('')
let result=''
let index=0
for(i=0;i<data.length;i++){
    if(!data[i].match(splcharRegex)){
        result+=data[i]
    }
    else{
        result+=output[index]
        index++
    }
}
console.log(result)