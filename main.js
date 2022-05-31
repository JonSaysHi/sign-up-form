let button = document.querySelector("#form");

function verifyPassword() {
  let password = document.querySelector("#password");
  let confirmpassword = document.querySelector("#confirm-password");

  if (password != confirmpassword) {
    document.querySelector("#button").disabled = true;
    alert("Password did not match");
  } else {
    document.querySelector("#button").disabled = false;
  }
}

form.addEventListener("submit", verifyPassword);
