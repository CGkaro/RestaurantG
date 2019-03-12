import React from "react"
//import { Link } from "gatsby"
import { FaBeer } from "react-icons/fa"
import Layout from "../components/layout"
//import Image from "../components/image"
import SEO from "../components/seo"
import styled from "styled-components"

const AboutPage = () => (
  <Layout>
    <SEO title="Home" keywords={["gatsby", "application", "react"]} />
    <h3>
      this is about <FaBeer />
    </h3>
  </Layout>
)

export default AboutPage
