const textInput = document.querySelector('[data-length="6"]');

// Чому не відпрацьовує тернарник?

// textInput.addEventListener('blur', () => {
//   textInput.value.trim().length === Number(textInput.dataset.length)
//     ? textInput.classList.add("valid") && textInput.classList.remove("invalid")
//     : textInput.classList.add("invalid") && textInput.classList.remove("valid");
// });



textInput.addEventListener("blur", () => {
  if (textInput.value.trim().length === Number(textInput.dataset.length)) {
    textInput.classList.add("valid");
    textInput.classList.remove("invalid");
  } else {
    textInput.classList.add("invalid");
    textInput.classList.remove("valid");
  }
});
