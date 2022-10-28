const btn = document.querySelector(".change-color");
const span = document.querySelector(".color");
const body = document.body;

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
};

btn.addEventListener("click", () => {
  body.style.cssText = `background-color: ${getRandomHexColor()}`
  span.textContent = `${getRandomHexColor()}`;
});