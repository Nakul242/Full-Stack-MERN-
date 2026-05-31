// Task => was to make a input field and jo bhi usme type ho use console par print karna 
let inp = document.querySelector("input");

inp.addEventListener("input", function(details) {
    if (details.data != null) {
        console.log(details.data);
    }
});