import React from "react";
import { PICTURE_PATH } from "../utils.js/constants";

const MovieCard = ({ imgPath }) => {
  return (
    <div className="w-48 pl-4 py-1">
      <img src={PICTURE_PATH + imgPath}></img>
    </div>
  );
};

export default MovieCard;
