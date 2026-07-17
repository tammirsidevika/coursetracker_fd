import axios from "axios";

const API = axios.create({
  baseURL: "https://coursetracker-bd.onrender.com/api",
});

export default API;