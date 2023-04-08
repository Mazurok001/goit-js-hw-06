function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const textInput = document.querySelector('[type="number"]');
const btnCreate = document.querySelector("[data-create]");
const btnDestroy = btnCreate.nextElementSibling;
const newEl = document.querySelector('#boxes');

btnCreate.addEventListener("click", createBoxes);
btnDestroy.addEventListener('click', () => { newEl.innerHTML = ""; });

function createBoxes() {
  const amount = textInput.value;
  for (let i = 0; i < amount; i += 1) {
    let createBoxSize = i * 10 + 30;

    const markup = `<div style="background:${getRandomHexColor()};width:${createBoxSize}px;height:${createBoxSize}px"></div>`;

    newEl.insertAdjacentHTML('afterbegin', markup);

  };
};

