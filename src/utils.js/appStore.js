import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import movieReducer from "./movieSlice";
//Configured the redux store
const appStore = configureStore({
  reducer: {
    user: userReducer,
    movies: movieReducer,
  },
});
export default appStore;
