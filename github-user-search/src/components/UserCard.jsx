const UserCard = ({ user }) => (
  <div style={{ border: '1px solid #ccc', padding: '1rem', margin: '1rem 0' }}>
    <img src={user.avatar_url} alt={user.login} width={60} />
    <h3>{user.login}</h3>
    <a href={user.html_url} target="_blank" rel="noopener noreferrer">
      View Profile
    </a>
  </div>
);

export default UserCard;
