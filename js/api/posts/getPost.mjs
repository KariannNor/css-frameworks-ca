import { BASE_URL } from "../api.mjs";
import { fetchToken } from "../fetchToken.mjs";

const action = "posts";

export async function getPosts() {
  const getPostURL = `${BASE_URL}${action}`;

  const response = await fetchToken(getPostURL);

  return await response.json();
}

export async function getPost(id) {
  const getPostURL = `${BASE_URL}${action}/${id}`;

  const response = await fetchToken(getPostURL);
  const post = await response.json();

  document.title = `Javascript2 CA | ${post.title}`;

  return post;
}
