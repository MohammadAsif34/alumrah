import React from "react";
import TripCard from "../../trip-card/TripCard";
import WhyAlUmrahCard from "./WhyAlUmrahCard";

const WhyAlUmrah = () => {
  return (
    <>
      <section className="container m-auto my-20 px-4">
        <div className=" p-3 m-auto flex flex-col justify-center">
          <div className="flex justify-center">
            <span className="inline-block m-auto my-8 text-center text-4xl font-extrabold font-mono border-b-4 border-green-400">
              Why choose Al-Umrah
            </span>
          </div>
          <div className="w-fit m-auto my-5  grid gap-8 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 justify-center ">
            <WhyAlUmrahCard />
            <WhyAlUmrahCard />
            <WhyAlUmrahCard />
            <WhyAlUmrahCard />
            <WhyAlUmrahCard />
            <WhyAlUmrahCard />
          </div>
        </div>
      </section>
    </>
  );
};

export default WhyAlUmrah;
