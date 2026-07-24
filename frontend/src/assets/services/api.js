import axios from 'axios';
export const getMe = () => API.get("/auth/me");
const API = axios.create({
  baseURL: import.meta.env.VITE_API_URL || 'http://localhost:5000',
  withCredentials: true,
});

API.interceptors.request.use((config) => {
  try {
    const token = localStorage.getItem("token");
     JSON.parse(localStorage.getItem("user") || "{}").token;

if (token) {
  config.headers.Authorization = `Bearer ${token}`;
}
  } catch  { }
  return config;
  
});

API.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response && error.response.status === 401) {
      // Token is invalid or user doesn't exist anymore
      localStorage.removeItem('user');
      window.location.href = '/login';
    }
    return Promise.reject(error);
  }
);

// Auth
export const registerUser = (data) => API.post('/auth/register', data);
export const loginUser    = (data) => API.post('/auth/login', data);
// Content
// export const generateDescription = (data) =>
//   API.post("/content/generate", data);

export const saveDescription = (data) =>
  API.post("/content/save", data);

export const getAllContent = () =>
  API.get("/content");

export const getSingleContent = (id) =>
  API.get(`/content/${id}`);

export const updateContent = (id, data) =>
  API.put(`/content/${id}`, data);

export const deleteContent = (id) =>
  API.delete(`/content/${id}`);

export const generateDescription = (data) =>
  API.post("/api/ai/description", data);
