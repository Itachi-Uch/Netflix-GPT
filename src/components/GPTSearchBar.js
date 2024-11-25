import React, { useRef } from "react";
import client from "../utils.js/openAI";
import { API_OPTIONS } from "../utils.js/constants";
import { searchData } from "../utils.js/GPTSearchSlice";
import { useDispatch } from "react-redux";
const GPTSearchBar = () => {
  const searchText = useRef(null);
  const dispatch = useDispatch();

  const tmdbMovie = async (movie) => {
    const fetchmovie = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
        movie +
        "&include_adult=false&language=en-US&page=1",
      API_OPTIONS
    );
    const jsonData = await fetchmovie.json();
    return jsonData;
  };
  const handleGPTSearch = async () => {
    // const searchResult = await client.chat.completions.create({
    // const query = "act like a movie recommendation system and based on the query"+searchText.current.value+" give me an array of 5 movies only"
    //   messages: [{ role: "user", content: query }],
    //   model: "gpt-3.5-turbo",
    // });
    // console.log(searchResult);
    const searchResult = ["iron man", "3 idiots", "spiderman"];
    const movieData = await Promise.all(
      searchResult.map((movie) => tmdbMovie(movie))
    );
    dispatch(searchData(movieData));
  };

  return (
    <div className="pt-48 flex justify-center">
      <form
        className=" bg-black px-3 w-1/2 grid grid-cols-12 rounded-2xl"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          type="text"
          placeholder="What do you want to watch today?"
          className=" p-1 my-5 border border-black bg-white text black col-span-9 rounded-md"
          ref={searchText}
        ></input>
        <button
          className="bg-red-700 py-2 my-5 ml-3 rounded-md col-span-3"
          onClick={handleGPTSearch}
        >
          Search
        </button>
      </form>
      <div></div>
    </div>
  );
};

export default GPTSearchBar;
