import React from "react";
import { Link } from "react-router-dom";

const TripCard = () => {
  return (
    <section className="min-w-[300px] max-w-[350px] h-fit border border-green-500 hover:bg-green-500 hover:text-white rounded-xl overflow-hidden flex-1 group transition-all duration-500  cursor-default">
      <div className="relative overflow-hidden p-1">
        <img
          src={
            "https://images.pexels.com/photos/29157414/pexels-photo-29157414/free-photo-of-young-woman-enjoying-autumn-on-a-park-bench.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
          }
          alt=""
          className="w-full h-44 bg-gray-300 object-cover object-center rounded-lg overflow-hidden"
        />
        {true && (
          <span className="absolute right-0 bottom-0 px-4 py-1 bg-red-500 text-white m-1 rounded-br-lg rounded-tl-lg">
            Premimum
          </span>
        )}
      </div>
      <div>
        <ul className=" py-3 px-2 text-base">
          <li>
            <span className="text-2xl font-semibold">Name</span>
          </li>
          <li>
            <span>visa</span>
            <span className="float-end">
              4.2 <i className="bi bi-star-fill"></i>
            </span>
          </li>

          <li>
            <span>8 Days</span>
            <span className="float-end">
              <span className="text-xl">$65 </span> /person
            </span>
          </li>

          <li className="mt-3">
            <span>
              <i className="bi bi-check-circle-fill text-green-500 pr-2 group-hover:text-white "></i>
              <i>Free cancelation</i>
            </span>

            <Link
              to={"/trip-list"}
              className="translate-x-1 px-4 py-1 rounded-lg bg-green-500 hover:bg-green-400 text-white group-hover:bg-white group-hover:text-green-500 float-end"
            >
              Reserve
            </Link>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default TripCard;
