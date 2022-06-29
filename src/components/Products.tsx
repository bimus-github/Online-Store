import React, { useState } from "react";
import { Product } from "../models";
import { DotsHorizontalIcon } from "@heroicons/react/solid";

interface Props {
  data: Product[];
}

function Products({ data }: Props) {
  const [openDescription, setOpenDescription] = useState<Product>();
  // console.log(data);

  return (
    <div className="py-10">
      {data.length === 0 ? (
        <div className="flex items-center justify-center w-full h-full font-semibold text-xl text-red-500">
          nothing at the moment
        </div>
      ) : (
        <div className=" grid grid-cols-1 md:grid-cols-2 h-[500px] gap-20">
          {data?.map((data, index) => (
            <div
              className=" flex flex-col items-center justify-start gap-4 py-4 border-b-2 border-gray-600"
              key={index.toString()}
            >
              <h1 className=" self-start text-4xl font-bold">{data?.title}</h1>
              <img
                src={data?.thumbnail}
                className="h-[450px] w-[450px] shadow-2xl rounded-lg"
              />
              <div className=" flex flex-col w-full text-lg font-semibold h-auto gap-2">
                <div className="flex items-center w-full gap-2">
                  <h1>Brand:</h1>
                  <h1>{data.brand}</h1>
                </div>

                <div className="flex items-center w-full gap-2">
                  <p>
                    Description:{" "}
                    <p className="font-normal">{data.description}</p>
                    {openDescription?.id !== data.id && (
                      <DotsHorizontalIcon
                        xlinkTitle="Learn more information"
                        onClick={() => setOpenDescription(data)}
                        className="h-6 text-gray-500"
                      />
                    )}
                  </p>
                </div>

                {openDescription?.id === data.id && (
                  <div className=" flex flex-col items-start justify-start gap-1">
                    <div className=" flex gap-2 text-green-400">
                      <p>Stock:</p>
                      <p className=" font-normal">{data.stock}</p>
                    </div>
                    <div className=" flex gap-2 text-blue-400">
                      <p>Discount:</p>
                      <p className=" font-normal">
                        {data.discountPercentage} %
                      </p>
                    </div>
                    <div className=" flex gap-2 text-red-400">
                      <p>Price:</p>
                      <p className=" font-normal">{data.price} %</p>
                    </div>
                    <div className=" flex gap-2 text-black">
                      <p>Rating:</p>
                      <p className=" font-normal">{data.rating} %</p>
                    </div>
                    <div className="flex w-full flex-col justify-start items-start">
                      <h1>Other Pictures</h1>
                      <div className=" flex items-center max-w-full overflow-scroll scrollbar-hide">
                        {data.images.map((image) => (
                          <img
                            src={image}
                            alt=""
                            className="h-[120px] w-[80px} m-5 shadow-lg"
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Products;
