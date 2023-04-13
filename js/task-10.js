function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const textInput = document.querySelector('[type="number"]');
console.log
const btnCreate = document.querySelector("[data-create]");
const btnDestroy = btnCreate.nextElementSibling;
const newEl = document.querySelector('#boxes');
const formEl = document.querySelector("#controls");
const minValue = Number(textInput.getAttribute('min'));
const maxValue = Number(textInput.getAttribute("max"));
const step = Number(textInput.getAttribute("step"));

const createBoxes = () => {
  const amount = Number(textInput.value);
  let arrElements = "";
  console.log(amount, typeof (amount));

  if (amount >= minValue && amount <= maxValue) {
    for (let i = 1; i <= amount; i += step) {

      console.log(i);
      let createBoxSize = i * 10 + 30;

      const markup = `<div style="background: ${getRandomHexColor()}; width:${createBoxSize}px; height:${createBoxSize}px"></div>`;
      console.log(markup);
      arrElements += markup;
    };

    newEl.insertAdjacentHTML("beforeend", arrElements);
  } else {
    textInput.value = "";
    alert("Введіть число від 1 до 100");
  };
};


btnCreate.addEventListener("click", createBoxes);
btnDestroy.addEventListener('click', () => {
  newEl.innerHTML = "";
  textInput.value = "";
});