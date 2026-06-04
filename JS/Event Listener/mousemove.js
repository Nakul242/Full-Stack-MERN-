let box = document.querySelector(".box");
let body = document.querySelector("body");

body.addEventListener("mousemove", function(e) {
    console.log(e);
    box.style.top = e.clientY + "px";
    box.style.left = e.clientX + "px";
})