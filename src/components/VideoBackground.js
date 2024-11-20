import { useSelector } from "react-redux";
import useMovieTrailer from "../hooks.js/useMovieTrailer";

const VideoBackground = ({ id }) => {
  const movieTrailer = useSelector((store) => store.movies?.trailer);
  useMovieTrailer(id);
  return (
    <div>
      {
        <iframe
          className="w-screen aspect-video "
          src={
            "https://www.youtube.com/embed/" +
            movieTrailer?.key +
            "?&autoplay=1&mute=1"
          }
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
        ></iframe>
      }
    </div>
  );
};

export default VideoBackground;
