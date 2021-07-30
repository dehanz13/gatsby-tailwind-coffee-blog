import React from "react"
import { StaticImage } from "gatsby-plugin-image"

const tempBlogs = [
  {
    id: 1,
    title: "What is Arabica Coffee And Why Is It So Popular?",
    description:
      "You have surely heard of the 'Arabica' name next to coffee. It is evitable one of the best out there.",
  },
  {
    id: 2,
    title: "What Is Nitro Coffee And How Do You Make It?",
    description:
      "Until very recently, we didn’t think of coffee as a carbonated beverage. It is a brewed one, without bubbles and such.",
  },
  {
    id: 3,
    title: "Is The Baratza Encore Coffee Grinder Worth It? – 2021 Full Review",
    description:
      "Coffee experts’ discussions revolve a lot around grinders. What type, what material, what brand.",
  },
  {
    id: 4,
    title: "How To Clean Your Favorite Coffee Maker",
    description:
      "Among all the activities correlated with drinking coffee, it is easy to bet that cleaning your coffee equipment is the least enjoyable and the one that more often gets delayed.",
  },
  {
    id: 5,
    title: "Best Decaf Coffee Brands – Amazing Taste Without Caffeine",
    description:
      "Nothing compares to the bold, satisfying taste of a cup of coffee, but many people have trouble enjoying it because of all the caffeine.",
  },
  {
    id: 6,
    title: "Top 5: Best Keurig Coffee Makers Reviews of 2021",
    description:
      "A large portion of the masses associate home brewed coffee with the infamous Keurig machine.",
  },
]

const BlogSection = () => {
  return (
    <div className="container mx-auto">
      <h1 className="text-center text-4xl text-gray-700">Latest Posts</h1>
      <div
        className="lg:px-20 lg:pt-2 lg:pb-20 xs:px-6 xs:py-20"
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
          <div className="grid lg:grid-cols-3 xs:grid-cols-1 gap-10 ">
            {tempBlogs.map((blog, index) => (
              <div
                key={blog.id}
                className="max-w-lg rounded overflow-hidden shadow-lg bg-gray-100"
              >
                <StaticImage
                  style={{
                    gridArea: "1/1",
                  }}
                  layout="fullWidth"
                  aspectRatio={3 / 1}
                  alt="coffe-mug"
                  src="../../images/home-bg1.jpg"
                  formats={["auto", "webp", "avif"]}
                />
                <div className="px-6 py-10">
                  <div className="font-bold text-xl mb-2 text-gray-700">
                    <p>{blog.title}</p>
                  </div>
                  <p className="text-gray-500 text-base font-light">
                    {blog.description}
                  </p>
                  <p>
                    <span className="inline-block  py-2 text-sm font-semibold text-yellow-700 my-4">
                      Read More About Little Coffee Pub
                    </span>
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="flex justify-between text-center py-6">
        <h1>Read Our Unfiltered, Coffee-Talkin' Blog Now</h1>
        <button
          className="bg-yellow-600 text-gray-100 active:bg-yellow-800 uppercase lg:px-4 lg:py-2 xs:px-1 xs:py-2 rounded shadow hover:shadow-md outline-none focus:outline-none ease-linear transition-all duration-150"
          type="button"
        >
          <p className="lg:text-lg xs:text-xs lg:font-bold xs:font-medium">
            Subscribe!
          </p>
        </button>
      </div>
    </div>
  )
}

export default BlogSection
