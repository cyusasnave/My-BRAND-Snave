document
  .getElementById("mySignInForm")
  .addEventListener("submit", async function (event) {
    event.preventDefault();

    // const name = document.getElementById("signInName").value.trim();
    // const email = document.getElementById("signInEmail").value.trim();
    // const password = document.getElementById("SignInPassword").value.trim();
    // const confirmPassword = document
    //   .getElementById("signInConfirmPassword")
    //   .value.trim();
    const result = document.getElementById("validationContainer");

    const form = document.getElementById("mySignInForm");
    const loader = document.getElementById("loader-container");

    function showLoader() {
      loader.style.display = "flex";
    }
    function hideLoader() {
      loader.style.display = "none";
    }


    const formData = new FormData(form);
    const data = Object.fromEntries(formData);

    console.log(JSON.stringify(data));

    try {
      showLoader();
      const response = await fetch(
        "https://mybrand-be-asyh.onrender.com/api/users/register",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );

      const returnedData = await response.json();
      console.log(returnedData.status);
      if (returnedData.status === "Fail") {
        result.style.display = "flex";
        result.innerHTML = returnedData.message;
        hideLoader();
        return;
      }

      if (returnedData.status === "Conflict") {
        result.style.display = "flex";
        result.innerHTML = returnedData.message;
        hideLoader();
        return;
      }

      if (returnedData.status === "Success") {
        hideLoader();
        console.log(returnedData.user)
        form.reset();
        window.location.href = "../HTML/logIn.html";
        return;
      }
    } catch (error) {
      console.log(error);
      document.write("<div>Something went wrong</div>");
      hideLoader();
      return;
    }

    // const nameRegex = /^[a-zA-Z -]{2,}$/;
    // const emailRegex = /^[\w-]+(?:\.[\w-]+)*@(?:[\w-]+\.)+[a-zA-Z]{2,7}$/;
    // const passwordRegex =
    //   /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    // if (name === "") {
    //   result.style.display = "flex";
    //   result.innerHTML =
    //     "Name field cannot be empty!";
    //   return;
    // }
    // if (!nameRegex.test(name)) {
    //   result.style.display = "flex";
    //   result.innerHTML = "Name field cannot include number and special characters!";
    //   return;
    // }
    // if (email === "") {
    //   result.style.display = "flex";
    //   result.innerHTML = "Email field cannot be empty!";
    //   return;
    // }
    // if (!emailRegex.test(email)) {
    //   result.style.display = "flex";
    //   result.innerHTML = "Invalid Email!";
    //   return;
    // }
    // if (password === "") {
    //   result.style.display = "flex";
    //   result.innerHTML = "Password field cannot be empty!";
    //   return;
    // }
    // if (!passwordRegex.test(password)) {
    //   result.style.display = "flex";
    //   result.innerHTML =
    //     "Password should contain at least capital letter, small letters, a number and a special character.";
    //     return;
    // }
    // if (confirmPassword === "") {
    //   result.style.display = "flex";
    //   result.innerHTML = "Please! Re-enter your password!";
    //   return;
    // }
    // if (password !== confirmPassword) {
    //   result.style.display = "flex";
    //   result.innerHTML = "Password don't match!";
    //   return;
    // } else {
    //   event.target.submit();
    // }
  });
