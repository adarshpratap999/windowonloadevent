window.onload = function () {


var body = document.getElementById("body");
var buttton = document.getElementById("button");
buttton.onclick = function () {
    if(body.class == "black") {
        body.className = "white";
        buttton.className = "black" ;
    } else {
          body.className = "black";
          buttton.className = "white" ;
    }
};
};
