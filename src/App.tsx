import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Login from "./components/Login";
import SignUp from "./components/SignUp";
import Home from "./components/Home";

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </Router>
  );
};

export default App;
