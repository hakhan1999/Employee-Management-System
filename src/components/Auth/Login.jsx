import React, { useState } from "react";

const Login = () => {
  // Prevent Form To Submit
  const submitHandler = (e) => {
    e.preventDefault();
  };

  // Usestate Variables For Email and Password Fields
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <div className="flex h-screen w-screen items-center justify-center">
      <div>
        <form
          onSubmit={(e) => {
            submitHandler(e);
            console.log("Email:", email);
            console.log("Password:", password);
            setEmail("");
            setPassword("");
          }}
          className="flex flex-col items-center justify-center gap-4 w-[25rem]"
        >
          <input
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            required
            className="border-2 border-[#2ef2ff] rounded-sm bg-transparent py-3 px-5 w-[100%] text-white text-xl placeholder:text-white placeholder:opacity-80 focus:outline-none"
            type="text"
            placeholder="Enter your email"
          />
          <input
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            required
            className="border-2 border-[#2ef2ff] rounded-sm bg-transparent py-3 px-5 w-[100%] text-white text-xl placeholder:text-white placeholder:opacity-80 focus:outline-none"
            type="password"
            placeholder="Enter your password"
          />
          <button className="text-black bg-[#2ef2ff] border-2 border-transparent py-1.5 px-8 transition-all duration-400 ease-out rounded-sm font-medium text-xl hover:border-[#c8ea80] hover:bg-transparent hover:text-white">
            Log in
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
