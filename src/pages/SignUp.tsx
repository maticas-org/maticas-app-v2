// SignUp.tsx
import React, { useState } from "react";
import { Link } from "react-router-dom";
import Background from "../components/common/Background";

const SignUp: React.FC = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    console.log(
      "Signing up with:",
      firstName,
      lastName,
      username,
      email,
      password
    );
    // Handle sign-up logic here
  };

  return (

    <Background>
    <form className="container mt-5" onSubmit={handleSubmit}>
      <h2>Sign Up</h2>
      <div className="mb-3">
        <label htmlFor="firstName" className="form-label">
          First Name
        </label>
        <input
          type="text"
          className="form-control"
          id="firstName"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="lastName" className="form-label">
          Last Name
        </label>
        <input
          type="text"
          className="form-control"
          id="lastName"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="usernameSignUp" className="form-label">
          Username
        </label>
        <input
          type="text"
          className="form-control"
          id="usernameSignUp"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="email" className="form-label">
          Email
        </label>
        <input
          type="email"
          className="form-control"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="passwordSignUp" className="form-label">
          Password
        </label>
        <input
          type="password"
          className="form-control"
          id="passwordSignUp"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <button type="submit" className="btn btn-primary">
        Sign Up
      </button>
      <div className="mb-3">
        <Link type="button" className="btn btn-link" to="/login">
          Already have an account? Log In
        </Link>
      </div>
    </form>
    </Background>
  );
};

export default SignUp;
