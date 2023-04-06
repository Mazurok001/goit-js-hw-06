let counterValue = 0;

const btnCons = document.querySelector("#counter").firstElementChild;
const btnPros = document.querySelector("#counter").lastElementChild;
const valueEl = document.querySelector('#value');

const handleClickBtnCons = () => {
  counterValue -= 1;
  valueEl.textContent = counterValue;
};

const handleClickBtnPros = () => {
  counterValue += 1;
  valueEl.textContent = counterValue;
};

btnCons.addEventListener("click", handleClickBtnCons);

btnPros.addEventListener("click", handleClickBtnPros);
