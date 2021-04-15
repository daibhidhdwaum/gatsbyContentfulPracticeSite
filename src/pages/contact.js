import React from "react"
import Layout from "../component/Layout"
import Head from "../component/Head"

const ContactPage = () => {
  return (
    <Layout>
      <Head title="Contact" />
      <div>
        <h2>Contact</h2>
        <p>contact details</p>
        <a href="https://www.bbc.com/" target="_blank" rel="noreferrer">
          BBC
        </a>
      </div>
    </Layout>
  )
}

export default ContactPage
