import React from "react";
import TripListCard from "../../components/trip-list-card/TripListCard";

const TripList = () => {
  return (
    <>
      <section className="container m-auto px-4 my-20">
        <div className="border">
          <span className="text-4xl">Explore all things to do:</span>
          <span className="inline-block float-end">
            <select
              aria-placeholder="Filter"
              className="w-32 h-10 border border-gray-500 rounded-md "
            >
              <option className="text-gray-500">Select</option>
              <option value="visa">Visa</option>
              <option value="passport">Passport</option>
              <option value="umrah">Umrah</option>
              <option value="huj">Huj</option>
            </select>
          </span>
        </div>
        <div className="p-3 border ">
          <TripListCard />
          <TripListCard />
          <TripListCard />
          <TripListCard />
          <TripListCard />
          <TripListCard />
          <TripListCard />
          <TripListCard />
          <TripListCard />
          <TripListCard />
          <TripListCard />
          <TripListCard />
          <TripListCard />
          <TripListCard />
        </div>
      </section>
    </>
  );
};

export default TripList;
