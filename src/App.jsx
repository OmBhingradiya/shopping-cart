import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Cart from "./Cart";
import Product from "./Product";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Product />}></Route>
          <Route path="/cart" element={<Cart />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
