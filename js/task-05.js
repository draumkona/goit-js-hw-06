const areaInput = document.querySelector("#name-input");
const output = document.querySelector("#name-output");

areaInput.addEventListener("input", (event) => {
    if (event.currentTarget.value === "") {
        output.textContent = "Anonymous";
    }
   else {
        output.textContent = event.currentTarget.value;
    };       
});