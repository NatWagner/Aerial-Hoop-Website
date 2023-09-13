function darkMode() {
  let body = document.querySelector("body");

  body.classList.toggle("dark");
}

let themeButton = document.querySelector(".theme-button");
themeButton.addEventListener("click", darkMode);
