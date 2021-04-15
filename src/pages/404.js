import React from "react"
import { Link } from "gatsby"
import Layout from "../component/Layout"
import Head from "../component/Head"

const NotFound = () => {
  return (
    <Layout>
      <Head title="404 Page Not Found" />
      <h1>Page not found</h1>
      <p>
        <Link to="/">Head home</Link>
      </p>
    </Layout>
  )
}

export default NotFound
