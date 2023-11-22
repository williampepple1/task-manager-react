// src/authService.ts

import axios from 'axios';

// Accessing the environment variable
const API_URL = import.meta.env.REACT_APP_API_URL;

interface LoginCredentials {
  username: string;
  password: string;
}

export const login = async (credentials: LoginCredentials) => {
  const { data } = await axios.post(`${API_URL}/login`, credentials);
  return data;
};

