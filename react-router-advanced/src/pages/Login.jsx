import { Link } from "react-router-dom";

function Login() {
  return (
    <div>
      <h1>Login Page</h1>
      <p>Click here to <Link to="/profile">go to Profile</Link> after login (mock).</p>
    </div>
  );
}
export default Login;
