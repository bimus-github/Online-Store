import { configureStore } from "@reduxjs/toolkit";
import categorySlice from "./features/category";
import categoriesSlice from "./features/categories";
import productSlice from "./features/product";
import productsSlice from "./features/products";

export const store = configureStore({
  reducer: {
    categorySlice,
    categoriesSlice,
    productSlice,
    productsSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
