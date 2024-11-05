import React from "react";
import { IoWarningOutline } from "react-icons/io5";

const Error = ({ message, retry }) => {
  return (
    <>
      <div className="bg-red-500 rounded text-white my-10 flex items-center justify-center gap-4 mx-auto">
        <IoWarningOutline className="text-4xl" />
        <div className="items-center justify-center flex flex-col font-semibold">
          <h2>Uzgunuz bir hata olustu!</h2>
          <p>{message}</p>
        </div>
      </div>
      <div className="flex justify-center">
        <button
          onClick={retry}
          className="border px-5 py-2 rounded font-semibold hover:bg-gray-100"
        >
          Tekrar Dene
        </button>
      </div>
    </>
  );
};

export default Error;
