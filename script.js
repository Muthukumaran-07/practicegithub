const h1 = document.querySelector("h1");

h1.addEventListener("click", (event) => {
    let colorChange = event.target;
    colorChange.style.color = "black";
})