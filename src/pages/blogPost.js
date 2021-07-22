import React from "react"

import BlogRoll from "../components/Post/BlogRoll"

class BlogPage extends React.Component {
  render() {
    return (
      <React.Fragment>
        <h1>Latest Posts</h1>
        <section>
          <div className="content">
            <BlogRoll />
          </div>
        </section>
      </React.Fragment>
    )
  }
}

export default BlogPage
