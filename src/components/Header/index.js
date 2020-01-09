import React from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"
import "../../style/header.scss"

const Header = ({ siteTitle }) => (
  <header>
    <div className="header-inner">
      <h1>
        <Link to="/" className="site-link">
          {siteTitle}
        </Link>
      </h1>
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
