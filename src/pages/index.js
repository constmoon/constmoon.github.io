import React from "react"
import Layout from "@components/layout"
import SEO from "@components/seo"
import GoogleSiteVerification from "@components/googleSettings";
import ProgressBarComponent from "@components/progressbar";

const IndexPage = () => (
  <Layout>
    <GoogleSiteVerification />
    <SEO title="Jiwoo Kang" keywords={[`jiwoo`, `constmoon`, `Jiwoo Kang`]} />
    <ProgressBarComponent />
  </Layout>
)

export default IndexPage
