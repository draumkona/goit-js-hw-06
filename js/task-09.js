const btn = document.querySelector(".change-color");
const span = document.querySelector(".color");
const body = document.body;

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
};

body.style.backgroundColor = "#fff";
span.textContent = body.style.backgroundColor;

btn.addEventListener("click", () => {
  body.style.cssText = `background-color: ${getRandomHexColor()}`
  span.textContent = `${getRandomHexColor()}`;
});

