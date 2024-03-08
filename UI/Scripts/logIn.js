document
  .getElementById("myLogInForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const email = document.getElementById("LogInEmail").value.trim();
    const password = document.getElementById("LogInPassword").value.trim();
    const result = document.getElementById("LogInvalidationContainer");

    const nameRegex = /^[a-zA-Z -]{2,}$/;
    const emailRegex = /^[\w-]+(?:\.[\w-]+)*@(?:[\w-]+\.)+[a-zA-Z]{2,7}$/;
    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    if (email === "") {
      result.style.display = "flex";
      result.innerHTML = "Email field cannot be empty!";
      return;
    }
    if (!emailRegex.test(email)) {
      result.style.display = "flex";
      result.innerHTML = "Invalid Email!";
      return;
    }
    if (password === "") {
      result.style.display = "flex";
      result.innerHTML = "Password field cannot be empty!";
      return;
    } else {
      event.target.submit();
    }
  });
