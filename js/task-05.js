const output = document.querySelector("#name-output");
const textInput = document.querySelector("#name-input");

// textInput.addEventListener("input", (event) => {
//   if (textInput.value.trim() === '') {
//     return output.textContent = 'Anonymous'
//   };
//   return output.textContent = event.currentTarget.value ;
// });

textInput.addEventListener("input", (event) => {
  textInput.value.trim() === '' ? output.textContent = 'Anonymous' : output.textContent = event.currentTarget.value;
});