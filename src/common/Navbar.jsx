import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  const logOut = () => {
    localStorage.setItem("login", JSON.stringify(false));
    navigate("/login");
  };

  return (
    <div>
      <nav>
        <div>
          <ul style={{ display: "flex", gap: "20px", listStyle: "none" }}>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <button onClick={logOut}>Logout</button>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
