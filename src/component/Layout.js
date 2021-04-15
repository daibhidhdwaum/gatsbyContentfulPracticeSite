import React from "react"
import Header from "./Header"
import Footer from "./Footer"
import "../styles/index.scss"
import * as style from "./Layout.module.scss"

// Stick footer trick!! Add a div around all content except footer and then edit styles. Check the Layout stylesheet for the required styles

const Layout = ({ children }) => {
  return (
    <div className={style.container}>
      <div className={style.content}>
        <Header />
        {children}
      </div>
      <Footer />
    </div>
  )
}

export default Layout
