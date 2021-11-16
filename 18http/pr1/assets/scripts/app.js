const listElement = document.querySelector(".posts");
const postTemplate = document.getElementById("single-post");
const form = document.querySelector("#new-post form");
const fetchButton = document.querySelector("#available-posts button");
const postList = document.querySelector("ul");

// const xhr = new XMLHttpRequest();
// xhr.open("GET", "https://jsonplaceholder.typicode.com/posts");
// xhr.responseType = "json"; // this frees us of json parse
// xhr.onload = function () {
//   //   const listOfPosts = JSON.parse(xhr.response);
//   const listOfPosts = xhr.response;
//   for (const post of listOfPosts) {
//     const postEl = document.importNode(postTemplate.content, true);
//     postEl.querySelector("h2").textContent = post.title.toUpperCase();
//     postEl.querySelector("p").textContent = post.body;
//     listElement.append(postEl);
//   }
// };
// xhr.send();

function sendHttpRequest(method, url, data) {
  const promise = new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.open(method, url);
    xhr.responseType = "json";
    xhr.onload = function () {
      if (xhr.status >= 2 && xhr.status < 300) {
        resolve(xhr.response);
      } else {
        reject(new Error("Something went wrong!"));
      }
    };
    xhr.onerror = function () {
      reject(new Error("Failed to send request!"));
    };
    xhr.send(JSON.stringify(data));
  });
  return promise;
}
async function fetchPosts() {
  try {
    const responseData = await sendHttpRequest(
      "GET",
      "https://jsonplaceholder.typicode.com/posts"
    );
    for (const post of responseData) {
      const postEl = document.importNode(postTemplate.content, true);
      postEl.querySelector("h2").textContent = post.title.toUpperCase();
      postEl.querySelector("p").textContent = post.body;
      postEl.querySelector("li").id = post.id;
      listElement.append(postEl);
    }
  } catch (err) {
    console.log(err);
  }
}

function createPost(title, content) {
  const userId = Math.random();
  const post = {
    title,
    body: content,
    userId,
  };
  sendHttpRequest("POST", "https://jsonplaceholder.typicode.com/posts", post);
}

fetchButton.addEventListener("click", fetchPosts);
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const enteredTitle = e.currentTarget.querySelector("#title").value;
  const enteredContent = e.currentTarget.querySelector("#content").value;
  createPost(enteredTitle, enteredContent);
});

postList.addEventListener("click", (e) => {
  if (e.target.tagName === "BUTTON") {
    const postId = e.target.closest("li").id;
    sendHttpRequest(
      "DELETE",
      `https://jsonplaceholder.typicode.com/posts/${postId}`
    );
  }
});
