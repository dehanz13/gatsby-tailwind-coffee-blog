import React from "react"
import { graphql, Link } from "gatsby"
import PropTypes from "prop-types"
import { Helmet } from "react-helmet"
import { getImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Content, { HTMLContent } from "../components/Global/Content"
import PreviewCompatibleImage from "../components/Post/PreviewCompatibleImage"

export const BlogPostTemplate = ({
  content,
  contentComponent,
  thumbnail,
  description,
  tags,
  title,
  helmet,
}) => {
  const PostContent = contentComponent || Content
  const image = getImage(thumbnail)
  return (
    <section
      className="w-3/4 my-8 mx-auto container"
      style={{ minHeight: "80vh" }}
    >
      {helmet || ""}
      <div className="mx-auto">
        <h1 className="text-3xl sm:text-5xl font-bold mb-8">{title}</h1>
        <div className="flex justify-center">
          <PreviewCompatibleImage
            imageInfo={{
              image: image,
              alt: `featured image thumbnail for post ${title}`,
            }}
          />
        </div>
        {/* <p className="text-sm font-light mb-4">{description}</p> */}
        <div className="mt-8 text-base font-light flex items-center">
          <PostContent content={content} />
        </div>

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
    </section>
  )
}

BlogPostTemplate.propTypes = {
  thumbnail: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
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
        thumbnail={post.thumbnail.childImageSharp.gatsbyImageData}
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
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
      thumbnail: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
    }),
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
        thumbnail
      }
      thumbnail {
        childImageSharp {
          gatsbyImageData(
            height: 600
            width: 900
            placeholder: BLURRED
            quality: 50
            blurredOptions: { width: 100 }
            transformOptions: { cropFocus: CENTER, fit: COVER }
            formats: [AUTO, WEBP, AVIF]
          )
        }
      }
    }
  }
`
