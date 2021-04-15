import React from "react"
import Layout from "../component/Layout"
import { Link, graphql, useStaticQuery } from "gatsby"
import * as styles from "./blog.module.scss"
import Head from "../component/Head"

const BlogPage = () => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulBlogPost(sort: { fields: publishedDate, order: DESC }) {
        edges {
          node {
            title
            slug
            publishedDate(formatString: "MMMM Do, YYYY")
          }
        }
      }
    }
  `)

  const { edges } = data.allContentfulBlogPost
  console.log(edges)

  return (
    <Layout>
      <Head title="Blog" />
      <div>
        <ul className={styles.posts}>
          {edges.map(post => {
            const { title, slug, publishedDate } = post.node
            return (
              <li className={styles.post}>
                <Link to={`/blog/${slug}`}>
                  <h2>{title}</h2>
                  <p>{publishedDate}</p>
                </Link>
              </li>
            )
          })}
        </ul>
      </div>
    </Layout>
  )
}

export default BlogPage
