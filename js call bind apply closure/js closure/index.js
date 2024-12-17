function outer(){
    const count=10
    function inner(){
       return count
    }
console.log(inner())
    
}
outer()