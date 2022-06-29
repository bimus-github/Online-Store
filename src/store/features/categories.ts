import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Category } from "../../models";

interface InitialStateType {
  [key: string]: Category;
}

const initialState: InitialStateType = {};

export const categoriesSlice = createSlice({
  name: "categories",
  initialState,
  reducers: {
    addMultipleCategories: (state, action: PayloadAction<Category[]>) => {
      const categories = action.payload;

      categories.forEach((category) => {
        state[category.id] = category;
      });
    },
    addCategories: (state, action: PayloadAction<Category>) => {
      const category = action.payload;

      state[category.id] = category;
    },
    deleteCategories: (state, action: PayloadAction<Category>) => {
      const category = action.payload;

      delete state[category.id];
    },
  },
});

export const CategoriesSliceActions = categoriesSlice.actions;

export default categoriesSlice.reducer;
