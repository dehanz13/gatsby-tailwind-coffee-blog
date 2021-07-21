import React, { useState } from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

import Header from "./header"

const navLinks = [
  {
    id: 1,
    path: "/",
    text: "Coffee Beans",
  },
  {
    id: 2,
    path: "/",
    text: "Coffee Guides",
  },
  {
    id: 3,
    path: "/",
    text: "How To's",
  },
  {
    id: 4,
    path: "/",
    text: "Coffee Makers",
  },
  {
    id: 5,
    path: "/",
    text: "Coffee Accessories",
  },
  {
    id: 6,
    path: "/",
    text: "Espresso Machines",
  },
]

const Navbar = ({ siteTitle }) => {
  const [openNav, setOpenNav] = useState(false)

  const toggleNav = () => {
    setOpenNav(!openNav)
  }

  return (
    <nav class="flex items-center bg-gray-100 p-6">
      <div class="container mx-auto flex justify-between lg:flex-col">
        <Header siteTitle={siteTitle} />
        <div class="block flex items-center lg:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
          <button
            class="flex items-center ml-4 px-3 py-2 border rounded text-gray-800 border-yellow-700 hover:text-yellow-700 hover:border-white"
            onClick={toggleNav}
          >
            <svg
              class="fill-current h-3 w-3"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>
        </div>
        <div class="w-full lg:block xs:hidden flex-grow lg:flex lg:items-center lg:w-auto">
          <div class="text-xl font-semibold flex lg:flex-grow">
            {navLinks.map((navLink, index) => (
              <p
                key={index}
                className="block mt-4 lg:inline-block lg:mt-0 text-gray-800 hover:text-white mr-4 uppercase"
              >
                <Link key={navLink.id} to={navLink.path}>
                  {navLink.text}
                </Link>
              </p>
            ))}
          </div>
          <div class="relative flex w-1/6 flex-wrap items-stretch inline-block ">
            <span class="z-10 h-full leading-snug font-normal absolute text-center text-blueGray-300 absolute bg-transparent rounded text-base items-center justify-center w-8 pl-3 py-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </span>
            <input
              type="text"
              placeholder="Search..."
              class="px-3 py-2 placeholder-gray-400 text-yellow-700 relative bg-gray-100 bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full pl-10"
            />
          </div>
        </div>
      </div>
    </nav>
  )
}

Navbar.propTypes = {
  siteTitle: PropTypes.string,
}

Navbar.defaultProps = {
  siteTitle: ``,
}

export default Navbar
