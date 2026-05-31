// Task => drop down me jo bhi options select ho use h1 me show karna hai

let select = document.querySelector("select");
let h1 = document.querySelector("h1");

select.addEventListener("change", function(details) {
    // console.log(details);
    h1.textContent = ` ${details.target.value} language Selected`;
    // console.log(details.srcElement.value);
});