import React from "react";
import LoginForm from "../components/Forms/LoginForm";
import { useEffect } from "react";

const Login = () => {
  useEffect(() => {
    document.title = "Login – Hannan";
  });

  return (
    <>
      <LoginForm />
    </>
  );
};

export default Login;
