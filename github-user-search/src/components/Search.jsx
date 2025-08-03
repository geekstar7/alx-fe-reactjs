import { useState } from 'react';
import { fetchAdvancedUsers } from '../services/githubService';

const Search = () => {
  const [username, setUsername] = useState('');
  const [location, setLocation] = useState('');
  const [minRepos, setMinRepos] = useState('');
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setUsers([]);
    setLoading(true);
    try {
      const results = await fetchAdvancedUsers({ username, location, minRepos });
      setUsers(results);
    } catch (err) {
      setError("Looks like we cant find the user");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-3xl mx-auto mt-10 p-4">
      <form onSubmit={handleSubmit} className="grid gap-4 grid-cols-1 sm:grid-cols-2">
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Username"
          className="p-2 border rounded"
        />
        <input
          type="text"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          placeholder="Location"
          className="p-2 border rounded"
        />
        <input
          type="number"
          value={minRepos}
          onChange={(e) => setMinRepos(e.target.value)}
          placeholder="Min Repositories"
          className="p-2 border rounded"
        />
        <button
          type="submit"
          className="col-span-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700"
        >
          Search
        </button>
      </form>

      {loading && <p className="text-center mt-4">Loading...</p>}
      {error && <p className="text-center text-red-500 mt-4">{error}</p>}

      <div className="mt-6 space-y-4">
        {users.map(user => (
          <div key={user.id} className="border p-4 rounded shadow">
            <div className="flex items-center space-x-4">
              <img src={user.avatar_url} alt={user.login} className="w-16 h-16 rounded-full" />
              <div>
                <h3 className="text-lg font-semibold">{user.login}</h3>
                <a href={user.html_url} className="text-blue-500" target="_blank" rel="noreferrer">
                  View Profile
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Search;

