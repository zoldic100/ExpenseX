import React from "react";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";
import LogoutButton from "../../Logout";

const NavBar = () => {
  return (
    <>
      <nav className="bg-gray-800 p-4">
        <div className="container mx-auto flex justify-between items-center">
          {/* Logo on the Left */}
          <div className="flex items-center">
            <img src={logo} alt="Logo" className="h-8 w-8 mr-2" />
          </div>

          {/* Navigation Links on the Right */}
          <div className="hidden md:flex items-center space-x-4">
            <Link to={"/"} className="text-white">
              Home
            </Link>

            <Link to={"/create-product"} className="text-white">
              product
            </Link>
            <Link to={"/user"} className="text-white">
              expense
            </Link>
            <LogoutButton />
            <Link to={"/login"} className="text-white">
              <button>login</button>
            </Link>
          </div>

          {/* Hamburger Menu for Mobile */}
          <div className="md:hidden">
            {/* Use your own menu icon here */}
            <button
              type="button"
              className="text-white hover:text-gray-300 focus:outline-none focus:text-gray-300"
              aria-label="Toggle menu"
            >
              Menu
            </button>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
