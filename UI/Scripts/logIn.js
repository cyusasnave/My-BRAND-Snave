const logInForm = document.getElementById("myLogInForm");
logInForm.addEventListener("submit", async (event) => {
  event.preventDefault();

  // const email = document.getElementById("LogInEmail").value.trim();
  // const password = document.getElementById("LogInPassword").value.trim();
  const result = document.getElementById("LogInvalidationContainer");

  // const form = document.getElementById("mySignInForm");
  const loader = document.getElementById("loader-container");

  function showLoader() {
    loader.style.display = "flex";
  }
  function hideLoader() {
    loader.style.display = "none";
  }

  const formData = new FormData(logInForm);
  const data = Object.fromEntries(formData);

  try {
    showLoader();

    const response = await fetch('https://mybrand-be-asyh.onrender.com/api/users/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    });

    const returnedData = await response.json();

    if (returnedData.status === 'Unauthorized') {
      result.style.display = 'flex';
      result.innerHTML = returnedData.message;
      hideLoader();
      return;
    }

    localStorage.setItem('token', returnedData.token);

    if (returnedData.status === 'Success') {
      // window.location.href = '../index.html'
      const logInResponse = await fetch('https://mybrand-be-asyh.onrender.com/api/users/loggedInUser', {
        headers: {
          'Authorization': `Bearer ${returnedData.token}`
        }
      });
      const returnedUser = await logInResponse.json();
      console.log(returnedUser);
      if (returnedUser.user.role === 'Admin') {
        hideLoader();
        formData.reset();
        window.location.href = '../HTML/adminPanel.html'
        return;
      } else {
        hideLoader();
        formData.reset();
        window.location.href = '../index.html';
        return;
      }
    }

    // console.log(returnedData);
  } catch (error) {
    console.log(error)
  }

  // const nameRegex = /^[a-zA-Z -]{2,}$/;
  // const emailRegex = /^[\w-]+(?:\.[\w-]+)*@(?:[\w-]+\.)+[a-zA-Z]{2,7}$/;
  // const passwordRegex =
  //   /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

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
  // } else {
  //   event.target.submit();
  // }
});
