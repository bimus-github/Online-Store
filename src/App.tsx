import SingIn from "./components/SingIn";
import { Routes, Route } from "react-router-dom";
import Home from "./components/home";
import Category from "./components/Category";
import AllProducts from "./components/AllProducts";
import { useEffect } from "react";
import { useAppDispatch } from "./store/hooks";
import { ProductsSliceActions } from "./store/features/products";

import { CategoriesSliceActions } from "./store/features/categories";

function App() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    //  fetch products

    fetch("http://localhost:3001/api/product")
      .then((response) => {
        if (!response.ok) {
          throw new Error(
            `This is an HTTP error: The status is ${response.status}`
          );
        }

        return response.json();
      })
      .then((actualData) => {
        const products = actualData.products;
        dispatch(ProductsSliceActions.addMultipleProducts(products));
      })
      .catch((error) => console.log(error));

    // fetch categories

    fetch("http://localhost:3001/api/category")
      .then((response) => {
        if (!response.ok) {
          throw new Error(
            `This is an HTTP error: The status is ${response.status}`
          );
        }

        return response.json();
      })
      .then((actualData) => {
        let data: any = [
          {
            id: Date.now(),
            name: actualData[0],
          },
        ];
        // console.log(actualData);

        for (let i = 1; i < actualData.length; i++) {
          data = [
            ...data,
            {
              id: Math.floor(Math.random() * 100000),
              name: actualData[i],
            },
          ];
        }
        dispatch(CategoriesSliceActions.addMultipleCategories(data));
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className="w-screen h-screen">
      <Routes>
        <Route path="/" element={<SingIn />} />
        <Route path="/api" element={<Home />} />
        <Route path="/api/categories" element={<Category />} />
        <Route path="/api/allProducts" element={<AllProducts />} />
      </Routes>
    </div>
  );
}

export default App;
