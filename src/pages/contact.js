import React from "react"
//import { Link } from "gatsby"
import { FaBeer } from "react-icons/fa"
import Layout from "../components/layout"
//import Image from "../components/image"
import SEO from "../components/seo"
import styled from "styled-components"
import { PageHeader, Banner } from "../utils"
import ctImg from "../images/bcg/contactBcg.jpeg"

const ContactPage = () => (
  <Layout>
    <SEO title="Home" keywords={["gatsby", "application", "react"]} />

    <PageHeader img={ctImg}>
      <Banner title="Contact Us" subtitle={`let's get in touch`} />
    </PageHeader>
  </Layout>
)

const ButtonWrapper = styled.button`
  background: var(--mainOrange);
  color: white;
`
export default ContactPage
