import { Link } from "react-router-dom";
import Background from "../components/common/Background";

const Home: React.FC = () => {
  return (
    <>
    <Background>
      <h1>Hello, gonorreas </h1>
      <Link type="button" className="btn btn-link" to="/signup">
        Don't have an account? Sign Up
      </Link>
      <Link type="button" className="btn btn-link" to="/login">
        Already have an account? Log In
      </Link>
    </Background>
    </>
  );
};

export default Home;
