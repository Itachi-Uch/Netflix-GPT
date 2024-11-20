import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils.js/firebase";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils.js/userSlice";
import { LOGO_URL } from "../utils.js/constants";
const Header = () => {
  const dispatch = useDispatch();

  const user = useSelector((store) => store.user?.email);
  const navigate = useNavigate();
  const handleLogOut = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        navigate("/error");
      });
  };

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in
        const { uid, email, displayName } = user;
        dispatch(addUser({ uid: uid, displayName: displayName, email: email }));
        navigate("/browse");
      } else {
        // User is signed out
        dispatch(removeUser());
        navigate("/");
      }
    });
  }, []);
  return (
    <div className="absolute px-8 py-2 bg-gradient-to-b from-black z-10 w-screen flex justify-between">
      <img className=" w-44" src={LOGO_URL} alt="Logo"></img>
      {user && (
        <button
          className="p-2 m-2 font-extrabold text-lg border border-gray-500 rounded-lg text-white"
          onClick={handleLogOut}
        >
          Logout
        </button>
      )}
    </div>
  );
};

export default Header;
