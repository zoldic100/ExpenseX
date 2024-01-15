import axios from "axios";
axios.defaults.withCredentials = true;

import React from "react";
import { Container, Footer, Hero, NavBar } from "../../components";

const GuestLayout = () => {
  return (
    <>
      <NavBar />
      <main className=" min-h-96  container mx-auto ">
        <Container />
      </main>
      <Footer />
    </>
  );
};

export default GuestLayout;
