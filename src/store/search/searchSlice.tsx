import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {SearchResult, SearchState} from "./types"


const initialState: SearchState = {
  searchResults: [],
};

const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    setSearchResults: (state, action: PayloadAction<SearchResult[]>) => {
      return {
        ...state,
        searchResults: action.payload,
      };
    },
    clearSearchResults: (state) => {
      return {
        ...state,
        searchResults: [],
      };
    },
  },
});

export const searchActions = searchSlice.actions;

export const searchReducers = searchSlice.reducer;