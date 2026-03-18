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
          mail
        }
      }
    }
  `);
  const title = data?.site?.siteMetadata?.title ?? "";
  const mail = data?.site?.siteMetadata?.mail ?? "";

  return (
    <>
      <Helmet>
        <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css" rel="stylesheet" />
      </Helmet>
      <div className="site">
        <Header siteTitle={title} />
        <main className="main">{children}</main>
        <footer className="footer">
          © {new Date().getFullYear()},  
          <a href={mail ? `mailto:${mail}` : undefined}> Jiwoo Kang</a>
        </footer>
      </div>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
