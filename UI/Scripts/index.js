function openTab(evt, tabName) {
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
}
const clickTab = () => {
  document.querySelector(".tablinks").click();
};
clickTab();

function openmenu() {
  const sidemenu = document.getElementById("sidemenu");

  sidemenu.style.right = "0";
}

function closemenu() {
  const sidemenu = document.getElementById("sidemenu");

  sidemenu.style.right = "-80%";
}

 const myArticleArr = JSON.parse(localStorage.getItem("articles")) || [];
const blogContainerDiv = document.getElementById("indexBlogView");

if (myArticleArr.length > 0) {
  blogContainerDiv.innerHTML = `
    <h1 class="portfolio-title center-text">Blog</h1>
    <h2 class="sub-blog-title center-text">Recent Added Articles</h2>
    <div class="my-articles">
      <div class="blog-container" id="blogContainer">
        ${myArticleArr
          .slice(0, 3)
          .map((article) => {

            console.log(article.id)

            // Create the blog card
            return `
            <div class="blog-card">
              <div class="blog-image">
                <img src="${article.blogImage}" class="the-blog-image" />
              </div>
              <div class="blog-card-content">
                <h3>${article.blogTitle}</h3>
                <p>${minDescription(article.blogDescription, 88)}</p>
                <div class="blog-card-stats">
                  <div class="blog-btn">
                    <i class="fa-solid fa-heart liked"></i>
                    201
                  </div>
                  <div class="blog-btn">
                    <img src="Assets/comment-solid.svg" alt="" />
                    301
                  </div>
                  <div>
                    <a
                      href="HTML/singleBlog.html?id=${article.id}"
                      class="button-hover blog-btn"
                      ><span>See more &nbsp; &#10095;</span></a
                    >
                  </div>
                </div>
              </div>
            </div>
          `;
          })
          .join("")}
      </div>
    </div>
    <div class="view-all-article-container">
      <a href="./HTML/allArticles.html" class="button-hover">
        <span>View All Articles &nbsp; &#10095;</span>
      </a>
    </div>
  `;
} else {
  blogContainerDiv.innerHTML = `
    <h1 class="portfolio-title center-text">Blog</h1>
    <h2 class="sub-blog-title center-text">No release yet available!</h2>
  `;
} 


// minimizing the description
function minDescription(content, char) {
  const contentDiv = document.createElement("div");
  contentDiv.innerHTML = content;

  const contentText = contentDiv.textContent || contentDiv.innerText;
  let minimizedText = contentText.trim().substring(0, char);
  if (contentText.length > char) {
    minimizedText += "...";
  }
  return minimizedText;
}

/* localStorage.removeItem('articles') */