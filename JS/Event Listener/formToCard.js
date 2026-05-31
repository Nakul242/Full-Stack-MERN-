let form = document.querySelector("form");
let inputs = document.querySelectorAll("input");

form.addEventListener("submit", function(details) {
    details.preventDefault();
    // console.log(details.target[0].value);
    console.log(inputs[1].value);

});


