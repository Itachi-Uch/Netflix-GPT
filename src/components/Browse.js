import Header from "./Header";
import useNowPlayingMovies from "../hooks.js/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import usePopularMovies from "../hooks.js/usePopularMovies";
import useUpComingMovies from "../hooks.js/useUpcomingMovies";
import useUTopRatedMovies from "../hooks.js/useTopRatedMovies";

const Browse = () => {
  useNowPlayingMovies();
  usePopularMovies();
  useUpComingMovies();
  useUTopRatedMovies();
  return (
    <div>
      {}
      <Header />
      <MainContainer />
      <SecondaryContainer />
    </div>
  );
};

export default Browse;
