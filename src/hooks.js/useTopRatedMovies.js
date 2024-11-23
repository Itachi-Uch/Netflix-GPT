import { API_OPTIONS } from "../utils.js/constants";
import { useDispatch } from "react-redux";
import { addTopRated } from "../utils.js/movieSlice";
import { useEffect } from "react";

const useUTopRatedMovies = () => {
  const dispatch = useDispatch();
  const getMovie = async () => {
    const fetchData = await fetch(
      "https://api.themoviedb.org/3/movie/top_rated?page=1",
      API_OPTIONS
    );
    const jsonData = await fetchData.json();
    dispatch(addTopRated(jsonData));
  };
  useEffect(() => {
    getMovie();
  }, []);
};
export default useUTopRatedMovies;
