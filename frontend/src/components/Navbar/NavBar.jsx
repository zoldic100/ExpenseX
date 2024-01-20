import React, {  useState } from "react";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";
import LogoutButton from "../../Logout";
import { BsList, BsXLg } from "react-icons/bs";


const NavBar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [currentIcon, setCurrentIcon] = useState(<BsList />);

  const handleMenuToggle = () => {
    setMenuOpen(!isMenuOpen);
    setCurrentIcon(isMenuOpen ? <BsList /> : <BsXLg />);
  };
  return (
    <>
      <nav className=" md:px-6 p-3 sm:p-3">
        <div className="container mx-auto flex justify-between items-center">
          {/* Logo on the Left */}
          <div className="flex items-center">
            <Link to={"/"}>
              <img src={logo} alt="Logo" className="h-8 w-8 mr-2" />
            </Link>
          </div>

          {/* Navigation Links on the Right */}
          <div className="hidden sm:flex items-center space-x-3">
            {localStorage.getItem("user_id") !== null ? (
              <>
                <Link to={"/"} className="text-gray-800">
                  Home
                </Link>

                <Link to={"/expense"} className="text-gray-800">
                  Expense
                </Link>
                <Link to={"/expense/create-expense"} className="text-gray-800">
                  Create-expense
                </Link>
                <LogoutButton />
              </>
            ) : (
              <>
                <Link to={"/"} className="text-gray-800">
                  Home
                </Link>
                <Link to={"/"} className="text-gray-800">
            
                </Link>
                <Link
                  to={"/login"}
                  className="nav-btn"
                >
                  Login
                </Link>
                <Link
                  to={"/login"}
                  className="nav-btn"
                >
                  Sign in
                </Link>
              </>
            )}
          </div>

          {/* Hamburger Menu for Mobile */}
          <div className="sm:hidden">
            <button
              type="button"
              className="text-gray-600 text-2xl hover:text-gray-300 "
              aria-label="Toggle menu"
              onClick={handleMenuToggle}
            >
              {currentIcon}
            </button>
          </div>

        </div>
        {isMenuOpen
         && (
          <div
            className="text-sm relative 
              "
          >
            {/* Your dropdown menu content goes here */}
            <ul 
            className="absolute z-50 top-0 right-0 p-3 rounded-md
             bg-gray-50 border
              border-black ">
              <li className="">
                {" "}
                <Link to={"/"} className="text-gray-800">
                  Home
                </Link>
              </li>

              <li>
                {" "}
                <Link to={"/expense"} className="text-gray-800">
                  Expense
                </Link>
              </li>
              <li>
                {" "}
                <Link to={"/expense/create-expense"} className="text-gray-800">
                  Create-expense
                </Link>
              </li>
              <li className="w-full">
                <LogoutButton />
              </li>
            </ul>
          </div>
        )}
      </nav>
    </>
  );
};

export default NavBar;
