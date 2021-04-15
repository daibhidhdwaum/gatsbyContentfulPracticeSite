import React from "react"
import { Link } from "gatsby"
import Layout from "../component/Layout"
import Head from "../component/Head"

const IndexPage = () => {
  return (
    <Layout>
      <Head title="Home" />
      <div>
        <h1>Hello</h1>
        <h2>I'm David, a web developer.</h2>
        <p>
          Need a developer?
          <Link to="/contact">Contact me.</Link>
        </p>
      </div>
    </Layout>
  )
}

export default IndexPage
