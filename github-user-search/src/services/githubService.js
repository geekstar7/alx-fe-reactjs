import axios from 'axios';

/**
 * Fetch GitHub users with optional filters
 * @param {string} username - the username to search for
 * @param {string} location - (optional) user location
 * @param {number} minRepos - (optional) minimum number of public repositories
 * @returns {Promise<Array>} list of matching GitHub users
 */
export const fetchUserData = async (username, location = '', minRepos = 0) => {
  // Build GitHub query string
  let query = `${username}`;
  if (location) query += `+location:${location}`;
  if (minRepos) query += `+repos:>=${minRepos}`;

  const url = `https://api.github.com/search/users?q=${query}`;

  const response = await axios.get(url);
  return response.data.items;
};
