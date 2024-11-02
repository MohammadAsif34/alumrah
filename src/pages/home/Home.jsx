import React from "react";

import SpecialOffer from "../../components/home-page/offer-section/SpecialOffer";
import FeaturedTrip from "../../components/home-page/feature-section/FeaturedTrip";
import WhyAlUmrah from "../../components/home-page/why-al-umrah/WhyAlUmrah";
import LogoCloud from "../../components/home-page/logo-cloud/LogoCloud";
import HomeIntro from "../../components/home-page/home-intro/HomeIntro";

const Home = () => {
  return (
    <>
      <main>
        <HomeIntro />
        <SpecialOffer />
        <FeaturedTrip />
        <WhyAlUmrah />

        <section className="relative overflow-hidden bg-green-100 rounded-2xl my-5">
          <div className="pb-80 pt-16 sm:pb-40 sm:pt-24 lg:pb-48 lg:pt-40">
            <div className="relative mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8">
              <div className="sm:max-w-lg">
                <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                  Summer styles are finally here
                </h1>
                <p className="mt-4 text-xl text-gray-500">
                  This year, our new summer collection will shelter you from the
                  harsh elements of a world that doesn't care if you live or
                  die.
                </p>
              </div>
              <div>
                <div className="mt-10">
                  {/* Decorative image grid */}
                  <div
                    aria-hidden="true"
                    className="pointer-events-none lg:absolute lg:inset-y-0 lg:mx-auto lg:w-full lg:max-w-7xl"
                  >
                    <div className="absolute transform sm:left-1/2 sm:top-0 sm:translate-x-8 lg:left-1/2 lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-8">
                      <div className="flex items-center space-x-6 lg:space-x-8">
                        <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                          <div className="h-64 w-44 overflow-hidden rounded-lg sm:opacity-0 lg:opacity-100">
                            <img
                              alt=""
                              src="https://tailwindui.com/plus/img/ecommerce-images/home-page-03-hero-image-tile-01.jpg"
                              className="h-full w-full object-cover object-center"
                            />
                          </div>
                          <div className="h-64 w-44 overflow-hidden rounded-lg">
                            <img
                              alt=""
                              src="https://tailwindui.com/plus/img/ecommerce-images/home-page-03-hero-image-tile-02.jpg"
                              className="h-full w-full object-cover object-center"
                            />
                          </div>
                        </div>
                        <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                          <div className="h-64 w-44 overflow-hidden rounded-lg">
                            <img
                              alt=""
                              src="https://tailwindui.com/plus/img/ecommerce-images/home-page-03-hero-image-tile-03.jpg"
                              className="h-full w-full object-cover object-center"
                            />
                          </div>
                          <div className="h-64 w-44 overflow-hidden rounded-lg">
                            <img
                              alt=""
                              src="https://tailwindui.com/plus/img/ecommerce-images/home-page-03-hero-image-tile-04.jpg"
                              className="h-full w-full object-cover object-center"
                            />
                          </div>
                          <div className="h-64 w-44 overflow-hidden rounded-lg">
                            <img
                              alt=""
                              src="https://tailwindui.com/plus/img/ecommerce-images/home-page-03-hero-image-tile-05.jpg"
                              className="h-full w-full object-cover object-center"
                            />
                          </div>
                        </div>
                        <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                          <div className="h-64 w-44 overflow-hidden rounded-lg">
                            <img
                              alt=""
                              src="https://tailwindui.com/plus/img/ecommerce-images/home-page-03-hero-image-tile-06.jpg"
                              className="h-full w-full object-cover object-center"
                            />
                          </div>
                          <div className="h-64 w-44 overflow-hidden rounded-lg">
                            <img
                              alt=""
                              src="https://tailwindui.com/plus/img/ecommerce-images/home-page-03-hero-image-tile-07.jpg"
                              className="h-full w-full object-cover object-center"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <a
                    href="#"
                    className="inline-block rounded-md border border-transparent bg-green-600 px-8 py-3 text-center font-medium text-white hover:bg-green-700"
                  >
                    Shop Collection
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <LogoCloud />

        <section>
          <div className="bg-pink-300 overflow-hidden">
            <div className="container m-auto py-5">
              <div className="w-full h-full flex">
                <div className="w-1/2 py-2 ">
                  <h1 className="py-5 text-5xl text-wrap font-semibold">
                    Subscribe now to get useful traveling information
                  </h1>
                  <form
                    action=""
                    className="w-2/3 p-1 border-2 border-green-500 text-lg rounded-xl flex bg-white"
                  >
                    <input
                      type="text"
                      name=""
                      id=""
                      placeholder="Your email"
                      className="h-12 px-3 flex-1 text-xl rounded-xl bg-transparent"
                    />
                    <button className="px-4 rounded-lg text-white font-semibold bg-green-600 hover:bg-green-500 ">
                      Subscribe
                    </button>
                  </form>
                </div>
                <div className="w-1/2  h-72 ">
                  <img src={"/adimg.png"} alt="" />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      {/* <Footer /> */}
    </>
  );
};

export default Home;
