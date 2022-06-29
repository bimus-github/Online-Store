import { useState } from "react";
import AppLayout from "../Layout";
// import { Category } from "../models";
import { useAppSelector } from "../store/hooks";
import Product from "./Products";

function Category() {
  const productsSlice = useAppSelector((product) => product.productsSlice);
  const categoriesSlice = useAppSelector(
    (categories) => categories.categoriesSlice
  );

  const products = Object.values(productsSlice);
  const categories = Object.values(categoriesSlice);

  const [data, setData] = useState<any>(categories[0]);

  // console.log(products);

  return (
    <AppLayout>
      <div className="h-[500px] overflow-scroll scrollbar-hide">
        {/* Category */}
        <section>
          <h1 className="my-5 text-4xl font-semibold">Categories</h1>
          <div className=" flex gap-10 overflow-scroll scrollbar-hide p-3 px-6 rounded-md border-2">
            {categories &&
              categories.map((category) => {
                const calsses =
                  category.name === data?.name ? "bg-green-100" : "";
                return (
                  <div
                    className={`${calsses} capitalize min-w-[170px] h-40 rounded-md bg-yellow-100 font-medium  
                    cursor-pointer duration-300 transform flex flex-col items-center justify-center  gap-2
                  hover:scale-105 transition ease-out`}
                    key={category.id}
                    onClick={() => setData(category)}
                  >
                    <p>{`{Image}`}</p>
                    <p>{category.name}</p>
                  </div>
                );
              })}
          </div>
        </section>

        {/* Product */}
        <section>
          <Product
            data={products?.filter(
              (product) => product?.category === data?.name
            )}
          />
        </section>
      </div>
    </AppLayout>
  );
}

export default Category;
