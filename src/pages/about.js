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
          <a href="mailto:jiiw.kang@gmail.com" className="mail">{siteMetadata.mail}</a>
          <p className="desc">서비스와 사용자를 잇는 인터페이스를 만들 때 즐거움을 느끼는 웹 개발자입니다. 기술이 세상을 이롭게 할 수 있는 방법에 관심을 두고 있으며, 시빅해킹 커뮤니티 <a href="https://nullfull.kr">널채움</a>의 조직원으로도 활동 중입니다.</p>
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
