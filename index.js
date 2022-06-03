document.querySelector("form").addEventListener("submit", (event) => {
  event.preventDefault();

  document.getElementById("container").style.display = "none";
  document.getElementById("containerLogin").style.display = "flex";
});

document.querySelector("formSuccess").addEventListener("submit", (event) => {
  event.preventDefault();

  document.getElementById("containerLogin").style.display = "none";
  document.getElementById("container").style.display = "flex";
});
