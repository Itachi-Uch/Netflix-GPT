import { API_OPTIONS } from "../utils.js/constants";
import { useDispatch } from "react-redux";
import { addUpcoming } from "../utils.js/movieSlice";
import { useEffect } from "react";

const useUpComingMovies = () => {
  const dispatch = useDispatch();
  const getMovie = async () => {
    const fetchData = await fetch(
      "https://api.themoviedb.org/3/movie/upcoming?page=1",
      API_OPTIONS
    );
    const jsonData = await fetchData.json();
    dispatch(addUpcoming(jsonData));
  };
  useEffect(() => {
    getMovie();
  }, []);
};
export default useUpComingMovies;
