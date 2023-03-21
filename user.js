const id = localStorage.getItem('id');

const postList = document.querySelector('.post-list');

async function userPost(id) {
   
  
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${id}`);
    const posts = await response.json();
    const postHTML = posts.map(post => postData(post)).join("");
    postList.innerHTML = postHTML;
}

userPost(id)

function postData(post) {
    return ` <div class="post">
    <div class="post__title">
      ${post.title}
    </div>
    <p class="post__body">
      ${post.body}
    </p>
  </div>`
}


async function onSearchChange(event) {
 
  const id = event.target.value;
 userPost(id) 
}
