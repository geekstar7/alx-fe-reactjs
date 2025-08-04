import { useState } from 'react';
import { fetchUserData } from '../services/githubService';

const Search = () => {
  const [username, setUsername] = useState('');
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSearch = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setUsers([]);

    try {
      const result = await fetchUserData(username);
      setUsers(result); // 👈 now expecting an array of users
    } catch {
      setError("Looks like we cant find the user");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 via-white to-purple-100 p-4">
      <div className="max-w-xl mx-auto mt-10 bg-white shadow-xl rounded-xl p-6">
        <h1 className="text-2xl font-bold mb-4 text-center text-gray-800">🔍 GitHub User Search</h1>

        <form onSubmit={handleSearch} className="flex flex-col gap-4">
          <input
            type="text"
            className="p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter GitHub username..."
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg font-semibold transition-all"
          >
            Search
          </button>
        </form>

        {loading && <p className="mt-4 text-center text-gray-600">Loading...</p>}
        {error && <p className="mt-4 text-center text-red-600 font-medium">{error}</p>}

        {users.length > 0 && (
          <div className="mt-6 space-y-4">
            {users.map((user) => (
              <div
                key={user.id}
                className="p-4 bg-gray-50 rounded-lg shadow-sm flex items-center gap-4"
              >
                <img
                  src={user.avatar_url}
                  alt="Avatar"
                  className="w-16 h-16 rounded-full"
                />
                <div>
                  <h2 className="text-lg font-bold text-gray-800">{user.login}</h2>
                  <a
                    href={user.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline text-sm"
                  >
                    View GitHub Profile →
                  </a>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Search;
