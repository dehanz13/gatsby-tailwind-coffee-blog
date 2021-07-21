import React from "react"
import { Link } from "gatsby"

const Footer = () => {
  return (
    <footer className="flex items-center justify-between bg-gradient-to-br from-yellow-700 via-yellow-800 to-yellow-900 py-6 px-8 mb-auto">
      <div className="container mx-auto">
        <div className="font-body2 flex items-center text-center justify-center tracking-wider">
          <Link to="/" aria-label="home-nav">
            <p className=" text-xs xl:text-lg lg:text-base md:text-xs sm:text-sm font-normal text-gray-100 mb-2">
              &copy; {new Date().getFullYear()} All Rights Reserved | Little
              Coffee Pub
            </p>
            <p className=" text-xs xl:text-lg lg:text-base md:text-xs sm:text-sm font-normal text-gray-100">
              As an Amazon associate LittleCoffeePub.com earns from qualifying
              purchases.
            </p>
          </Link>
          {/* Social Links Here */}
        </div>
      </div>
    </footer>
  )
}

export default Footer
