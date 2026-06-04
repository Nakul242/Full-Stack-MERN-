// let box1 = document.querySelector(".box1");
// let box2 = document.querySelector(".box2");
// let box3 = document.querySelector(".box3");
// let button = document.querySelector("button");

// box1.addEventListener("click", function(e) {
//     console.log("box1 clicked ");
// },true)

// box2.addEventListener("click", function(e) {
//     console.log("box2 clicked ");
// })

// box3.addEventListener("click", function(e) {
//     console.log("box3 clicked ");
// },true)

// button.addEventListener("click", function(e) {
//     console.log("button clicked ");
// })

// // My way 
// let inp = document.querySelector("input");
// let h3 = document.querySelector("h3");
// let count = 0;

// inp.addEventListener("input", function(e) {
//     if(e.data !== null) {
//         count++;
//     }
//     else {
//         count--;
//     }

//     if ( count >= 20) {
//         h3.style.color = "red";
//     }
//     else {
//         h3.style.color = "white";
//     }

//     h3.textContent = "Char count = " + count;
// })


// Better way
let inp = document.querySelector("input");
let span = document.querySelector("span");

inp.addEventListener("input", function(e) {
    let left = 20 - inp.value.length;
    span.textContent = left;

    if( left < 0) {
        span.style.color = "red";
    }
    else {
        span.style.color = "white";
    }
})