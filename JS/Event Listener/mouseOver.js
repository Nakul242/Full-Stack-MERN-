let box = document.querySelector(".box");

box.addEventListener("mouseover", function(e) {
    box.style.backgroundColor = "yellow";
});

box.addEventListener("mouseout", function() {
    box.style.backgroundColor = "red";
})