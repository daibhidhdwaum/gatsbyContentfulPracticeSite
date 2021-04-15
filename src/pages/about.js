import React from "react"
import { Link } from "gatsby"
import Layout from "../component/Layout"
import Head from "../component/Head"

const AboutPage = () => {
  return (
    <Layout>
      <Head title="About" />
      <div>
        <h2>About me</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Turpis
          cursus in hac habitasse platea dictumst quisque. Velit egestas dui id
          ornare arcu. Quis auctor elit sed vulputate mi. Lorem sed risus
          ultricies tristique nulla aliquet. Sagittis eu volutpat odio facilisis
          mauris. Ac orci phasellus egestas tellus rutrum tellus pellentesque
          eu. Odio pellentesque diam volutpat commodo. Sollicitudin ac orci
          phasellus egestas tellus. A iaculis at erat pellentesque adipiscing.
          Pellentesque massa placerat duis ultricies lacus sed turpis tincidunt.
        </p>
        <Link to="/contact">Contact me</Link>
      </div>
    </Layout>
  )
}

export default AboutPage
