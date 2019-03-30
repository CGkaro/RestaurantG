import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { PageHeader, Banner } from "../utils"
import abImg from "../images/bcg/aboutBcg.jpeg"
import LocationsInfo from "../components/contactComponents/locationsInfo"

const ContactPage = () => (
  <Layout>
    <SEO title="Home" keywords={["gatsby", "application", "react"]} />
    <PageHeader img={abImg}>
      <Banner title="Contacto" subtitle="Pongase en contacto" />
    </PageHeader>
    <LocationsInfo />
  </Layout>
)

export default ContactPage
