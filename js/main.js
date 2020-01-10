// output

document.write("<h1>Hello Js </h1>");
document.write("1+2=" , 1+2);

console.log("asdjkgasjk"); // Test

var btn1 = document.getElementById("btn"); 
var div = document.getElementById("demo");

function code() {
    div.innerHTML = "Hello Js";
}

btn1.addEventListener("click", code);

var x = 20;
var y = "hamza";

var x = 2;

x++ ;

if(x == 3) {
    console.log("yes")
}
else {
    console.log("no")
}

var n = 0;
var ads = document.getElementById("ads")
ads.onclick = function() {
    n++;  
    if(n == 3 ){
        ads.style.display = "none"
    }
}