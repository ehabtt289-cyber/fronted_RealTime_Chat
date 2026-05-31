import axios from "axios";

export const axiosInstance = axios.create({
  baseURL:  "https://fullstack-realtime-chat-5sbu.onrender.com/api",
  withCredentials: true,
});
