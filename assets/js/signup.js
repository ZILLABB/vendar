const signupForm = document.getElementById("signupForm");
const signupError = document.getElementById("signupError");


signupForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const emailAddress = document.getElementById("inputEmailAddress").value;
  const password = document.getElementById("inputPassword").value;
  const fullname = document.getElementById("inputFullname").value;
  const payload = {
    email: emailAddress,
    password: password,
    fullName: fullname,
  };
  fetch("https://mobile-app-backend-2.fly.dev/api/v1/admin/auth/register", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  })
    .then((response) =>  response.json())
    .then((data) => {
      if (data.status === 200) {
        loginError.innerHTML = "";
        toastr.success("Account created Successful");
        window.location.href = '/index.html'
      } else if (data.errors) {
        signupError.innerHTML = data.errors[0].email;
        toastr.error(data.errors[0].email);
      }
      else {
        signupError.innerHTML = data.message;
        console.log(data.message);
        toastr.error(data.message);
        
      } 
    })
    .catch((error) => console.log(error));
});
