import React from "react";
import { GuestLayout } from "../layouts";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
const Home = ()=> <div>Home</div>
const Login = ()=> <div>Login</div>

const MyRouter = () => {
  return (
    <>
      <Router>
        <Routes path="/" element={<GuestLayout />}>
          <Route index element={<Home />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Router>
    </>
  );
};

export default MyRouter;
