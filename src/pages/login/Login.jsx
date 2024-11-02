import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [message, setMessage] = useState({});
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();

  // handle login
  const onSubmit = async (data) => {
    try {
      const api = "http://localhost:8080/api/auth/login";
      const res = await fetch(api, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const resData = await res.json();
      if (resData.ok) {
        setMessage({
          ok: resData.ok,
          message: resData.message,
          data: resData.data,
        });
        setTimeout(() => {
          navigate("/");
        }, 2000);
      } else {
        setMessage({ ok: resData.ok, message: resData.message });
      }
    } catch (err) {
      setMessage({
        ok: false,
        message: `logging error :::${err} ` || "failed logging",
      });
      console.log(`error during logging ::: ${err}`);
    }
  };
  return (
    <>
      <section className="container h-[90vh] m-auto px-4 flex justify-center items-center">
        <div className="w-full h-full flex  justify-center items-center">
          <div className="w-3/5 w-min-[600px] h-fit  bg-gray-200 flex flex-col md:flex-row justify-center items-center    rounded-lg shadow-lg ">
            {/* <div className="w-full md:w-1/2 bg-red-600 hidden lg:block">hi</div> */}
            <form
              className="w-4/5 px-10 py-6 "
              onSubmit={handleSubmit(onSubmit)}
            >
              <h1 className="py-8 text-4xl text-center font-semibold">
                Login Now!
              </h1>
              <label>Email</label>
              <input
                type="email"
                placeholder="Email  "
                className=" w-full h-11 px-4 text-lg  rounded-md shadow-lg"
                required
                {...register("email")}
              />
              <label>Password</label>
              <input
                type="text"
                placeholder="First name"
                className=" w-full h-11 px-4 text-lg  rounded-md shadow-lg"
                required
                {...register("password")}
              />
              <input
                type="checkbox"
                className=" mt-2 mx-2"
                {...register("remember")}
              />
              <label>remember me</label>
              <button
                type="submit"
                className="w-full h-11 my-5 bg-white shadow-lg border border-gray-600 rounded-lg hover:bg-gray-800 hover:text-white"
              >
                Login
              </button>
              <p
                className={`text-center text-lg font-semibold ${
                  message.ok ? "text-green-500" : "text-red-500"
                }`}
              >
                {message.message}
              </p>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default Login;
