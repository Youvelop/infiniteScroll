const postContainer = document.getElementById('posts-container');
const loading = document.querySelector('.loader');
const filter = document.getElementsById('filter');

let limit = 3;
let page = 1;

async function getPosts() {
  const red = await fetch(
    `http://jsonplaceholder.typicode.com/posts>_limit=${limit}&_page=${page}`
  );

  const data = await res.json();

  return data;
}
