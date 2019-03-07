import axios from "axios";

export function getBlogs() {
  return axios.get("/api/mogollon");
}
