import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <footer className="px-4  bg-gray-800 text-slate-300 text-sm cursor-default">
        <section className="container m-auto py-2 ">
          {/* speak to expert  */}
          <div className="py-4 border-b">
            <span className="text-2xl tracking-widest">
              <i className="bi bi-calla"></i> Speak to our Expert at +91 - 00000
              00000
            </span>
          </div>
          {/* important links  */}
          <div className=" py-4 flex ">
            <div className="w-[600px]">
              <div className="w-[450px] ">
                <h1 className="py-2 text-3xl font-bold">AL-UMRAH</h1>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Quisquam accusantium iure aperiam dolores.
                </p>
              </div>
              <ul className="flex text-2xl my-4">
                <li className="mr-4 hover:text-green-500">
                  <Link
                    to={"https://www.youtube.com"}
                    className=" bi bi-youtube"
                  ></Link>
                </li>

                <li className="mr-4 hover:text-green-500">
                  <Link
                    to={"https://www.facebook.com"}
                    className=" bi bi-facebook"
                  ></Link>
                </li>

                <li className="mr-4 hover:text-green-500">
                  <Link
                    to={"https://www.instagram.com"}
                    className=" bi bi-instagram"
                  ></Link>
                </li>

                <li className="mr-4 hover:text-green-500">
                  <Link
                    to={"https://www.twitter.com"}
                    className=" bi bi-twitter-x"
                  ></Link>
                </li>

                <li className="mr-4 hover:text-green-500">
                  <Link
                    to={"https://www.linkedin.com"}
                    className=" bi bi-linkedin"
                  ></Link>
                </li>
              </ul>
            </div>

            <div className="flex-1">
              <h1 className="py-3 text-xl">Solution</h1>
              <ul>
                <li className="py-1 ">
                  <Link className="hover:text-green-500 cursor-pointer ">
                    Marketing
                  </Link>
                </li>
                <li className="py-1 ">
                  <Link className="hover:text-green-500 cursor-pointer">
                    Analytics
                  </Link>
                </li>
                <li className="py-1 ">
                  <Link className="hover:text-green-500 cursor-pointer">
                    Commerce
                  </Link>
                </li>
                <li className="py-1 ">
                  <Link className="hover:text-green-500 cursor-pointer">
                    Insights
                  </Link>
                </li>
              </ul>
            </div>

            <div className="flex-1">
              <h1 className="py-3 text-xl">Support</h1>
              <ul>
                <li className="py-1 ">
                  <Link className="hover:text-green-500 cursor-pointer">
                    Pricing
                  </Link>
                </li>
                <li className="py-1 ">
                  <Link className="hover:text-green-500 cursor-pointer">
                    Documentation
                  </Link>
                </li>
                <li className="py-1 ">
                  <Link className="hover:text-green-500 cursor-pointer">
                    Guides
                  </Link>
                </li>
              </ul>
            </div>

            <div className="flex-1">
              <h1 className="py-3 text-xl">Copmany</h1>
              <ul>
                <li className="py-1 ">
                  <Link className="hover:text-green-500 cursor-pointer">
                    About
                  </Link>
                </li>
                <li className="py-1 ">
                  <Link className="hover:text-green-500 cursor-pointer">
                    Blogs
                  </Link>
                </li>
                <li className="py-1 ">
                  <Link className="hover:text-green-500 cursor-pointer">
                    Tours
                  </Link>
                </li>
                <li className="py-1 ">
                  <Link className="hover:text-green-500 cursor-pointer">
                    Partners
                  </Link>
                </li>
                <li className="py-1 ">
                  <Link className="hover:text-green-500 cursor-pointer">
                    press
                  </Link>
                </li>
              </ul>
            </div>

            <div className="flex-1 min-w-[300px]">
              <h1 className="py-3 text-xl">Contact</h1>
              <ul className="">
                <li className="py-1">
                  <i className="bi bi-buildings pr-2"></i>
                  Address : 52, Western Street, London
                </li>
                <li className="py-1">
                  <i className="bi bi-envelope pr-2"></i>
                  Email : customer@info.com
                </li>
                <li className="py-1">
                  <i className="bi bi-telephone pr-2"></i>
                  Phone : +91 - 01234 56789
                </li>
              </ul>
            </div>
          </div>

          {/* subscribe section  */}
          <div className="py-4 flex border-t">
            <div className="flex-1">
              <h1 className="text-xl py-2">Subscribe to our Newsletter</h1>
              <p>
                The latest news, articles and resources, sent to your inbox
                weekly.
              </p>
            </div>
            <div>
              <form action="">
                <input
                  type="text"
                  placeholder="Emails"
                  className="h-11 mx-2 px-3 border rounded-md bg-gray-700 "
                />
              </form>
            </div>
            <button className="h-11 px-4 font-semibold bg-green-600 hover:bg-green-700 rounded-md ">
              Subscribe
            </button>
          </div>
          {/* rights section  */}
          <div className="pt-8 pb-5 border-t">
            <span>&copy;2024 Al-Umrah, Inc. All rights reserved.</span>
            <span className="float-end">
              <ul className="flex text-2xl">
                <li className="px-2 hover:text-green-500 ">
                  <Link className="bi bi-facebook"></Link>
                </li>
                <li className="px-2 hover:text-green-500">
                  <Link className="bi bi-instagram"></Link>
                </li>
                <li className="px-2 hover:text-green-500">
                  <Link className="bi bi-twitter-x"></Link>
                </li>
                <li className="px-2 hover:text-green-500">
                  <Link className="bi bi-github"></Link>
                </li>
                <li className="px-2 hover:text-green-500">
                  <Link className="bi bi-youtube"></Link>
                </li>
              </ul>
            </span>
          </div>
        </section>
      </footer>
    </>
  );
};

export default Footer;
