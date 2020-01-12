import React from "react"
import Layout from "@components/layout"
import SEO from "@components/seo"
import ProgressBarComponent from "@components/progressbar";

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`jiwoo`, `constmoon`, `Jiwoo Kang`]}/>
    <ProgressBarComponent />
  </Layout>
)

export default IndexPage
