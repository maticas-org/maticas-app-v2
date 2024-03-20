import { Link } from "react-router-dom";

const Home: React.FC = () => {
  return (
    <>
      <h1>Hello, gonorreas </h1>
      <Link type="button" className="btn btn-link" to="/signup">
        Don't have an account? Sign Up
      </Link>
      <Link type="button" className="btn btn-link" to="/login">
        Already have an account? Log In
      </Link>
    </>
  );
};

export default Home;
