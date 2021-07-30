import React from "react"

import Layout from "../components/layout"
import BlogRoll from "../components/Post/BlogRoll"

class BlogPage extends React.Component {
  render() {
    return (
      <Layout>
        <div class="container mx-auto">
          <h1 class="text-center text-4xl text-gray-700">Latest Blog Posts</h1>
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
              <BlogRoll />
            </div>
            {/* <section className="section">
              <div className="container">
                <div className="content">
                  <BlogRoll />
                </div>
              </div>
            </section> */}
          </div>
          <div class="flex justify-between text-center py-6">
            <h1>Read Our Unfiltered, Coffee-Talkin' Blog Now</h1>
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
      </Layout>
    )
  }
}

export default BlogPage
