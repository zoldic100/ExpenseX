import React from "react";
import { AuthLayout, GuestLayout } from "../layouts";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home, Login,  FetchExpenses, CreateExpense, UpdateExpenses } from "../pages";


const MyRouter = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<GuestLayout />}>
            <Route index element={<Home />} />
            <Route path="/login" element={<Login />} />
          </Route>

          <Route path="/user" element={<AuthLayout />}>
            <Route index element={<FetchExpenses  />} />
            <Route path="/user/create-expense" element={<CreateExpense />} />
            <Route path="/user/expense/:id/edit" element={<UpdateExpenses />} />
          </Route>
                    <Route path="*" element={"404"} />
        </Routes>
      </Router>
    </>
  );
};

export default MyRouter;
