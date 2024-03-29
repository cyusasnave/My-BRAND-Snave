// Blog/Articles validations
const addArticle = document.getElementById("adminArticleForm");
addArticle.addEventListener("submit", async function (event) {
  event.preventDefault();

  const result = document.getElementById("articleValidationForm");
  const loader = document.getElementById("loader-container");
  const responseContainer = document.getElementById('responseContainer');
  const responseDiv =  document.getElementById('result');
  const messageDiv =  document.getElementById('information');

  function showLoader() {
    loader.style.display = "flex";
  }
  function hideLoader() {
    loader.style.display = "none";
  }
  function showFormResultDiv() {
    const errorEl = document.getElementById('form-result-div');
    errorEl.style.display = 'block'; 
    errorEl.classList.remove('bounceRight');
    void errorEl.offsetWidth; 
    errorEl.classList.add('bounceRight'); 
  }

  const formData = new FormData(addArticle);

  const token = localStorage.getItem('token');
  console.log(token)

  try {
    showLoader();
    const response = await fetch('https://mybrand-be-asyh.onrender.com/api/blogs', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${token}`
      },
      body: formData
    });

    const returnedData = await response.json();
    console.log(returnedData);
    if (returnedData.status === '401') {
      hideLoader();
      showFormResultDiv();
      responseContainer.classList.add('red');
      responseDiv.innerHTML = returnedData.message;
      messageDiv.innerHTML = 'Redirecting to login page ...'
      setTimeout(() => {
        window.location.href = '../HTML/logIn.html';
      }, 3000)
      return;
    }

    if (returnedData.status === 'Bad Request') {
      result.style.display = 'flex';
      result.innerHTML = returnedData.message;
      hideLoader();
      return;
    }

    if (returnedData.status === 'Success') {
      hideLoader();
      showFormResultDiv();
      responseContainer.classList.add('green');
      responseDiv.innerHTML = returnedData.message;
      messageDiv.innerHTML = 'Redirecting to Home page ...';
      addArticle.reset();
      setTimeout(() => {
        window.location.href = '../index.html#blogs';
      }, 3000)
      return;
    }
  } catch (error) {
    console.log(error);
  }

  // const image = document.getElementById("imageUpload").files[0];
  // const title = document.getElementById("title").value.trim();
  // const publishDate = document.getElementById("PublishedDate").value;
  // const content = document.getElementById("articleTextarea").value;
  // const result = document.getElementById("articleValidationForm");

  // if (!image || !image.name) {
  //   result.textContent = "Please select an article image!";
  //   result.style.display = "flex";
  //   return;
  // }
  // if (!title) {
  //   result.textContent = "Title field cannot be empty!";
  //   result.style.display = "flex";
  //   return;
  // }
  // if (!publishDate) {
  //   result.textContent = "Please select a publish date!";
  //   result.style.display = "flex";
  //   return;
  // }
  // if (!content) {
  //   result.textContent = "Article content field cannot be empty!";
  //   result.style.display = "flex";
  //   return;
  // }
  // if (content.length < 10) {
  //   result.textContent = "Content must be at least 10 characters long!";
  //   result.style.display = "flex";
  //   return;
  // }

  // const articleArr = JSON.parse(localStorage.getItem("articles")) || [];

  // const reader = new FileReader();

  // function generateUniqueId() {
  //   const timestamp = Date.now().toString(36);
  //   const randomString = Math.random().toString(36).substring(2, 8);
  //   return timestamp + "" + randomString;
  // }

  // reader.onload = () => {

  //   const myBlogImage = reader.result;

  //   generateUniqueId();

  //   const blogData = {
  //     id: generateUniqueId(),
  //     blogImage: myBlogImage,
  //     blogTitle: title,
  //     publishedDate: publishDate,
  //     blogDescription: content,
  //     comments: []
  //   };

  //   articleArr.unshift(blogData);

  //   localStorage.setItem("articles", JSON.stringify(articleArr));

  //   window.location.href = "../index.html";

  // };
  // reader.readAsDataURL(image);
});

// Project validations
document
  .getElementById("adminProjectForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const image = document.getElementById("imageProjectUpload").files[0];

    const projectTitle = document.getElementById("projectTitle").value.trim();

    const link = document.getElementById("link").value;

    const content = document.getElementById("projectTextarea").value.trim();

    const result = document.getElementById("projectValidationForm");

    if (!image || !image.name) {
      result.textContent = "Please select a project image!";
      result.style.display = "flex";
      return;
    }
    if (!projectTitle) {
      result.textContent = "Project title field cannot be empty!";
      result.style.display = "flex";
      return;
    }
    if (!link) {
      result.textContent = "Paste in the project link!";
      result.style.display = "flex";
      return;
    }
    if (!content) {
      result.textContent = "Please provide a brief project description!";
      result.style.display = "flex";
      return;
    }
    if (content.length < 10) {
      result.textContent = "Content must be at least 10 characters long!";
      result.style.display = "flex";
      return;
    } else {
      event.target.submit();
      result.textContent = "";
      result.style.display = "none";
    }
  });

// Adding portfolio content validations
document
  .getElementById("folioAdminForm")
  .addEventListener("submit", (event) => {
    event.preventDefault();

    const nameRegex = /^[a-zA-Z-' ]{2,30}$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^(\+\d{1,2}\s?)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/;

    const HomeImage = document.getElementById("imageFolioUpload").files[0];

    const homeName = document.getElementById("homeName").value.trim();

    const bannerService = document.getElementById("bannerService").value.trim();

    const homeDescription = document
      .getElementById("homeDescription")
      .value.trim();

    const serviceLogoImage =
      document.getElementById("serviceLogoImage").files[0];

    const serviceTitle = document.getElementById("serviceTitle").value.trim();

    const serviceCardDescription = document
      .getElementById("serviceCardDescription")
      .value.trim();

    const phoneNumber = document.getElementById("phoneNumber").value.trim();

    const contactEmail = document.getElementById("contactEmail").value.trim();

    const aboutDescription = document
      .getElementById("aboutDescription")
      .value.trim();

    const educationInstitutionName = document
      .getElementById("educationInstitutionName")
      .value.trim();

    const educationLocation = document
      .getElementById("educationLocation")
      .value.trim();

    const GraduationDate = document
      .getElementById("GraduationDate")
      .value.trim();

    const aboutSkill = document.getElementById("aboutSkill").value.trim();

    const result = document.getElementById("folioValidationForm");

    if (!HomeImage || !HomeImage.name) {
      result.textContent = "Please select your profile picture!";
      result.style.display = "flex";
      return;
    }
    if (!homeName) {
      result.textContent = "Please add your name!";
      result.style.display = "flex";
      return;
    }
    if (!nameRegex.test(homeName)) {
      result.textContent =
        "Name field can't include numbers and special characters!";
      result.style.display = "flex";
      return;
    }
    if (!bannerService) {
      result.textContent = "Please add at least one service to the banner!";
      result.style.display = "flex";
      return;
    }
    if (!homeDescription) {
      result.textContent = "Home description field can't be empty!";
      result.style.display = "flex";
      return;
    }
    if (homeDescription.length < 10) {
      result.textContent = "Home description must have a least 10 characters!";
      result.style.display = "flex";
      return;
    }
    if (!serviceLogoImage || !serviceLogoImage.name) {
      result.textContent = "Add a service logo!";
      result.style.display = "flex";
      return;
    }
    if (!serviceTitle) {
      result.textContent = "Add your service title!";
      result.style.display = "flex";
      return;
    }
    if (!serviceCardDescription) {
      result.textContent = "Service description field can't be empty!";
      result.style.display = "flex";
      return;
    }
    if (serviceCardDescription.length < 10) {
      result.textContent =
        "Service description must have a least 10 characters!";
      result.style.display = "flex";
      return;
    }
    if (!phoneNumber) {
      result.textContent = "Add your phone number!";
      result.style.display = "flex";
      return;
    }
    if (!phoneRegex.test(phoneNumber)) {
      result.textContent =
        "Phone number should be only numerica data and have 12-digits!";
      result.style.display = "flex";
      return;
    }
    if (!contactEmail) {
      result.textContent = "Add your Email!";
      result.style.display = "flex";
      return;
    }
    if (!emailRegex.test(contactEmail)) {
      result.textContent = "Invalid Email!";
      result.style.display = "flex";
      return;
    }
    if (!aboutDescription) {
      result.textContent = "About description field can't be empty!";
      result.style.display = "flex";
      return;
    }
    if (aboutDescription.length < 10) {
      result.textContent =
        "About description field must have a least 10 characters!";
      result.style.display = "flex";
      return;
    }
    if (!educationInstitutionName) {
      result.textContent = "Please add education institution name!";
      result.style.display = "flex";
      return;
    }
    if (!educationLocation) {
      result.textContent = "Please add education institution location!";
      result.style.display = "flex";
      return;
    }
    if (!GraduationDate) {
      result.textContent = "Please select your graduation date!";
      result.style.display = "flex";
      return;
    }
    if (!aboutSkill) {
      result.textContent = "About skill field can't be empty!";
      result.style.display = "flex";
      return;
    } else {
      event.target.submit();
      result.textContent = "";
      result.style.display = "none";
    }
  });
