import React from "react"
import PropTypes from "prop-types"
import { BlogPostTemplate } from "../../templates/blog-post"

const BlogPostPreview = ({ entry, widgetFor, getAsset }) => {
  const tags = entry.getIn(["data", "tags"])
  return (
    <BlogPostTemplate
      thumbnail={getAsset(entry.getIn(["data", "thumbnail"]))}
      content={widgetFor("body")}
      description={entry.getIn(["data", "description"])}
      // tags={tags && tags.toJS()}
      title={entry.getIn(["data", "title"])}
    />
  )
}

BlogPostPreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
  getAsset: PropTypes.func,
}

export default BlogPostPreview
