import { createSlice } from "@reduxjs/toolkit";

const GPTSearch = createSlice({
  name: "GPTSearch",
  initialState: {
    toggleGPTSearch: false,
    searchResults: null,
  },
  reducers: {
    toggleSearch: (state) => {
      state.toggleGPTSearch = !state.toggleGPTSearch;
    },
    searchData: (state, action) => {
      state.searchResults = action.payload;
    },
  },
});
export const { toggleSearch, searchData } = GPTSearch.actions;
export default GPTSearch.reducer;
