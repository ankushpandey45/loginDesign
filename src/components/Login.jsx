import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const Login = () => {
  const navigate = useNavigate();

  const login = () => {
    localStorage.setItem("login", JSON.stringify(true));
    navigate("/");
  };

  useEffect(() => {
    const loginStatus = localStorage.getItem("login");
    const isLogin = loginStatus ? JSON.parse(loginStatus) : false;

    if (isLogin) {
      navigate("/");
    }
  }, [navigate]);

  return (
    <div>
      <h1>Login</h1>
      <input type="text" placeholder="Username" />
      <br />
      <input type="password" placeholder="Password" />
      <br />
      <button onClick={login}>Login</button>
    </div>
  );
};

export default Login;
