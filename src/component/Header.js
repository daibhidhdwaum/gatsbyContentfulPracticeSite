import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import * as style from "./Header.module.scss"

const Header = () => {
  const data = useStaticQuery(graphql`
    query Header {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <header className={style.header}>
      <div>
        <Link to="/" className={style.title}>
          <h1>{data.site.siteMetadata.title}</h1>
        </Link>
      </div>
      <ul className={style.navList}>
        <li>
          <Link
            to="/"
            className={style.navItem}
            activeClassName={style.activeNavItem}
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            to="/about"
            className={style.navItem}
            activeClassName={style.activeNavItem}
          >
            About
          </Link>
        </li>
        <li>
          <Link
            to="/contact"
            className={style.navItem}
            activeClassName={style.activeNavItem}
          >
            Contact
          </Link>
        </li>
        <li>
          <Link
            to="/blog"
            className={style.navItem}
            activeClassName={style.activeNavItem}
          >
            Blog
          </Link>
        </li>
      </ul>
    </header>
  )
}

export default Header
