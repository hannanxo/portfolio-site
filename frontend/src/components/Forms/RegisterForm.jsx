import React from "react";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { register, reset } from "../features/auth/authSlice";
import Spinner from "../Spinner";

const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    password2: "",
  });

  const { name, email, password, password2 } = formData;

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { user, isLoading, isError, isSuccess, message } = useSelector(state => state.auth);

  useEffect(() => {
    if (isError) {
      toast.error(message);
    }

    if (isSuccess || user) {
      navigate("/");
    }

    dispatch(reset());
  }, [user, isError, isSuccess, message, navigate, dispatch]);

  const onChange = e => {
    setFormData(prevState => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const onSubmit = e => {
    e.preventDefault();

    if (password !== password2) {
      toast.error("Passwords do not match ");
    } else {
      const userData = {
        name,
        email,
        password,
      };

      dispatch(register(userData));
    }
  };
  if (isLoading) {
    return <Spinner />;
  }
  return (
    <>
      <div className="w-full h-screen bg-[#fafafa] flex justify-center items-center p-4">
        <form onSubmit={onSubmit} method="POST" action="" className="flex flex-col md:max-w-[600px] max-w-[400px] w-full pt-10 md:mt-10">
          <div>
            <p className="text-4xl font-bold inline border-b-4 border-[#ff4655] text-[#0f1923] leading-normal ">Sign Up</p>
            <p className="md:py-4 mb-4 mt-4 text-[#768079]">Create a new account</p>
          </div>
          <input className="my-2 bg-[#e1e1e1] p-2 rounded-lg" type="text" placeholder="Enter your name" id="name" name="name" value={name} onChange={onChange} />
          <input className="my-2 p-2 bg-[#e1e1e1] rounded-lg" type="email" placeholder="Enter your email address" id="email" name="email" value={email} onChange={onChange} />
          <input className="my-2 p-2 bg-[#e1e1e1] rounded-lg" type="password" placeholder="Create a new password" id="password" name="password" value={password} onChange={onChange} />
          <input className="my-2 p-2 bg-[#e1e1e1] rounded-lg" type="password" placeholder="Confirm password" id="password2" name="password2" value={password2} onChange={onChange} />

          <button className="text-white border-2 border-[#ff4655] bg-[#ff4655] hover:bg-[#0f1923] hover:border-[#0f1923] px-4 py-3 my-8 mx-auto rounded-lg">Create</button>
          <div
            onClick={() => {
              navigate("/login");
            }}
            className="text-[#768079]"
          >
            Existing user? <span className="text-[#ff4655] underline text-xs">Click here</span>
          </div>
        </form>
      </div>
    </>
  );
};

export default Register;
