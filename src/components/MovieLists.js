import React from "react";
import MovieCard from "./MovieCard";

const MovieLists = ({ title, movies }) => {
  return (
    <div className="p-2 text-white  z-30 ">
      <h1 className="pl-4 text-2xl">{title}</h1>
      <div className="flex overflow-x-scroll">
        <div className="flex">
          {movies.map((movie) => (
            <MovieCard key={movie.id} imgPath={movie?.poster_path} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieLists;
