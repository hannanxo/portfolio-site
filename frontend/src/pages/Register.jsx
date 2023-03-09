import React from "react";
import RegisterForm from "../components/Forms/RegisterForm";
import { useEffect } from "react";

const Register = () => {
  useEffect(() => {
    document.title = "Register – Hannan";
  });
  return (
    <>
      <RegisterForm />
    </>
  );
};

export default Register;
