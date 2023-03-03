import React from "react";
import { useState, useEffect } from "react";

const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    password2: "",
  });

  const { name, email, password, password2 } = formData;

  const onChange = () => {};
  return (
    <>
      <div className="w-full h-screen bg-[#ececec] flex justify-center items-center p-4">
        <form method="POST" action="" className="flex flex-col md:max-w-[600px] max-w-[400px] w-full pt-10 md:mt-10">
          <div>
            <p className="text-4xl font-bold inline border-b-4 border-[#ff4655] text-[#0f1923] leading-normal ">Sign Up</p>
            <p className="md:py-4 mb-4 mt-4 text-[#768079]">Create a new account</p>
          </div>
          <input className="my-2 bg-[#e1e1e1] p-2 rounded-lg" type="text" placeholder="Enter your name" id="name" name="name" value={name} oncChange={onChange} />
          <input className="my-2 p-2 bg-[#e1e1e1] rounded-lg" type="email" placeholder="Enter your email address" id="email" name="email" value={email} oncChange={onChange} />
          <input className="my-2 p-2 bg-[#e1e1e1] rounded-lg" type="password" placeholder="Create a new password" id="password" name="password" value={password} oncChange={onChange} />
          <input className="my-2 p-2 bg-[#e1e1e1] rounded-lg" type="password" placeholder="Confirm password" id="password2" name="password2" value={password2} oncChange={onChange} />

          <button className="text-white border-2 border-[#ff4655] bg-[#ff4655] hover:bg-[#0f1923] hover:border-[#0f1923] px-4 py-3 my-8 mx-auto rounded-lg">Create</button>
          <a href="/login" className="text-[#768079]">
            Existing user? <span className="text-[#ff4655] underline text-xs">Click here</span>
          </a>
        </form>
      </div>
    </>
  );
};

export default Register;
