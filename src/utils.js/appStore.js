import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import movieReducer from "./movieSlice";
import GPTSearchReducer from "./GPTSearchSlice";
//Configured the redux store
const appStore = configureStore({
  reducer: {
    user: userReducer,
    movies: movieReducer,
    GPTSearch: GPTSearchReducer,
  },
});
export default appStore;
