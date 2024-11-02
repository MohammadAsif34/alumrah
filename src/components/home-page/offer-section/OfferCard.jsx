import React from "react";

const OfferCard = (props) => {
  return (
    <div className="w-[300px] h-28 p-1 bg-green-100 border border-green-500 rounded-xl shadow-lg flex items-center hover:bg-green-500 hover:text-white transition-all  duration-500">
      <div className="w-[150px] h-full rounded-[10px] overflow-hidden">
        <img
          src={
            "https://images.pexels.com/photos/29157414/pexels-photo-29157414/free-photo-of-young-woman-enjoying-autumn-on-a-park-bench.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
          }
          alt=""
          className="w-full h-full object-cover object-center"
        />
      </div>
      <div className="pl-2  ">
        {/* <h1>{props.id}</h1> */}
        <h1 className="text-base font-semibold py-2">Last Date Nov 15</h1>
        <p className="text-sm">Extra $200 off on Winter offer</p>
      </div>
    </div>
  );
};
OfferCard.defaultProps = {
  id: 1,
};
export default OfferCard;
