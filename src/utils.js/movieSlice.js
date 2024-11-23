import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
  name: "movies",
  initialState: {
    nowPlayingMovies: null,
    trailer: null,
    popularMovies: null,
    topRated: null,
    upComing: null,
  },
  reducers: {
    addMovie: (state, action) => {
      state.nowPlayingMovies = action.payload;
    },
    addTrailer: (state, action) => {
      state.trailer = action.payload;
    },
    addPopular: (state, action) => {
      state.popularMovies = action.payload;
    },
    addUpcoming: (state, action) => {
      state.upComing = action.payload;
    },
    addTopRated: (state, action) => {
      state.topRated = action.payload;
    },
  },
});
export const { addMovie, addTrailer, addPopular, addUpcoming, addTopRated } =
  movieSlice.actions;
export default movieSlice.reducer;
