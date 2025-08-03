import { useState } from 'react';
import './App.css';

function App() {
  const [search, setSearch] = useState('');

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  return (
    <div style={{ padding: '2rem' }}>
      <h1>GitHub User Search</h1>
      <input
        type="text"
        placeholder="Search GitHub Users"
        value={search}
        onChange={handleSearch}
        style={{ padding: '8px', width: '300px' }}
      />
      {/* Results will go here */}
    </div>
  );
}

export default App;

