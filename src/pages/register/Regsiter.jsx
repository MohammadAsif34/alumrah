import React, { useEffect, useState } from "react";
import { set, useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";

const Regsiter = () => {
  const navigate = useNavigate();

  const { register, handleSubmit } = useForm();
  const [message, setMessage] = useState({ ok: true, message: "" });

  const onSubmit = async (data) => {
    try {
      const api = "http://localhost:8080/api/auth/register";
      const response = await fetch(api, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const resData = await response.json();
      if (resData.ok) {
        setMessage({ ok: resData.ok, message: resData.message });
        setTimeout(() => {
          navigate("/");
        }, 3000);
      } else {
        setMessage({ ok: resData.ok, message: resData.message });
        setTimeout(() => {
          navigate("/login");
        }, 2000);
      }

      console.log(`register successfully`);
    } catch (err) {
      setMessage({ ok: false, message: `registeration failed ::: ${err}` });
      console.log(`error durinffg register post ::: ${err}`);
    }
  };
  return (
    <>
      <section className="container m-auto px-4 ">
        <div className="w-full h-full flex justify-center">
          <form
            className="w-3/5 h-fit my-12 py-8 px-12 bg-gray-200 rounded-lg shadow-xl grid grid-cols-1 lg:grid-cols-2 gap-5"
            onSubmit={handleSubmit(onSubmit)}
          >
            <h1 className="lg:col-span-2 py-8 text-center text-4xl font-semibold">
              Regsiter Now!
            </h1>
            <div>
              <label className=" border">First Name</label>
              <input
                type="text"
                placeholder="First name"
                className=" w-full h-11 px-4 text-lg  rounded-md shadow-lg"
                required
                {...register("fname")}
              />
            </div>
            <div>
              <label>Last Name</label>
              <input
                type="text"
                placeholder="Last name"
                className=" w-full h-11 px-4 text-lg  rounded-md shadow-lg"
                required
                {...register("lname")}
              />
            </div>
            <div>
              <label>Email</label>
              <input
                type="email"
                placeholder="Email"
                className=" w-full h-11 px-4 text-lg  rounded-md shadow-lg"
                required
                {...register("email")}
              />
            </div>
            <div>
              <label>DOB</label>
              <input
                type="date"
                className=" w-full h-11 px-4 text-lg  rounded-md shadow-lg"
                required
                {...register("dob")}
              />
            </div>
            <div>
              <label>Gender</label>
              <select
                className=" w-full h-11 px-4 text-lg  rounded-md shadow-lg"
                required
                {...register("gender")}
              >
                <option>Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="others">Others</option>
              </select>
            </div>
            <div>
              <label>Phone No.</label>
              <input
                type="number"
                placeholder="Phone no."
                maxLength={10}
                minLength={10}
                className=" w-full h-11 px-4 text-lg  rounded-md shadow-lg"
                required
                {...register("phone")}
              />
            </div>
            <div>
              <label>Password</label>
              <input
                type="password"
                placeholder="Password"
                className=" w-full h-11 px-4 text-lg  rounded-md shadow-lg"
                required
              />
            </div>
            <div>
              <label>Re-password</label>
              <input
                type="password"
                placeholder="Re-password"
                className=" w-full h-11 px-4 text-lg  rounded-md shadow-lg"
                required
                {...register("password")}
              />
            </div>
            <div className="lg:col-span-2">
              <input type="checkbox" className="mx-2" {...register("terms")} />
              <label>
                I agree to the{" "}
                <Link className="text-blue-500 underline">
                  terms & conditions.
                </Link>
              </label>
            </div>
            <button
              type="submit"
              className=" w-full h-11 mt-8 px-4 text-lg font-semibold bg-white border border-gray-800 rounded-md shadow-lg lg:col-span-2 hover:bg-gray-800 hover:text-white active:bg-gray-600"
            >
              Register
            </button>
            <p className="text-center col-span-2">
              If you have an accout ?
              <Link className="text-blue-500 underline"> login here</Link>
            </p>
            <p
              className={`text-center text-lg ${
                message.ok ? "text-green-500" : "text-red-500"
              } font-semibold col-span-2`}
            >
              {message.message}
            </p>
          </form>
        </div>
      </section>
    </>
  );
};

export default Regsiter;
