import React from "react"

import Layout from "../components/layout"

import SEO from "../components/seo"

import { PageHeader, Banner } from "../utils"
import abImg from "../images/bcg/aboutBcg.jpeg"

const AboutPage = () => (
  <Layout>
    <SEO title="Home" keywords={["gatsby", "application", "react"]} />
    <PageHeader img={abImg}>
      <Banner title="About us" subtitle="A little about us" />
    </PageHeader>
  </Layout>
)

export default AboutPage
