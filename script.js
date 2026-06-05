//your JS code here. If required.
const form = document.getElementById("signup-form");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const confirmPassword =
    document.getElementById("confirm-password").value;

  if (password === confirmPassword) {
    sessionStorage.setItem("name", name);
    sessionStorage.setItem("email", email);
    sessionStorage.setItem("password", password);

    alert("Sign up successful!");
  } else {
    alert("Passwords do not match");
  }
});