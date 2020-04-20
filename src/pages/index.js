import React from "react"
import Layout from "@components/layout"
import SEO from "@components/seo"
import NoSSR from 'react-no-ssr'
import GoogleSiteVerification from "@components/googleSettings"
import ProgressBarComponent from "@components/progressbar"

const IndexPage = () => (
  <Layout>
    <GoogleSiteVerification />
    <SEO title="Jiwoo Kang" keywords={[`jiwoo`, `constmoon`, `Jiwoo Kang`]} />
    <NoSSR>
      <ProgressBarComponent />
    </NoSSR>
  </Layout>
)

export default IndexPage
