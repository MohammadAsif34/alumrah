import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Error404 = () => {
  const navigate = useNavigate();
  const handleBack = () => {
    navigate("/");
  };
  return (
    <>
      <section className="constainer m-auto p-4 flex justify-center items-center">
        <div className="my-10  font-semibold flex flex-col justify-center">
          <h1 className="text-4xl ">404 PAGE NOT FOUND !</h1>

          <button
            className="my-4 px-4 py-2 bg-teal-600 rounded-lg text-white m-auto"
            onClick={handleBack}
          >
            Back to Home
          </button>
        </div>
      </section>
    </>
  );
};

export default Error404;
