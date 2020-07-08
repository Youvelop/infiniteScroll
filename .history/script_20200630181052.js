const postContainer = document.getElementById('posts-container');
const loading = document.querySelector('.loader');
const filter = document.getElementById('filter');

let limit = 3;
let page = 1;

// Fetch posts from API
async function getPosts() {
  const red = await fetch(
    `http://jsonplaceholder.typicode.com/posts?_limit=${limit}&_page=${page}`
  );

  const data = await res.json();

  return data;
}

// Show post in DOM
async function showPosts() {
  const posts = await getPosts();

  console.log(posts);
}

// show initial posts
showPosts();
