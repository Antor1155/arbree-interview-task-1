// src/services/authService.js
import axios from "axios";

const API = "http://localhost:5000/api/auth";

export const loginUser = async (email, password) => {
  const response = await axios.post(`${API}/login`, { email, password });
  return response.data;
};

export const registerUser = async (email, password) => {
  const response = await axios.post(`${API}/register`, {
    email,
    password,
  });
  return response.data;
};
