import React from "react"
//import { Link } from "gatsby"
import Layout from "../components/layout"
//import Image from "../components/image"
import SEO from "../components/seo"
import { PageHeader, Banner } from "../utils"
import ctImg from "../images/bcg/contactBcg.jpeg"
import ReservationsSection from "../components/ReservationsComponents/reservationsSection"

const reservationsPage = () => (
  <Layout>
    <SEO title="Home" keywords={["gatsby", "application", "react"]} />
    <PageHeader img={ctImg}>
      <Banner
        title="Reservaciones"
        subtitle={`Los mejores lugares, las mejores experiencias`}
      />
    </PageHeader>
    <ReservationsSection />
  </Layout>
)

export default reservationsPage
