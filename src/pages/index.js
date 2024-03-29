import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Hero from "../components/Home/Hero"
import Features from "../components/Home/Features"
import HomeNewsletter from "../components/Home/HomeNewsletter"
import BlogSection from "../components/Home/BlogSection"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <Hero />
    <Features />
    <BlogSection />
    <p>
      <Link to="/blogPost">View All Blogs</Link>
    </p>
    <p>
      <Link to="/productPost">View All Products</Link>
    </p>
    <HomeNewsletter />

    {/* <StaticImage
      src="../images/gatsby-astronaut.png"
      width={300}
      quality={95}
      formats={["AUTO", "WEBP", "AVIF"]}
      alt="A Gatsby astronaut"
      style={{ marginBottom: `1.45rem` }}
    />
    <p>
      <Link to="/page-2/">Go to page 2</Link> <br />
      <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
    </p> */}
  </Layout>
)

export default IndexPage
