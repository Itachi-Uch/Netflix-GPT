import React, { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [isSignIn, setIsSignIn] = useState(true);
  const toggleSignInForm = () => {
    setIsSignIn(!isSignIn);
  };
  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/03ad76d1-e184-4d99-ae7d-708672fa1ac2/web/IN-en-20241111-TRIFECTA-perspective_149877ab-fcbd-4e4f-a885-8d6174a1ee81_large.jpg"
          alt="Background-image"
        />
      </div>
      <form className="bg-black absolute w-3/12 my-40 m-auto left-0 right-0 py-12 px-6 bg-opacity-85 text-white">
        <h1 className="font-bold text-3xl py-2 my-2">
          {isSignIn ? "Sign in" : "Sign up"}
        </h1>
        {!isSignIn && (
          <input
            type="text"
            placeholder="Name"
            className="p-4 my-2 w-full bg-black border border-gray-400 rounded-lg "
          ></input>
        )}
        <input
          type="text"
          placeholder="Email"
          className="p-4 my-2 w-full bg-gray-950 border border-gray-400 rounded-lg "
        ></input>
        <input
          type="password"
          placeholder="Password"
          className="p-4 my-2 w-full bg-gray-950 border border-gray-400 rounded-lg"
        ></input>
        <button className=" w-full p-4 my-6 bg-red-600 bg-opacity-100 rounded-lg">
          {isSignIn ? "Sign in" : "Sign up"}
        </button>
        <h1 className="text-gray-300">
          {isSignIn ? "New to Netflix?" : "Already a member?"}
          <span
            className="text-bold text-l text-white p-1 m-1 hover:cursor-pointer"
            onClick={toggleSignInForm}
          >
            {isSignIn ? "Sign up now." : "Sign in"}
          </span>
        </h1>
      </form>
    </div>
  );
};

export default Login;
