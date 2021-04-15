import React from "react"
import { graphql } from "gatsby"
import Layout from "../component/Layout"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import Head from "../component/Head"

const Blog = ({ data }) => {
  // const { frontmatter, html } = data.markdownRemark

  const options = {
    renderNode: {
      "embedded-asset-block": node => {
        const alt = node.data.target.fields.title["en-US"]
        const url = node.data.target.fields.file["en-US"].url
        return <img src={url} alt={alt} />
      },
    },
  }

  const { title, publishedDate, body } = data.contentfulBlogPost

  return (
    <Layout>
      <Head title={title} />
      {/* Markdown renders */}
      {/* <p>{frontmatter.title}</p>
      <p>{frontmatter.date}</p>
      <div dangerouslySetInnerHTML={{ __html: html }}></div> */}
      <h1>{title}</h1>
      <p>{publishedDate}</p>
      {documentToReactComponents(body.json, options)}
    </Layout>
  )
}

// ! This was the markdown query
// export const query = graphql`
//   query($slug: String!) {
//     markdownRemark(fields: { slug: { eq: $slug } }) {
//       id
//       frontmatter {
//         title
//         date
//       }
//       html
//     }
//   }
// `

export const query = graphql`
  query($slug: String!) {
    contentfulBlogPost(slug: { eq: $slug }) {
      title
      publishedDate(formatString: "MMMM Do, YYYY")
      body {
        json
      }
    }
  }
`

export default Blog
