import React from "react";

const WhyAlUmrahCard = () => {
  return (
    <>
      <section className="w-[300px] h-[150px] ml-[35px] px-3 py-2 flex items-center border border-green-500 rounded-2xl hover:bg-green-500 transition-all duration-500 group">
        <div className="w-28 h-28 rounded-full overflow-hidden -translate-x-[70px]">
          <img
            src="https://images.pexels.com/photos/29157414/pexels-photo-29157414/free-photo-of-young-woman-enjoying-autumn-on-a-park-bench.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
            alt=""
            className="w-full h-full object-cover object-center"
          />
        </div>
        <div className="px-3 text-xl group-hover:text-white">best service</div>
      </section>
    </>
  );
};

export default WhyAlUmrahCard;
