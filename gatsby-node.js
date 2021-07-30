const path = require("path")
const {
  createFilePath,
  createRemoteFileNode,
} = require("gatsby-source-filesystem")

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions

  return graphql(`
    {
      allMarkdownRemark(limit: 1000) {
        edges {
          node {
            id
            fields {
              slug
            }
            frontmatter {
              tags
              templateKey
            }
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      result.errors.forEach(e => console.error(e.toString()))
      return Promise.reject(result.errors)
    }

    const posts = result.data.allMarkdownRemark.edges

    posts.forEach(edge => {
      const id = edge.node.id
      createPage({
        path: edge.node.fields.slug,
        tags: edge.node.frontmatter.tags,
        component: path.resolve(
          `src/templates/${String(edge.node.frontmatter.templateKey)}.js`
        ),
        // additional data can be passed via context
        context: {
          id,
        },
      })
    })
  })
}

exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions
  createTypes(`
    type MarkdownRemark implements Node {
      frontmatter: Frontmatter
      thumbnail: File @link(from: "thumbnail___NODE")
    }
    type Frontmatter {
      title: String!
      thumbnail: String
    }
  `)
}

exports.onCreateNode = async ({
  node,
  actions,
  getNode,
  store,
  cache,
  createNodeId,
}) => {
  const { createNodeField, createNode } = actions

  if (node.internal.type === `MarkdownRemark`) {
    let value = createFilePath({ node, getNode })
    createNodeField({
      name: `slug`,
      node,
      value,
    })
    if (node.frontmatter.thumbnail !== null) {
      let fileNode = await createRemoteFileNode({
        url: node.frontmatter.thumbnail, // string that points to the URL of the image
        parentNodeId: node.id, // id of the parent node of the fileNode you are going to create
        createNode, // helper function in gatsby-node to generate the node
        createNodeId, // helper function in gatsby-node to generate the node id
        cache, // Gatsby's cache
        store, // Gatsby's Redux store
      })
      // if the file was created, attach the new node to the parent node
      if (fileNode) {
        node.thumbnail___NODE = fileNode.id
      }
    }
  }

  // if (
  //   node.internal.type === "MarkdownRemark" &&
  //   node.frontmatter.thumbnailUrl !== null
  // ) {
  //   let fileNode = await createRemoteFileNode({
  //     url: node.frontmatter.thumbnailUrl, // string that points to the URL of the image
  //     parentNodeId: node.id, // id of the parent node of the fileNode you are going to create
  //     createNode, // helper function in gatsby-node to generate the node
  //     createNodeId, // helper function in gatsby-node to generate the node id
  //     cache, // Gatsby's cache
  //     store, // Gatsby's Redux store
  //   })
  //   // if the file was created, attach the new node to the parent node
  //   if (fileNode) {
  //     node.thumbnail___NODE = fileNode.id
  //   }
  // }
}
