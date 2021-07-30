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
      <div className="grid lg:grid-cols-3 xs:grid-cols-1 gap-10 ">
        {posts &&
          posts.map(({ node: post }) => {
            const image = getImage(
              post.thumbnail.childImageSharp.gatsbyImageData
            )
            return (
              <div
                className="max-w-lg rounded overflow-hidden shadow-lg bg-gray-100"
                key={post.id}
              >
                <PreviewCompatibleImage
                  imageInfo={{
                    image: image,
                    alt: `featured image thumbnail for post ${post.frontmatter.title}`,
                    style: {
                      gridArea: "1/1",
                    },
                  }}
                />
                <div className="px-6 py-10">
                  <div className="font-bold text-xl mb-2 text-gray-700">
                    <p>
                      <Link
                        className="title no-underline"
                        to={post.fields.slug}
                      >
                        {post.frontmatter.title}
                      </Link>
                    </p>
                  </div>
                  <p className="text-gray-500 text-base font-light">
                    {post.frontmatter.description}
                  </p>
                  <button
                    className="inline-block text-yellow-700 background-transparent font-bold uppercase px-0 py-2 text-sm outline-none hover:text-yellow-600 focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                  >
                    <Link className="title no-underline" to={post.fields.slug}>
                      Keep Reading →
                    </Link>
                  </button>
                  {/* <p>
                    <span className="inline-block  py-2 text-sm font-semibold text-yellow-700 my-4">
                      <Link
                        className="title no-underline"
                        to={post.fields.slug}
                      >
                        Keep Reading →
                      </Link>
                    </span>
                  </p> */}
                </div>
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
