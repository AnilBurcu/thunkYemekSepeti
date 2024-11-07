import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./pages/Main";
import Card from "./pages/Card";
import Header from "./components/Header";
import Restaurant from "./pages/Restaurant";

const App = () => {
  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/restaurant/:id" element={<Restaurant />} />
        <Route path="/cart" element={<Card />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
