import React, { useState } from "react";
import TripCard from "../../trip-card/TripCard";
import { Link } from "react-router-dom";

const CardCarousel = () => {
  const [showAll, setShowAll] = useState(false);

  const toggleCards = () => {
    setShowAll(!showAll);
  };

  return (
    <>
      <section className="container m-auto my-20 px-4">
        <div className="w-fit p-3  m-auto">
          <div className="flex justify-center">
            <span className="inline-block m-auto my-8 text-center text-4xl font-extrabold font-mono border-b-4 border-green-400">
              Featured Trips
            </span>
          </div>
          <div className="my-5 grid gap-8 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 ">
            <TripCard />
            <TripCard />
            <TripCard />
            <TripCard />
            <TripCard />
            <TripCard />
          </div>
          <span className="float-end px-2 border border-green-500 rounded-lg hover:text-green-600">
            <Link>see more</Link>
          </span>
        </div>
      </section>
    </>
  );
};

export default CardCarousel;
