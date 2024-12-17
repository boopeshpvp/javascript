const numbers = [1, 2, 3, 4, 5, 6];

const result = numbers.filter((number) =>{
 return number>3
})
console.log(result);

const words = ['one', 'three', 'five', 'eleven', 'twenty', 'hundred'];

const word = words.filter(word =>{
    return word.length>3 
})

console.log(word);
