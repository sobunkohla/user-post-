// API 1: "https://jsonplaceholder.typicode.com/users"
// API 2: "https://jsonplaceholder.typicode.com/posts?userId=:id"
const userContainer = document.querySelector(".user-list");

async function users() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await response.json();
 
 
  const userHTML = data
    .map((card) => cardHTML(card))
    .join("");

  userContainer.innerHTML = userHTML;
}

users();

function showUserPost(id) {
    localStorage.setItem("id",id);
    window.location.href = `${window.location.origin}/user.html`
    console.log(user);
}


function cardHTML(card) {

    return `<div class="user">
                 <div class="user-card" onClick="showUserPost(${card.id})">
                   <div class="user-card__container">
                      <h3>${card.name}</h4>
                     <p><b>Email:</b> ${card.email}</p>
                    <p><b>Phone:</b> ${card.phone}</p>
                       <p><b>Website:</b> <a href="https://${card.website}" target="_blank">${card.website}</a></p>
                  </div>
                 </div>
             </div>`;
}

