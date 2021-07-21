import React from "react"
import { StaticImage } from "gatsby-plugin-image"

const HomeNewsletter = () => {
  return (
    <div
      className="home-newsletter lg:p-20 xs:px-6 xs:py-20 "
      style={{ display: "grid" }}
    >
      <div
        style={{
          gridArea: "1/1",
          position: "relative",
          placeItems: "center",
          display: "grid",
        }}
      >
        <div class="grid lg:grid-cols-2 xs:grid-cols-1 gap-10 ">
          <div class="max-w-lg rounded overflow-hidden shadow-lg  bg-gray-100">
            <StaticImage
              style={{
                gridArea: "1/1",
              }}
              layout="fullWidth"
              aspectRatio={4 / 3}
              alt="coffe-mug"
              src="../../images/home-bg1.jpg"
              formats={["auto", "webp", "avif"]}
            />
            <div class="px-6 py-10">
              <div class="font-bold text-xl mb-2">
                <p>Every cup of Joe is better with a story.</p>
              </div>
              <p class="text-gray-700 text-base">
                Our origins are humble (and simple). We just really like coffee
                and we drink a lot of it. So, we had the super brilliant idea to
                share our experiences, tips, tricks, and special deals with the
                rest of the world. Now YOU can enjoy Little Coffee Place, along
                with a few sips of Java to fill your coffee void.
              </p>
              <span class="inline-block  py-2 text-sm font-semibold text-yellow-700 my-4">
                <p>Read More About Little Coffee Pub</p>
              </span>
            </div>
            <div class="lg:px-6 lg:pt-4 xs:pb-2 xs:pl-6 xs:pt-0">
              <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                #photography
              </span>
              <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                #travel
              </span>
              <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                #winter
              </span>
            </div>
          </div>
          <div class="max-w-lg rounded overflow-hidden shadow-lg bg-gray-100">
            <StaticImage
              style={{
                gridArea: "1/1",
              }}
              layout="fullWidth"
              aspectRatio={4 / 3}
              alt="coffe-mug"
              src="../../images/home-bg3.jpg"
              formats={["auto", "webp", "avif"]}
            />
            <div class="lg:py-20 lg:px-10 xs:py-10 xs:px-4 justify-center items-center bg-yellow-100">
              <div class="">
                <h1 class="lg:font-bold lg:text-2xl xs:text-lg xs:font-bold mb-1">
                  Brew Coffee Like A Badass Barista!
                </h1>
                <h1 class="lg:font-bold lg:text-xl xs:text-xs xs:font-semibold">
                  Get top SECRET tips and tricks for brewing the PERFECT cup of
                  coffee for FREE
                </h1>
              </div>
              <div class="relative grid grid-rows-2 gap-2 lg:w-full xs:w-3/2 items-stretch">
                <input
                  type="text"
                  placeholder="Enter Your Email *"
                  class="lg:px-3 lg:py-4 xs:px-1 xs:py-2 placeholder-gray-400 text-yellow-700 relative bg-gray-100  rounded lg:text-base xs:text-xs border border-yellow-800 outline-none focus:outline-none focus:ring w-full pr-10"
                />
                <button
                  class="bg-yellow-600 text-gray-100 active:bg-yellow-800 uppercase lg:px-4 lg:py-2 xs:px-1 xs:py-2 rounded shadow hover:shadow-md outline-none focus:outline-none ease-linear transition-all duration-150"
                  type="button"
                >
                  <p class="lg:text-lg xs:text-xs lg:font-bold xs:font-medium">
                    Subscribe!
                  </p>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomeNewsletter
