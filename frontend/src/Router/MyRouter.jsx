import React from "react";
import { GuestLayout } from "../layouts";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home, Login, CreateProduct, Products } from "../pages";

const MyRouter = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<GuestLayout />}>
            <Route index element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/create-product" element={<CreateProduct />} />
            <Route path="/products" element={<Products />} />
          </Route>
          <Route path="*" element={"<NoPage />"} />
        </Routes>
      </Router>
    </>
  );
};

export default MyRouter;
