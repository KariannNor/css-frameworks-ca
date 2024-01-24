import { BASE_URL } from "../api/api.mjs";
import { fetchToken } from "../api/fetchToken.mjs";

const action = "posts";
const method = "POST";

export async function createPost(postData) {
  const createPostURL = BASE_URL + action;
  // const token = get("token");

  const response = await fetchToken(createPostURL, {
    method,
    body:JSON.stringify(postData),
  })
  
  const post = await response.json();


console.log(post);
  }