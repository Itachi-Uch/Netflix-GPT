import Header from "./Header";
import useNowPlayingMovies from "../hooks.js/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import usePopularMovies from "../hooks.js/usePopularMovies";
import useUpComingMovies from "../hooks.js/useUpcomingMovies";
import useUTopRatedMovies from "../hooks.js/useTopRatedMovies";
import { useSelector } from "react-redux";
import GPTSearch from "./GPTSearch";

const Browse = () => {
  useNowPlayingMovies();
  usePopularMovies();
  useUpComingMovies();
  useUTopRatedMovies();
  const gptSearch = useSelector((store) => store.GPTSearch.toggleGPTSearch);
  return (
    <div>
      <Header />
      {gptSearch ? (
        <GPTSearch />
      ) : (
        <>
          <MainContainer />
          <SecondaryContainer />
        </>
      )}
    </div>
  );
};

export default Browse;
