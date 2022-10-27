const textArea = document.querySelector("#validation-input");
const textLength = textArea.dataset.length;


textArea.addEventListener("blur", () => {
    if (textArea.value.length == textLength) {
        textArea.classList.add("valid")
        textArea.classList.remove("invalid")
    }
    else {
        textArea.classList.add("invalid")
        textArea.classList.remove("valid")
    };
});