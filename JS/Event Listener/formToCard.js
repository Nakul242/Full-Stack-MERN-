let form = document.querySelector("form");
let inputs = document.querySelectorAll("input");
let main = document.querySelector(".main");

form.addEventListener("submit", function(details) {
    details.preventDefault();
    // console.log(details.target[0].value);
    // console.log(inputs[1].value);

    let card = document.createElement("div");
    card.classList.add("card");

    let profile = document.createElement("div");
    profile.classList.add("profile");

    let img = document.createElement("img");
    img.setAttribute("src",inputs[3].value);

    let h3 = document.createElement("h3");
    h3.textContent = inputs[0].value;

    let h5 = document.createElement("h5");
    h5.textContent = inputs[1].value;

    let p = document.createElement("p");
    p.textContent = inputs[2].value;

    profile.append(img);
    card.append(profile);

    card.append(h3);
    card.append(h5);
    card.append(p);

    main.append(card);

});


