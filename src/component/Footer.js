import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import * as styles from "./footer.module.scss"

const Footer = () => {
  const data = useStaticQuery(graphql`
    query Footer {
      site {
        siteMetadata {
          author
        }
      }
    }
  `)

  return (
    <footer className={styles.footer}>
      <p>Created by {data.site.siteMetadata.author} &copy; 2021</p>
    </footer>
  )
}

export default Footer
