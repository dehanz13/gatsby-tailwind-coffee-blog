import React from "react"
import PropTypes from "prop-types"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const PreviewCompatibleImage = ({ imageInfo }) => {
  const imageStyle = { borderRadius: "5px" }
  const { alt = "", childImageSharp, image } = imageInfo
  const thumbnailImage = getImage(image)

  if (!!image && !!image.childImageSharp) {
    return (
      // <Img style={imageStyle} fluid={image.childImageSharp.fluid} alt={alt} />

      <div>
        <p>Previewing Compatible Image:</p>
        <GatsbyImage image={thumbnailImage} alt={alt} />
      </div>
    )
  }

  if (!!childImageSharp) {
    return (
      // <Img style={imageStyle} fluid={childImageSharp.fluid} alt={alt} />
      <div>
        <p>Previewing Compatible Image:</p>
        <GatsbyImage image={thumbnailImage} alt={alt} />
      </div>
    )
  }

  if (!!image && typeof image === "string")
    return (
      // <img style={imageStyle} src={image} alt={alt} />
      <div>
        <p>Previewing Compatible Image:</p>
        <GatsbyImage image={thumbnailImage} alt={alt} />
      </div>
    )

  return (
    // null
    <div>
      <GatsbyImage image={thumbnailImage} alt={alt} />
    </div>
  )
}

PreviewCompatibleImage.propTypes = {
  imageInfo: PropTypes.shape({
    alt: PropTypes.string,
    childImageSharp: PropTypes.object,
    image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]).isRequired,
    style: PropTypes.object,
  }).isRequired,
}

export default PreviewCompatibleImage
