const myAllArticleArr = JSON.parse(localStorage.getItem("articles")) || [];

// diplaying blog in view all blog page

const allArticleContainer = document.getElementById("blog-allArticle-page");
if (myAllArticleArr.length > 0) {
  allArticleContainer.innerHTML = `
  <h1 class="portfolio-title center-text">All articles</h1>

  <div class="my-articles">

    <div class="blog-container">

      ${myAllArticleArr
        .map((article) => {
          return `

          <div class="blog-card">

            <div class="blog-image">
              <img src="${article.blogImage}" class="the-blog-image" />
            </div>

            <div class="blog-card-content">

              <h3>${article.blogTitle}</h3>

              <p>
                ${minDescription((descr = article.blogDescription), 88)}
              </p>

              <div class="blog-card-stats">

                <div class="blog-btn">
                  <img src="../Assets/heart-solid.svg" />
                  201
                </div>

                <div class="blog-btn">
                  <img src="../Assets/comment-solid.svg" alt="" />
                  301
                </div>

                <div>
                  <a
                    href="../HTML/singleBlog.html"
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
  `;
} else {
  allArticleContainer.innerHTML = `

    <h1 class="portfolio-title center-text">All articles</h1>
  <h2 class="sub-blog-title center-text" style="height: 200px">No release yet available!</h2>
  
  `;
}
console.log(myAllArticleArr);
