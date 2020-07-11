// Add elements we need

const newPost = document.querySelector('.card'); 
const newPostTitle = document.createElement("h5");
newPostTitle.classList.add("new-post-title");
const newPostContent = document.createElement('textarea');
newPostContent.classList.add("new-post-text")
const newAuthor = document.createElement('label');
newAuthor.classList.add("new-author");
const submitBtn = document.getElementsByClassName('btn btn-primary');

const myImg = document.createElement('img');
const imgWidth = 500 * 200;
myImg.setAttribute('src', `https://picsum.photos/${imgWidth}`);
myImg.width = 500 * 200;

//Add eventListnesr to the submit button
submitBtn.addEventListener('click', (event) => {
    event.preventDefault();
const myNewBlogPost =`
    <div class = "card">
        <div class = "card-body">
            <h5 class = "new-post-title">${newPostTitle.value}</h5>
            <textarea class = "new-post-text">${newPostContent.value}</textarea>
            <label class = "new-author"> by ${newAuthor.value}</label>
            <img src= "" data-width="500 * 200"></img>
        </div>
    </div>
    <button>Delete</button>
`;

 
// Create delete button 
 const deleteBtn = document.createElement("button");
 deleteBtn.textContent = "Delete";
 newPost.innerHTML += myNewBlogPost;
});


// Listen if the user add word more than 20 
newPostContent.addEventListener('input', (event) => {
    // if length >= 20 ----> invalid-feedback
       if (event.target.value.length > 20) {
         // setAttribute invalid-feedback 
         newPostContent.setAttribute("invalid", "true");
} 
});