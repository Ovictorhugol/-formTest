import home from "./pages/home/index";

const main = document.querySelector("#root");

window.addEventListener("load", () => {
  main.appendChild(home());
});
