import React from "react"
import PropTypes from "prop-types"
import { Link, graphql, StaticQuery } from "gatsby"
import { getImage } from "gatsby-plugin-image"

import PreviewCompatibleImage from "./PreviewCompatibleImage"
class BlogRoll extends React.Component {
  render() {
    const { data } = this.props
    const { edges: posts } = data.allMarkdownRemark

    return (
      <div className="columns is-multiline">
        {posts &&
          posts.map(({ node: post }) => {
            const image = getImage(
              post.thumbnail.childImageSharp.gatsbyImageData
            )
            return (
              <div className="is-parent column is-6" key={post.id}>
                <article
                  className={`blog-list-item tile is-child box notification ${
                    post.frontmatter.thumbnail ? "is-featured" : ""
                  }`}
                >
                  <header>
                    <div className="content-center">
                      {/* <GatsbyImage image={image} alt="Coffee" /> */}
                      <PreviewCompatibleImage
                        imageInfo={{
                          image: image,
                          alt: `featured image thumbnail for post ${post.frontmatter.title}`,
                        }}
                      />
                    </div>
                    <p className="post-meta">
                      <Link
                        className="title has-text-primary is-size-4"
                        to={post.fields.slug}
                      >
                        {post.frontmatter.title}
                      </Link>
                      <span> &bull; </span>
                      <span className="subtitle is-size-5 is-block">
                        {post.frontmatter.date}
                      </span>
                    </p>
                  </header>
                  <p>
                    {post.frontmatter.description}
                    {/* {post.excerpt} */}
                    <br />
                    <br />
                    <Link className="button" to={post.fields.slug}>
                      Keep Reading →
                    </Link>
                    <br />
                    <br />
                  </p>
                </article>
              </div>
            )
          })}
      </div>
    )
  }
}

BlogRoll.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}

export default () => (
  <StaticQuery
    query={graphql`
      query BlogRollQuery {
        allMarkdownRemark(
          sort: { order: DESC, fields: [frontmatter___date] }
          filter: { frontmatter: { templateKey: { eq: "blog-post" } } }
        ) {
          edges {
            node {
              excerpt(pruneLength: 400)
              id
              fields {
                slug
              }
              thumbnail {
                childImageSharp {
                  gatsbyImageData(
                    height: 200
                    width: 200
                    placeholder: BLURRED
                    quality: 50
                    blurredOptions: { width: 100 }
                    transformOptions: { cropFocus: CENTER, fit: COVER }
                    formats: [AUTO, WEBP, AVIF]
                  )
                }
              }
              frontmatter {
                title
                description
                templateKey
                date(formatString: "MMMM DD, YYYY")
                featuredpost
                thumbnail
              }
            }
          }
        }
      }
    `}
    render={(data, count) => <BlogRoll data={data} count={count} />}
  />
)
