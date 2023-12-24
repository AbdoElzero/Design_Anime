
let wtach = document.querySelector(".wtach .container .esp");

for (let i = 1; i <= 62; i++) {

    let div = document.createElement("div");
    let text = document.createTextNode(`Ep 0${i}`)
    div.classList = "down"
    div.style.textAlign = "center"
    div.appendChild(text)
    wtach.appendChild(div)

    if (i > 9) {
        div.textContent = `Ep ${i}`
    }
};
