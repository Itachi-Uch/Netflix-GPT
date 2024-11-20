import React, { useState, useRef } from "react";
import Header from "./Header";
import validateLogin from "../utils.js/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils.js/firebase";
import { useDispatch } from "react-redux";
import { addUser } from "../utils.js/userSlice";
import { BG_IMAGE_LOGINPAGE } from "../utils.js/constants";
const Login = () => {
  const [isSignIn, setIsSignIn] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const [showPassword, setShowPassword] = useState(false);
  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);
  const dispatch = useDispatch();

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };
  const handleValidation = () => {
    const message = validateLogin(
      email?.current?.value,
      password?.current?.value,
      name?.current?.value
    );
    setErrorMessage(message);
    if (message) return;

    if (!isSignIn) {
      //Signing up a user
      createUserWithEmailAndPassword(
        auth,
        email?.current?.value,
        password?.current?.value,
        name?.current?.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          updateProfile(auth.currentUser, {
            displayName: name?.current?.value,
          })
            .then(() => {
              const { uid, email, displayName } = auth.currentUser;
              dispatch(
                addUser({ uid: uid, displayName: displayName, email: email })
              );
            })
            .catch((error) => {
              setErrorMessage(error.message);
            });

          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
          // ..
        });
    } else {
      // Singing in a user
      signInWithEmailAndPassword(
        auth,
        email?.current?.value,
        password?.current?.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          console.log("sigining in---- ", user);

          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
        });
    }
  };
  const toggleSignInForm = () => {
    setIsSignIn(!isSignIn);
  };
  return (
    <div>
      <Header />
      <div className="absolute">
        <img src={BG_IMAGE_LOGINPAGE} alt="Background-image" />
      </div>
      <form
        className="bg-black absolute w-3/12 my-40 m-auto left-0 right-0 py-12 px-6 bg-opacity-85 text-white"
        onSubmit={(e) => e.preventDefault()}
      >
        <h1 className="font-bold text-3xl py-2 my-2">
          {isSignIn ? "Sign in" : "Sign up"}
        </h1>
        {!isSignIn && (
          <input
            ref={name}
            type="text"
            placeholder="Name"
            className="p-4 my-2 w-full bg-black border border-gray-400 rounded-lg "
          ></input>
        )}
        <input
          type="text"
          placeholder="Email"
          className="p-4 my-2 w-full bg-gray-950 border border-gray-400 rounded-lg "
          ref={email}
        ></input>
        <input
          type={showPassword ? "text" : "password"}
          placeholder="Password"
          className="p-4 my-2 w-full bg-gray-950 border border-gray-400 rounded-lg"
          ref={password}
        ></input>
        <button
          onClick={handleShowPassword}
          className="text-gray-400 w-6 mx-64 hover:text-white"
        >
          Show
        </button>

        <p className="text-red-500 text-lg">{errorMessage}</p>
        <button
          className=" w-full p-4 my-6 bg-red-600 bg-opacity-100 rounded-lg"
          onClick={handleValidation}
        >
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
