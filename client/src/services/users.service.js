import axios from "axios";

export function createUser(payload) {
  axios.post("/api/users/register", payload);
}

export function loginUser() {
  axios.post("/api/users/login");
}

export function getCurrentUser() {
  axios.get("/api/users/current");
}
