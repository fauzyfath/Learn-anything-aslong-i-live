function promptMethod(){
    let person  = prompt("please enter your name!", "soemone");
    if(person != null ){
        document.getElementById("demo").innerHTML = "hello " + person +"! how are you today?";
   }   //this show pop up prompt just like button or modal
}

