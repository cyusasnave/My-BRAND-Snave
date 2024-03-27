const sidemenu = document.getElementById("sidemenu");

function openmenu() {
  sidemenu.style.right = "0";
}

function closemenu() {
  sidemenu.style.right = "-100%";
}

function openTab(evt, tabName, tabNav = null) {
  let i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].classList.remove("active");
  }
  document.getElementById(tabName).style.display = "grid";
  evt.currentTarget.classList.add("active");
  sidemenu.style.right = "-100%";
  document.getElementById(tabNav).classList.add("active");
}
document.querySelector(".tablinks").click();

function openTabProject(evt, tabName, tabNav = null) {
  let i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontentproject");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks-projects");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].classList.remove("active-tab");
  }
  document.getElementById(tabName).style.display = "grid";
  evt.currentTarget.classList.add("active-tab");
  document.getElementById(tabNav).classList.add("active");
}
document.querySelector(".tablinks-projects").click();

const theMail = document.querySelector(".the-dropdown-email");

const showMail = () => {
  theMail.style.display = "block";
};
const closeMail = () => {
  theMail.style.display = "none";
};

function previewImage(event, imageDiv, imagePreviewed) {
  var input = event.target;
  var reader = new FileReader();
  const imagePreviewDiv = document.getElementById(imageDiv);

  reader.onload = function () {
    var dataURL = reader.result;
    var imagePreview = document.getElementById(imagePreviewed);
    imagePreview.style.backgroundImage = "url('" + dataURL + "')";
    imagePreviewDiv.classList.add("file-input-label");
  };

  reader.readAsDataURL(input.files[0]);
}

const addEducation = () => {
  const educationDiv = document.getElementById("moreEducationfield");
  educationDiv.innerHTML += `
  <br><br>
  <hr>
    <p>
      <input
        type="text"
        class="folio-input"
        placeholder="Institution name"
      />
    </p>
    <p>
      <input
        type="text"
        class="folio-input"
        placeholder="Location"
      />
    </p>
    <p>
      <label for="">Graduation date: </label>
      <input
        type="date"
        class="folio-input"
        placeholder="Graduation date"
      />
    </p>
  `;
};

const token = localStorage.getItem('token');

document.addEventListener('DOMContentLoaded', async () => {
  const response = await fetch('https://mybrand-be-asyh.onrender.com/api/users/loggedInUser', 
  {
    headers: {
      'Authorization': `Bearer ${token}`
    }
  });

  const data = await response.json();
  const nameEl = document.getElementById('adminName');
  const roleEl = document.getElementById('adminRole');
  const emailEl = document.getElementById('adminEmail');

  nameEl.textContent = data.user.name;
  roleEl.textContent = data.user.role;
  emailEl.textContent = data.user.email;
})
