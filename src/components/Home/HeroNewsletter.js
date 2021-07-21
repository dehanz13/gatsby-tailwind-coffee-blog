import React from "react"

const HeroNewsletter = () => {
  return (
    <div class="lg:max-w-2xl xs:max-w-xs lg:py-10 xs:py-10">
      <div class="">
        <h1 class="font-medium lg:text-xl xs:text-xs xs:font-light">
          Subscribe to receive free emails filled with reviews, gear, and
          caffeine-infused tips on how to brew great-tasting coffee at home.
        </h1>
      </div>
      <div class="relative flex lg:w-full xs:w-3/2 items-stretch mb-3">
        <input
          type="text"
          placeholder="Enter Your Email *"
          class="lg:px-3 lg:py-4 xs:px-1 xs:py-2 placeholder-gray-400 text-yellow-700 relative bg-gray-100  rounded lg:text-base xs:text-xs border border-yellow-800 outline-none focus:outline-none focus:ring w-full pr-10"
        />
        <button
          class="bg-yellow-600 text-gray-100 active:bg-yellow-800 uppercase lg:px-4 lg:py-2  xs:px-1 xs:py-2 rounded shadow hover:shadow-md outline-none focus:outline-none ml-1  ease-linear transition-all duration-150"
          type="button"
        >
          <p class="lg:text-lg xs:text-xs lg:font-bold xs:font-medium">
            Subscribe!
          </p>
        </button>
      </div>
    </div>
  )
}

export default HeroNewsletter
