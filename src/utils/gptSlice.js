import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
  name: "gpt",
  initialState: {
    showSearch: false,
  },
  reducers: {
    toggleSearch: (state, action) => {
      state.showSearch = !state.showSearch;
    },
  },
});

export const { toggleSearch } = gptSlice.actions;

export default gptSlice.reducer;
