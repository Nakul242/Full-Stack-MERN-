// Task => screen par kuchh bhi type kare to vo h1 me show hona chahiye
let h1 = document.querySelector("h1");
let body = document.querySelector("body");

body.addEventListener("keydown", function(details) {  // you can also directly select window here instead of body
    // console.log(details);
    if (details.key === ' ') {
        h1.textContent = "space";
    }
    else {
        h1.textContent = details.key;
    }
});


// Task 2 => input file ko display none karke apni custom button banana hai jis par click karo to input file click ho jaye.
// And jo file select karo uska name hamare button ke text me show ho

let btn = document.querySelector(".btn");
let inp = document.querySelector("input");

btn.addEventListener("click" , function(details) {
    inp.click();
});

inp.addEventListener("change", function(details) {
    let val = details.srcElement.files[0];

    if (val) {
        btn.textContent = val.name;
    }
    // console.log(details.srcElement.files[0].name);
})