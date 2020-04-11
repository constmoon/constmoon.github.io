import React from "react";
import Layout from "@components/layout";
import SEO from "@components/seo";
import "@styles/about.scss";

const AboutPage = ({ data }) => {
  const { siteMetadata } = data.site;
  const socialLinks = {
    github: siteMetadata.social.github,
    twitter: siteMetadata.social.twitter,
    facebook: siteMetadata.social.facebook,
  };
  return (
    <Layout>
      <SEO title="About" />
      <div className="about-wrap">
        <div className="about-info">
          <h1 className="name">{siteMetadata.name}</h1>
          <a href={`mailto:${siteMetadata.mail}`} className="mail">{siteMetadata.mail}</a>
          <p className="desc">서비스와 사용자를 잇는 인터페이스를 만들 때 즐거움을 느끼는 웹 개발자입니다. 기술로 더 나은 사회를 만들고자 하는 활동에 관심이 많습니다.</p>
        </div>
        <ul className="social-links">
          {Object.keys(socialLinks).map((key) => (
            <li key={key}>
              <a href={socialLinks[key]} target="_blank" rel="noopener noreferrer">
                <i className={`fa fa-${key}`} />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </Layout>
  )
};
export default AboutPage;

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
        name
        mail
        social {
          github
          twitter
          facebook
        }
      }
    }
  }
`
