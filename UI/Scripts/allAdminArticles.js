const myAllArticleArr = JSON.parse(localStorage.getItem("articles")) || [];

// diplaying blog in view all blog page

const allArticleContainer = document.getElementById("blogContainer");
if (myAllArticleArr.length > 0) {
  allArticleContainer.innerHTML = `

      ${myAllArticleArr
        .map((article, index) => {
          return `

         <div class="blog-card">
                  <div class="blog-image">
                    <img src="${article.blogImage}" class="the-blog-image" />
                    <div class="blur-div">
                      <button class="Edit-btn blueEdit">Edit</button>
                      <button class="Edit-btn redRemove">Delete</button>
                    </div>
                  </div>
                  <div class="blog-card-content">
                    <h3>${article.blogTitle}</h3>
                    <p>
                       ${minDescription((descr = article.blogDescription), 88)}
                    </p>
                    <div class="blog-card-stats">
                      <div class="blog-btn">
                        <i class="fa-solid fa-heart liked"></i>
                        201
                      </div>
                      <div class="blog-btn">
                        <img src="../Assets/comment-solid.svg" alt="" />
                        301
                      </div>
                      <div>
                        <a
                          href="#${article.id}"
                          onclick="openTab(event, 'singleBlog', 'article')"
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
  `;
} else {
  allArticleContainer.innerHTML = `
  <h2 class="sub-blog-title center-text" style="height: 200px">No release yet available!</h2>
  `;
}

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



const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get("id");

console.log(id);

if (id) {
 /*  const myblogs = JSON.parse(localStorage.getItem("articles")) || []; */
  const getSingleBlog = myAllArticleArr.filter((blog) => blog.id === id);

  const singleBlogContainer = document.getElementById("singleBlog");

  if (getSingleBlog.length > 0) {
    const article = getSingleBlog[0];

    const commentsList = article.comments
      .map(
        (comment) => `
      <div class="comment-container">
        <div class="comment-user">
          <img src="../Assets/andela 1.png" alt="" />
          <p>Andela Rwanda</p>
        </div>
        <div class="comment-description">
          <p>
            ${comment}
          </p>
          <div>
            <img src="../Assets/heart-solid.svg" alt="" />
          </div>
        </div>
        <div class="comment-replies">
          <div class="reply-title-container">
            <div class="the-title-container">
              <img src="../Assets/Vector.png" alt="" />
              Replies
            </div>
            <button class="Edit-btn redRemove delete-comment">
              Remove
            </button>
          </div>
          <div class="replies-container">
            <div class="reply-message">
              <img src="../Assets/R-Image(3) 1.png" alt="" />
              <p>Thank you</p>
            </div>
            <div>
              <img src="../Assets/heart-solid.svg" alt="" />
            </div>
          </div>
        </div>
        <br />
        <hr />
      </div>
    `
      )
      .join("");

    singleBlogContainer.innerHTML = `
      <div class="admin-content-header" id="singleBlog_$${article.id}">
        <h2 class="single-blog-title">${article.blogTitle}</h2>
        <div>
          <a
            onclick="openTab(event, 'Articles', 'article')"
            class="button-hover new-btn"
            ><span>Back &nbsp; &#10095; </span></a
          >
        </div>
        <div class="openmenu-container">
          <img
            src="../Assets/bars-solid.svg"
            class="dashboard-for-menu"
            onclick="openmenu()"
          />
        </div>
      </div>
      <div class="all-single-blog-content">
        <div class="single-blog-section">
          <div class="single-blog-container-2">
            <div class="single-blog-description">
              <div>
                <img
                  src="${article.blogImage}"
                  class="single-blog-image"
                />
                ${article.blogDescription}
              </div>
              <div class="single-comment-section">
                <h3>Comments</h3>
                <div class="comments-list">
                  ${commentsList}
                </div>
                <div class="add-comment-container">
                  <div class="comment-stats">
                    <img src="../Assets/heart-solid.svg" alt="" />
                    201
                  </div>
                  <div class="add-comment-input">
                    <form action="" method="post">
                      <input
                        type="text"
                        class="add-input"
                        placeholder="Add a comment"
                      />
                      <button
                        type="submit"
                        class="add-comment-submit-btn"
                      >
                        <img src="../Assets/Vector (1).png" alt="" />
                        Share
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    `;

    const commentForm = document.getElementById("commentForm");
    commentForm.addEventListener("submit", function (event) {
      event.preventDefault();
      const commentInput = document.getElementById("commentInput").value;
      article.comments.push(commentInput);
      localStorage.setItem("articles", JSON.stringify(myblogs));
      window.location.reload(); // Reload the page to display the new comment
    });
  }
}
