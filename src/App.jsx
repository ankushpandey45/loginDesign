import Navbar from "./common/Navbar";
import "./common/design.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Home from "./components/Home";
import About from "./components/About";
import Protected from "./components/Protected";

function App() {
  return (
    <Router>
      <>
        <Navbar />
        <Routes>
          <Route path="/" element={<Protected Component={Home} />} />
          <Route path="/login" element={<Login />} />
          <Route path="/about" element={<Protected Component={About} />} />
        </Routes>
      </>
    </Router>
  );
}

export default App;
