import React from "react"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

const Head = ({ title }) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  const { siteMetadata } = data.site

  return <Helmet title={`${title} || ${siteMetadata.title}`} />
}

export default Head
