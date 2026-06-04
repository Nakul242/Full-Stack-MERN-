// let nav = document.querySelector("nav");

// nav.addEventListener("click", function(e) {
//     alert("clicked");
// })


// let ul = document.querySelector("ul");

// ul.addEventListener("click", function(e) {
//     e.target.classList.toggle("lt");
// })


let box1 = document.querySelector(".box1");
let box2 = document.querySelector(".box2");
let box3 = document.querySelector(".box3");
let button = document.querySelector("button");

box1.addEventListener("click", function(e) {
    console.log("box1 clicked ");
})

box2.addEventListener("click", function(e) {
    console.log("box2 clicked ");
})

box3.addEventListener("click", function(e) {
    console.log("box3 clicked ");
})

button.addEventListener("click", function(e) {
    console.log("button clicked ");
})
