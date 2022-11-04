const inputSelector = document.querySelector("#font-size-control");
const text = document.querySelector("#text");
text.style.fontSize = inputSelector.value + "px";

inputSelector.addEventListener("input", (event) => {
    const actualSize = event.currentTarget.value;
    text.style.fontSize = actualSize + "px";
});

