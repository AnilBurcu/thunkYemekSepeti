import React from "react";
import { BsBasket3 } from "react-icons/bs";
import Container from "./Container";

const Header = () => {
  return (
    <header className="shadow-xl">
      <Container design={"flex justify-between items-center"}>
        <h1 className="text-red-500 font-bold text-2xl font-mono">
          YemekSepeti Thunk
        </h1>
        <div className="flex items-center gap-4">
          <button className="border border-red-500 px-3 py-1 rounded text-red-500 transition hover:bg-red-500 hover:text-white">
            Giris Yap
          </button>
          <button className="bg-red-500 text-white px-3 py-1 rounded transition hover:brightness-75">
            Kayit Ol
          </button>
          <button className="text-red-500 text-2xl hover:bg-red-500 hover:bg-opacity-15 rounded-full p-3 transition">
            <BsBasket3 />
          </button>
        </div>
      </Container>
    </header>
  );
};

export default Header;
