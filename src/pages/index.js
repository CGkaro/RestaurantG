import React from "react"
//import { Link } from "gatsby"
import Layout from "../components/layout"
//import Image from "../components/image"
import SEO from "../components/seo"
import { HomeHeader, Banner, BannerButton } from "../utils"
import img from "../images/bcg/homeBcg.jpeg"
import QuickInfo from "../components/HomePageComponents/quickInfo"
import Gallery from "../components/HomePageComponents/gallery-1"
import Menu from "../components/HomePageComponents/menu"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={["gatsby", "application", "react"]} />
    <HomeHeader img={img}>
      <Banner title="EATERY" subtitle="55 main st Santa Monica CA">
        <BannerButton style={{ margin: "2rem auto" }}>Menu</BannerButton>
      </Banner>
    </HomeHeader>
    <QuickInfo />
    <Gallery />
    <Menu />
  </Layout>
)

export default IndexPage
