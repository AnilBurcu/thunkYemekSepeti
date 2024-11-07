import React from "react";
import { FaPlus } from "react-icons/fa6";

const ProductCard = ({ data }) => {
  return (
    <div className="shadow-lg border flex justify-between p-3 rounded-lg hover:bg-red-200 hover:scale-[1.03] transition duration-100 hover:bg-opacity-40">
      <div className="flex flex-col justify-between">
        <div>
          <h1 className="text-xl font-semibold">{data.title}</h1>
          <p className="text-gray-500">{data.desc}</p>
        </div>
        <p className="text-lg font-semibold">{data.price}₺</p>
      </div>
      <div>
        <div className="relative w-[115px] h-[115px]">
          <img
            className="rounded-md object-cover w-full h-full"
            src={data.photo}
          />
          <button className="absolute right-2 bottom-2 bg-white rounded-full p-2 text-lg hover:bg-red-500 transition duration-100">
            <FaPlus className="text-lg" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
