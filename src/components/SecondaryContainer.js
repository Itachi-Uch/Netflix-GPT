import React from "react";
import MovieLists from "./MovieLists";
import { useSelector } from "react-redux";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);
  return (
    <div className=" bg-black">
      <div className="-mt-60 relative z-20">
        {movies?.upComing?.results && (
          <MovieLists title={"Up Coming"} movies={movies?.upComing?.results} />
        )}
        {movies?.nowPlayingMovies?.results && (
          <MovieLists
            title={"Now Playing"}
            movies={movies?.nowPlayingMovies?.results}
          />
        )}
        {movies?.topRated?.results && (
          <MovieLists title={"Top Rated"} movies={movies.topRated?.results} />
        )}

        {movies?.popularMovies?.results && (
          <MovieLists
            title={"Popular"}
            movies={movies?.popularMovies?.results}
          />
        )}
        {movies?.nowPlayingMovies?.results && (
          <MovieLists
            title={"Thriller"}
            movies={movies?.nowPlayingMovies?.results}
          />
        )}
      </div>
    </div>
  );
};

export default SecondaryContainer;
