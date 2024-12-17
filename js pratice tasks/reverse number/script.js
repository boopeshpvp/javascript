
   const reverse=()=>{
    let a = document.getElementById("reverse").value;
    
    let sum=0;
    while(a > 0)
    {
     let b = a % 10;
      sum = sum * 10 + b;
      console.log("sum",sum);
      a = parseInt(a / 10);
    }
    console.log((sum));
}
reverse()

