import axios from 'axios';

export const fetchAdvancedUsers = async ({ username, location, minRepos }) => {
  let query = '';

  if (username) query += `${username} in:login`;
  if (location) query += ` location:${location}`;
  if (minRepos) query += ` repos:>=${minRepos}`;

  const response = await axios.get(`https://api.github.com/search/users?q=${encodeURIComponent(query)}&per_page=20`);
  return response.data.items;
};
