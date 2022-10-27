const counter = document.querySelector("#counter");
const plusButton = counter.querySelector('[data-action="increment"]');
const minusButton = counter.querySelector('[data-action="decrement"]');
let value = counter.querySelector("#value");

let counterValue = 0;

const addValue = () => {
    counterValue += 1;
    value.textContent = counterValue;
};

const removeValue = () => {
    counterValue -= 1;
    value.textContent = counterValue;
};

plusButton.addEventListener("click", addValue);

minusButton.addEventListener("click", removeValue);