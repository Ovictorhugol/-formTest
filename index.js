document.querySelector(".form").addEventListener("submit", (event) => {
  event.preventDefault();
  console.log("teste");
  document.getElementById("login").style.display = "none";
  document.getElementById("success").style.display = "flex";

  // if (display == "none") {
  //   succes.style.display = "flex";
  //   login.style.display = "none";
  // } else {
  //   succes.style.display = "none";
  // }
  console.log(document.querySelector(".containerLogin"));
});

document
  .querySelector(".containerLogin")
  .addEventListener("submit", (event) => {
    console.log("teste");
    // document.getElementById("login").style.display = "flex";
    // document.getElementById("success").style.display = "none";

    // if (display == "none") {
    //   succes.style.display = "flex";
    //   login.style.display = "none";
    // } else {
    //   succes.style.display = "none";
    // }
    // console.log("teste");
  });

// function changeDisplayScreen() {
//   var login = document.getElementById("#login");
//   var succes = document.getElementById("#succes");

//   var display = succes.style.display;
//   if (display == "none") {
//     succes.style.display = "flex";
//     login.style.display = "none";
//   } else {
//     succes.style.display = "none";
//   }
//   console.log("teste");
// }
