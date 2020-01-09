import React from "react";
import Layout from '@components/Layout';
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
      <div className="about-wrap">
        <div className="about-info">
          <h1>{siteMetadata.name}</h1>
          <p className="desc">사용자와 서비스를 잇는 인터페이스를 만드는 것에 즐거움을 느끼는 웹 개발자입니다. 기술이 세상을 이롭게 할 수 있는 방법에 관심을 두고 있으며, 시빅해킹 모임인 <a href="https://github.com/NullFull">널채움</a>의 조직원으로도 활동 중입니다.</p>
        </div>
        <ul className="social-links">
          {Object.keys(socialLinks).map((key) => (
            <li key={key}>
              <a href={socialLinks[key]} target="_blank">
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
        social {
          github
          twitter
          facebook
        }
      }
    }
  }
`
