function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const bgBody = document.querySelector('body');
const valueColor = document.querySelector('.color');
const btnChangeColor = document.querySelector('.change-color');

btnChangeColor.addEventListener('click', () => { const hexColor = getRandomHexColor();
  valueColor.textContent = hexColor;

  bgBody.style.backgroundColor = `${hexColor}`;
});