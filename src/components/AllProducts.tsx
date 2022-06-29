import { SearchIcon } from "@heroicons/react/solid";
import React, { useState } from "react";
import AppLayout from "../Layout";
import { Product } from "../models";
import { useAppSelector } from "../store/hooks";
import Products from "./Products";

function AllProducts() {
  const productsSlice = useAppSelector((product) => product.productsSlice);
  const categoriesSlice = useAppSelector(
    (categories) => categories.categoriesSlice
  );
  let products = Object.values(productsSlice);

  const [data, setData] = useState<Product[]>(products);

  console.log(data);

  const filter = (e: React.ChangeEvent<HTMLInputElement>) => {
    setData(
      products?.filter((d) =>
        d?.title
          ?.toLocaleLowerCase()
          ?.includes(e.target.value?.toLocaleLowerCase())
      )
    );
  };
  console.log(data);

  return (
    <AppLayout>
      <div>
        <div className="flex w-[300px] self-center items-center rounded-full py-2 cursor-pointer md:border-2 md:shadow-sm">
          <input
            type="text"
            placeholder="Start your search ..."
            className=" pl-5 outline-none flex-grow bg-transparent placeholder-gray-400"
            onChange={(v) => filter(v)}
          />
          <SearchIcon className="h-7 rounded-full bg-red-400 text-white p-1 md:inline-flex hidden cursor-pointer md:mx-2" />
        </div>
        <Products data={data} />
      </div>
    </AppLayout>
  );
}

export default AllProducts;
