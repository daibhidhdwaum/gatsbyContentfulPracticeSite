const path = require("path")

// ! This was used to create the node for the markdown files. We don't need it for the contentful data as it was set up over there
// module.exports.onCreateNode = ({ node, actions }) => {
//   const { createNodeField } = actions

//   if (node.internal.type === "MarkdownRemark") {
//     const slug = path.basename(node.fileAbsolutePath, ".md")
//     createNodeField({
//       node,
//       name: "slug",
//       value: slug,
//     })
//   }
// }

module.exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  // 1. Get path to template
  // This is the path from the current directory to the template
  const blogTemplate = path.resolve("./src/templates/Blog.js")
  // 2. Get markdown data

  // This graphql function returns a promise
  const res = await graphql(`
    query {
      allContentfulBlogPost {
        edges {
          node {
            slug
          }
        }
      }
    }
  `)
  // 3.Create new pages
  // to review this rewatch the video at around the 2h 40minute mark https://youtu.be/kzWIUX3CpuI
  res.data.allContentfulBlogPost.edges.forEach(edge => {
    createPage({
      component: blogTemplate,
      path: `/blog/${edge.node.slug}`,
      context: {
        slug: edge.node.slug,
      },
    })
  })
}
