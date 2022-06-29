import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Category } from "../../models";

const initialState: Category = {
  id: Number(),
  name: "",
};

export const categorySlice = createSlice({
  name: "category",
  initialState,
  reducers: {
    setCategory: (state, action: PayloadAction<Category>) => {
      return action.payload;
    },
  },
});

export const CategoryActoins = categorySlice.actions;

export default categorySlice.reducer;
