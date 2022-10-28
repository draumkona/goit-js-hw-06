const inputSelector = document.querySelector("#font-size-control");
const text = document.querySelector("#text");

inputSelector.addEventListener("input", (event) => {
    const actualSize = event.currentTarget.value;
    text.style.fontSize = actualSize + "px";
})