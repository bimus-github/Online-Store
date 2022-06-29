import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Product } from "../../models";

const initialState: Product = {
  id: Number(),
  title: "",
  description: "",
  price: 0,
  discountPercentage: 0,
  rating: 0,
  stock: 0,
  brand: "",
  category: "",
  thumbnail: "",
  images: [],
};

export const productSlice = createSlice({
  name: "Product",
  initialState,
  reducers: {
    product: (state, action: PayloadAction<Product>) => {
      return action.payload;
    },
  },
});

export const ProductActoins = productSlice.actions;

export default productSlice.reducer;
