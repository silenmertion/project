const login = document.querySelector("#login-form");

login.addEventListener("submit", (event) => {
  event.preventDefault();

  const shadowBtn = document.querySelector(".shadow");

  const name = document.querySelector("#name");
  const surname = document.querySelector("#surname");

  data = `${name.value} кто бы ты ни был. Извини меня что я сделал такое. ${surname.value} надеюсь тебе удобно этим пользовавться`;

  document.querySelector(".user-info").innerHTML = data;
  document.querySelector(".page-wrap").classList.add("none");
  document.querySelector(".cabinet").classList.remove("none");
  document.querySelector(".page-wrap").classList.add("none");
  login.classList.remove("flex");
  shadowBtn.classList.remove("block");
});
