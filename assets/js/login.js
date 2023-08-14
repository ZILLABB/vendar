const loginForm = document.getElementById("loginForm");
const loginError = document.getElementById("loginError");

loginForm.addEventListener("submit", function (event) {
  event.preventDefault();
  const emailAddress = document.getElementById("loginEmailAddress").value;
  const password = document.getElementById("loginPassword").value;
  const payload = {
    email: emailAddress,
    password: password,
  };
  fetch("https://mobile-app-backend-2.fly.dev/api/v1/admin/auth/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  })
    .then((response) => response.json())
    .then((data) => {
      if (data.status === 200) {
        loginError.innerHTML = "";
        toastr.success("Login Successful");
        window.location.href = "dashboard.html";
      } else if (data.errors) {
        loginError.innerHTML = data.errors[0].email;
        toastr.error(data.errors[0].email);
      } else {
        loginError.innerHTML = data.message;
        console.log(data.message);
        toastr.error(data.message);
      }
    })
    .catch((error) => console.log(error));
});
