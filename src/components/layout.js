import React from "react";
import PropTypes from "prop-types";
import { Helmet } from "react-helmet";
import { useStaticQuery, graphql } from "gatsby";

import Header from "@components/header";
import "@styles/reset.scss";
import "@styles/layout.scss";

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <>
      <Helmet>
        <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css" rel="stylesheet" />
      </Helmet>
      <div className="site">
        <Header siteTitle={data.site.siteMetadata.title} />
        <main className="main">{children}</main>
        <footer className="footer">
          © {new Date().getFullYear()},
          <a href="mailto:jiiw.kang@gmail.com"> Jiwoo Kang</a>
        </footer>
      </div>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
