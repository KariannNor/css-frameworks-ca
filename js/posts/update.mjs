import { BASE_URL } from "../api/api.mjs";
import { fetchToken } from "../api/fetchToken.mjs";

const action = "posts";
const method = "PUT";

export async function updatePost(postData) {
  if (!postData.id) {
    throw new Error("Update requires a postID");
}
  const updatePostURL = `${BASE_URL}${action}/${postData.id}`;

  const response = await fetchToken(updatePostURL, {
    method,
    body:JSON.stringify(postData),
  })
  
  return await response.json();

  }