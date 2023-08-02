// Add your code to this file
let names= document.getElementsByClassName("pokemon_names");
let body = document.querySelector("body");
let h2 = document.querySelector("h2");
let h1 = document.querySelector("h1");
let imgarray = document.querySelectorAll("img");

document.querySelector("h2").innerHTML = "Here are Pokemon's incredible Gen 1 starters!";
body.style["background-color"] = "blue";
h2.style.textAlign = "center";
h1.style.textDecoration = "underline";

for (i=0;i<imgarray.length;i++){
    imgarray[i].style.border = "thick dotted #FFFF00";
}

for (i=0;i<names.length;i++){
    names[i].style["color"]="yellow";
    names[i].textContent += "!";
}


