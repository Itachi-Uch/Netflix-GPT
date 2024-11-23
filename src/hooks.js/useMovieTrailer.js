import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils.js/constants";
import { addTrailer } from "../utils.js/movieSlice";

const useMovieTrailer = (id) => {
  const discpatch = useDispatch();
  const fetchTrailer = async () => {
    const fetchVideo = await fetch(
      "https://api.themoviedb.org/3/movie/" + id + "/videos?",
      API_OPTIONS
    );
    const jsonData = await fetchVideo.json();
    const trailervideo = jsonData.results?.filter(
      (trailer) => trailer?.type === "Trailer"
    );
    const trailer = trailervideo.length ? trailervideo[0] : jsonData.results[0];
    discpatch(addTrailer(trailer));
  };

  useEffect(() => {
    fetchTrailer();
  }, []);
};
export default useMovieTrailer;
