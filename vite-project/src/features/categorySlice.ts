
import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

const DEFAULT = "Key Highlights";

export interface CategoryState {
  titles: string[]; 
  selected: string;
}

const initialState: CategoryState = {
  titles: [DEFAULT],
  selected: DEFAULT,
};

const categorySlice = createSlice({
  name: "category",
  initialState,
  reducers: {
    setCategories(state, action: PayloadAction<string[]>) {
      state.titles = Array.from(new Set([DEFAULT, ...action.payload]));
    },
    selectCategory(state, action: PayloadAction<string>) {
      state.selected = action.payload;
    },
  },
});

export const { setCategories, selectCategory } = categorySlice.actions;
export default categorySlice.reducer;
