function registration(event) {
  var userEmail = document.getElementById('email');
  var userPass = document.getElementById('password');
  var userPassCheck = document.getElementById('password_repeat');
  var userAgreement = document.getElementById('check_agreement');
  var emailCheck = (/[^\s@]+@[^\s@]+\.[^\s@]+/.test(userEmail.value));

  event.preventDefault();
  if ((userEmail.value == "") || (userPass.value == "") || (userPassCheck.value == "")) {
    alert("Ошибка ввода.");
    return;
  } else {
    if ((userEmail.value.length < 5) || (!emailCheck)) {
      alert("Ошибка ввода Email.");
      return;
    }

    if ((userPass.value.length < 6) || (userPass == "") || (userPassCheck == "")) {
      alert("Ошибка ввода пароля");
      return;
    }

    if (userPass.value != userPassCheck.value) {
      alert("Пароли должны совпадать");
      return;
    }

    if (!userAgreement.checked) {
      alert("Вы должны принять пользовательское соглашение");
      return;
    }

    alert("Регистрация успешна");
  }
}

window.onload = function () {
  document.getElementById("registration-form").addEventListener("submit", registration);
};