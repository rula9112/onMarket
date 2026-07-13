import { SearchState } from "@/src/types/search";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: SearchState = {
query: ""
};

const searchSlice = createSlice({
name: "search",
initialState,
reducers: {
setQuery: (state, action: PayloadAction<string>) => {
state.query = action.payload;
}
} });

export const { setQuery } = searchSlice.actions;
export default searchSlice.reducer