import React, { useEffect, useState } from "react";
// import trips from "../../../dummyData/trips.json";
// import { Subscribe } from "../../home/subscribe/Subscribe";
import { useNavigate } from "react-router-dom";
const TripDetails = () => {
  const navigate = useNavigate();
  const [person, setPerson] = useState(1);

  const tripId = 1;
  const tripData = {
    id: 1,
    location: "Dubai",
    tripName: "Dubai Visa",
    price: 46,
    serviceCharges: 10,
    totalPrice: 56,
    rating: 4.3,
    premium: false,
    imagge:
      "https://images.pexels.com/photos/18111550/pexels-photo-18111550/free-photo-of-newton-street-in-london.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
  };
  //   useEffect(() => {
  //     try {
  //       if (trips.find((item) => item.id == tripId)) {
  //         setTripData(trips[id + 1]);
  //       }
  //     } catch (err) {
  //       console.log(`error message : ${err}`);
  //     }
  //   }, []);
  const handleProceed = () => {
    // alert("proceed");
    navigate("/trip-submit");
  };

  return (
    <>
      <div className="container m-auto my-4">
        <div className="w-full h-full  flex gap-4">
          {/* trips details  */}
          <div className="flex-1 ">
            {/* trip detalis  */}
            <div className="mb-4 border-2  rounded-xl">
              <div className="w-full" style={{ height: "550px" }}>
                <img
                  src={tripData.imagge ? tripData.imagge : "/img2.jpg"}
                  alt=""
                  className="w-full h-full object-cover object-center rounded-lg"
                />
              </div>
              <div>
                <div className="px-5 py-4 border">
                  <h1 className=" py-2 text-5xl font-semibold">
                    {tripData ? tripData.tripName : "not found"}
                  </h1>
                  <div className="text-2xl mt-2 py-2 ">
                    <span>
                      <i className="bi bi-geo-alt pr-2 text-xl"></i>
                      {tripData && tripData.location}
                    </span>
                    <span className="ml-12 text-xl">
                      <i className="bi bi-geo-fill pr-2"></i>adject location
                    </span>
                  </div>
                  <div className="text-xl py-2">
                    <span className="mr-12">
                      <i className="bi bi-star-fill px-2"></i>
                      {tripData.rating}
                    </span>
                    <span className="mr-12">
                      <i className="bi bi-coin text-xl pr-2"></i>
                      {tripData.price}
                    </span>
                    <span className="mr-12">
                      <i className="bi bi-people-fill pr-2"></i>
                      {5}
                    </span>
                  </div>
                </div>
                <hr />
                <div className="mb-4 text-xl border ">
                  <h1 className="py-3 text-3xl font-semibold">Description</h1>
                  <p className="indent-4">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quidem fugit perferendis atque magnam magni, repellendus
                    nemo culpa autem ad voluptatum tenetur in omnis nobis quam
                    dolorem possimus. Ne
                  </p>
                </div>
              </div>
            </div>
            {/* write review  */}
            <div className="w-full border-2 px-16 py-5 rounded-xl">
              <h1 className=" text-2xl">
                <span className="text-4xl font-semibold">Reviews &nbsp;</span>{" "}
                (0 reviews)
              </h1>
              <div className="my-4 py-2 text-3xl">
                <span className="mr-3">
                  <i className="bi bi-star"></i>
                </span>
                <span className="mr-3">
                  <i className="bi bi-star"></i>
                </span>
                <span className="mr-3">
                  <i className="bi bi-star"></i>
                </span>
                <span className="mr-3">
                  <i className="bi bi-star"></i>
                </span>
                <span className="mr-3">
                  <i className="bi bi-star"></i>
                </span>
              </div>
              <form
                action=""
                className=" p-1 border-2 border-green-500 rounded-full relative flex"
              >
                <input
                  type="text"
                  name=""
                  id=""
                  placeholder="Reviews"
                  className="flex-1 h-12 px-4 text-2xl text-gray-500 rounded-full border bordecr-black"
                />
                <button className="px-4 bg-green-500 rounded-full">
                  Submit
                </button>
              </form>
            </div>
          </div>
          {/* price detalis  */}
          <div className="w-[400px]  bg-white">
            <div className="p-4 border-2 rounded-xl  ">
              <div className="py-3 border-b ">
                <span className="text-3xl font-semibold">
                  ${tripData ? tripData.price : "--"}{" "}
                </span>
                <span>/per person</span>
                <span className="float-end px-2">
                  {tripData ? (
                    <div>
                      <i className="bi bi-star-fill px-2"></i>
                      {tripData.rating}
                    </div>
                  ) : (
                    "Not rated"
                  )}
                </span>
              </div>
              <div className="py-3">
                <h1 className="py-2 text-3xl font-semibold">Information</h1>
                <form action="" className="  ">
                  <div className="p-4  border-2 rounded-xl">
                    <input
                      type="text"
                      name=""
                      id=""
                      placeholder="Full Name"
                      className="w-full h-12 my-2 px-3 text-xl bg-transparent border-b-2"
                    />
                    <input
                      type="number"
                      name=""
                      id=""
                      placeholder="Phone"
                      className="w-full h-12 my-2 px-3 text-xl bg-transparent border-b-2"
                    />
                    <input
                      type="date"
                      name=""
                      id=""
                      placeholder="DD/MM/YYYY"
                      className="w-1/2 h-12 my-2 px-3 text-xl bg-transparent border-b-2"
                    />
                    <div className="w-1/2 h-12 mt-3 mb-2 px-4 float-end text-xl flex">
                      <button
                        className="w-10 h-10 border rounded-xl bg-gray-200"
                        onClick={() => setPerson((person) => person - 1)}
                      >
                        -
                      </button>
                      <span className="w-12 h-10 mx-2 py-2 border-b-2 block text-center flex-1">
                        {person}
                      </span>
                      <button
                        className="w-10 h-10 border rounded-xl bg-gray-200"
                        onClick={() => setPerson((person) => person + 1)}
                      >
                        +
                      </button>
                    </div>
                  </div>
                  <div className="py-5 text-xl px-1">
                    <div className="py-2">
                      <span className="font-semibold text-2xl">
                        ${tripData.price}
                      </span>
                      <span> x {person > 0 ? person : 0} person</span>
                      <span className="float-end">
                        ${tripData.price * person}
                      </span>
                    </div>
                    <div className="py-2">
                      <span>Service Charges</span>
                      <span className="float-end">
                        ${tripData.serviceCharges}
                      </span>
                    </div>
                    <div className="py-2 font-bold border-t">
                      <span className="">Total</span>
                      <span className="float-end">
                        ${tripData.price * person + tripData.serviceCharges}
                      </span>
                    </div>
                  </div>
                  <button
                    type="submit"
                    className="w-full my-3 py-2 text-white text-xl font-bold bg-green-600 hover:bg-green-500 rounded-full"
                    onClick={handleProceed}
                  >
                    Proceed
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <Subscribe /> */}
    </>
  );
};

// export default TripDetails;

export default TripDetails;
