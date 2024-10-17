import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const Protected = (props) => {
  const { Component } = props;
  const navigate = useNavigate();

  useEffect(() => {
    const loginStatus = localStorage.getItem("login");
    const isLogin = loginStatus ? JSON.parse(loginStatus) : false;

    if (!isLogin) {
      navigate("/login");
    }
  }, [navigate]);

  return (
    <div>
      <Component />
    </div>
  );
};

export default Protected;
