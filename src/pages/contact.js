import React from "react"
//import { Link } from "gatsby"
import Layout from "../components/layout"
//import Image from "../components/image"
import SEO from "../components/seo"
import { PageHeader, Banner } from "../utils"
import ctImg from "../images/bcg/contactBcg.jpeg"
import ContactSection from "../components/ContactComponents/contactSection"

const ContactPage = () => (
  <Layout>
    <SEO title="Home" keywords={["gatsby", "application", "react"]} />
    <PageHeader img={ctImg}>
      <Banner title="Contact Us" subtitle={`let's get in touch`} />
    </PageHeader>
    <ContactSection />
  </Layout>
)

export default ContactPage
