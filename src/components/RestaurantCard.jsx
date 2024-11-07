import React from "react";
import { FaRegClock, FaStar } from "react-icons/fa";
import { MdDeliveryDining } from "react-icons/md";
import { Link } from "react-router-dom";

const RestaurantCard = ({ data }) => {
  return (
    <Link
      to={`/restaurant/${data.id}`}
      className="shadow rounded-lg overflow-hidden hover:bg-gray-100 cursor-pointer hover:shadow-lg"
    >
      <img
        className="w-full object-contain "
        src={data.photo}
        alt={data.name}
      />
      <div className="p--3">
        <div className="flex justify-between">
          <h3 className="text-xl font-semibold">{data.name}</h3>
          <p className="flex items-center gap-2">
            <FaStar className="text-red-500" />
            {data.rating}
          </p>
        </div>
        <p className="text-sm flex gap-4 my-2 text-gray-500">
          <span>{data.minPrice}₺ minimum</span>
          <span>kategori</span>
        </p>

        <div className="flex justify-between ">
          <p className="flex items-center gap-2 text-sm font-semibold">
            <i>
              <FaRegClock />
            </i>
            <span>{data.estimatedDelivery} dk</span>
          </p>
          {data.isDeliveryFree && (
            <div className="text-red-500 font-bold text-sm flex gap-2 items-center">
              <MdDeliveryDining className="text-xl" />
              Ucretsiz Teslimat
            </div>
          )}
        </div>
      </div>
    </Link>
  );
};

export default RestaurantCard;
