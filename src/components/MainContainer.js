import React from "react";
import VideoTitle from "./VideoTitle";
import VideoBackground from "./VideoBackground";
import { useSelector } from "react-redux";

const MainContainer = () => {
  const movies = useSelector((store) => store.movies?.nowPlayingMovies);

  if (!movies) return;
  //   const mainMovie = movies.results[0];
  const randomtrailer = Math.ceil(Math.random() * 10);
  const mainMovie =
    randomtrailer <= movies.results?.length
      ? movies.results[randomtrailer]
      : movies.results[0];

  return (
    <div>
      <VideoTitle title={mainMovie?.title} overview={mainMovie?.overview} />
      <VideoBackground id={mainMovie?.id} />
    </div>
  );
};

export default MainContainer;
