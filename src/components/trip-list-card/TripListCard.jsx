import React from "react";
import { Link } from "react-router-dom";

const TripListCard = () => {
  return (
    <section className=" w-full h-fit p-2 my-2 border border-black rounded-lg flex items-center">
      <div className="w-[400px] h-[250px] rounded-xl overflow-hidden">
        <img
          src="https://images.pexels.com/photos/16445771/pexels-photo-16445771/free-photo-of-book-and-vases-with-plants-on-windowsill.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
          alt=""
          className="w-full h-full object-cover object-center"
        />
      </div>
      <div>
        <ul className="px-3">
          <li className="w-[150px] h-[75px] my-1  overflow-hidden rounded-xl">
            <img
              src="https://images.pexels.com/photos/16445771/pexels-photo-16445771/free-photo-of-book-and-vases-with-plants-on-windowsill.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
              className="w-full h-full object-cover object-center overflow-hidden"
            />
          </li>
          <li className="w-[150px] h-[75px] my-1  overflow-hidden rounded-xl">
            <img
              src="https://images.pexels.com/photos/16445771/pexels-photo-16445771/free-photo-of-book-and-vases-with-plants-on-windowsill.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
              className="w-full h-full object-cover object-center overflow-hidden"
            />
          </li>

          <li className="w-[150px] h-[75px] my-1  overflow-hidden rounded-xl">
            <img
              src="https://images.pexels.com/photos/16445771/pexels-photo-16445771/free-photo-of-book-and-vases-with-plants-on-windowsill.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
              className="w-full h-full object-cover object-center overflow-hidden"
            />
          </li>
        </ul>
        <img src="" alt="" />
      </div>
      <div className=" px-4 flex-1   ">
        <p>
          <i className="bi bi-geo-alt"></i>Location
        </p>
        <h1 className="text-4xl py-3">Trip Name</h1>
        <div>
          <span>
            <i className="bi bi-people-fill px-2"></i>
          </span>
          <i>Trip completed</i>
          <span>
            <i className="bi bi-star-fill px-2"></i>4.5
          </span>
        </div>
        <div className="">
          <span>
            <i className="bi bi-x text-red-500 pr-2"></i>
            <i>Best Price Guarntee</i>
          </span>
          <span>
            <i className="bi bi-check-circle-fill text-green-500 px-2"></i>
            <i>Free cancelation</i>
          </span>
        </div>
        <div className="mt-8 indent-5">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
          asperiores velit modi itaque quae voluptas sapiente magnam, voluptates
          amet ea quisquam ipsa laudantium. Beatae, aliquid. Repellat, atque
          ducimus? Nihil, eveniet.
        </div>
      </div>
      <div className="w-[250px] h-full border">
        <h1>Stops</h1>
        {/* <ul> */}
        <li>stop1</li>
        <li>stop2</li>
        <li>stop3</li>
        <li>stop4</li>
        <li>stop5</li>
        <li>stop6</li>
        <li>stop7</li>
        {/* </ul> */}
        <Link to={"/trip-details"}>
          <button className="px-4 py-2 bg-green-600 text-white rounded-lg float-end ">
            Reserve now
          </button>
        </Link>
      </div>
    </section>
  );
};

export default TripListCard;
