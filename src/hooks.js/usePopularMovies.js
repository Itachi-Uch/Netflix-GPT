import { API_OPTIONS } from "../utils.js/constants";
import { useDispatch } from "react-redux";
import { addPopular } from "../utils.js/movieSlice";
import { useEffect } from "react";

const usePopularMovies = () => {
  const dispatch = useDispatch();
  const getPopularMovies = async () => {
    const fetchData = await fetch(
      "https://api.themoviedb.org/3/movie/popular?page=1",
      API_OPTIONS
    );
    const jsonData = await fetchData.json();
    dispatch(addPopular(jsonData));
  };
  useEffect(() => {
    getPopularMovies();
  }, []);
};
export default usePopularMovies;
