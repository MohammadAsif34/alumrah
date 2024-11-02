import React from "react";
import OfferCard from "./OfferCard";

const SpecialOffer = () => {
  return (
    <>
      <section className="container m-auto my-4">
        <div className="flex justify-center">
          <span className="inline-block m-auto my-8 text-center text-4xl font-extrabold font-mono border-b-4 border-green-400">
            Special Offer
          </span>
        </div>
        <div className="flex justify-center my-4 ">
          <div className="w-fit my-5 flex gap-2 overflow-hidden ">
            <OfferCard id="1" />
            <OfferCard id="2" />
            <OfferCard id="3" />
            <OfferCard id="4" />
          </div>
        </div>
      </section>
    </>
  );
};

export default SpecialOffer;
