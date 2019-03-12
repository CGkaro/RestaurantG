import React from "react"
//import { Link } from "gatsby"
import { FaBeer } from "react-icons/fa"
import Layout from "../components/layout"
//import Image from "../components/image"
import SEO from "../components/seo"
import styled from "styled-components"

const MenuPage = () => (
  <Layout>
    <SEO title="Home" keywords={["gatsby", "application", "react"]} />
    <h3>
      this is Menu <FaBeer />
    </h3>
    <ButtonWrapper>Click me</ButtonWrapper>
  </Layout>
)

const ButtonWrapper = styled.button`
  background: var(--mainOrange);
  color: white;
`
export default MenuPage
