const checkNumber=()=>{
    let Num=document.getElementById("number").value

    if(Num==0){
        document.getElementById("demo").innerHTML=Num +" "+ "is neither negative nor positive"
    }
    if(Num>0){
        document.getElementById("demo").innerHTML=Num +" "+ "is positive number"
    }
    if(Num<0){
        document.getElementById("demo").innerHTML=Num +" "+ "is negative number"
    }
}