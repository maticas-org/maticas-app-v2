// Login.tsx
import React, { useState } from "react";
import { Link } from "react-router-dom";
import Background from "../components/common/Background";

const Login: React.FC = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    console.log("Logging in with:", username, password);
    // Handle login logic here
  };

  return (

    <Background>
    <form className="container mt-5" onSubmit={handleSubmit}>
      <h2>Login</h2>
      <div className="mb-3">
        <label htmlFor="username" className="form-label">
          Username
        </label>
        <input
          type="text"
          className="form-control"
          id="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="password" className="form-label">
          Password
        </label>
        <input
          type="password"
          className="form-control"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <button type="submit" className="btn btn-primary">
        Log In
      </button>
      <div className="mb-3">
        <Link type="button" className="btn btn-link" to="/signup">
          Don't have an account? Sign Up
        </Link>
      </div>
    </form>
    </Background>
  );
};

export default Login;
