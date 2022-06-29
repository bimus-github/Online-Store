import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Product } from "../../models";

interface InitialStateType {
  [key: string]: Product;
}

const initialState: InitialStateType = {};

export const productsSlice = createSlice({
  name: "Products",
  initialState,
  reducers: {
    addMultipleProducts: (state, action: PayloadAction<Product[]>) => {
      const products = action.payload;

      products.forEach((product) => {
        state[product.id] = product;
      });
    },
    addProducts: (state, action: PayloadAction<Product>) => {
      const product = action.payload;

      state[product.id] = product;
    },
    deleteProducts: (state, action: PayloadAction<Product>) => {
      const product = action.payload;

      delete state[product.id];
    },
  },
});

export const ProductsSliceActions = productsSlice.actions;

export default productsSlice.reducer;
