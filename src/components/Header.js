import React from "react";
import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../utils.js/firebase";
import { useSelector } from "react-redux";
const Header = () => {
  const user = useSelector((store) => store.user?.email);
  const navigate = useNavigate();
  const handleLogOut = () => {
    signOut(auth)
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        navigate("/error");
      });
  };
  return (
    <div className="absolute px-8 py-2 bg-gradient-to-b from-black z-10 w-screen flex justify-between">
      <img
        className=" w-44"
        src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
        alt="Logo"
      ></img>
      {user && (
        <button
          className="p-2 m-2 font-extrabold text-lg border border-gray-500 rounded-lg"
          onClick={handleLogOut}
        >
          Logout
        </button>
      )}
    </div>
  );
};

export default Header;
