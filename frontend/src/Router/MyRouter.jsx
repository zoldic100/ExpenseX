import React from "react";
import { AuthLayout, GuestLayout } from "../layouts";
import {

  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import {
  Home,
  Login,
  FetchExpenses,
  CreateExpense,
  UpdateExpenses,
} from "../pages";
import { AnimatePresence } from "framer-motion";

const MyRouter = () => {
  let location =useLocation()
  return (
    <>
      <AnimatePresence initial={false} >
          <Routes location={location} key={location.key}>
            <Route path="/" element={<GuestLayout />}>
              <Route index element={<Home />} />
              <Route path="/login" element={<Login />} />
            </Route>

            <Route path="/expense" element={<AuthLayout />}>
              <Route index element={<FetchExpenses />} />
              <Route
                path="/expense/create-expense"
                element={<CreateExpense />}
              />
              <Route path="/expense/:id/edit" element={<UpdateExpenses />} />
            </Route>
            <Route path="*" element={"404"} />
          </Routes>
        
      </AnimatePresence>
    </>
  );
};

export default MyRouter;
