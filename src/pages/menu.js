import React from "react"
//import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { PageHeader, Banner } from "../utils"
import mnImg from "../images/bcg/menuBcg.jpeg"
import Menu from "../components/HomePageComponents/menu"
import MenuGallery from "../components/MenuComponent/menuGallery"

const MenuPage = () => (
  <Layout>
    <SEO title="Home" keywords={["gatsby", "application", "react"]} />
    <PageHeader img={mnImg}>
      <Banner title="Menu" subtitle={`let's dig in`} />
    </PageHeader>
    <Menu />
    <MenuGallery />
  </Layout>
)

export default MenuPage
