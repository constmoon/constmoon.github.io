import React from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"
import "@styles/header.scss"

const Header = ({ siteTitle }) => (
  <header>
    <div className="header-inner">
      <h1 className="site-title">
        <Link to="/">
          {siteTitle}
        </Link>
      </h1>
      <nav className="navigation">
        <ul>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/work">Works</Link>
          </li>
          <li>
            <Link to="/post">Posts</Link>
          </li>
          <li>
            <Link to="/tag">Tags</Link>
          </li>
        </ul>
      </nav>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
