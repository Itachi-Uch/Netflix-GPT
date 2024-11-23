import React, { useState } from "react";
const VideoTitle = ({ title, overview }) => {
  return (
    <div className="pt-[16%] px-12 aspect-video absolute bg-gradient-to-r from-black w-screen">
      <h1 className="font-bold text-3xl py-3 text-white">{title}</h1>
      <p className=" w-2/4 text-white">{overview}</p>
      <div className="flex">
        <button className=" px-10 p-3 m-3 bg-white rounded-md text-black hover:bg-opacity-85">
          ▶️ Play
        </button>
        <button className="px-10 p-3 m-3 bg-gray-400 rounded-md text-white hover:bg-opacity-85">
          More Info
        </button>
      </div>
    </div>
  );
};
export default VideoTitle;
