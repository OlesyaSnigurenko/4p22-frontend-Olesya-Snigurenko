"use strict";

const formRegistration = document.getElementById("form");

formRegistration.addEventListener("submit", (event) => {
  event.preventDefault();
  const [email, password, verification] = formRegistration.querySelectorAll(".form__input");
  let [errorEmail, errorPassword, errorVerification] = formRegistration.querySelectorAll(".form__error");

  [email.style.borderColor, password.style.borderColor, verification.style.borderColor] = [
    "#EE2424",
    "#EE2424",
    "#EE2424",
  ];

  const formEmail = document.getElementById("email").value;
  function validateEmail(formEmail) {
    const re =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(formEmail).toLowerCase());
  }

  if (!email.value.trim()) {
    errorEmail.innerHTML = "Поле обязательно для заполнения";
  } else if (!validateEmail(formEmail)) {
    errorEmail.innerHTML = "Email введён некорректно";
  } else {
    errorEmail.innerHTML = "";
    email.style.borderColor = "#787878";
  }

  if (!password.value.trim()) {
    errorPassword.innerHTML = "Поле обязательно для заполнения";
  } else if (password.value.trim().length < 8) {
    errorPassword.innerHTML = "Пароль должен содержать не менее 8 символов";
  } else {
    errorPassword.innerHTML = "";
    password.style.borderColor = "#787878";
  }

  if (!verification.value.trim() || password.value !== verification.value) {
    errorVerification.innerHTML = "Пароли не совпадают";
  } else {
    errorVerification.innerHTML = "";
    verification.style.borderColor = "#787878";
  }

  if (errorEmail.innerHTML + errorPassword.innerHTML + errorVerification.innerHTML === "") {
    const formData = new FormData(formRegistration);
    const result = {
      email: formData.get("email"),
      password: formData.get("password"),
      verification: formData.get("verification"),
      gender: formData.get("gender"),
      textarea: formData.get("textarea"),
      checkbox: formData.get("checkbox"),
    };
    console.log(result);
  }
});
