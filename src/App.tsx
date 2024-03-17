import React, { useState } from "react";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import SimpleLineChart from "./components/SimpleLineChart";

const App: React.FC = () => {
  const [view, setView] = useState<"login" | "signup">("login");

  return (
    <div className="container mt-5">
      {view === "login" ? (
        <>
          <Login />
          <button
            type="button"
            className="btn btn-link"
            onClick={() => setView("signup")}
          >
            Don't have an account? Sign Up
          </button>
          <SimpleLineChart />
        (
        <>
          <SignUp />
          <button
            type="button"
            className="btn btn-link"
            onClick={() => setView("login")}
          >
            Already have an account? Log In
          </button>
        </>
      )}
    </div>
  );
};

export default App;
