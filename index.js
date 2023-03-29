// console.log("hello world")
var over = document.getElementById("count");
overCount=0
over.addEventListener("mouseover" , function(){
    var countElement= document.getElementById("count")
    overCount += 1
    if(overCount==11){
        overCount =0
    }
    countElement.innerHTML = overCount;
   
})
var over = document.getElementById("enter");
overCount=0
over.addEventListener("mouseenter" , function(){
    var countElement= document.getElementById("enter")
    overCount += 1
    if(overCount==11){
        overCount =0
    }
    countElement.innerHTML = overCount;
   
})
var over = document.getElementById("move");
overCount=0
over.addEventListener("mousemove" , function(){
    var countElement= document.getElementById("move")
    overCount += 1
    if(overCount==11){
        overCount =0
    }
    countElement.innerHTML = overCount;
   
})