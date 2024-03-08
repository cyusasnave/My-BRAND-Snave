const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get("id");

console.log(id);

if (id) {
  const myblogs = JSON.parse(localStorage.getItem("articles")) || [];
  const getSingleBlog = myblogs.filter((blog) => blog.id === id);

  console.log(myblogs);

  const singleBlogContainer = document.getElementById("singleBlogContainer");

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
          <p>${comment}</p>
          <div>
            <img src="../Assets/heart-solid.svg" alt="" />
          </div>
        </div>
        <div class="comment-replies">
          <div class="reply-title-container">
            <img src="../Assets/Vector.png" alt="" />
            Replies
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
      <div class="single-blog-container">
        <div class="single-blog-container-1">
          <div class="back-blur">
            <img src="${article.blogImage}" alt="" />
            <a href="../index.html#home" class="button-hover back-btn">
              <span>Back &nbsp; &#10095;</span>
            </a>
            <div class="blur-div"></div>
            <h1>${article.blogTitle}</h1>
          </div>
        </div>
      </div>
      <div class="single-blog-container-2">
        <div class="single-blog-description">
          <div>
            <img src="${article.blogImage}" class="single-blog-image" />
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
                <form id="commentForm">
                  <input
                    type="text"
                    class="add-input"
                    id="commentInput"
                    placeholder="Add a comment"
                  />
                  <button type="submit" class="add-comment-submit-btn" id="addCommentBtn">
                    <img src="../Assets/Vector (1).png" alt="" />
                    Share
                  </button>
                </form>
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
