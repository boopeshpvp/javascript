
let lowest=5;
let highest=30;
for(x=lowest;x<=highest;x++){
  let isPrime=true;
  for(y=2;y<x;y++){
  if(x%y==0){
    isPrime=false;
  }
}
if(isPrime){
  console.log(x+" "+" is prime number");
}
}


