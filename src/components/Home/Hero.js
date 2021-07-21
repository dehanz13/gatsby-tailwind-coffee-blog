import React from "react"
import { Link } from "gatsby"
import HeroNewsletter from "./HeroNewsletter"
import { StaticImage } from "gatsby-plugin-image"
// import im from "../../images"

const Hero = () => {
  return (
    <div id="hero" class="grid overflow-hidden hero text-primary-content ">
      <StaticImage
        class="overlay"
        style={{
          gridArea: "1/1",
          maxHeight: 800,
        }}
        layout="fullWidth"
        placeholder="blurred"
        alt=""
        src="../../images/home-bg2.jpg"
        formats={["auto", "webp", "avif"]}
      />
      <div
        class=""
        style={{
          gridArea: "1/1",
          position: "relative",
          placeItems: "center",
          display: "grid",
        }}
      >
        <div className="flex-col mx-auto w-full max-w-6xl hero-content text-gray-100  py-12">
          <div className="py-4 mb-2 font-extrabold text-center font-title lg:py-10 lg:py-0">
            <h1 className="mb-2  text-center font-title lg-py:0 leading-normal ">
              <div className="mb-2 font-extrabold lg:text-5xl xs:text-2xl ">
                Get A Taste Of Coffee That Works For You
              </div>
              <div className="font-semibold lg:text-2xl xs:text-base xs:font-light">
                I help coffee enthusiasts discover new coffee, choose the best
                coffee products and ultimately, improve their productivity.
              </div>
            </h1>
            <div className="flex flex-col items-center justify-center w-full space-y-10 lg:space-x-4 lg:space-y-0 lg:flex-row">
              <HeroNewsletter />
            </div>
          </div>
        </div>
      </div>
      {/* </div> */}
    </div>
    // <div
    //   id="hero"
    //   className="h-5/6 pt-16 overflow-hidden hero bg-gradient-to-br from-green-400 via-blue-500 to-purple-500 text-primary-content"
    // >
    //   <div className="flex-col mx-auto w-full max-w-6xl mt-10 mb-48 hero-content text-center justify-between bg-yellow-400">
    //     <div className="py-4 mb-2 font-extrabold text-center font-title lg:py-10 lg:py-0">
    //       <h1 className="mb-2  text-center font-title lg-py:0 leading-normal text-yellow-900">
    //         <div className="mb-2 font-extrabold text-3xl lg:text-5xl">
    //           Get A Taste Of Coffee That Works For You
    //         </div>
    //         <div className="text-2xl font-semibold lg:text-2xl">
    //           I help coffee enthusiasts discover new coffee, choose the best
    //           coffee products and ultimately, improve their productivity.
    //         </div>
    //       </h1>
    //       <div className="flex flex-col items-center justify-center w-full space-y-10 lg:space-x-4 lg:space-y-0 lg:flex-row">
    //         <HeroNewsletter />

    //       </div>
    //     </div>
    //   </div>
    // </div>
  )
}

export default Hero
{
  /* <div className="flex-1 w-full max-w-xs text-left bg-transparent text-primary-content border-2 border-opacity-40 border-primary-content mockup-code lg:mx-0">
              <HeroNewsletter />
            </div> */
}
{
  /* <div className="max-w-sm my-2 text-left">
              <div>DEMO SITE</div>
              <div>DEMO SITE</div>
              <div>DEMO SITE</div>
            </div> */
}
