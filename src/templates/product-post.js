import React from "react"
import { graphql } from "gatsby"
export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark } = data // data.markdownRemark holds your post data
  const { frontmatter, html } = markdownRemark
  return (
    <div className="product-post-container">
      <div className="product-post">
        <h1>{frontmatter.title}</h1>
        <h2>{frontmatter.date}</h2>
        <div
          className="product-post-content"
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </div>
    </div>
  )
}
// export const pageQuery = graphql`
//   query {
//     childrenMarkdownRemark {
//       frontmatter {
//         title
//         thumbnail
//         path
//         featured
//         description
//         date(formatString: "MMMM DD, YYYY")
//       }
//       excerpt(pruneLength: 400)
//     }
//   }
// `
export const pageQuery = graphql`
  query ProductPostByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
        description
      }
    }
  }
`
