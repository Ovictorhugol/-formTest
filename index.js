document.querySelector("form").addEventListener("submit", (event) => {
  getValues();
  testValues();

  // document.getElementById("container").style.display = "none";
  // document.getElementById("containerLogin").style.display = "flex";

  event.preventDefault();
});

console.log();

document.querySelector("formSuccess").addEventListener("submit", (e) => {
  e.preventDefault();

  document.getElementById("containerLogin").style.display = "none";
  document.getElementById("container").style.display = "flex";
});

function getValues() {
  var name = document.getElementById("name").value;
  localStorage.setItem("name", name);

  var email = document.getElementById("email").value;
  localStorage.setItem("email", email);

  var phone = document.getElementById("phone").value;
  localStorage.setItem("phone", phone);

  var password = document.getElementById("password").value;
  localStorage.setItem("password", password);

  var birthday = document.getElementById("birthday").value;
  localStorage.setItem("birthday", birthday);
}

function testValues() {
  var regexName = /^[a-zA-Z]{4,}(?: +[a-zA-Z]{0,})$/;
  if (!regexName.test(localStorage.getItem("name")))
    document.getElementById("nameInvalid").style.display = "flex";
  else document.getElementById("nameInvalid").style.display = "none";

  var regexEmail = /[a-z.@0-9]/;
  if (!regexEmail.test(localStorage.getItem("email")))
    document.getElementById("emailInvalid").style.display = "flex";
  else document.getElementById("emailInvalid").style.display = "none";
  var regexPhone = /[0-9]{1,11}/;

  if (!regexPhone.test(localStorage.getItem("phone")))
    document.getElementById("phoneInvalid").style.display = "flex";
  else document.getElementById("phoneInvalid").style.display = "none";

  var regexPasswords = /^[0-9]{6,9}$/;

  if (!regexPasswords.test(localStorage.getItem("password")))
    document.getElementById("passwordInvalid").style.display = "flex";
  else document.getElementById("passwordInvalid").style.display = "none";

  var regexBirthday = /^\d{4}-\d{1,2}-\d{1,2}$/;

  if (!regexBirthday.test(localStorage.getItem("birthday")))
    document.getElementById("ageInvalid").style.display = "flex";
  else document.getElementById("ageInvalid").style.display = "none";

  if (!document.querySelector("#checkbox").checked) {
    document.getElementById("checkboxInvalid").style.display = "flex";
  } else document.getElementById("checkboxInvalid").style.display = "none";
}

function maskPhone() {
  var phoneMask;

  const phone = document.getElementById("phone").value;
  phoneMask = phone.replace(/^(\d{2})?(\d{5})?(\d{4})$/, "($1)$2-$3");
  document.getElementById("phone").value = phoneMask;
}
