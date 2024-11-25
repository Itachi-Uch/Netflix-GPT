import React from "react";
import { useSelector } from "react-redux";
import MovieLists from "./MovieLists";

const GPTMovieSuggestions = () => {
  const movieDataRes = useSelector((store) => store.GPTSearch.searchResults);
  return (
    <div className=" bg-black p-4 m-4 bg-opacity-90">
      {movieDataRes &&
        movieDataRes.map((movieRes) => (
          <MovieLists title={"Movies"} movies={movieRes.results} />
        ))}
    </div>
  );
};

export default GPTMovieSuggestions;
