const SearchBar = ({ value, onChange, onSubmit }) => (
  <form onSubmit={onSubmit}>
    <input
      type="text"
      value={value}
      onChange={onChange}
      placeholder="Search GitHub users..."
      style={{ padding: '8px', width: '300px' }}
    />
    <button type="submit">Search</button>
  </form>
);

export default SearchBar;
