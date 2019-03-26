import axios from "axios";

export function getBlogs() {
  return axios.get("/api/blogs");
}

export function getBlogById(id) {
  return axios.get("/api/blogs/" + id);
}

export function createBlog(blog) {
  return axios.post("/api/blogs", blog);
}

export function updateBlog(id, blog) {
  return axios.put("/api/blogs/" + id, blog);
}
export function deleteBlog(id) {
  return axios.delete("/api/blogs/" + id);
}
