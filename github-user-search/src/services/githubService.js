import axios from 'axios';

export const fetchUserData = async (username) => {
  const response = await axios.get(`https://api.github.com/users/${username}`);
  return [response.data]; // Return an array to match your Search.jsx logic
};
