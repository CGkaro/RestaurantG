import React from "react"
//import { Link } from "gatsby"

import Layout from "../components/layout"
//import Image from "../components/image"
import SEO from "../components/seo"
import { PageHeader, Banner } from "../utils"
import mnImg from "../images/bcg/menuBcg.jpeg"

const MenuPage = () => (
  <Layout>
    <SEO title="Home" keywords={["gatsby", "application", "react"]} />

    <PageHeader img={mnImg}>
      <Banner title="Menu" subtitle={`let's dig in`} />
    </PageHeader>
  </Layout>
)

export default MenuPage
