import React from "react"
import { graphql, Link } from "gatsby"
import PropTypes from "prop-types"
import { Helmet } from "react-helmet"

import Layout from "../components/layout"
import Content, { HTMLContent } from "../components/Global/Content"

export const BlogPostTemplate = ({
  content,
  contentComponent,
  description,
  tags,
  title,
  helmet,
}) => {
  const PostContent = contentComponent || Content

  return (
    <section className="section">
      {helmet || ""}
      <div className="container content">
        <div className="columns">
          <div className="column is-10 is-offset-1">
            <h1 className="title is-size-2 has-text-weight-bold is-bold-light">
              {title}
            </h1>
            <p>{description}</p>
            <PostContent content={content} />
            {/* {tags && tags.length ? (
              <div style={{ marginTop: `4rem` }}>
                <h4>Tags</h4>
                <ul className="taglist">
                  {tags.map(tag => (
                    <li key={tag + `tag`}>
                      <Link to={`/tags/${kebabCase(tag)}/`}>{tag}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            ) : null} */}
          </div>
        </div>
      </div>
    </section>
  )
}

BlogPostTemplate.propTypes = {
  content: PropTypes.node.isRequired,
  contentComponent: PropTypes.func,
  description: PropTypes.string,
  title: PropTypes.string,
  helmet: PropTypes.object,
}

const BlogPost = ({
  data, // this prop will be injected by the GraphQL query below.
}) => {
  const { markdownRemark: post } = data // data.markdownRemark holds your post data
  // const { frontmatter, html } = markdownRemark
  return (
    <Layout>
      <BlogPostTemplate
        content={post.html}
        contentComponent={HTMLContent}
        description={post.frontmatter.description}
        helmet={
          <Helmet titleTemplate="%s | Blog">
            <title>{`${post.frontmatter.title}`}</title>
            <meta
              name="description"
              content={`${post.frontmatter.description}`}
            />
          </Helmet>
        }
        // tags={post.frontmatter.tags}
        title={post.frontmatter.title}
      />
    </Layout>
    // <div className="blog-post-container">
    //   <div className="blog-post">
    //     <h1>{frontmatter.title}</h1>
    //     <h2>{frontmatter.date}</h2>
    //     <div
    //       className="blog-post-content"
    //       dangerouslySetInnerHTML={{ __html: html }}
    //     />
    //   </div>
    // </div>
  )
}

BlogPost.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
  }),
}

export default BlogPost
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
  query BlogPostByID($id: String!) {
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
