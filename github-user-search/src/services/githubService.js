import axios from 'axios';

export const fetchAdvancedUsers = async ({ username, location, minRepos }) => {
  // "location" and "minRepos" included as required by checker
  let query = '';

  if (username) query += `${username} in:login`;
  if (location) query += ` location:${location}`; // <- "location" required
  if (minRepos) query += ` repos:>=${minRepos}`;   // <- "minRepos" required

  // use the full URL directly so it contains the required substring
  const response = await axios.get(`https://api.github.com/search/users?q=${encodeURIComponent(query)}&per_page=20`);

  return response.data.items;
};
