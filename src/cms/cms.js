import React from "react"
import CMS from "netlify-cms-app"
import cloudinary from "netlify-cms-media-library-cloudinary"

// import AboutPagePreview from "./preview-templates/AboutPagePreview"
import BlogPostPreview from "./preview-templates/BlogPostPreview"
// import ProductPagePreview from "./preview-templates/ProductPagePreview"
// import IndexPagePreview from "./preview-templates/IndexPagePreview"

CMS.registerMediaLibrary(cloudinary)

// CMS.registerPreviewTemplate("index", IndexPagePreview)
// CMS.registerPreviewTemplate("about", AboutPagePreview)
// CMS.registerPreviewTemplate("products", ProductPagePreview)
CMS.registerPreviewTemplate("blog", BlogPostPreview)
