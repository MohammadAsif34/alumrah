import React from "react";

const HomeIntro = () => {
  return (
    <>
      <section
        style={{ width: "100%", height: "calc(100vh - 4rem)" }}
        className=" bg-gray-100 cursor-default "
      >
        <div className="container h-full m-auto flex ">
          <div className="w-full h-full flex-1 flex flex-col justify-center">
            <h2>
              <span className="py-2 px-4 bg-green-400 text-2xl rounded-full">
                Quote : now before you go
              </span>
            </h2>
            <h1 className="py-4 text-[48px] font-semibold leading-snug">
              Traveling opens the door to creating
              <span className="text-green-400">memories</span>
            </h1>
            <p className="py-2 text-xl max-w-[700px] indent-5">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quia cum
              voluptatem voluptatibus aliquid minus animi, ratione, rerum illo
              illum itaque officiis earum ut dolorum sed facilis aliquam
            </p>
            {/* </div> */}
            <div className="w-fit mt-20">
              <ul className="p-1 gap-1 bg-gray-800 rounded-2xl flex text-base text-white ">
                <li className="w-fit h-fit px-4 py-2  bg-green-600 rounded-xl flex items-end justify-center">
                  <span className="px-2 text-3xl font-semibold">{23}+</span>
                  Trip completed
                </li>
                <li className="w-fit h-fit px-4 py-2 bg-green-600 rounded-xl flex items-end justify-center">
                  <span className="px-2 text-3xl font-semibold">
                    {4.3} <i className="bi bi-star-fill"></i>
                  </span>
                  Rating
                </li>{" "}
                <li className="w-fit h-fit px-4 py-2   bg-green-600 rounded-xl flex items-end justify-center">
                  <span className="px-2 text-3xl font-semibold">{4}+</span>
                  Country Trip & visa
                </li>
              </ul>
            </div>
          </div>
          {/* div 2 */}
          <div className=" h-full  flex justify-center items-center ">
            <div className=" px-2">
              <ul className="">
                <li className="my-3  w-[180px] h-[230px] rounded-lg overflow-hidden">
                  <img
                    src="https://images.pexels.com/photos/12095265/pexels-photo-12095265.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    className="w-full h-full object-cover object-center"
                  />
                </li>
                <li className="my-3 w-[180px] h-[230px] rounded-lg overflow-hidden">
                  <img
                    src="https://images.pexels.com/photos/12095265/pexels-photo-12095265.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    className="w-full h-full object-cover object-center"
                  />
                </li>
              </ul>
            </div>
            <div className=" px-2">
              <ul className="">
                <li className="my-3 w-[180px] h-[230px] rounded-lg overflow-hidden">
                  <img
                    src="https://images.pexels.com/photos/12095265/pexels-photo-12095265.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    className="w-full h-full object-cover object-center"
                  />
                </li>
                <li className="my-3 w-[180px] h-[230px] rounded-lg overflow-hidden">
                  <img
                    src="https://images.pexels.com/photos/12095265/pexels-photo-12095265.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    className="w-full h-full object-cover object-center"
                  />
                </li>
                <li className="my-3 w-[180px] h-[230px] rounded-lg overflow-hidden">
                  <img
                    src="https://images.pexels.com/photos/12095265/pexels-photo-12095265.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    className="w-full h-full object-cover object-center"
                  />
                </li>
              </ul>
            </div>
            <div className=" px-2">
              <ul className="">
                <li className="my-3  w-[180px] h-[230px] rounded-lg overflow-hidden">
                  <img
                    src="https://images.pexels.com/photos/12095265/pexels-photo-12095265.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    className="w-full h-full object-cover object-center"
                  />
                </li>
                <li className="my-3 w-[180px] h-[230px] rounded-lg overflow-hidden">
                  <img
                    src="https://images.pexels.com/photos/12095265/pexels-photo-12095265.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    className="w-full h-full object-cover object-center"
                  />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomeIntro;
