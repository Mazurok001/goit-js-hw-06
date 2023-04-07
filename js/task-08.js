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

  const info = {
    email: email.value,
    password: password.value,
  };
  console.log(info);
  event.currentTarget.reset();
};