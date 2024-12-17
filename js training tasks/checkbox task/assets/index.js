function Check() {
    let Check = document.getElementsByName("checkBox")
    for (let i = 0; i < Check.length; i++) {
        Check[i].checked = true;
    }

}
function unCheck() {
    let Check = document.getElementsByName("checkBox")
    for (let i = 0; i < Check.length; i++) {
        Check[i].checked = false;
    }
}
function alternateCheck(){
    let Check = document.getElementsByName("checkBox")
    for (var i = 0; i < Check.length; i++) {
          if(  Check[i].checked == true){
            Check[i].checked = false;
          }
        else if( Check[i].checked == false){
            Check[i].checked = true;
          }
    }
   
}





