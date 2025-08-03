import axios from 'axios';

const BASE_URL = 'https://api.github.com';

const axiosInstance = axios.create({
  baseURL: BASE_URL,
});

export const searchUsers = async (username) => {
  const response = await axiosInstance.get(`/search/users?q=${username}`);
  return response.data.items;
};

export const getUserDetails = async (username) => {
  const response = await axiosInstance.get(`/users/${username}`);
  return response.data;
};
