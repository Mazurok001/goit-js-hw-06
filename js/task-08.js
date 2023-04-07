const loginForm = document.querySelector(".login-form");
// console.log(loginForm);

loginForm.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  event.preventDefault();

  const {
    elements: { email, password },
  } = event.currentTarget;

  if (email.value.trim() === "" || password.value.trim() === "") {
    return alert("Заповніть поля");
  }

  const data = {
    [email.name]: email.value,
    [password.name]: password.value,
  };
  console.log(data);

  event.currentTarget.reset();
};