const createComment = (author, commentValue) => {
  const temp = document.createElement("div");
  const date = new Date();
  temp.className = "comment-segment";
  temp.innerHTML = `
    <div class="comment-author">${author}</div>
    <div class="comment-date">${date.toLocaleDateString("uk-UA")}</div>
    <div class="comment-text">${commentValue}</div>
    `;
  return temp;
};

const commentArea = document.getElementById("article-comments");
const articleAuthor = document.getElementById("name");
const articleComment = document.getElementById("comment");

document.getElementById("addComment").addEventListener("click", () => {
  const newComment = createComment(articleAuthor.value, articleComment.value);
  commentArea.appendChild(newComment);
  articleAuthor.value = "";
  articleComment.value = "";
});
