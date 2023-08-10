const loginForm = document.getElementById("loginForm");

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
    .then((data) => console.log(data))
    .catch((error) => console.log(error));
});
