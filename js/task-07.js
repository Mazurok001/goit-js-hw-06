const inputEl = document.querySelector("#font-size-control");
const spanEl = document.querySelector('#text');

// рядок нижче був доданий щоб не було різкого перепаду шрифта при змфщенні 'range'
spanEl.style.fontSize = `${inputEl.value}px`;

const handleChangeFontSize = function ()  {
  spanEl.style.fontSize = `${inputEl.value}px`;
};

inputEl.addEventListener('input', handleChangeFontSize);

