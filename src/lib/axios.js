import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: import.meta.env.MODE === "development" ? "https://fullstack-realtime-chat-5sbu.onrender.com/api" : "/api",
  withCredentials: true,
});
