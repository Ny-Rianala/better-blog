// Add elements we need

const newPost = document.querySelector('#form-card'); 
const newPostTitle = document.querySelector('.new-title');
newPostTitle.setAttribute("postTitle", " " );
const newPostContent = document.querySelector('.card-text');
newPostContent.setAttribute("postContent", " " );
const newPostImg = document.querySelector('.card-img-top');
newPostImg.width = 500 * 200;
const newAuthor = document.querySelector('new-post-author');
const newPostDate = document.querySelector('.card-footer text-muted');
const submitBtn = document.querySelector('.btn btn-primary');

//Listen if the user add word more than 20 
newPostContent.addEventListener('input', (event) => {
  // if length >= 20 ----> invalid-feedback
  if (event.target.value.length > 20) {
    // setAttribute invalid-feedback 
    newPostContent.setAttribute("invalid", "true");
  } 
});

//Add eventListnesr to the submit button
document.getElementsByClassName('btn btn-primary').addEventListener("click", (event) => {
const myNewBlogPost = (newPostTitle, newPostContent, newAuthor, newPostDate) =>{
    return `
    <div class = "card-body">
      <h5 class = "card-title>${newPostTitle.value}</h5>
      <textarea class = "card-text">${newPostContent.value}</textarea>
      <label class = "new-post-author"> by ${newAuthor}</label>
      <div class = ".card-footer text-muted">${newPostDate}</div>
      <img class = ".card-img-top">${newPostImg.value}</img>
    </div>
    <button>Delete</button>
`;
};

//Create delete button 
const deleteBtn = document.createElement("button");
deleteBtn.textContent = "Delete";
newPost.innerHTML += myNewBlogPost;
});
