import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav className="bg-gray-800 select-none sticky top-0 z-10">
        <section className="container h-16 m-auto text-white flex items-center">
          {/* logo  */}
          <div className="w-48 ">
            <h1 className="text-3xl">logo</h1>
          </div>
          {/* navItem  */}
          <div className="flex-1">
            <ul className="flex text-md">
              <Link to={"/"}>
                <li className="px-4 py-2 rounded-md hover:bg-green-400 transition-all duration-500">
                  Home
                </li>
              </Link>
              <Link to={"/trip-list"}>
                <li className="px-4 py-2 rounded-md hover:bg-green-400 transition-all duration-500">
                  Project
                </li>
              </Link>
              <li className="px-4 py-2 rounded-md hover:bg-green-400 transition-all duration-500">
                Blogs
              </li>
              <Link to={"/about"}>
                <li className="px-4 py-2 rounded-md hover:bg-green-400 transition-all duration-500">
                  About
                </li>
              </Link>
            </ul>
          </div>
          {/* register-login || user avatar  */}
          <div className="text-md ">
            {false ? (
              // user avatar
              <div className="flex items-center">
                <span className="mx-1 ">Hi, User</span>
                <img
                  src="/vite.svg"
                  alt=""
                  className="w-12 h-12 mx-1 border-2 rounded-full cursor-pointer"
                />
              </div>
            ) : (
              // register-login
              <div className="">
                <Link to={"/register"}>
                  <span className="mx-2 px-4 py-2 bg-green-500 rounded-lg hover:bg-green-400 ">
                    Register
                  </span>
                </Link>
                <Link to={"/login"}>
                  <span className="mx-2 px-4 py-2 bg-green-500 rounded-lg hover:bg-green-400 duration-300 transition-all ">
                    Login
                  </span>
                </Link>
              </div>
            )}
          </div>
        </section>
      </nav>
    </>
  );
};

export default Navbar;
